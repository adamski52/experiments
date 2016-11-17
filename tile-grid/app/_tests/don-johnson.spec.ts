import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
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
        xit("should hint that it can move anywhere.", () => {
            pieces[1].getElement().dispatchEvent("mousedown");

            var grid:Array<Array<Tile>> = map.getGrid();
            for(var r:number = 0; r < grid.length; r++) {
                for(var c:number = 0; c < grid[r].length; c++) {
                    grid[r][c].render();
                    console.log("??", r, c, grid[r][c].getStyle().fill);
                    expect(grid[r][c].getStyle().fill).toBe(config.STYLES.TILE.FILL.HINT);
                }
            }
        });
    });
});