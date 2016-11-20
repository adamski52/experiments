"use strict";
var config_1 = require("../config/config");
var map_1 = require("../map/map");
describe("Pawn class", function () {
    var config, map, pieces, neighbors, piece;
    beforeEach(function () {
        config = new config_1.CONFIG();
        config.DISPLAY.MAP_HEIGHT = 20;
        config.DISPLAY.MAP_WIDTH = 20;
        config.BOARD.PAWNS = [{
                row: 10,
                col: 10
            }];
        config.BOARD.BISHOPS = [];
        config.BOARD.DON_JOHNSONS = [];
        config.BOARD.HORSIE_NEIGH_NEIGHS = [];
        config.BOARD.KINGS = [];
        config.BOARD.QUEENS = [];
        config.BOARD.ROOKS = [];
        map = new map_1.Map(config);
        map.renderTiles();
        pieces = map.renderPieces();
        piece = pieces[0];
    });
    describe("piece placement", function () {
        it("should be created and placed according to initial board configuration.", function () {
            expect(pieces.length).toBe(1);
            expect(piece.getLocation().row).toBe(10);
            expect(piece.getLocation().col).toBe(10);
        });
    });
    describe("piece movement", function () {
        beforeEach(function () {
            piece.getElement().dispatchEvent("mousedown");
            neighbors = piece.getLocation().getNeighbors();
        });
        it("should not hint that it can move one tile north.", function () {
            expect(neighbors.n.isHint()).toBe(false);
        });
        it("should hint that it can move one tile northwest.", function () {
            expect(neighbors.nw.isHint()).toBe(true);
        });
        it("should hint that it can move one tile northeast.", function () {
            expect(neighbors.ne.isHint()).toBe(true);
        });
        it("should not hint that it can move one tile south.", function () {
            expect(neighbors.s.isHint()).toBe(false);
        });
        it("should hint that it can move one tile southwest.", function () {
            expect(neighbors.sw.isHint()).toBe(true);
        });
        it("should hint that it can move one tile southeast.", function () {
            expect(neighbors.se.isHint()).toBe(true);
        });
        it("should not hint that it can move north+north.", function () {
            var neighbors2 = neighbors.n.getNeighbors();
            expect(neighbors2.n.isHint()).toBe(false);
        });
        it("should not hint that it can move north+northwest.", function () {
            var neighbors2 = neighbors.n.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });
        it("should not hint that it can move north+northeast.", function () {
            var neighbors2 = neighbors.n.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });
        it("should not hint that it can move south+south.", function () {
            var neighbors2 = neighbors.s.getNeighbors();
            expect(neighbors2.s.isHint()).toBe(false);
        });
        it("should not hint that it can move south+southwest.", function () {
            var neighbors2 = neighbors.s.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });
        it("should not hint that it can move south+southeast.", function () {
            var neighbors2 = neighbors.s.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });
        it("should not hint that it can move northeast+northeast.", function () {
            var neighbors2 = neighbors.ne.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });
        it("should not hint that it can move northeast+southeast.", function () {
            var neighbors2 = neighbors.ne.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });
        it("should not hint that it can move northwest+northwest.", function () {
            var neighbors2 = neighbors.nw.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });
        it("should not hint that it can move northwest+southwest.", function () {
            var neighbors2 = neighbors.nw.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });
        it("should not hint that it can move southeast+southeast.", function () {
            var neighbors2 = neighbors.se.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });
        it("should not hint that it can move southeast+northeast.", function () {
            var neighbors2 = neighbors.se.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });
        it("should not hint that it can move southwest+northwest.", function () {
            var neighbors2 = neighbors.sw.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });
        it("should not hint that it can move southwest+southwest.", function () {
            var neighbors2 = neighbors.sw.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });
    });
});
//# sourceMappingURL=pawn.spec.js.map