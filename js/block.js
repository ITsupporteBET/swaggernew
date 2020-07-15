const session = sessionStorage.getItem('key');
if (session == "ok") {

} else {
    window.history.go(-1);
}