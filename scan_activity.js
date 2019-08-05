
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

function setResult(val) {
    console.log("Value received: " + val);
    //document.getElementById("barcodeValue1").value = val;  
    var input_focused = document.activeElement === input && document.hasFocus();
    document.getElementById(input_focused).value = barcodeVal;
 }

$(document).ready(function(){
    $('input').on("input", function(){
        if($(this).val().length > 0){
            $(this).next().focus();
        }
    });
});


