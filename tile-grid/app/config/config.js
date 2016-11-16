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
var core_1 = require('@angular/core');
var CONFIG = (function () {
    function CONFIG() {
        this.STAGE_ID = "stage";
        this.FPS = 33;
        this.MAX_SKIP = 10;
        this.MAP_WIDTH = 2;
        this.MAP_HEIGHT = 5;
        this.TILE_SIZE = 100;
        this.FILL_COLOR = "#f0f0f0";
        this.FILL_ACTIVE_COLOR = "#000000";
        this.STROKE_COLOR = "#cccccc";
        this.STROKE_SIZE = 1;
        this.TILE_CLICK = "TILE_CLICK";
        this.INVALID_SIZE_ERROR = "Invalid map size specified.";
    }
    CONFIG = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CONFIG);
    return CONFIG;
}());
exports.CONFIG = CONFIG;
//# sourceMappingURL=config.js.map