<head>
	<title>Реєстрація</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div id="name"><b>Реєстрація</b></div>

	<div id="tabs">
      	<ul>
        	<li><a href="Lr7.1.php" title="Завдання 1"><span>Завдання 1</span></a></li>
        	<a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</a>
        	<li><a href="Lr7.2.php" title="Завдання 2"><span>Завдання 2</span></a></li>
        	<a>&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp</a>
        	<li><a href="Lr7.3.php" title="Реєстрація"><span>Реєстрація</span></a></li>
      	</ul>
    </div>

    <form method="POST">
    	<input type="submit" value="Вхід існуючого користувача" name="getCookie">
		<input type="submit" value="Вихід" name="Clear">
	</form>

    <form method="POST">
    	<div id="data">
      		<p>
        		<label for="Email">Електрона пошта:</label>
        		<input type="Email" required id="Email" name="Email" />
      		</p>
      		<p>
          		<label for="password">Пароль:</label>
          		<input type="password" required id="password" name="password" />
      		</p>
    			<input type="submit" value="Зареєструватись" name="Register">
		</div>
	</form>

</body>

<?php
	
	if( isset( $_POST['Register'] ) )
    {
    	$email = $_POST['Email'];
    	$pass = $_POST['password'];

    	SetCookie("user",$email, time()+3600);
    	if (SetCookie("password",$pass, time()+3600))
    		echo "<h3>Wlcome ".$email."</h3>";

    }

    if( isset( $_POST['getCookie'] ) )
    {
    	if (isset($_COOKIE['user'])) echo "Welcome " . $_COOKIE["user"] . "<br>";
    	if (isset($_COOKIE['password'])) echo "Ваш пароль: " . $_COOKIE["password"] . "<br>";
    }

?>