<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Veuillez compléter le formulaire correctement.";
        exit;
    }

    $to = "noahvernhet@gmail.com";
    $subject = "Nouveau message de $name";
    $email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    $email_headers = "From: $name <$email>";

    if (mail($to, $subject, $email_content, $email_headers)) {
        echo "<script>document.getElementById('Your message has been delivery !!').style.display = 'block';</script>";
    } else {
        echo "Oops! Quelque chose a mal tourné et nous n'avons pas pu envoyer votre message.";
    }
} else {
    header("Location: /index.html");
    exit;
}
?>