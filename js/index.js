//document.addEventListener("deviceready", onDeviceReady, false);
//
//
//function onDeviceReady(){
//    
//    alert("something");
//    $('#submitButton').on("click",getAnswer);   
//}
//
//function getAnswer(){
//    
//    alert("button clicked");
//}

function random() {
	var val = !Math.round(Math.random());
     alert(val);
    if (val == true) {
        alert("randomTrew");
    navigator.notification.beep(1);
       
        }
    else {
        alert("randomFalse")
    navigator.notification.beep(2);
       
        }
}
