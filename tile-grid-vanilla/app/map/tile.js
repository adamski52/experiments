"use strict";
var Subject_1 = require('rxjs/Subject');
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
        this._shape.graphics.clear();
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
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map