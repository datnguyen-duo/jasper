<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");

if($_POST){
    // print_r($_POST);
    $curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://mgny.force.com/sales/services/apexrest/lead/add',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>json_encode($_POST),
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Origin: https://jasperlottery.com/',
    //'Cookie: BrowserId=KraePd8zEeyVkP9MTE2e7Q; CookieConsentPolicy=0:1; LSKey-c$CookieConsentPolicy=0:1'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
}