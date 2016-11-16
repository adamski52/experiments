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
var tile_1 = require("./tile");
var config_1 = require("../config/config");
var Map = (function () {
    function Map(CONFIG) {
        var _this = this;
        this.CONFIG = CONFIG;
        this._tiles = [];
        this._grid = [];
        var tile;
        if (this.CONFIG.MAP_WIDTH <= 1 || this.CONFIG.MAP_HEIGHT <= 1) {
            throw new Error(this.CONFIG.INVALID_SIZE_ERROR);
        }
        for (var x = 0; x < this.CONFIG.MAP_WIDTH; x++) {
            for (var y = 0; y < this.CONFIG.MAP_HEIGHT; y++) {
                tile = new tile_1.Tile(x, y, this.CONFIG);
                tile.onClick$.subscribe(function (tile) {
                    _this.onTileClick(tile);
                });
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
    }
    Map.prototype.onTileClick = function (tile) {
        var neighbors = this.getTileNeighbors(tile);
        tile.activate();
        console.log("NEIGHBORS: ", neighbors);
        for (var n in neighbors) {
            if (neighbors[n]) {
                neighbors[n].hint();
            }
        }
        return neighbors;
    };
    Map.prototype.render = function () {
        return this._tiles;
    };
    Map.prototype.getTileNeighbors = function (tile) {
        console.log("TILE: ", tile);
        var n, ne, se, s, sw, nw;
        if (tile.row - 1 >= 0) {
            ne = this._grid[tile.row - 1][tile.col];
            if (tile.col - 1 < this._grid[tile.row - 1].length) {
                nw = this._grid[tile.row - 1][tile.col - 1];
            }
            if (tile.row - 2 >= 0) {
                n = this._grid[tile.row - 2][tile.col];
            }
        }
        if (tile.row + 1 < this._grid.length) {
            se = this._grid[tile.row + 1][tile.col];
            if (tile.col - 1 < this._grid[tile.row + 1].length) {
                sw = this._grid[tile.row + 1][tile.col - 1];
            }
            if (tile.row + 2 < this._grid.length) {
                s = this._grid[tile.row + 2][tile.col];
            }
        }
        return {
            n: n,
            ne: ne,
            se: se,
            s: s,
            sw: sw,
            nw: nw
        };
    };
    Map = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [config_1.CONFIG])
    ], Map);
    return Map;
}());
exports.Map = Map;
//# sourceMappingURL=map.js.map