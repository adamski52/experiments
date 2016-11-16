"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var state_1 = require("./state/state");
var config_1 = require("./config/config");
var map_1 = require("./map/map");
var App = (function () {
    function App() {
        this.CONFIG = new config_1.CONFIG();
        this._state = new state_1.State();
    }
    App.prototype.tick = function () {
    };
    App.prototype.draw = function (items) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this._stage.addChild(item.getElement());
        }
    };
    App.prototype.render = function () {
        this._stage.removeAllChildren();
        this.draw(this._map.render());
        this._stage.update();
    };
    App.prototype.run = function () {
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
            _this.run();
        }, 0);
    };
    App.prototype.ngOnInit = function () {
        this.start();
    };
    App = __decorate([
        core_1.Component({
            selector: "hex-grid",
            templateUrl: "templates/stage.html"
        }), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map