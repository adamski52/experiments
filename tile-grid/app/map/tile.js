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
var Subject_1 = require('rxjs/Subject');
var config_1 = require("../config/config");
var Tile = (function () {
    function Tile(_x, _y, CONFIG) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.CONFIG = CONFIG;
        this.onClick = new Subject_1.Subject();
        this.onClick$ = this.onClick.asObservable();
        this.row = this._y;
        this.col = this._x;
        this._offset = Math.floor((this.CONFIG.TILE_SIZE / 50)) * 7;
        this._style = {
            fill: this.CONFIG.FILL_COLOR,
            strokeColor: this.CONFIG.STROKE_COLOR,
            strokeSize: this.CONFIG.STROKE_SIZE
        };
        this._shape = new createjs.Shape();
        this.render();
        this._shape.addEventListener("click", function () {
            _this.onClick.next(_this);
        });
    }
    Tile.prototype.render = function () {
        this._shape.graphics.setStrokeStyle(this._style.strokeSize);
        this._shape.graphics.beginStroke(this._style.strokeColor);
        this._shape.graphics.beginFill(this._style.fill);
        this._shape.graphics.drawPolyStar(0, 0, this.CONFIG.TILE_SIZE, 6, 0, 0);
        this.setPosition(this._x, this._y);
    };
    Tile.prototype.activate = function () {
        this._style.fill = this.CONFIG.FILL_ACTIVE_COLOR;
    };
    Tile.prototype.hint = function () {
        this._style.fill = "#ffffff";
    };
    Tile.prototype.setPosition = function (x, y) {
        this._x = x;
        this._y = y;
        if (this._y % 2 === 0) {
            this._shape.x = (this._x * this.CONFIG.TILE_SIZE * 3) + this.CONFIG.TILE_SIZE;
        }
        else {
            this._shape.x = (this._x * this.CONFIG.TILE_SIZE * 3) + (this.CONFIG.TILE_SIZE * 1.5) + this.CONFIG.TILE_SIZE;
        }
        this._shape.y = (this._y * (this.CONFIG.TILE_SIZE - this._offset)) + this.CONFIG.TILE_SIZE - this._offset;
    };
    Tile.prototype.getElement = function () {
        this.render();
        return this._shape;
    };
    Tile.prototype.getStyle = function () {
        return this._style;
    };
    Tile = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Number, Number, config_1.CONFIG])
    ], Tile);
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map