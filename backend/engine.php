<?php
define('API_KEY', 'AIzaSyAIKdTY6TzxTe-IrRvN9bNxFoUUYX2G9qk');
header('Access-Control-Allow-Origin: *');

function getUrl($url){
 $ch = curl_init();
 $options = array(
   CURLOPT_URL => $url,
   CURLOPT_SSL_VERIFYPEER => FALSE,
   CURLOPT_POST => FALSE,
   CURLOPT_RETURNTRANSFER => TRUE
 );
 curl_setopt_array($ch, $options);
 $response = curl_exec($ch);
 $lastUrl = curl_getinfo($ch, CURLINFO_REDIRECT_URL);
 curl_close($ch);
 return $lastUrl;
}

function getJSON($url){
 $ch = curl_init();
 $options = array(
   CURLOPT_URL => $url,
   CURLOPT_SSL_VERIFYPEER => FALSE,
   CURLOPT_POST => FALSE,
   CURLOPT_RETURNTRANSFER => TRUE
 );
 curl_setopt_array($ch, $options);
 $response = curl_exec($ch);
 curl_close($ch);
 return $response;
}

function printJSON($data){
	header('Content-Type: application/json');
	echo json_encode($data, JSON_UNESCAPED_SLASHES);
}
?>
