
window.onload = function(e){ 
    console.log("Start scan activity");
    document.getElementById("barcodeValue1").focus();
}

function setFocusOnNext(elementName){
    console.log("Next element " + elementName);
    document.getElementById(elementName).focus();    
}

function init(val) {
    console.log("Value received " + val);
    document.getElementById("barcodeValue1").value = val;
    showScanResult();
 }

function showScanResult() {
        var scanResult = denso.scanResult();
        if(!scanResult)
            denso.showToast("Nothing had been scanned");
        else 
            denso.showToast(denso.scanResult());
    }

/*document.getElementById("initScan").addEventListener("click", initialiseScanner);  

function initialiseScanner(){
    console.log("init scanner");
    document.getElementById("barcodeValue1").focus();
    Cordova.exec(null, null, "PluginName", "scan_activity", null);
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
}*/
