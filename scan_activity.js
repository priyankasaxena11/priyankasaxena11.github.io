function startScanActivity(){
    Cordova.exec(function success(result){
         document.getElementById("barcodeValue2").value = result;
     }, null, "PluginName", "new_activity", null);
}
