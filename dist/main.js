"use strict";
autowatch = 0;
var lib_Log_1 = require("./lib_Log");
var LiveHub_1 = require("./LiveHub");
lib_Log_1.log("__________________");
lib_Log_1.log("Script reloaded at: " + new Date());
inlets = Object.keys(LiveHub_1.Inlets).length;
outlets = Object.keys(LiveHub_1.Outlets).length;
setinletassist(-1, function (i) { return assist(LiveHub_1.Inlets[Object.keys(LiveHub_1.Inlets)[i]].description); });
setoutletassist(-1, function (i) { return assist(LiveHub_1.Outlets[Object.keys(LiveHub_1.Outlets)[i]].description); });
var instance;
var savedState = "";
// Defer startup until we get a bang from live.thisdevice otherwise Live API will not be ready
function bang() {
    instance = new LiveHub_1.LiveHub();
    // @ts-ignore
    instance.patcher = this.patcher;
    if (savedState)
        instance.loadSavedState(savedState);
}
// Need to hook up to inlets/outlets at this main entry point
function msg_int(value) {
    if (instance)
        instance.handleMessage(inlet, value);
}
function msg_float(value) {
    if (instance)
        instance.handleMessage(inlet, value);
}
// Handle loading and saving state - this is stored in the pattr object
// Note that you need to call notifyclients() whenever the state is updated
function getvalueof() {
    var state = JSON.stringify(instance.getSavedState());
    return state;
}
function setvalueof(state) {
    if (instance)
        instance.loadSavedState(state);
    else
        savedState = state;
}
// .ts files with this at the end become a script usable in a [js] or [jsui] object
var module = {};
module.exports = {};
