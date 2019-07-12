function startScanActivity(){
    Cordova.exec(function success(result){
         document.getElementById("barcodeValue").value = result;
     }, null, "PluginName", "new_activity", null);
}