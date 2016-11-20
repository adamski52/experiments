"use strict";
var config_1 = require("../config/config");
var map_1 = require("../map/map");
describe("Don Johnson class", function () {
    var config, map, pieces, piece;
    beforeEach(function () {
        config = new config_1.CONFIG();
        config.DISPLAY.MAP_HEIGHT = 20;
        config.DISPLAY.MAP_WIDTH = 20;
        config.BOARD.DON_JOHNSONS = [{
                row: 10,
                col: 10
            }];
        config.BOARD.BISHOPS = [];
        config.BOARD.PAWNS = [];
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
        // COOL IT
        beforeEach(function (done) {
            setTimeout(function () {
                done();
            }, 2000);
        }, 5000);
        it("should hint that it can move anywhere.", function () {
            piece.getElement().dispatchEvent("mousedown");
            var grid = map.getGrid();
            for (var r = 0; r < grid.length; r++) {
                for (var c = 0; c < grid[r].length; c++) {
                    expect(grid[r][c].isHint()).toBe(true);
                }
            }
        });
    });
    describe("piece rendering", function () {
        // COOL IT
        beforeEach(function (done) {
            setTimeout(function () {
                done();
            }, 2000);
        }, 5000);
        it("should load a background image.", function () {
            expect(piece.getStyle().backgroundImage).toBeDefined();
            expect(piece.getStyle().backgroundImage.image.src.indexOf(config.STYLES.DON_JOHNSONS.FILL.IMAGE)).toBeGreaterThanOrEqual(0);
        });
    });
});
//# sourceMappingURL=don-johnson.spec.js.map