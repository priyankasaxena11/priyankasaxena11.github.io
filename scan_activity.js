
window.onload = function(e){ 
    console.log("Start scan activity");
    document.getElementById("barcodeValue1").focus();
    //startScanActivity();
}

document.getElementById("initScan").addEventListener("click", initialiseScanner);  

function initialiseScanner(){
    console.log("init scanner");
    document.getElementById("barcodeValue1").focus();
    Cordova.exec(null, null, "PluginName", "scan_activity", null);
}

function setFocusOnNext(elementName){
    document.getElementById(elementName).focus();    
}

function setBarcodeValue(){
    var barcodeVal = document.getElementById("barcodeValue1").value;
    console.log("barcodeVal" + barcodeVal);
    var input_focused = document.activeElement === input && document.hasFocus();
    document.getElementById(input_focused).value = barcodeVal;
}


function startScanActivity(){
    console.log("inside scanner");
    Cordova.exec(function success(result){
         document.getElementById("barcodeValue1").value = result;
     }, null, "PluginName", "scan_activity", null);
}
