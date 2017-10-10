"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
// Server class
var Server = /** @class */ (function () {
    function Server() {
        this.app = express();
        this.config();
    }
    // application config
    Server.prototype.config = function () {
        var _this = this;
        var buildPath = express.static(path.join(__dirname));
        this.app.use(buildPath);
        this.app.listen(process.env.PORT || 2000, function () {
            _this.app.get('/', function (req, res) {
                res.sendFile(__dirname, 'index.html');
            });
        });
    };
    return Server;
}());
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map