function startScanActivity(){
    console.log("inside scanner");
    Cordova.exec(function success(result){
         document.getElementById("barcodeValue2").value = result;
     }, null, "PluginName", "new_activity", null);
}
