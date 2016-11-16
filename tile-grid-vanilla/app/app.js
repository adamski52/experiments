"use strict";
var state_1 = require("./state/state");
var config_1 = require("./config/config");
var map_1 = require("./map/map");
var App = (function () {
    function App() {
        this._ticks = 0;
        this._frames = 0;
        this.tps = 0;
        this.fps = 0;
        this.CONFIG = new config_1.CONFIG();
        this._state = new state_1.State();
    }
    App.prototype.tick = function () {
        this._ticks++;
    };
    App.prototype.draw = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this._stage.addChild(item.getElement());
        }
    };
    App.prototype.render = function () {
        this._frames++;
        this._stage.removeAllChildren();
        this.draw(this._map.render());
        this._stage.update();
    };
    App.prototype.loop = function () {
        if (this._state.isPaused()) {
            return;
        }
        var next = new Date().getTime(), loops = 0, skips = 1000 / this.CONFIG.FPS;
        while (new Date().getTime() >= next && loops < this.CONFIG.MAX_SKIP) {
            this.tick();
            next += skips;
            loops++;
        }
        this.render();
    };
    App.prototype.start = function () {
        var _this = this;
        this._stage = new createjs.Stage(this.CONFIG.STAGE_ID);
        this._map = new map_1.Map(this.CONFIG);
        window.setInterval(function () {
            _this.loop();
        }, 1);
        window.setInterval(function () {
            document.getElementById("fps").innerHTML = _this._frames + "";
            document.getElementById("tps").innerHTML = _this._ticks + "";
            _this._frames = 0;
            _this._ticks = 0;
        }, 1000);
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map