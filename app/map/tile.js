"use strict";
var Tile = (function () {
    function Tile(_x, _y, CONFIG) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.CONFIG = CONFIG;
        this.row = this._y;
        this.col = this._x;
        this._offset = this.CONFIG.STYLES.TILES.PADDING_OFFSET;
        this._style = {
            fill: this.CONFIG.STYLES.TILES.FILL.COLOR,
            strokeColor: this.CONFIG.STYLES.TILES.STROKE.COLOR,
            strokeSize: this.CONFIG.STYLES.TILES.STROKE.SIZE
        };
        this._container = new createjs.Container();
        this._shape = new createjs.Shape();
        this._container.on("mouseover", function (e) {
            _this.onMouseOver(e);
        });
        this._container.on("mouseout", function (e) {
            _this.onMouseOut(e);
        });
    }
    Tile.prototype.onMouseOut = function (e) {
        this._style.fill = this._style.fill === this.CONFIG.STYLES.TILES.FILL.ACTIVE ? this.CONFIG.STYLES.TILES.FILL.HINT : this.CONFIG.STYLES.TILES.FILL.COLOR;
    };
    Tile.prototype.onMouseOver = function (e) {
        if (this._style.fill === this.CONFIG.STYLES.TILES.FILL.HINT) {
            this.activate();
        }
    };
    Tile.prototype.setGrid = function (grid) {
        this._grid = grid;
    };
    Tile.prototype.render = function () {
        this._container.removeAllChildren();
        this._shape.graphics.clear();
        this._shape.graphics.setStrokeStyle(this._style.strokeSize);
        this._shape.graphics.beginStroke(this._style.strokeColor);
        this._shape.graphics.beginFill(this._style.fill);
        this._shape.graphics.drawPolyStar(0, 0, this.CONFIG.STYLES.TILES.SIZE, 6, 0, 0);
        this._container.addChild(this._shape);
        this.setPosition(this._x, this._y);
    };
    Tile.prototype.activate = function () {
        this._style.fill = this.CONFIG.STYLES.TILES.FILL.ACTIVE;
    };
    Tile.prototype.isActive = function () {
        return this._style.fill === this.CONFIG.STYLES.TILES.FILL.ACTIVE;
    };
    Tile.prototype.hint = function () {
        this._style.fill = this.CONFIG.STYLES.TILES.FILL.HINT;
    };
    Tile.prototype.isHint = function () {
        return this._style.fill === this.CONFIG.STYLES.TILES.FILL.HINT;
    };
    Tile.prototype.reset = function () {
        this._style.fill = this.CONFIG.STYLES.TILES.FILL.COLOR;
    };
    Tile.prototype.setPosition = function (x, y) {
        this._x = x;
        this._y = y;
        if (this._y % 2 === 0) {
            this._container.x = (this._x * this.CONFIG.STYLES.TILES.SIZE * 3) + this.CONFIG.STYLES.TILES.SIZE;
        }
        else {
            this._container.x = (this._x * this.CONFIG.STYLES.TILES.SIZE * 3) + (this.CONFIG.STYLES.TILES.SIZE * 1.5) + this.CONFIG.STYLES.TILES.SIZE;
        }
        this._container.x += this.CONFIG.STYLES.TILES.LEFT_OFFSET;
        this._container.y = (this._y * (this.CONFIG.STYLES.TILES.SIZE - this._offset)) + this.CONFIG.STYLES.TILES.SIZE - this._offset + this.CONFIG.STYLES.TILES.STROKE.SIZE + this.CONFIG.STYLES.TILES.TOP_OFFSET;
    };
    Tile.prototype.getElement = function () {
        return this._container;
    };
    Tile.prototype.getNorthNeighbor = function () {
        var row = this.row - 2, col = this.col;
        if (row < 0) {
            return;
        }
        return this._grid[row][col];
    };
    Tile.prototype.getSouthNeighbor = function () {
        var row = this.row + 2, col = this.col;
        if (row >= this._grid.length) {
            return;
        }
        return this._grid[row][col];
    };
    Tile.prototype.getNorthwestNeighbor = function () {
        var row = this.row - 1, col = this.row % 2 === 0 ? this.col - 1 : this.col;
        if (col < 0 || row < 0) {
            return;
        }
        return this._grid[row][col];
    };
    Tile.prototype.getNortheastNeighbor = function () {
        var row = this.row - 1, col = this.row % 2 === 0 ? this.col : this.col + 1;
        if (row < 0 || col >= this._grid[row].length) {
            return;
        }
        return this._grid[row][col];
    };
    Tile.prototype.getSouthwestNeighbor = function () {
        var row = this.row + 1, col = this.row % 2 === 0 ? this.col - 1 : this.col;
        if (row >= this._grid.length || col < 0) {
            return;
        }
        return this._grid[row][col];
    };
    Tile.prototype.getSoutheastNeighbor = function () {
        var row = this.row + 1, col = this.row % 2 === 0 ? this.col : this.col + 1;
        if (row >= this._grid.length || col >= this._grid[row].length) {
            return;
        }
        return this._grid[row][col];
    };
    Tile.prototype.getNeighbors = function () {
        return {
            n: this.getNorthNeighbor(),
            ne: this.getNortheastNeighbor(),
            se: this.getSoutheastNeighbor(),
            s: this.getSouthNeighbor(),
            sw: this.getSouthwestNeighbor(),
            nw: this.getNorthwestNeighbor()
        };
    };
    return Tile;
}());
exports.Tile = Tile;
//# sourceMappingURL=tile.js.map