import {CONFIG} from "../config/config";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {Piece} from "../pieces/piece";

describe("Don Johnson class", () => {
    var config:CONFIG,
        map:Map,
        pieces:Array<Piece>,
        piece:Piece;

    beforeEach(() => {
        config = new CONFIG();
        config.DISPLAY.MAP_HEIGHT= 20;
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

        map = new Map(config);
        map.renderTiles();

        pieces = map.renderPieces();
        piece = pieces[0];
    });


    describe("piece placement", () => {
        it("should be created and placed according to initial board configuration.", () => {
            expect(pieces.length).toBe(1);

            expect(piece.getLocation().row).toBe(10);
            expect(piece.getLocation().col).toBe(10);
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
            piece.getElement().dispatchEvent("mousedown");

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
            expect(piece.getStyle().backgroundImage).toBeDefined();
            expect(piece.getStyle().backgroundImage.image.src.indexOf(config.STYLES.DON_JOHNSONS.FILL.IMAGE)).toBeGreaterThanOrEqual(0);
        });
    });
});