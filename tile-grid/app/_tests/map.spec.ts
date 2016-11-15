import {CONFIG} from "../config/config";
import {Map} from "../map/map";

describe("Map class", () => {
    it("should not accept a x:1 configuration.", () => {
        var _config:CONFIG = {
            STAGE_ID: "stage",
            FPS: 33,
            MAX_SKIP: 10,
            MAP_WIDTH: 100,
            MAP_HEIGHT: 1,
            TILE_SIZE: 100,
            FILL_COLOR: "#f0f0f0",
            FILL_ACTIVE_COLOR: "#dddddd",
            STROKE_COLOR: "#cccccc",
            STROKE_SIZE: 1,
            TILE_CLICK: "TILE_CLICK",
            INVALID_SIZE_ERROR: "Go away!"
        };

        expect(() => {
            new Map(_config);
        }).toThrow(new Error(_config.INVALID_SIZE_ERROR));
    });

    it("should not accept a 1:x configuration.", () => {
        var _config:CONFIG = {
            STAGE_ID: "stage",
            FPS: 33,
            MAX_SKIP: 10,
            MAP_WIDTH: 1,
            MAP_HEIGHT: 100,
            TILE_SIZE: 100,
            FILL_COLOR: "#f0f0f0",
            FILL_ACTIVE_COLOR: "#dddddd",
            STROKE_COLOR: "#cccccc",
            STROKE_SIZE: 1,
            TILE_CLICK: "TILE_CLICK",
            INVALID_SIZE_ERROR: "Go away!"
        };

        expect(() => {
            new Map(_config);
        }).toThrow(new Error(_config.INVALID_SIZE_ERROR));
    });

    it("should accept a square configuration.", () => {
        var _config:CONFIG = {
            STAGE_ID: "stage",
            FPS: 33,
            MAX_SKIP: 10,
            MAP_WIDTH: 5,
            MAP_HEIGHT: 5,
            TILE_SIZE: 100,
            FILL_COLOR: "#f0f0f0",
            FILL_ACTIVE_COLOR: "#dddddd",
            STROKE_COLOR: "#cccccc",
            STROKE_SIZE: 1,
            TILE_CLICK: "TILE_CLICK"
        };

        var _map:Map = new Map(_config);

        expect(_map.render().length).toBe(25);
    });

    it("should accept a rectangular configuration.", () => {
        var _config:CONFIG = {
            STAGE_ID: "stage",
            FPS: 33,
            MAX_SKIP: 10,
            MAP_WIDTH: 10,
            MAP_HEIGHT: 5,
            TILE_SIZE: 100,
            FILL_COLOR: "#f0f0f0",
            FILL_ACTIVE_COLOR: "#dddddd",
            STROKE_COLOR: "#cccccc",
            STROKE_SIZE: 1,
            TILE_CLICK: "TILE_CLICK"
        };

        var _map:Map = new Map(_config);

        expect(_map.render().length).toBe(50);
    });
})