<?php
require_once 'engine.php';

function getDistance($i, $dataRptra, $oriLoc){
  $locations = array();
  if (($i+1)*100 >= count($dataRptra['data'])) {
    for ($j=($i*100); $j < count($dataRptra['data']); $j++) {
      $latDes = $dataRptra['data'][$j]['location']['latitude'];
      $lngDes = $dataRptra['data'][$j]['location']['longitude'];
      array_push($locations, $latDes.','.$lngDes);
    }
  } else {
    for ($j=($i*100); $j < ($i+1)*100; $j++) {
      $latDes = $dataRptra['data'][$j]['location']['latitude'];
      $lngDes = $dataRptra['data'][$j]['location']['longitude'];
      array_push($locations, $latDes.','.$lngDes);
    }
  }
    $desLoc = implode('|', $locations);
    $url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=".$oriLoc."&destinations=".$desLoc."&departure_time=".time()."&traffic_model=best_guess&key=".API_KEY;
    $result = getJSON($url);
    return json_decode($result, true);
}

if (isset($_GET['lat'], $_GET['lng'])) {
  $latOri = $_GET['lat'];
  $lngOri = $_GET['lng'];
  $oriLoc = $latOri.','.$lngOri;

  $url = "http://api.jakarta.go.id/ruang-publik/rptra";
  $result = getJSON($url);
  $dataRptra = json_decode($result, true);
  $locations = array();
  $dataJarak = array();
  for ($i=0; $i <= count($dataRptra['data'])/100 ; $i++) {
    $resultJarak = getDistance($i, $dataRptra, $oriLoc);
    for ($j=0; $j < count($resultJarak['rows'][0]['elements']); $j++) {
      array_push($dataJarak, $resultJarak['rows'][0]['elements'][$j]);
    }
  }
  for ($i=0; $i < count($dataJarak); $i++) {
    $dataRptra['data'][$i]['matrix'] = $dataJarak[$i];
  }
  echo printJSON($dataRptra);
} else {
  $dataOut = array('status' => 'ERROR', 'error_message' => 'Required parameters : lat, lng');
}
?>
