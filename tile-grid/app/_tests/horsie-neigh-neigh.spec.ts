import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {Piece} from "../pieces/piece";


describe("Horsie Neigh Neigh class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>,
        neighbors:ITileNeighbors,
        piece:Piece;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 20;
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

        it("should not hint that it can move north.", () => {
            expect(neighbors.n.isHint()).toBe(false);
        });

        it("should not hint that it can move northwest.", () => {
            expect(neighbors.nw.isHint()).toBe(false);
        });

        it("should not hint that it can move northeast.", () => {
            expect(neighbors.ne.isHint()).toBe(false);
        });


        it("should not hint that it can move south.", () => {
            expect(neighbors.s.isHint()).toBe(false);
        });

        it("should not hint that it can move southwest.", () => {
            expect(neighbors.sw.isHint()).toBe(false);
        });

        it("should not hint that it can move southeast.", () => {
            expect(neighbors.se.isHint()).toBe(false);
        });

        describe("L movement", () => {
            var grid:Array<Array<Tile>>,
                row:number,
                col:number;

            beforeEach(() => {
                grid = map.getGrid();
                row = piece.getLocation().row;
                col = piece.getLocation().col;
            });

            it("should hint that it can move northwest in a tall L.", () => {
                expect(grid[row - 4][col].getNeighbors().nw.isHint()).toBe(true);
            });

            it("should hint that it can move northeast in a tall L.", () => {
                expect(grid[row - 4][col].getNeighbors().ne.isHint()).toBe(true);
            });

            it("should hint that it can move southwest in a tall L.", () => {
                expect(grid[row + 4][col].getNeighbors().sw.isHint()).toBe(true);
            });

            it("should hint that it can move southeast in a tall L.", () => {
                expect(grid[row + 4][col].getNeighbors().ne.isHint()).toBe(true);
            });




            it("should hint that it can move east+southeast in a short L.", () => {
                expect(grid[row][col+2].getNeighbors().se.isHint()).toBe(true);
            });

            it("should hint that it can move east+northeast in a short L.", () => {
                expect(grid[row][col+2].getNeighbors().ne.isHint()).toBe(true);
            });

            it("should hint that it can move west+northwest in a short L.", () => {
                expect(grid[row][col-2].getNeighbors().sw.isHint()).toBe(true);
            });

            it("should hint that it can move west+southwest in a short L.", () => {
                expect(grid[row][col-2].getNeighbors().nw.isHint()).toBe(true);
            });

        });
    });
});