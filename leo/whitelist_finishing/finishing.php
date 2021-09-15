<?php
header("Content-type: text/html; charset=utf-8");
date_default_timezone_set('PRC');
ini_set("display_errors","On");
error_reporting(E_ALL);

/*
先檢查新增的是否在現有裡，有的話直接跳過，沒有才添加到總共
如果要添加eBET ip 要先勾選才會添加，不然直接忽略
刪除是加完以後才能刪除的動作
最後在做排序
*/

//檢查是否要執行
function checkrun($check,$action){
    $run = false;
    for($i=0;$i<count($check);$i++){
        if ($check[$i]==$action){
            $run = true;
        }
    }
    return $run;
}

//資料匯入
$ip_has = explode("\r\n",trim($_POST["ip_has"]));
$ip_new = explode("\r\n",trim($_POST["ip_new"]));
$ip_ebet = explode("\r\n",trim($_POST["ip_ebet"]));
$ip_delete = explode("\r\n",trim($_POST["ip_delete"]));
$ip_total = $ip_has;
$ip_repeat = false;
$checkarr = $_POST["check"];

//先自己過濾一遍
if (checkrun($checkarr,"check_sort") == true){
    $count = count($ip_total);
    for ($i=0;$i<count($ip_total);$i++) {
        for ($j=$i+1;$j<count($ip_total);$j++) {
            if ($ip_total[$i]>$ip_total[$j]) {
                list($ip_total[$i], $ip_total[$j]) = array($ip_total[$j] , $ip_total[$i]);
            }
        }
    }
    for ($i=0;$i<$count-1;$i++){
        if($ip_total[$i] == $ip_total[$i+1]){
            unset($ip_total[$i]);
        }   
    }
    $ip_total=array_values($ip_total);
}

//新增沒有重複的ip
if (checkrun($checkarr,"check_new") == true){
    for ($i=0;$i<count($ip_new);$i++){
        $ip_repeat=false;
        for($j=0;$j<count($ip_total);$j++){
            if($ip_total[$j] == $ip_new[$i] or $ip_new[$i] == ""){
                $ip_repeat = true;
            }
        }
        if($ip_repeat == false){
            array_push($ip_total,$ip_new[$i]);
        }
    }
}

//添加eBET的ip
if (checkrun($checkarr,"check_add") == true){
    for ($i=0;$i<count($ip_ebet);$i++){
        $ip_repeat=false;
        for($j=0;$j<count($ip_total);$j++){
            if($ip_total[$j] == $ip_ebet[$i] or $ip_ebet[$i] == ""){
                $ip_repeat = true;
            }
        }
        if($ip_repeat == false){
            array_push($ip_total,$ip_ebet[$i]);
        }
    }
}

//刪除ip
if (checkrun($checkarr,"check_delete") == true){
    $count = count($ip_total);
    for ($i=0;$i<$count;$i++){
        for($j=0;$j<count($ip_delete);$j++){
            if($ip_total[$i] == $ip_delete[$j]){
                unset($ip_total[$i]);
                break;
            }
        }
    }
    $ip_total=array_values($ip_total);
}

//整理打印
$count = count($ip_total);
for($i=0;$i<$count;$i++){
    if($ip_total[$i] == ""){
        unset($ip_total[$i]);
    }
}
$ip_total=array_values($ip_total);
for($i=0;$i<count($ip_total);$i++){
    for($j=$i+1;$j<count($ip_total);$j++){
        if($ip_total[$i]>$ip_total[$j]){
            list($ip_total[$i] , $ip_total[$j]) = array($ip_total[$j] , $ip_total[$i]);
        }
    }
}
$i=1;
foreach ($ip_total as $value){
    echo $value;
    if($i != count($ip_total)){
        echo '<br>';
    }
    $i=$i+1;
}

?>