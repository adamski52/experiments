import {CONFIG} from "../config/config";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

describe("Tile class", () => {
    function getTile(tiles:Array<Tile>, col:number, row:number) {
        var tile:Tile;
        for(var t in tiles) {
            tile = tiles[t];
            if(tile.col === col && tile.row === row) {
                return tile;
            }
        }
    }

    var config:CONFIG = new CONFIG(),
        map:Map,
        tiles:Array<Tile>,
        selectedTile:Tile,
        neighbors:ITileNeighbors,
        col:number,
        row:number;

    config.DISPLAY.MAP_WIDTH = 3;
    config.DISPLAY.MAP_HEIGHT = 6;

    map = new Map(config);
    tiles = map.render();


    // all (0, 3) and (1, 2)
    // all but north (0, 1)
    // all but south (1, 4)
    // no norths (1, 0) and (2, 0)
    // no souths (0, 5) and (1, 5)
    // no easts (2, 3)
    // no wests (0, 2)
    // only se and s (0, 0)

    describe("a tile on an even row with all neighbors", () => {
        beforeEach(() => {
            col = 1;
            row = 2;

            selectedTile = getTile(tiles, col, row);
            neighbors = map.getTileNeighbors(selectedTile);
        });

        it("should have a north neighbor", () => {
            expect(neighbors.n).toBeDefined();
            expect(neighbors.n.col).toBe(col);
            expect(neighbors.n.row).toBe(row - 2);
        });

        it("should have a northeast neighbor", () => {
            expect(neighbors.ne).toBeDefined();
            expect(neighbors.ne.col).toBe(col);
            expect(neighbors.ne.row).toBe(row - 1);
        });

        it("should have a northwest neighbor", () => {
            expect(neighbors.nw).toBeDefined();
            expect(neighbors.nw.col).toBe(col - 1);
            expect(neighbors.nw.row).toBe(row - 1);
        });

        it("should have a south neighbor", () => {
            expect(neighbors.s).toBeDefined();
            expect(neighbors.s.col).toBe(col);
            expect(neighbors.s.row).toBe(row + 2);
        });

        it("should have a southeast neighbor", () => {
            expect(neighbors.se).toBeDefined();
            expect(neighbors.se.col).toBe(col);
            expect(neighbors.se.row).toBe(row + 1);
        });

        it("should have a southwest neighbor", () => {
            expect(neighbors.sw).toBeDefined();
            expect(neighbors.sw.col).toBe(col - 1);
            expect(neighbors.sw.row).toBe(row + 1);
        });
    });


    describe("a tile on an odd row with all neighbors", () => {
        beforeEach(() => {
            col = 0;
            row = 3;

            selectedTile = getTile(tiles, col, row);
            neighbors = map.getTileNeighbors(selectedTile);
        });

        it("should have a north neighbor", () => {
            expect(neighbors.n).toBeDefined();
            expect(neighbors.n.col).toBe(col);
            expect(neighbors.n.row).toBe(row - 2);
        });

        it("should have a northeast neighbor", () => {
            expect(neighbors.ne).toBeDefined();
            expect(neighbors.ne.col).toBe(col + 1);
            expect(neighbors.ne.row).toBe(row - 1);
        });

        it("should have a northwest neighbor", () => {
            expect(neighbors.nw).toBeDefined();
            expect(neighbors.nw.col).toBe(col);
            expect(neighbors.nw.row).toBe(row - 1);
        });

        it("should have a south neighbor", () => {
            expect(neighbors.s).toBeDefined();
            expect(neighbors.s.col).toBe(col);
            expect(neighbors.s.row).toBe(row + 2);
        });

        it("should have a southeast neighbor", () => {
            expect(neighbors.se).toBeDefined();
            expect(neighbors.se.col).toBe(col + 1);
            expect(neighbors.se.row).toBe(row + 1);
        });

        it("should have a southwest neighbor", () => {
            expect(neighbors.sw).toBeDefined();
            expect(neighbors.sw.col).toBe(col);
            expect(neighbors.sw.row).toBe(row + 1);
        });
    });
});