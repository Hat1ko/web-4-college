<head>
	<title>Завдання 1</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div id="name"><b>Завдання 1</b></div>

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
    	<div id="data">
    		<p> X: <input name="x" type="text"></p>
    		<p> Y: <input name="y" type="text"></p>
    		<input type="submit" value="Готово" name="Done">
    		<input type="submit" value="Очистити" name="Clear">
		</div>
	</form>

</body>

<?php
    if( isset( $_POST['Done'] ) )
    {
    	$x = $_POST['x'];
    	$y = $_POST['y'];

    	$max;
    	if($x > $y) $max = $x;
		else $max = $y;

		echo "Точка в квадраті з координатами: "."(0;0) "."(0;".$max.") (".$max.";" .$max.") (".$max.";0)";
    }
?>