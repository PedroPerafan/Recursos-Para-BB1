<?php
require("conexion.php");

function errores($numero){
    $array = array("NumeroError"=>$numero);
    echo json_encode($array);
    exit;
}

if($_GET){
    if ((isset($_GET['AṕiUser']) && is_numeric($_GET['ApiUser']))&&
        (isset($_GET['AṕiPass']) && is_numeric($_GET['ApiPass']))) {
        
        exit;
    }
    errores(2);   
}elseif($_POST){
    if ((isset($_POST['AṕiUser']) && is_numeric($_POST['ApiUser']))&&
        (isset($_POST['AṕiPass']) && is_numeric($_POST['ApiPass']))) {
            
        exit;
    }
    errores(2);
    
}
errores(1);


    
/*
if (isset($_GET['aid']) && is_numeric($_GET['aid'])) {
    $aid = (int) $_GET['aid'];
} else {
    $aid = 1;
}

// Realizar una consulta SQL
$sql = "SELECT actor_id, first_name, last_name FROM actor WHERE actor_id = $aid";
if (!$resultado = $mysqli->query($sql)) {
    // ¡Oh, no! La consulta falló. 
    echo "Lo sentimos, este sitio web está experimentando problemas.";

    // De nuevo, no hacer esto en un sitio público, aunque nosotros mostraremos
    // cómo obtener información del error
    echo "Error: La ejecución de la consulta falló debido a: \n";
    echo "Query: " . $sql . "\n";
    echo "Errno: " . $mysqli->errno . "\n";
    echo "Error: " . $mysqli->error . "\n";
    exit;
}

// ¡Uf, lo conseguimos!. Sabemos que nuestra conexión a MySQL y nuestra consulta
// tuvieron éxito, pero ¿tenemos un resultado?
if ($resultado->num_rows === 0) {
    // ¡Oh, no ha filas! Unas veces es lo previsto, pero otras
    // no. Nosotros decidimos. En este caso, ¿podría haber sido
    // actor_id demasiado grande? 
    echo "Lo sentimos. No se pudo encontrar una coincidencia para el ID $aid. Inténtelo de nuevo.";
    exit;
}

// Ahora, sabemos que existe solamente un único resultado en este ejemplo, por lo
// que vamos a colocarlo en un array asociativo donde las claves del mismo son los
// nombres de las columnas de la tabla
$actor = $resultado->fetch_assoc();
echo "A veces veo a " . $actor['first_name'] . " " . $actor['last_name'] . " en la TV.";

// Ahora, vamor a obtener cinco actores aleatorios y a imprimir sus nombres en una lista.
// El manejo de errores va a ser menor aquí, aunque ya sabemos como hacerlo
$sql = "SELECT actor_id, first_name, last_name FROM actor ORDER BY rand() LIMIT 5";
if (!$resultado = $mysqli->query($sql)) {
    echo "Lo sentimos, este sitio web está experimentando problemas.";
    exit;
}

// Imprimir nuestros cinco actores aleatorios en una lista, y enlazar cada uno
echo "<ul>\n";
while ($actor = $resultado->fetch_assoc()) {
    echo "<li><a href='" . $_SERVER['SCRIPT_FILENAME'] . "?aid=" . $actor['actor_id'] . "'>\n";
    echo $actor['first_name'] . ' ' . $actor['last_name'];
    echo "</a></li>\n";
}
echo "</ul>\n";

// El script automáticamente liberará el resultado y cerrará la conexión
// a MySQL cuando finalice, aunque aquí lo vamos a hacer nostros mismos
$resultado->free();
$mysqli->close();
*/

?>