<?php

// abrir este archivo
$fp = fopen(__FILE__, 'r');

// buscar el puntero de archivo a la información
fseek($fp, __COMPILER_HALT_OFFSET__);

// e imprimirlo
var_dump(stream_get_contents($fp));

// el final de la ejecución del script
__halt_compiler();
















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































?>




