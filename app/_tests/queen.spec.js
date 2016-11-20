"use strict";
var config_1 = require("../config/config");
var map_1 = require("../map/map");
describe("Queen class", function () {
    var config, map, pieces, neighbors, piece;
    beforeEach(function () {
        config = new config_1.CONFIG();
        config.DISPLAY.MAP_HEIGHT = 20;
        config.DISPLAY.MAP_WIDTH = 20;
        config.BOARD.QUEENS = [{
                row: 10,
                col: 10
            }];
        config.BOARD.PAWNS = [];
        config.BOARD.BISHOPS = [];
        config.BOARD.DON_JOHNSONS = [];
        config.BOARD.HORSIE_NEIGH_NEIGHS = [];
        config.BOARD.KINGS = [];
        config.BOARD.ROOKS = [];
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
        it("should hint that it can move northwest forever.", function () {
            var neighbors2 = neighbors.nw.getNeighbors();
            while (neighbors2.nw) {
                expect(neighbors2.nw.isHint()).toBe(true);
                neighbors2 = neighbors2.nw.getNeighbors();
            }
        });
        it("should hint that it can move northeast forever.", function () {
            var neighbors2 = neighbors.ne.getNeighbors();
            while (neighbors2.ne) {
                expect(neighbors2.ne.isHint()).toBe(true);
                neighbors2 = neighbors2.ne.getNeighbors();
            }
        });
        it("should hint that it can move southwest forever.", function () {
            var neighbors2 = neighbors.sw.getNeighbors();
            while (neighbors2.sw) {
                expect(neighbors2.sw.isHint()).toBe(true);
                neighbors2 = neighbors2.sw.getNeighbors();
            }
        });
        it("should hint that it can move southeast forever.", function () {
            var neighbors2 = neighbors.se.getNeighbors();
            while (neighbors2.se) {
                expect(neighbors2.se.isHint()).toBe(true);
                neighbors2 = neighbors2.se.getNeighbors();
            }
        });
        it("should hint that it can move east/west forever.", function () {
            var grid = map.getGrid(), row = piece.getLocation().row;
            for (var c in grid[row]) {
                expect(grid[row][c].isHint()).toBe(true);
            }
        });
        it("should not hint that it can move north+northwest.", function () {
            var neighbors2 = neighbors.n.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });
        it("should not hint that it can move north+northeast.", function () {
            var neighbors2 = neighbors.n.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });
        it("should not hint that it can move south+southwest.", function () {
            var neighbors2 = neighbors.s.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });
        it("should not hint that it can move south+southeast.", function () {
            var neighbors2 = neighbors.s.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });
    });
});
//# sourceMappingURL=queen.spec.js.map