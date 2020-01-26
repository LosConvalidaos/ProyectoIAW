<!DOCTYPE html>
<html lang="es">
	<head>
		<title>Pruebas PHP</title>
		<meta charset="utf-8">
		</script>
		<style>
			table {
				border: solid 3px red;
			}
			tr, td {
				border: solid 1px black;
			}
		</style>
	</head>
	<body>
		<?php
			# Conexion a la base de datos
			$link = new mysqli('FREYJA-MkIAW', 'root', '4vientos', 'iaw', 3306);

			if ($link->connect_error) {
				die("Message: " . $link->connect_error);
			}
		?>
		| PLACEHOLDER |>
		<table>
			<tr>
				<td>0</td>
				<td>1</td>
				<td>2</td>
			</tr>
			<tr>
				<td>3</td>
				<td>4</td>
				<td>5</td>
			</tr>
			<tr>
				<td>6</td>
				<td>7</td>
				<td>8</td>
			</tr>
		</table>
		Lista de prueba php
		<ul>
			<?php
				for ($i=0; $i < 5; $i++) { 
					echo "<li> Item numero $i </li>";
				}
			?>
		</ul>
		Tabla de prueba PHP
		<table>
			<?php
				$sql = "SELECT * FROM productos LIMIT 9;";
				$data = $link->query($sql);

				while ($datarow = $data->fetch_assoc()) {
					echo "<tr>";
					echo "<td>" . $datarow["Nombre"] . "</td>";
					echo "</tr>";
				}
			?>
		</table>
	</body>
</html>