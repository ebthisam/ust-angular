package ust.capstone.Order_Service.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import ust.capstone.Order_Service.model.Payment;

import java.util.List;

public interface PaymentRepository extends MongoRepository<Payment, String> {
    List<Payment> findPaymentsByUserId(String userId);
    List<Payment> findPaymentsByVendorIdsContaining(String vendorId);

    Payment findByRazorpayOrderId(String razorpayOrderId);
}
