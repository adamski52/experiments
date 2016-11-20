import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {Piece} from "../pieces/piece";


describe("King class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>,
        neighbors:ITileNeighbors,
        piece:Piece;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 20;
        config.DISPLAY.MAP_WIDTH = 20;

        config.BOARD.KINGS = [{
            row: 10,
            col: 10
        }];

        config.BOARD.PAWNS = [];
        config.BOARD.BISHOPS = [];
        config.BOARD.DON_JOHNSONS = [];
        config.BOARD.HORSIE_NEIGH_NEIGHS = [];
        config.BOARD.QUEENS = [];
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

        it("should hint that it can move one tile north.", () => {
            expect(neighbors.n.isHint()).toBe(true);
        });

        it("should hint that it can move one tile northwest.", () => {
            expect(neighbors.nw.isHint()).toBe(true);
        });

        it("should hint that it can move one tile northeast.", () => {
            expect(neighbors.ne.isHint()).toBe(true);
        });

        it("should hint that it can move one tile south.", () => {
            expect(neighbors.s.isHint()).toBe(true);
        });

        it("should hint that it can move one tile southwest.", () => {
            expect(neighbors.sw.isHint()).toBe(true);
        });

        it("should hint that it can move one tile southeast.", () => {
            expect(neighbors.se.isHint()).toBe(true);
        });




        it("should not hint that it can move north+north.", () => {
            var neighbors2:ITileNeighbors = neighbors.n.getNeighbors();
            expect(neighbors2.n.isHint()).toBe(false);
        });

        it("should not hint that it can move north+northwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.n.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });

        it("should not hint that it can move north+northeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.n.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });





        it("should not hint that it can move south+south.", () => {
            var neighbors2:ITileNeighbors = neighbors.s.getNeighbors();
            expect(neighbors2.s.isHint()).toBe(false);
        });

        it("should not hint that it can move south+southwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.s.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });

        it("should not hint that it can move south+southeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.s.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });




        it("should not hint that it can move northeast+northeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.ne.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });

        it("should not hint that it can move northeast+southeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.ne.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });

        it("should not hint that it can move northwest+northwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.nw.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });

        it("should not hint that it can move northwest+southwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.nw.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });



        it("should not hint that it can move southeast+southeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.se.getNeighbors();
            expect(neighbors2.se.isHint()).toBe(false);
        });

        it("should not hint that it can move southeast+northeast.", () => {
            var neighbors2:ITileNeighbors = neighbors.se.getNeighbors();
            expect(neighbors2.ne.isHint()).toBe(false);
        });

        it("should not hint that it can move southwest+northwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.sw.getNeighbors();
            expect(neighbors2.nw.isHint()).toBe(false);
        });

        it("should not hint that it can move southwest+southwest.", () => {
            var neighbors2:ITileNeighbors = neighbors.sw.getNeighbors();
            expect(neighbors2.sw.isHint()).toBe(false);
        });
    });
});