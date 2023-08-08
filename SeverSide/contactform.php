<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Compose email message
    $to = "davisq1991@gmail.com"; // Replace with your email address
    $subject = "Contact Form Submission: " . $subject;
    $message_body = "Name: " . $name . "\n";
    $message_body .= "Email: " . $email . "\n";
    $message_body .= "Phone: " . $phone . "\n";
    $message_body .= "Message: " . $message . "\n";

    // Send email
    $headers = "From: " . $email . "\r\n";
    if (mail($to, $subject, $message_body, $headers)) {
        // Success response
        echo json_encode(array("success" => true));
    } else {
        // Error response
        echo json_encode(array("success" => false, "message" => "Failed to send the email."));
    }
} else {
    // Invalid request
    echo json_encode(array("success" => false, "message" => "Invalid request method."));
}
?>
