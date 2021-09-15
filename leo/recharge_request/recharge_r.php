<?php
header("Content-type: text/html; charset=utf-8");
date_default_timezone_set('PRC');
include_once("core.class.php");
include('Crypt/RSA.php');

/*
產生簽名請求
要先確認過參數都有數入才會產生請求
*/

//產生簽名
function get_signature($plaintext,$privatekey){
    $rsa = new Crypt_RSA();
    $rsa -> loadKey($privatekey);
    $rsa -> setSignatureMode(CRYPT_RSA_SIGNATURE_PKCS1);
    $rsa -> setHash("md5");
    $get_signature = $rsa -> sign($plaintext);
    return base64_encode($get_signature);
}

//確認輸入資料
if($_POST["username"] == "" or $_POST["channelId"] == "" or $_POST["money"] == "" or $_POST["key"] == ""){
    echo "參數有少，不執行動作<br/>";
    echo "username: ".$_POST["username"];
    echo "channelId: ".$_POST["channelId"];
    echo "money: ".$_POST["money"];
    echo "key: ".$_POST["key"];
    return false;
}

//使用的參數
$username=$_POST["username"];
$channelId=$_POST["channelId"];
$timestamp=time();
$money=$_POST["money"];
$rechargeReqId='eBET'.date('Ymdhis').rand(1000,9999);
$signature_string=$username.$timestamp;
$privatekey=$_POST["key"];
$signature=get_signature($signature_string,$privatekey);
$data = [
    'username'=>$username,
    'channelId'=>$channelId,
    'money'=>$money,
    'timestamp'=>$timestamp,
    'rechargeReqId'=>$rechargeReqId,
    'signature'=>$signature
];

//打印請求
echo "{<br/>";
foreach ($data as $key => $value){
    if ($key == "username" or $key == "rechargeReqId" or $key == "signature") {
        echo '"'.$key.'":"'.$value.'"';
    }else{
        echo '"'.$key.'":'.$value;
    }
    if($key != "signature"){
        echo ",<br>";
    }
}
echo "<br>}";
?>