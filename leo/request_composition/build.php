<?php
header("Content-type: text/html; charset=utf-8");
date_default_timezone_set('PRC');
include_once("core.class.php");
include('Crypt/RSA.php');

/*
方便快速創建轉帳錢包的帳戶
registerOrValidate -> 創建用戶的登入資訊
syncuser -> 創建用戶資料(g_user)
userinfo -> 確認用戶資料
recharge -> 充值
*/

//網址，判斷操作 1.創建 2.註冊 3.充值
function get_request_api_url($api_type){
    switch ($api_type)
    {
        case '0':
            $api_url = 'http://testone.ebet.im:8888/api/userinfo';
            break;
        case '1':
            $api_url = 'http://testone.ebet.im:8888/api/registerOrValidate';
            break;
        case '2':
            $api_url = 'http://testone.ebet.im:8888/api/syncuser';
            break;
        case '3':
            $api_url = 'http://testone.ebet.im:8888/api/recharge';
            break;
        default:
    }
    return $api_url;
}

//產生簽名
function get_signature($plaintext){
    $privatekey = "-----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAKDm2R1aTMyMqX7fIjM7jUHY+S6DBgRTszUlWAbam9CkWDy68jPCqA6qrbl3VooWI12EIQ13/JERNkJ1+zPJnV71Qj1/W4fjHLGENpxHCrbb9v0Do2aKR7mwlwf9/Zq4FVZHuHL/ZoTn9sa2kuh5uWSKvOf3o1Kd59kx8QVcuolFAgMBAAECgYBUF9KpcKRq06lSUbRCKoGtRIUXNgtS/5vNzvKuwlplNT+Ynewv+TB0Wefp4uEr0l4xZfkQXQF3oBNHsPnVGy5Pt8jzcZTJfI6MnHKIwyij3so293f+6ubgktLpXthb/zxYMcPYUgfXRF92ZB3+xOhFN0kmXjJgXALIfIvhJqFMgQJBAO8I2MOdUqwn1vrwMCRvgdh8FzHaJOZ+2bX5Qn97tIMYVhHAFuwh+a2UDJbjD7WN1Hhc4d7b6WsTScu44HgWxP0CQQCsUlzKv8T5jLeJEnvgtHJVrbzhEiALew8zuLx7eZjHefh7W87sA1SyME03LqyWjlLRbFQhYinrryBmdKvD8evpAkEAlvhPb7z9ah3/eZ4ZyeljaQd23tWYWLvlZTl49mt7JxFHyw43bAxJVYgcK3Bdi514hEylm8vpMOeNxE2P+EjpQQJAWSw97IWUbvcMuxgflsaKLCA+D9KLVqWV1lQQ5WylTQSnO17lE2kd2R/5tUan9TktTkZauvPLcbUsdRiHEl0MkQJAV/Zwl9yReu4ZXOl/FN8RALU9isruFAhoB8Web6+jShuWwoTLirV0qgf3sN1azRCgCU3Bti831LHMliA/M4Vqnw==
-----END PRIVATE KEY-----";
    $rsa = new Crypt_RSA();
    $rsa -> loadKey($privatekey);
    $rsa -> setSignatureMode(CRYPT_RSA_SIGNATURE_PKCS1);
    $rsa -> setHash("md5");
    $get_signature = $rsa -> sign($plaintext);
    return base64_encode($get_signature);
}

//檢查
function get_userinfo($data_list){
    $signature_string=$data_list['username'].$data_list['timestamp'];
    $signature=get_signature($signature_string);
    $data = array(
        'username' =>$data_list['username'],
        'channelId'=>$data_list['channelId'],
        'timestamp'=>$data_list['timestamp'],
        'signature'=>$signature,
    );
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents(get_request_api_url(0), false, $context);
    $obj = json_decode($result);
    return $obj;
}

//創建用戶
function get_registerOrValidate($data_list){
    $signature_string=$data_list['username'].$data_list['timestamp'];
    $signature=get_signature($signature_string);
    $data = array(
        'username' =>$data_list['username'],
        'password' =>$data_list['password'],
        'timestamp'=>$data_list['timestamp'],
        'channelId'=>$data_list['channelId'],
        'subChannelId'=>$data_list['subChannelId'],
        'signature'=>$signature,
    );
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents(get_request_api_url(1), false, $context);
    $obj = json_decode($result);
    return $obj;
}

//註冊用戶
function get_syncuser($data_list){
    $signature= get_signature($data_list['username']);
    $data = array(
        'username' =>$data_list['username'],
        'channelId'=>$data_list['channelId'],
        'subChannelId'=>$data_list['subChannelId'],
        'signature'=>$signature,
    );
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents(get_request_api_url(2), false, $context);
    $obj = json_decode($result);
    return $obj;
}

//充值
function get_recharge($data_list){
    $money=1000000;
    $rechargeReqId='eBET'.date('Ymdhis').rand(1000,9999);
    $signature_string=$data_list['username'].$data_list['timestamp'];
    $signature=get_signature($signature_string);
    $data = array(
        'username' =>$data_list['username'],
        'channelId'=>$data_list['channelId'],
        'timestamp'=>$data_list['timestamp'],
        'money'=>$money,
        'rechargeReqId'=>$rechargeReqId,
        'signature'=>$signature,
    );
    $options = array(
        'http' => array(
            'header' => "Content-type: application/x-www-form-urlencoded\r\n",
            'method' => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context = stream_context_create($options);
    $result = file_get_contents(get_request_api_url(3), false, $context);
    $obj = json_decode($result);
    return $obj;
}

//確認輸入資料
if($_POST["username"] == "" or $_POST["password"] == ""){
    echo "參數有少，不執行動作<br/>";
    echo "username: ".$_POST["username"];
    echo "password: ".$_POST["password"];
    return false;
}

//使用的參數
$username=$_POST["username"];
$password=$_POST["password"];
$timestamp=time();
$channelId=-1;
$subChannelId=0;
$data_list = [
    'username'=>$username,
    'password'=>$password,
    'channelId'=>$channelId,
    'timestamp'=>$timestamp,
    'subChannelId'=>$subChannelId,
];

//打請求並打印結果
$run1=get_registerOrValidate($data_list);
sleep(2);
$accessToken=$run1 -> accessToken;
$run2=get_syncuser($data_list);
sleep(2);
$run3=get_userinfo($data_list);
sleep(2);
$money=$run3 -> money;
if ($money < 1000000){
    $run4=get_recharge($data_list);
    sleep(2);
    $run3=get_userinfo($data_list);
    sleep(2);
    $money=$run3 -> money;
}
echo "創建完成，用戶名：";
echo $username;
echo "<br/><br/>H5 game Link : http://testone.zxc.today/h5/ynwh8w?username=";
echo $username;
echo "&accessToken=";
echo $accessToken;
echo "<br/><br/>玩家餘額：";
echo $money;
?>