import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {Piece} from "../pieces/piece";


describe("Queen class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>,
        neighbors:ITileNeighbors,
        piece:Piece;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 20;
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

        map = new Map(config);
        map.renderTiles();

        pieces = map.renderPieces();
        piece = pieces[0];
    });


    describe("piece placement", () => {
        it("should be created", () => {
            expect(pieces.length).toBe(1);
        });

        it("should be placed at the proper row", () => {
            expect(piece.getLocation().row).toBe(10);
        });

        it("should be placed at the proper column", () => {
            expect(piece.getLocation().col).toBe(10);
        });
    });

    describe("piece movement", () => {
        beforeEach(() => {
            piece.getElement().dispatchEvent("mousedown");

            neighbors = piece.getLocation().getNeighbors();
        });

        it("should hint that it can move north forever.", () => {
            var neighbors2:ITileNeighbors = neighbors.n.getNeighbors();
            while(neighbors2.n) {
                expect(neighbors2.n.isHint()).toBe(true);
                neighbors2 = neighbors2.n.getNeighbors();
            }
        });

        it("should hint that it can move south forever.", () => {
            var neighbors2:ITileNeighbors = neighbors.s.getNeighbors();
            while(neighbors2.s) {
                expect(neighbors2.s.isHint()).toBe(true);
                neighbors2 = neighbors2.s.getNeighbors();
            }
        });

        it("should hint that it can move northwest forever.", () => {
            var neighbors2:ITileNeighbors = neighbors.nw.getNeighbors();
            while(neighbors2.nw) {
                expect(neighbors2.nw.isHint()).toBe(true);
                neighbors2 = neighbors2.nw.getNeighbors();
            }
        });

        it("should hint that it can move northeast forever.", () => {
            var neighbors2:ITileNeighbors = neighbors.ne.getNeighbors();
            while(neighbors2.ne) {
                expect(neighbors2.ne.isHint()).toBe(true);
                neighbors2 = neighbors2.ne.getNeighbors();
            }
        });

        it("should hint that it can move southwest forever.", () => {
            var neighbors2:ITileNeighbors = neighbors.sw.getNeighbors();
            while(neighbors2.sw) {
                expect(neighbors2.sw.isHint()).toBe(true);
                neighbors2 = neighbors2.sw.getNeighbors();
            }
        });

        it("should hint that it can move southeast forever.", () => {
            var neighbors2:ITileNeighbors = neighbors.se.getNeighbors();
            while(neighbors2.se) {
                expect(neighbors2.se.isHint()).toBe(true);
                neighbors2 = neighbors2.se.getNeighbors();
            }
        });

        it("should hint that it can move east/west forever.", () => {
            var grid:Array<Array<Tile>> = map.getGrid(),
                row:number = piece.getLocation().row;

            for(var c in grid[row]) {
                expect(grid[row][c].isHint()).toBe(true);
            }
        });




        it("should not hint that it can move north+northwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.n.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });

        it("should not hint that it can move north+northeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.n.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });




        it("should not hint that it can move south+southwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.s.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });

        it("should not hint that it can move south+southeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.s.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });

    });
});