<?php
	$recepient = "7yatan@gmail.com";
	$sitename = "Jetro";

	$name_1 = trim($_POST["name_1"]);
	$name_2 = trim($_POST["name_2"]);
	$email = trim($_POST["email"]);
	$message = trim($_POST["message"]);

	$pagetitle = "Received an application from the site \"$sitename\"";
	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>