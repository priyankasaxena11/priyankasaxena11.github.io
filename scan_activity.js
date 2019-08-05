
window.onload = function(e){ 
    console.log("Start scan activity");
    document.getElementById("barcodeValue1").focus();
}

function setFocusOnNext(elementName){
    console.log("Next element " + elementName);
    document.getElementById(elementName).focus();    
}

function getBarcode() {
	var string = window.denso.getBarcode();
	console.log("Barcode received " + string);
	document.getElementById('barcodeValue1').value = string;
}

function setResult(barcodeVal) {
    console.log("Barcode Value received: " + barcodeVal);
    //document.getElementById("barcodeValue1").value = barcodeVal;  
    if(document.activeElement != null && document.hasFocus()) {
	 var input_focused = document.activeElement;
	 input_focused.value = barcodeVal;
	 setFocusOnNextElement();
    }
 }

function setFocusOnNextElement(){
	var tab = $(this).attr("tabindex");
	tab++;
	$("[tabindex='"+tab+"']").focus();
}


