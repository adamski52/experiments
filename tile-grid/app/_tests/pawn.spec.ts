import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

describe("Pawn class", () => {
    describe("piece placement", () => {
        it("should be created and placed according to initial board configuration.", () => {
            var config:CONFIG = new CONFIG();
                config.DISPLAY.MAP_HEIGHT= 5;
                config.DISPLAY.MAP_WIDTH = 5;

            config.BOARD.PAWNS = [];
            for(let r:number = 0; r < config.DISPLAY.MAP_HEIGHT; r++) {
                for(let c:number = 0; c < config.DISPLAY.MAP_WIDTH; c++) {
                    config.BOARD.PAWNS.push({
                        row: r,
                        col: c
                    });
                }
            }

            var map:Map = new Map(config);
            map.renderTiles();

            var pieces:Array<Pawn> = map.renderPieces();


            expect(pieces.length).toBe(config.BOARD.PAWNS.length);
        });

    });
});