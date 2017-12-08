<?php
require_once 'engine.php';

if (isset($_GET['lat'], $_GET['lng'], $_GET['nama'], $_GET['width'])) {
  $lat = $_GET['lat'];
  $lng = $_GET['lng'];
  $nama = urlencode(explode(".", $_GET['nama'])[0]);
  $url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=".$lat.",".$lng."&radius=200&keyword=rptra+".$nama."&key=".API_KEY;
  $resultNearby = json_decode(getJSON($url), true);
  if ($resultNearby['status'] == 'OK') {
    $placeid = $resultNearby['results'][0]['place_id'];
    $url = "https://maps.googleapis.com/maps/api/place/details/json?placeid=".$placeid."&key=".API_KEY;
    $resultDetails = json_decode(getJSON($url), true);
    if ($resultDetails['status'] == 'OK') {
      $photos = $resultDetails['result']['photos'];
      $photoUrl = array();
      for ($i=0; $i < count($photos); $i++){
        $width = $_GET['width'];
        $photoRef = $photos[$i]['photo_reference'];
        $url = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=".$width."&photoreference=".$photoRef."&key=".API_KEY;
        $tmpUrl = getUrl($url);
        if ($tmpUrl != null) {
          array_push($photoUrl, array('url' => $tmpUrl));
        }
      }
      $resultDetails['result']['photos'] = $photoUrl;
      $dataOut = $resultDetails;
    } else {
      $dataOut = $resultDetails;
    }
  } else {
    $dataOut = $resultNearby;
  }
} else {
  $dataOut = array('status' => 'ERROR', 'error_message' => 'Required parameters : lat, lng, nama, width');
}
printJSON($dataOut);
?>
