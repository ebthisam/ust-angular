package ust.capstone.Order_Service.service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import ust.capstone.Order_Service.model.Payment;
import ust.capstone.Order_Service.repository.PaymentRepository;

import javax.annotation.PostConstruct;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Service
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepository;

    private RazorpayClient razorpayClient;

    @Value("${razorpay.key}")
    private String razorpayKey;

    @Value("${razorpay.secret}")
    private String razorpaySecret;

    // Initialize RazorpayClient after key and secret are injected
    @PostConstruct
    public void init() throws RazorpayException {
        this.razorpayClient = new RazorpayClient(razorpayKey, razorpaySecret);
    }

    // Create Razorpay Order
    public String createRazorpayOrder(double amount, String currency, String userId, String orderId, List<String> vendorIds) throws RazorpayException {
        try {
            // Prepare Razorpay order creation request
            JSONObject options = new JSONObject();
            options.put("amount", (int) (amount * 100)); // Convert amount to paise
            options.put("currency", currency);
            options.put("payment_capture", 1); // Auto capture payment

            // Create order in Razorpay and retrieve response
            Order order = razorpayClient.orders.create(options);

            // Razorpay returns the amount in integer (paise)
            int orderAmount = order.get("amount");

            // Generate a unique paymentId (UUID)
            String paymentId = UUID.randomUUID().toString();

            // Store the payment details in the database
            Payment payment = new Payment();
            payment.setPaymentId(paymentId); // Set the auto-generated paymentId
            payment.setOrderId(orderId); // Set the orderId from the order
            payment.setRazorpayOrderId(order.get("id"));
            payment.setAmount(orderAmount / 100.0); // Convert amount back to double
            payment.setCurrency(order.get("currency"));
            payment.setStatus("created");
            payment.setUserId(userId); // Store the userId
            payment.setVendorIds(vendorIds); // Store the vendorIds
            payment.setCreatedAt(LocalDateTime.now());
            paymentRepository.save(payment);

            return order.toString(); // Return the full Razorpay order object as a string
        } catch (RazorpayException e) {
            // Handle Razorpay exception and propagate the error
            throw new RazorpayException("Error while creating Razorpay order: " + e.getMessage());
        }
    }



    // Method to update the payment status
    public void updatePaymentStatus(String razorpayOrderId, String status, String paymentId) {
        Payment payment = paymentRepository.findByRazorpayOrderId(razorpayOrderId);
        if (payment != null) {
            payment.setStatus(status);
            payment.setPaymentId(paymentId);
            payment.setUpdatedAt(LocalDateTime.now());
            paymentRepository.save(payment);
        }
    }

    // Retrieve payments by user ID
    public List<Payment> getPaymentsByUserId(String userId) {
        return paymentRepository.findPaymentsByUserId(userId);
    }

    // Retrieve payments by vendor ID
    public List<Payment> getPaymentsByVendorId(String vendorId) {
        return paymentRepository.findPaymentsByVendorIdsContaining(vendorId);
    }
}
