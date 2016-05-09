<?php 
				$name=$_REQUEST['name']; 
				$email=$_REQUEST['email']; 
				$message=$_REQUEST['message']; 
				if (($name=="")||($email=="")||($message=="")) 
					{ 
					echo "All fields are required. Please fill out <a href='../pages/contact.html'>the form</a> again."; 
					} 
				else{         
					$from="From: $name<$email>\r\nReturn-path: $email"; 
					$subject="Message sent using your contact form"; 
					mail("rcmalecki@gmail.com", $subject, $message, $from) or die("Error!"); 
					echo "Email sent!"; 
					} 
