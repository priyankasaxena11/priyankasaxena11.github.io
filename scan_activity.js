
window.onload = function(e){ 
    console.log("Start scan activity");
    startScanActivity();
}

//document.getElementById("scanBarcode2").addEventListener("click", startScanActivity);  

function setFocusOnNext(elementName){
    document.getElementById(elementName).focus();    
}

function setBarcodeValue(){
    var barcodeVal = document.getElementById("barcodeValueHidden").value;
    console.log("barcodeVal" + barcodeVal);
    var input_focused = document.activeElement === input && document.hasFocus();
    document.getElementById(input_focused).value = barcodeVal;
}

function startScanActivity(){
    console.log("inside scanner");
    Cordova.exec(function success(result){
         document.getElementById("barcodeValueHidden").value = result;
     }, null, "PluginName", "scan_activity", null);
}
