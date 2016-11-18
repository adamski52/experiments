import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {Piece} from "../pieces/piece";


describe("Rook class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>,
        neighbors:ITileNeighbors,
        piece:Piece;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 20;
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

        it("should hint that it can move east/west forever.", () => {
            var grid:Array<Array<Tile>> = map.getGrid(),
                row:number = piece.getLocation().row;

            for(var c in grid[row]) {
                expect(grid[row][c].isHint()).toBe(true);
            }
        });

        it("should not hint that it can move northwest.", () => {
            expect(neighbors.nw.isHint()).toBe(false);
        });

        it("should not hint that it can move northeast.", () => {
            expect(neighbors.ne.isHint()).toBe(false);
        });

        it("should not hint that it can move southeast.", () => {
            expect(neighbors.se.isHint()).toBe(false);
        });

        it("should not hint that it can move southwest.", () => {
            expect(neighbors.sw.isHint()).toBe(false);
        });
    });
});