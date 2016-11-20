"use strict";
var config_1 = require("../config/config");
var map_1 = require("../map/map");
describe("Rook class", function () {
    var config, map, pieces, neighbors, piece;
    beforeEach(function () {
        config = new config_1.CONFIG();
        config.DISPLAY.MAP_HEIGHT = 20;
        config.DISPLAY.MAP_WIDTH = 20;
        config.BOARD.ROOKS = [{
                row: 10,
                col: 10
            }];
        config.BOARD.PAWNS = [];
        config.BOARD.BISHOPS = [];
        config.BOARD.DON_JOHNSONS = [];
        config.BOARD.HORSIE_NEIGH_NEIGHS = [];
        config.BOARD.QUEENS = [];
        config.BOARD.KINGS = [];
        map = new map_1.Map(config);
        map.renderTiles();
        pieces = map.renderPieces();
        piece = pieces[0];
    });
    describe("piece placement", function () {
        it("should be created", function () {
            expect(pieces.length).toBe(1);
        });
        it("should be placed at the proper row", function () {
            expect(piece.getLocation().row).toBe(10);
        });
        it("should be placed at the proper column", function () {
            expect(piece.getLocation().col).toBe(10);
        });
    });
    describe("piece movement", function () {
        beforeEach(function () {
            piece.getElement().dispatchEvent("mousedown");
            neighbors = piece.getLocation().getNeighbors();
        });
        it("should hint that it can move north forever.", function () {
            var neighbors2 = neighbors.n.getNeighbors();
            while (neighbors2.n) {
                expect(neighbors2.n.isHint()).toBe(true);
                neighbors2 = neighbors2.n.getNeighbors();
            }
        });
        it("should hint that it can move south forever.", function () {
            var neighbors2 = neighbors.s.getNeighbors();
            while (neighbors2.s) {
                expect(neighbors2.s.isHint()).toBe(true);
                neighbors2 = neighbors2.s.getNeighbors();
            }
        });
        it("should hint that it can move east/west forever.", function () {
            var grid = map.getGrid(), row = piece.getLocation().row;
            for (var c in grid[row]) {
                expect(grid[row][c].isHint()).toBe(true);
            }
        });
        it("should not hint that it can move northwest.", function () {
            expect(neighbors.nw.isHint()).toBe(false);
        });
        it("should not hint that it can move northeast.", function () {
            expect(neighbors.ne.isHint()).toBe(false);
        });
        it("should not hint that it can move southeast.", function () {
            expect(neighbors.se.isHint()).toBe(false);
        });
        it("should not hint that it can move southwest.", function () {
            expect(neighbors.sw.isHint()).toBe(false);
        });
    });
});
//# sourceMappingURL=rook.spec.js.map