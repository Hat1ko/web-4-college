<head>
	<title>Завдання 2</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div id="name"><b>Завдання 2</b></div>

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
        <p> a: <input name="a" type="text"></p>
        <p> b: <input name="b" type="text"></p>
        <p> N: <input name="n" type="text"></p>
        <input type="submit" value="Готово" name="Done">
        <input type="submit" value="Очистити" name="Clear">
      </div>
    </form>

</body>

<?php

if( isset( $_POST['Done'] ) )
    {
      $a = $_POST['a'];
      $b = $_POST['b'];
      $n = $_POST['n'];

      $x = $a;
      $h = ($b - $a) / $n;
      $counter = 0;

      while($x < $b)
      {
        $y=2*atan($x);

        echo "<br>".$x."  ".$y."<br>";

        $x += $h;
        $counter ++;
      }

    echo "Кількість ітерацій: ".$counter;

    }

?>