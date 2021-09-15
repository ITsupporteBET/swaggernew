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
    return $rsa->verify($plaintext, base64_decode($signature)) ? '通过(verified)' : '失败(unverified)';
}

//確認輸入資料
if($_POST["string"] == "" && $_POST["key"] == ""){
    echo "资料不足，不执行任何动作<br/>Insufficient information, no action";
    return false;
}

$plaintext = $_POST["string"];
echo "组成字串(Composed string)：".$plaintext."<br/>";

if ($_POST["signature"] != ""){
    $signature = $_POST["signature"];
    echo "要验证的签名(Verify signature)：".$signature."<br/>";
}
switch ($_POST["run"]){
    case "签名产生Signature generation":

        $compositionsignature = get_signature1($plaintext);
        echo "产生的签名(Composition signature)：".$compositionsignature."<br/>";
        break;
    case "验证签名Verify signature":
        if($_POST["signature"] == ""){
            echo "signature为空值，无法做验证";
            break;
        }else{
            $signature = $_POST["signature"];
            echo "要验证的签名(Verify signature)：".$signature."<br/>";
            $testsignature = verify_signature1($plaintext,$signature);
            echo "验整的结果(Verification result)：".$testsignature."<br/>";
            break;
        }
    default:
        echo "ERROR!";
}

?>
