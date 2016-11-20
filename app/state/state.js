"use strict";
var State = (function () {
    function State() {
        this._paused = false;
    }
    State.prototype.pause = function () {
        this._paused = true;
    };
    State.prototype.unpause = function () {
        this._paused = false;
    };
    State.prototype.isPaused = function () {
        return this._paused;
    };
    return State;
}());
exports.State = State;
//# sourceMappingURL=state.js.map