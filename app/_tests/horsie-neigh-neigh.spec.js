"use strict";
var config_1 = require("../config/config");
var map_1 = require("../map/map");
describe("Horsie Neigh Neigh class", function () {
    var config, map, pieces, neighbors, piece;
    beforeEach(function () {
        config = new config_1.CONFIG();
        config.DISPLAY.MAP_HEIGHT = 20;
        config.DISPLAY.MAP_WIDTH = 20;
        config.BOARD.HORSIE_NEIGH_NEIGHS = [{
                row: 10,
                col: 10
            }];
        config.BOARD.PAWNS = [];
        config.BOARD.QUEENS = [];
        config.BOARD.DON_JOHNSONS = [];
        config.BOARD.BISHOPS = [];
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
        it("should not hint that it can move north.", function () {
            expect(neighbors.n.isHint()).toBe(false);
        });
        it("should not hint that it can move northwest.", function () {
            expect(neighbors.nw.isHint()).toBe(false);
        });
        it("should not hint that it can move northeast.", function () {
            expect(neighbors.ne.isHint()).toBe(false);
        });
        it("should not hint that it can move south.", function () {
            expect(neighbors.s.isHint()).toBe(false);
        });
        it("should not hint that it can move southwest.", function () {
            expect(neighbors.sw.isHint()).toBe(false);
        });
        it("should not hint that it can move southeast.", function () {
            expect(neighbors.se.isHint()).toBe(false);
        });
        describe("L movement", function () {
            var grid, row, col;
            beforeEach(function () {
                grid = map.getGrid();
                row = piece.getLocation().row;
                col = piece.getLocation().col;
            });
            it("should hint that it can move northwest in a tall L.", function () {
                expect(grid[row - 4][col].getNeighbors().nw.isHint()).toBe(true);
            });
            it("should hint that it can move northeast in a tall L.", function () {
                expect(grid[row - 4][col].getNeighbors().ne.isHint()).toBe(true);
            });
            it("should hint that it can move southwest in a tall L.", function () {
                expect(grid[row + 4][col].getNeighbors().sw.isHint()).toBe(true);
            });
            it("should hint that it can move southeast in a tall L.", function () {
                expect(grid[row + 4][col].getNeighbors().ne.isHint()).toBe(true);
            });
            it("should hint that it can move east+southeast in a short L.", function () {
                expect(grid[row][col + 2].getNeighbors().se.isHint()).toBe(true);
            });
            it("should hint that it can move east+northeast in a short L.", function () {
                expect(grid[row][col + 2].getNeighbors().ne.isHint()).toBe(true);
            });
            it("should hint that it can move west+northwest in a short L.", function () {
                expect(grid[row][col - 2].getNeighbors().sw.isHint()).toBe(true);
            });
            it("should hint that it can move west+southwest in a short L.", function () {
                expect(grid[row][col - 2].getNeighbors().nw.isHint()).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=horsie-neigh-neigh.spec.js.map