cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com.example.sample.plugin.PluginName",
      "file": "plugins/com.example.sample.plugin/www/PluginName.js",
      "pluginId": "com.example.sample.plugin",
      "clobbers": [
        "PluginName"
      ]
    },
    {
      "id": "cordova-plugin-inappbrowser.inappbrowser",
      "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
      "pluginId": "cordova-plugin-inappbrowser",
      "clobbers": [
        "cordova.InAppBrowser.open",
        "window.open"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "com.example.sample.plugin": "0.0.1",
    "cordova-plugin-inappbrowser": "3.0.0"
  };
});