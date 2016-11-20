"use strict";
var config_1 = require("../config/config");
var map_1 = require("../map/map");
describe("Tile class", function () {
    function getTile(tiles, col, row) {
        var tile;
        for (var t in tiles) {
            tile = tiles[t];
            if (tile.col === col && tile.row === row) {
                return tile;
            }
        }
    }
    var config = new config_1.CONFIG(), map, tiles, selectedTile, neighbors, col, row;
    config.DISPLAY.MAP_WIDTH = 3;
    config.DISPLAY.MAP_HEIGHT = 6;
    config.BOARD.PAWNS = [];
    config.BOARD.BISHOPS = [];
    config.BOARD.DON_JOHNSONS = [];
    config.BOARD.HORSIE_NEIGH_NEIGHS = [];
    config.BOARD.KINGS = [];
    config.BOARD.QUEENS = [];
    config.BOARD.ROOKS = [];
    map = new map_1.Map(config);
    tiles = map.renderTiles();
    // all (0, 3) and (1, 2)
    // all but north (0, 1)
    // all but south (1, 4)
    // no norths (1, 0) and (2, 0)
    // no souths (0, 5) and (1, 5)
    // no easts (2, 3)
    // no wests (0, 2)
    // only se and s (0, 0)
    describe("a tile on an even row with all neighbors", function () {
        beforeEach(function () {
            col = 1;
            row = 2;
            selectedTile = getTile(tiles, col, row);
            neighbors = selectedTile.getNeighbors();
        });
        it("should have a north neighbor", function () {
            expect(neighbors.n).toBeDefined();
            expect(neighbors.n.col).toBe(col);
            expect(neighbors.n.row).toBe(row - 2);
        });
        it("should have a northeast neighbor", function () {
            expect(neighbors.ne).toBeDefined();
            expect(neighbors.ne.col).toBe(col);
            expect(neighbors.ne.row).toBe(row - 1);
        });
        it("should have a northwest neighbor", function () {
            expect(neighbors.nw).toBeDefined();
            expect(neighbors.nw.col).toBe(col - 1);
            expect(neighbors.nw.row).toBe(row - 1);
        });
        it("should have a south neighbor", function () {
            expect(neighbors.s).toBeDefined();
            expect(neighbors.s.col).toBe(col);
            expect(neighbors.s.row).toBe(row + 2);
        });
        it("should have a southeast neighbor", function () {
            expect(neighbors.se).toBeDefined();
            expect(neighbors.se.col).toBe(col);
            expect(neighbors.se.row).toBe(row + 1);
        });
        it("should have a southwest neighbor", function () {
            expect(neighbors.sw).toBeDefined();
            expect(neighbors.sw.col).toBe(col - 1);
            expect(neighbors.sw.row).toBe(row + 1);
        });
    });
    describe("a tile on an odd row with all neighbors", function () {
        beforeEach(function () {
            col = 0;
            row = 3;
            selectedTile = getTile(tiles, col, row);
            neighbors = selectedTile.getNeighbors();
        });
        it("should have a north neighbor", function () {
            expect(neighbors.n).toBeDefined();
            expect(neighbors.n.col).toBe(col);
            expect(neighbors.n.row).toBe(row - 2);
        });
        it("should have a northeast neighbor", function () {
            expect(neighbors.ne).toBeDefined();
            expect(neighbors.ne.col).toBe(col + 1);
            expect(neighbors.ne.row).toBe(row - 1);
        });
        it("should have a northwest neighbor", function () {
            expect(neighbors.nw).toBeDefined();
            expect(neighbors.nw.col).toBe(col);
            expect(neighbors.nw.row).toBe(row - 1);
        });
        it("should have a south neighbor", function () {
            expect(neighbors.s).toBeDefined();
            expect(neighbors.s.col).toBe(col);
            expect(neighbors.s.row).toBe(row + 2);
        });
        it("should have a southeast neighbor", function () {
            expect(neighbors.se).toBeDefined();
            expect(neighbors.se.col).toBe(col + 1);
            expect(neighbors.se.row).toBe(row + 1);
        });
        it("should have a southwest neighbor", function () {
            expect(neighbors.sw).toBeDefined();
            expect(neighbors.sw.col).toBe(col);
            expect(neighbors.sw.row).toBe(row + 1);
        });
    });
});
//# sourceMappingURL=tile.spec.js.map