function random() {
	var val = !Math.round(Math.random());
    alert(val);
    navigator.notification.beep(1);
}
