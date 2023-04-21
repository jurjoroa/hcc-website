
if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $website = $_POST['website'];
    $message = $_POST['message'];
    $to = "jurjoo@gmail.com"; // replace with your own email address
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage: $message";
    $headers = "From: $email";

    if(mail($to, $subject, $body, $headers)) {
        echo "Thank you for contacting us. We will get back to you as soon as possible.";
    } else {
        echo "There was a problem sending your message. Please try again later.";
    }
}

