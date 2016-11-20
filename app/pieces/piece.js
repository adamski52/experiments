"use strict";
var Piece = (function () {
    function Piece(_location, _grid, _style) {
        var _this = this;
        this._location = _location;
        this._grid = _grid;
        this._style = _style;
        this._container = new createjs.Container();
        if (this._style.FILL.IMAGE) {
            this._image = new Image();
            this._image.onload = function () {
                _this._backgroundImage = new createjs.Bitmap(_this._image);
                var w = _this._backgroundImage.getBounds().width, h = _this._backgroundImage.getBounds().height, scale;
                if (w > h) {
                    scale = _this._style.SIZE / w;
                }
                else {
                    scale = _this._style.SIZE / h;
                }
                _this._backgroundImage.setTransform(-w * scale / 2, -h * scale / 2, scale, scale);
                _this.createShape();
            };
            this._image.onerror = function () {
                _this.createShape();
            };
            this._image.src = this._style.FILL.IMAGE;
        }
        else {
            this.createShape();
        }
    }
    Piece.prototype.getStyle = function () {
        return {
            background: this._background,
            backgroundImage: this._backgroundImage,
            style: this._style
        };
    };
    Piece.prototype.figureSingleTileMovement = function (directions) {
        var neighbors = this._location.getNeighbors();
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var d = directions_1[_i];
            this.hintTile(neighbors[d]);
        }
    };
    Piece.prototype.figureCardinalMovement = function () {
        var neighbors;
        neighbors = this._location.getNeighbors();
        while (neighbors.n) {
            this.hintTile(neighbors.n);
            neighbors = neighbors.n.getNeighbors();
        }
        neighbors = this._location.getNeighbors();
        while (neighbors.s) {
            this.hintTile(neighbors.s);
            neighbors = neighbors.s.getNeighbors();
        }
        for (var _i = 0, _a = this._grid[this._location.row]; _i < _a.length; _i++) {
            var c = _a[_i];
            this.hintTile(this._grid[this._location.row][c.col]);
        }
    };
    Piece.prototype.figureDiagonalMovement = function () {
        this.testDiagonalMovement("nw");
        this.testDiagonalMovement("sw");
        this.testDiagonalMovement("ne");
        this.testDiagonalMovement("se");
    };
    Piece.prototype.testDiagonalMovement = function (which) {
        var neighbors = this._location.getNeighbors();
        while (neighbors[which]) {
            this.hintTile(neighbors[which]);
            neighbors = neighbors[which].getNeighbors();
        }
    };
    Piece.prototype.figureRightAngleMovement = function () {
        this.testRightAngleMovement(this._location.row + 4, this._location.col);
        this.testRightAngleMovement(this._location.row - 4, this._location.col);
        this.testRightAngleMovement(this._location.row, this._location.col + 2);
        this.testRightAngleMovement(this._location.row, this._location.col - 2);
    };
    Piece.prototype.testRightAngleMovement = function (row, col) {
        if (row < 0 || row >= this._grid.length || col < 0 || col >= this._grid[row].length) {
            return;
        }
        var neighbors = this._grid[row][col].getNeighbors();
        this.hintTile(neighbors.nw);
        this.hintTile(neighbors.sw);
        this.hintTile(neighbors.ne);
        this.hintTile(neighbors.se);
    };
    Piece.prototype.createShape = function () {
        var _this = this;
        this._background = new createjs.Shape();
        this._background.graphics.setStrokeStyle(this._style.STROKE.SIZE);
        this._background.graphics.beginStroke(this._style.STROKE.COLOR);
        this._background.graphics.beginFill(this._style.FILL.COLOR);
        if (this._style.SHAPE.SIDES < 3) {
            this._style.SHAPE.SIDES = 3;
        }
        if (this._style.SHAPE.SIDES > 10) {
            this._background.graphics.drawCircle(0, 0, this._style.SIZE);
        }
        else {
            this._background.graphics.drawPolyStar(0, 0, this._style.SIZE, this._style.SHAPE.SIDES, this._style.SHAPE.DEPTH, this._style.SHAPE.ANGLE);
        }
        this._container.addChild(this._background);
        if (this._backgroundImage) {
            this._container.addChild(this._backgroundImage);
        }
        this.moveTo(this._location);
        this.getElement().on("mousedown", function (e) {
            _this.onMouseDown(e);
        });
        this.getElement().on("pressup", function (e) {
            _this.onMouseUp(e);
        });
    };
    Piece.prototype.hintTile = function (tile) {
        if (!tile) {
            return;
        }
        tile.hint();
    };
    Piece.prototype.resetAndMove = function (tile) {
        if (!tile) {
            return;
        }
        if (tile.isActive()) {
            this.moveTo(tile);
        }
        tile.reset();
    };
    Piece.prototype.onMouseUp = function (e) {
        for (var r = 0; r < this._grid.length; r++) {
            for (var c = 0; c < this._grid[r].length; c++) {
                this.resetAndMove(this._grid[r][c]);
            }
        }
    };
    Piece.prototype.getElement = function () {
        return this._container;
    };
    Piece.prototype.getLocation = function () {
        return this._location;
    };
    Piece.prototype.moveTo = function (destination) {
        this._location = destination;
    };
    Piece.prototype.render = function () {
        var loc = this._location.getElement();
        this._container.x = loc.x;
        this._container.y = loc.y;
    };
    return Piece;
}());
exports.Piece = Piece;
//# sourceMappingURL=piece.js.map