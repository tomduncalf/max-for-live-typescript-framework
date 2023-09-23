"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveHub = exports.Outlets = exports.Inlets = void 0;
var lib_Log_1 = require("./lib_Log");
exports.Inlets = {
    Messages: { index: 0, description: "Messages" },
};
exports.Outlets = {
    Debug: { index: 0, description: "Debug" },
};
// Main entry point class which hooks everything together
var LiveHub = /** @class */ (function () {
    function LiveHub() {
        this.log = new lib_Log_1.Log("LiveHub");
        this.handleMessage = function (inlet, value) { };
        this.dumpSavedState = function () { };
        this.getSavedState = function () {
            return {};
        };
        this.loadSavedState = function (savedState) { };
        lib_Log_1.log("LiveHub started");
    }
    return LiveHub;
}());
exports.LiveHub = LiveHub;
