"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Promise = _interopRequire(require("bluebird"));

var http = _interopRequire(require("superagent"));

var RippledClient = (function () {
  function RippledClient(rpc_url) {
    _classCallCheck(this, RippledClient);

    this.rpc_url = rpc_url;
  }

  _prototypeProperties(RippledClient, null, {
    submitHex: {
      value: function submitHex(hex) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          http.post(_this.rpc_url).send({
            method: "submit",
            params: [{
              tx_blob: hex
            }]
          }).end(function (error, response) {
            if (error) {
              return reject(error);
            }
            resolve(response.body);
          });
        });
      },
      writable: true,
      configurable: true
    }
  });

  return RippledClient;
})();

module.exports = RippledClient;