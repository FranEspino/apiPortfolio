"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var works_1 = __importDefault(require("../routes/works"));
var cors_1 = __importDefault(require("cors"));
var Server = /** @class */ (function () {
    function Server() {
        this.apiPaths = {
            works: '/api/works'
        };
        this.app = express_1["default"]();
        this.port = process.env.PORT || '8000';
        this.middleware();
        this.routes();
    }
    Server.prototype.middleware = function () {
        this.app.use(cors_1["default"]());
        this.app.use(express_1["default"].json());
        this.app.use(express_1["default"].static('public'));
    };
    Server.prototype.routes = function () {
        this.app.use(this.apiPaths.works, works_1["default"]);
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("Server listening on port " + _this.port);
        });
    };
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=server.js.map