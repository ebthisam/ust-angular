package ust.capstone.Order_Service.controller;

import com.razorpay.RazorpayException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ust.capstone.Order_Service.model.Order;
import ust.capstone.Order_Service.model.OrderItem;
import ust.capstone.Order_Service.model.Payment;
import ust.capstone.Order_Service.service.OrderService;
import ust.capstone.Order_Service.service.PaymentService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/orders")
public class OrderController {

    @Autowired
    private OrderService orderService;
    @Autowired
    private PaymentService paymentService;

    @PostMapping
    public ResponseEntity<?> createOrder(@RequestBody Order order) {
        // Create the order first
        Order createdOrder = orderService.createOrder(order);

        // After order creation, initiate payment
        try {
            // Extract necessary details from the created order
            String userId = createdOrder.getUserId();
            String orderId = createdOrder.getId(); // Ensure orderId is passed
            List<String> vendorIds = createdOrder.getVendorIds(); // List of vendor IDs
            double totalAmount = createdOrder.getTotalAmount();

            // Initiate the payment and pass userId, orderId, and vendorIds for tracking
            String paymentResponse = paymentService.createRazorpayOrder(
                    totalAmount,
                    "INR",
                    userId,
                    orderId,  // Pass orderId
                    vendorIds
            );

            // Return the payment initiation response
            return ResponseEntity.ok(paymentResponse);
        } catch (RazorpayException e) {
            // Handle any exceptions during payment initiation
            return ResponseEntity.status(500).body("Error in initiating payment: " + e.getMessage());
        }
    }




    @PostMapping("/pay/{orderId}")
    public ResponseEntity<?> initiatePayment(@PathVariable String orderId) {
        Optional<Order> orderOpt = orderService.getOrderById(orderId);
        if (orderOpt.isPresent()) {
            Order order = orderOpt.get();
            double totalAmount = order.getTotalAmount();
            String userId = order.getUserId();
            List<String> vendorIds = order.getVendorIds(); // Get list of vendor IDs associated with the order

            try {
                // Pass totalAmount, currency, userId, orderId, and vendorIds to the payment service
                String paymentResponse = paymentService.createRazorpayOrder(
                        totalAmount, "INR", userId, orderId, vendorIds
                );
                return ResponseEntity.ok(paymentResponse);
            } catch (RazorpayException e) {
                // Handle any exceptions during payment initiation
                return ResponseEntity.status(500).body("Error in initiating payment: " + e.getMessage());
            }
        } else {
            return ResponseEntity.status(404).body("Order not found with id: " + orderId);
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<?> getOrderById(@PathVariable String id) {
        Optional<Order> order = orderService.getOrderById(id);
        if (order.isPresent()) {
            return ResponseEntity.ok(order.get());
        } else {
            return ResponseEntity.status(404).body("Order not found with id: " + id);
        }
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Order>> getOrdersByUserId(@PathVariable String userId) {
        List<Order> orders = orderService.getOrdersByUserId(userId);
        return ResponseEntity.ok(orders);
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateOrder(@PathVariable String id, @RequestBody Order order) {
        Order updatedOrder = orderService.updateOrder(id, order);
        if (updatedOrder != null) {
            return ResponseEntity.ok(updatedOrder);
        } else {
            return ResponseEntity.status(404).body("Order not found with id: " + id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteOrder(@PathVariable String id) {
        boolean isDeleted = orderService.deleteOrder(id);
        if (isDeleted) {
            return ResponseEntity.ok("Order deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Order not found with id: " + id);
        }
    }

    @GetMapping("/order-items/{orderId}")
    public ResponseEntity<List<OrderItem>> getOrderItemsByOrderId(@PathVariable String orderId) {
        List<OrderItem> orderItems = orderService.getOrderItemsByOrderId(orderId);
        return ResponseEntity.ok(orderItems);
    }

    @PutMapping("/order-items/{id}")
    public ResponseEntity<?> updateOrderItem(@PathVariable String id, @RequestBody OrderItem orderItem) {
        OrderItem updatedOrderItem = orderService.updateOrderItem(id, orderItem);
        if (updatedOrderItem != null) {
            return ResponseEntity.ok(updatedOrderItem);
        } else {
            return ResponseEntity.status(404).body("Order item not found with id: " + id);
        }
    }

    @DeleteMapping("/order-items/{id}")
    public ResponseEntity<?> deleteOrderItem(@PathVariable String id) {
        boolean isDeleted = orderService.deleteOrderItem(id);
        if (isDeleted) {
            return ResponseEntity.ok("Order item deleted successfully.");
        } else {
            return ResponseEntity.status(404).body("Order item not found with id: " + id);
        }
    }
    @GetMapping("/payments/user/{userId}")
    public ResponseEntity<List<Payment>> getPaymentsByUserId(@PathVariable String userId) {
        List<Payment> payments = paymentService.getPaymentsByUserId(userId);
        return ResponseEntity.ok(payments);
    }

    // Get all payments by vendor ID
    @GetMapping("/payments/vendor/{vendorId}")
    public ResponseEntity<List<Payment>> getPaymentsByVendorId(@PathVariable String vendorId) {
        List<Payment> payments = paymentService.getPaymentsByVendorId(vendorId);
        return ResponseEntity.ok(payments);
    }
    @GetMapping
    public ResponseEntity<List<Order>> getAllOrders() {
        List<Order> orders = orderService.getAllOrders();
        return ResponseEntity.ok(orders);
    }
}
