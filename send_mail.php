<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['_replyto']);
    $message = htmlspecialchars($_POST['message']);
    $subject = htmlspecialchars($_POST['_subject']);

    $to = "footavenir06@gmail.com"; // Remplacez par votre adresse e-mail
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    $body = "Nom: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message envoyé avec succès.";
    } else {
        echo "Échec de l'envoi du message.";
    }
} else {
    echo "Méthode non autorisée.";
}
?> 