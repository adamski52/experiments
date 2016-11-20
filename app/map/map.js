"use strict";
var tile_1 = require("./tile");
var constants_1 = require("../config/constants");
var pawn_1 = require("../pieces/pawn");
var don_johnson_1 = require("../pieces/don-johnson");
var rook_1 = require("../pieces/rook");
var bishop_1 = require("../pieces/bishop");
var horsie_neigh_neigh_1 = require("../pieces/horsie-neigh-neigh");
var king_1 = require("../pieces/king");
var queen_1 = require("../pieces/queen");
var Map = (function () {
    function Map(CONFIG) {
        this.CONFIG = CONFIG;
        this._tiles = [];
        this._grid = [];
        this._pieces = [];
        if (this.CONFIG.DISPLAY.MAP_WIDTH <= 1 || this.CONFIG.DISPLAY.MAP_HEIGHT <= 1) {
            throw new Error(constants_1.CONSTANTS.MESSAGES.ERRORS.INVALID_MAP);
        }
        this.createTiles();
        this.createPieces();
    }
    Map.prototype.createTiles = function () {
        var tile;
        for (var x = 0; x < this.CONFIG.DISPLAY.MAP_WIDTH; x++) {
            for (var y = 0; y < this.CONFIG.DISPLAY.MAP_HEIGHT; y++) {
                tile = new tile_1.Tile(x, y, this.CONFIG);
                this._tiles.push(tile);
            }
        }
        for (var _i = 0, _a = this._tiles; _i < _a.length; _i++) {
            var tile = _a[_i];
            if (this._grid.length - 1 < tile.row) {
                this._grid[tile.row] = [];
            }
            this._grid[tile.row][tile.col] = tile;
        }
        for (var _b = 0, _c = this._tiles; _b < _c.length; _b++) {
            var tile = _c[_b];
            tile.setGrid(this._grid);
        }
    };
    Map.prototype.createPieces = function () {
        var piece, manImLazy;
        manImLazy = "ROOKS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new rook_1.Rook(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
        manImLazy = "HORSIE_NEIGH_NEIGHS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new horsie_neigh_neigh_1.HorsieNeighNeigh(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
        manImLazy = "BISHOPS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new bishop_1.Bishop(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
        manImLazy = "QUEENS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new queen_1.Queen(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
        manImLazy = "KINGS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new king_1.King(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
        manImLazy = "DON_JOHNSONS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new don_johnson_1.DonJohnson(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
        manImLazy = "PAWNS";
        for (var p in this.CONFIG.BOARD[manImLazy]) {
            piece = new pawn_1.Pawn(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }
    };
    Map.prototype.getGrid = function () {
        return this._grid;
    };
    Map.prototype.renderTiles = function () {
        for (var t in this._tiles) {
            this._tiles[t].render();
        }
        return this._tiles;
    };
    Map.prototype.renderPieces = function () {
        for (var p in this._pieces) {
            this._pieces[p].render();
        }
        return this._pieces;
    };
    return Map;
}());
exports.Map = Map;
//# sourceMappingURL=map.js.map