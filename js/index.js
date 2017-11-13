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
 
    navigator.notification.beep(1);
        navigator.vibrate(2000);
       
        }
    else {
   
    navigator.notification.beep(2);
        navigator.vibrate([200, 300, 500]);
       
        }
}
