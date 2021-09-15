<?php
header("Content-type: text/html; charset=utf-8");
date_default_timezone_set('PRC');
ini_set("display_errors","On");
error_reporting(E_ALL);
/*
先檢查資料是否有把必要的都數入進來
然後根據遊戲做處理
撲克牌面會換算成兩種代碼
牌面張數因為懶惰所以是寫死(8-位置)
*/

//撲克牌面處理
function poker($card,$no){
    $no=8-$no;
    $code=(string)$no;
    $suit=substr($card,0,6);
    $num_s=substr($card,6,2);
    $num_n=(int)0;
    switch($num_s){
        case 'A':
            $num_s="01";
            $num_n=12;
            break;
        case 'J':
            $num_s="11";
            $num_n=9;
            break;
        case 'Q':
            $num_s="12";
            $num_n=10;
            break;
        case 'K':
            $num_s="13";
            $num_n=11;
            break;
        case '10':
            $num_s="10";
            $num_n=8;
            break;
        default:
            $num_n=(int)$num_s-2;
            $num_s="0".$num_s;
    }
    switch($suit){
        case '黑桃':
            $code=$code."s".$num_s;
            $num_n=$num_n+39;
            break;
        case '紅心':
            $code=$code."h".$num_s;
            $num_n=$num_n+26;
            break;
        case '方塊':
            $code=$code."d".$num_s;
            $num_n=$num_n+13;
            break;
        case '梅花':
            $code=$code."c".$num_s;
            break;
    }
    $change=array($code,$num_n);
    return $change;
}

//確認輸入資料
$confirm = false;
$gameType = $_POST["gameType"];
switch ($gameType){
    case 1:
        if($_POST["result1"] != "" && $_POST["result2"] != "" && $_POST["result4"] != "" && $_POST["result5"] != ""){
            $confirm = true;
        }
        break;
    case 2:
        if($_POST["result1"] != "" && $_POST["result2"] != ""){
            $confirm = true;
        }
        break;
    case 3:
        if($_POST["result1"] != ""){
            $confirm = true;
        }
        break;
    case 4:
        if($_POST["result1"] != "" && $_POST["result2"] != "" && $_POST["result3"] != ""){
            $confirm = true;
        }
        break;
    default:
        echo "ERROR!";
}
if($confirm == false){
    echo "未輸入正確結果，不執行任何動作";
    return false;
}

//換算正確牌面結果
$barcodes=[];
$srcResults=[];
$data=[];
switch ($gameType){
    case 1:
        $data[0]=$_POST["result1"];
        $data[1]=$_POST["result2"];
        $data[3]=$_POST["result4"];
        $data[4]=$_POST["result5"];
        if ($_POST["result3"]=="") {
            $data[2]=null;
        }else{
            $data[2]=$_POST["result3"];
        }
        if ($_POST["result6"]!="") {
            $data[5]=$_POST["result6"];
        }
        for($i=0;$i<count($data);$i++){
            if($data[$i] == null){
                $barcodes[$i]="null";
                $srcResults[$i]="null";
            }else{
                $code=poker($data[$i],$i);
                $barcodes[$i]=$code[0];
                $srcResults[$i]=$code[1];
            }
        }
        break;
    case 2:
        $data[0]=$_POST["result1"];
        $data[1]=$_POST["result2"];
        for($i=0;$i<count($data);$i++){
            $code=poker($data[$i],$i);
            $barcodes[$i]=$code[0];
            $srcResults[$i]=$code[1];
            
        }
        break;
    case 3:
        $srcResults[0]=$_POST["result1"];
        break;
    case 4:
        $srcResults[0]=$_POST["result1"];
        $srcResults[1]=$_POST["result2"];
        $srcResults[2]=$_POST["result3"];
        for($i=0;$i<count($srcResults);$i++){
            for($j=$i+1;$j<count($srcResults);$j++){
                if($srcResults[$i] > $srcResults[$j]){
                    //交換兩個數值的小技巧，用list+each
                    list($srcResults[$i] , $srcResults[$j]) = array($srcResults[$j] , $srcResults[$i]);
                }
            }
        }
        break;
    default:
        echo "ERROR!";
}

//打印結果
if($barcodes!=[]){
    $i=1;
    echo '"barcodes": [<br/>';
    foreach ($barcodes as $value){
        if($value=="null"){
            echo $value;
        }else{
            echo '"'.$value.'"';
        }
        if($i != count($barcodes)){
            echo ',<br>';
        }
        $i=$i+1;
    }
    echo '<br>],<br>';
}
$i=1;
echo '"srcResults": [<br/>';
foreach ($srcResults as $value){
    echo $value;
    if($i != count($srcResults)){
        echo ',<br>';
    }
    $i=$i+1;
}
echo '<br>],';
?>
