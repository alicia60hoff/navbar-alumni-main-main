<?php

if(isset($_POST['enviar'])){
    if(!empty($_POST['nombre']) && !empty($_POST['apellido'])) && asunto && mensaje && email{
    $nombre= $_POST['nombre']:
    $asunto
    $apellido
    $email
    $mensaje
    $header = "From: noreply@example.com" . "\r\n";
    $header.="Reply-to: noreply@example.com" . "\r\n";
    $header.="X-Mailer: PHP/" . phpversion();
    $header.= @mail($email,$asunto,$mensaje,$header);
    if($mail){
        echo " Correo Enviado";
        }
    } 
}   
