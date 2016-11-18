import {CONFIG} from "../config/config";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {Piece} from "../pieces/piece";

describe("Don Johnson class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 5;
        config.DISPLAY.MAP_WIDTH = 5;

        config.BOARD.DON_JOHNSONS = [{
            row: 0,
            col: 0
        }, {
            row: 2,
            col: 1
        }];

        config.BOARD.BISHOPS = [];
        config.BOARD.PAWNS = [];
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

        // COOL IT
        beforeEach((done) => {
            setTimeout(function() {
                done();
            }, 2000);
        }, 5000);


        it("should hint that it can move anywhere.", () => {
            pieces[1].getElement().dispatchEvent("mousedown");

            var grid:Array<Array<Tile>> = map.getGrid();
            for(var r:number = 0; r < grid.length; r++) {
                for(var c:number = 0; c < grid[r].length; c++) {
                    expect(grid[r][c].isHint()).toBe(true);
                }
            }
        });
    });

    describe("piece rendering", () => {

        // COOL IT
        beforeEach((done) => {
            setTimeout(function() {
                done();
            }, 2000);
        }, 5000);

        it("should load a background image.", () => {
            expect(pieces[0].getStyle().backgroundImage).toBeDefined();
            expect(pieces[0].getStyle().backgroundImage.image.src.indexOf(config.STYLES.DON_JOHNSON.FILL.IMAGE)).toBeGreaterThanOrEqual(0);
        });
    });
});