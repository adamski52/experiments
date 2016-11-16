import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

describe("Map class", () => {
    describe("the instantiation", () => {
        it("should not accept a x:1 configuration.", () => {
            var config:CONFIG = new CONFIG();
                config.DISPLAY.MAP_HEIGHT= 1;
                config.DISPLAY.MAP_WIDTH = 100;

            expect(() => {
                new Map(config);
            }).toThrow(new Error(CONSTANTS.MESSAGES.ERRORS.INVALID_MAP));
        });

        it("should not accept a 1:x configuration.", () => {
            var config:CONFIG = new CONFIG();
                config.DISPLAY.MAP_HEIGHT= 100;
                config.DISPLAY.MAP_WIDTH = 1;

            expect(() => {
                new Map(config);
            }).toThrow(new Error(CONSTANTS.MESSAGES.ERRORS.INVALID_MAP));
        });

        it("should accept a square configuration.", () => {
            var config:CONFIG = new CONFIG();
                config.DISPLAY.MAP_HEIGHT= 5;
                config.DISPLAY.MAP_WIDTH = 5;

            var map:Map = new Map(config);

            expect(map.renderTiles().length).toBe(25);
        });

        it("should accept a rectangular configuration.", () => {
            var config:CONFIG = new CONFIG();
                config.DISPLAY.MAP_HEIGHT= 5;
                config.DISPLAY.MAP_WIDTH = 10;

            var map:Map = new Map(config);

            expect(map.renderTiles().length).toBe(50);
        });
    });
});