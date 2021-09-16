<?php
ini_set("display_errors","On");
error_reporting(E_ALL);

include('Crypt/RSA.php');

function get_signature1($plaintext){
    $privatekey = $_POST["key"];
    $rsa = new Crypt_RSA();
    $rsa -> loadKey($privatekey);
    $rsa -> setSignatureMode(CRYPT_RSA_SIGNATURE_PKCS1);
    $rsa -> setHash("md5");
    $get_signature = $rsa -> sign($plaintext);
    return base64_encode($get_signature);
}

function verify_signature1($plaintext,$signature){
    $publickey = $_POST["key"];
    $rsa = new Crypt_RSA();
    $rsa -> loadKey($publickey);
    $rsa -> setSignatureMode(CRYPT_RSA_SIGNATURE_PKCS1);
    $rsa -> setHash("md5");
    return $rsa->verify($plaintext, base64_decode($signature)) ? '通過(verified)' : '失敗(unverified)';
}

//確認輸入資料
$plaintext = $_POST["string"];
if ($_POST["p1"] != ""){$plaintext = $plaintext.$_POST["p1"];}
if ($_POST["p2"] != ""){$plaintext = $plaintext.$_POST["p2"];}
if ($_POST["p3"] != ""){$plaintext = $plaintext.$_POST["p3"];}
if ($_POST["p4"] != ""){$plaintext = $plaintext.$_POST["p4"];}
if ($_POST["p5"] != ""){$plaintext = $plaintext.$_POST["p5"];}
if ($_POST["p6"] != ""){$plaintext = $plaintext.$_POST["p6"];}


switch ($_POST["run"]){

    case "產生字串":
        $getstring = $_POST["request"];
        if($getstring == ""){
            echo "未輸入任何參數，無法產生字串<br/>";
            return false;
        }
        $arr = json_decode($getstring,true);

        if($arr["seqNo"] == null or $arr["event"] == null or $arr["channelId"] == null or $arr["timestamp"] == null or $arr["username"] == null or $arr["money"] == null){
            echo "參數錯誤，無法產生字串<br/>";
            break;
        }
        else if($arr["seqNo"] != "" and $arr["event"] != "" and $arr["channelId"] != "" and $arr["timestamp"] != "" and $arr["username"] != "" and $arr["money"] != ""){
            echo "產生的字串(Produce string)：";
            echo $arr["seqNo"];
            echo $arr["event"];
            echo $arr["channelId"];
            echo $arr["timestamp"];
            echo $arr["username"];
            echo $arr["money"];
            break;
        }



    case "Generate signature":
        if($plaintext == ""){
            echo "未輸入字串，無法產生簽名<br/>";
            return false;
        }
        if($_POST["key"] == ""){
            echo "key為空值，無法做簽名";
            break;
        }
        $compositionsignature = get_signature1($plaintext);
        echo "組成的字串(Composed string)：".$plaintext."<br/>";
        echo "組成的簽名(Composition signature)：".$compositionsignature."<br/>";
        break;
        
        


    case "Verify signature":
        if($_POST["key"] == ""){
            echo "key為空值，無法做驗證";
            break;
        }
        if($_POST["signature"] == ""){
            echo "signature為空值，無法做驗證";
            break;
        }
        $signature = $_POST["signature"];
        $testsignature = verify_signature1($plaintext,$signature);
        echo "要驗證的簽名(Verify signature)：".$signature."<br/>";
        echo "驗證的結果(Verification result)：".$testsignature."<br/>";
        break;
    default:
        echo "ERROR!";
}

?>