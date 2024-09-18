package ust.capstone.Order_Service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.List;

@Document(collection = "payments")
public class Payment {

    @Id
    private String id;
    private String orderId;
    private String razorpayOrderId;
    private String paymentId;
    private double amount;
    private String currency;
    private String status; // e.g., "created", "paid", "failed"
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String userId;     // Link to user
    private List<String> vendorIds;

    // Constructors, Getters, and Setters

    public Payment() {
    }

    public Payment(String id, String orderId, String razorpayOrderId, String paymentId, double amount, String currency, String status, LocalDateTime createdAt, LocalDateTime updatedAt, String userId, List<String> vendorIds) {
        this.id = id;
        this.orderId = orderId;
        this.razorpayOrderId = razorpayOrderId;
        this.paymentId = paymentId;
        this.amount = amount;
        this.currency = currency;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.userId = userId;
        this.vendorIds = vendorIds;
    }

    // Add getters and setters for userId and vendorIds
    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public List<String> getVendorIds() {
        return vendorIds;
    }

    public void setVendorIds(List<String> vendorIds) {
        this.vendorIds = vendorIds;
    }



    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getRazorpayOrderId() {
        return razorpayOrderId;
    }

    public void setRazorpayOrderId(String razorpayOrderId) {
        this.razorpayOrderId = razorpayOrderId;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(LocalDateTime updatedAt) {
        this.updatedAt = updatedAt;
    }
}
