"use strict";
var map_1 = require("../map/map");
describe("Map class", function () {
    it("should not accept a x:1 configuration.", function () {
        var _config = {
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
        expect(function () {
            new map_1.Map(_config);
        }).toThrow(new Error(_config.INVALID_SIZE_ERROR));
    });
    it("should not accept a 1:x configuration.", function () {
        var _config = {
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
        expect(function () {
            new map_1.Map(_config);
        }).toThrow(new Error(_config.INVALID_SIZE_ERROR));
    });
    it("should accept a square configuration.", function () {
        var _config = {
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
        var _map = new map_1.Map(_config);
        expect(_map.render().length).toBe(25);
    });
    it("should accept a rectangular configuration.", function () {
        var _config = {
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
        var _map = new map_1.Map(_config);
        expect(_map.render().length).toBe(50);
    });
});
//# sourceMappingURL=map.spec.js.map