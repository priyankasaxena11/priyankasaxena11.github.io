document.getElementById("scanBarcode2").addEventListener("click", startScanActivity);  

function setFocusOnNext(elementName){
    document.getElementById(elementName).focus();    
}

function setBarcodeValue(){
    var barcodeVal = document.getElementById("barcodeValueHidden").value;
    var input_focused = document.activeElement === input && document.hasFocus();
    documant.getElementById(input_focused).value = barcodeVal;
}

function startScanActivity(){
    console.log("inside scanner");
    Cordova.exec(function success(result){
         document.getElementById("barcodeValueHidden").value = result;
     }, null, "PluginName", "new_activity", null);
}
