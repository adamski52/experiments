import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {Piece} from "../pieces/piece";


describe("Pawn class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 5;
        config.DISPLAY.MAP_WIDTH = 5;

        config.BOARD.PAWNS = [{
            row: 0,
            col: 0
        }, {
            row: 2,
            col: 1
        }];

        config.BOARD.BISHOPS = [];
        config.BOARD.DON_JOHNSONS = [];
        config.BOARD.HORSIE_NEIGH_NEIGHS = [];
        config.BOARD.KINGS = [];
        config.BOARD.QUEENS = [];
        config.BOARD.ROOKS = [];

        map = new Map(config);
        map.renderTiles();

        pieces = map.renderPieces();
    });


    describe("piece placement", () => {
        it("should be created and placed according to initial board configuration.", () => {
            expect(pieces.length).toBe(2);

            expect(pieces[0].getLocation().row).toBe(0);
            expect(pieces[0].getLocation().col).toBe(0);

            expect(pieces[1].getLocation().row).toBe(2);
            expect(pieces[1].getLocation().col).toBe(1);
        });
    });

    describe("piece movement", () => {
        it("should hint that it can move diagonally.", () => {
            pieces[1].getElement().dispatchEvent("mousedown");

            var neighbors:ITileNeighbors = pieces[1].getLocation().getNeighbors();

            expect(neighbors.nw.isHint()).toBe(true);
            expect(neighbors.ne.isHint()).toBe(true);
            expect(neighbors.sw.isHint()).toBe(true);
            expect(neighbors.se.isHint()).toBe(true);
        });

        it("should not hint that it can move north or south.", () => {
            pieces[1].getElement().dispatchEvent("mousedown");

            var neighbors:ITileNeighbors = pieces[1].getLocation().getNeighbors();

            expect(neighbors.n.isHint()).toBe(false);
            expect(neighbors.s.isHint()).toBe(false);
        });
    });
});