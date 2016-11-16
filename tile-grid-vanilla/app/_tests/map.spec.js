"use strict";
var map_1 = require("../map/map");
describe("Map class", function () {
    describe("the instantiation", function () {
        it("should not accept a x:1 configuration.", function () {
            var config = {
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
                new map_1.Map(config);
            }).toThrow(new Error(config.INVALID_SIZE_ERROR));
        });
        it("should not accept a 1:x configuration.", function () {
            var config = {
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
                new map_1.Map(config);
            }).toThrow(new Error(config.INVALID_SIZE_ERROR));
        });
        it("should accept a square configuration.", function () {
            var config = {
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
                TILE_CLICK: "TILE_CLICK",
                INVALID_SIZE_ERROR: "Go away!"
            };
            var map = new map_1.Map(config);
            expect(map.render().length).toBe(25);
        });
        it("should accept a rectangular configuration.", function () {
            var config = {
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
                TILE_CLICK: "TILE_CLICK",
                INVALID_SIZE_ERROR: "Go away!"
            };
            var map = new map_1.Map(config);
            expect(map.render().length).toBe(50);
        });
    });
    describe("tile arrangements", function () {
        var config, map, tiles, center, neighbors;
        beforeEach(function () {
            config = {
                STAGE_ID: "stage",
                FPS: 33,
                MAX_SKIP: 10,
                MAP_WIDTH: 2,
                MAP_HEIGHT: 5,
                TILE_SIZE: 100,
                FILL_COLOR: "#f0f0f0",
                FILL_ACTIVE_COLOR: "#dddddd",
                STROKE_COLOR: "#cccccc",
                STROKE_SIZE: 1,
                TILE_CLICK: "TILE_CLICK",
                INVALID_SIZE_ERROR: "Go away!"
            };
            map = new map_1.Map(config);
            tiles = map.render();
            center = tiles.find(function (element) {
                return element.col === 1 && element.row === 2;
            });
            neighbors = map.getTileNeighbors(center);
        });
        it("should create proper arrangement", function () {
            expect(center).toBeDefined();
            expect(center.col).toBe(1);
            expect(center.row).toBe(2);
        });
        it("should create a proper northern neighbor", function () {
            expect(neighbors.n).toBeDefined();
            expect(neighbors.n.col).toBe(1);
            expect(neighbors.n.row).toBe(0);
        });
        it("should create a proper northwestern neighbor", function () {
            expect(neighbors.nw).toBeDefined();
            expect(neighbors.nw.col).toBe(0);
            expect(neighbors.nw.row).toBe(1);
        });
        it("should create a proper northeastern neighbor", function () {
            expect(neighbors.ne).toBeDefined();
            expect(neighbors.ne.col).toBe(1);
            expect(neighbors.ne.row).toBe(1);
        });
        it("should create a proper southern neighbor", function () {
            expect(neighbors.s).toBeDefined();
            expect(neighbors.s.col).toBe(1);
            expect(neighbors.s.row).toBe(4);
        });
        it("should create a proper southwestern neighbor", function () {
            expect(neighbors.sw).toBeDefined();
            expect(neighbors.sw.col).toBe(0);
            expect(neighbors.sw.row).toBe(3);
        });
        it("should create a proper southeastern neighbor", function () {
            expect(neighbors.se).toBeDefined();
            expect(neighbors.se.col).toBe(1);
            expect(neighbors.se.row).toBe(3);
        });
        it("should highlight the clicked tile", function () {
            center.getElement().dispatchEvent("click");
            expect(center.getStyle().fill).toBe(config.FILL_ACTIVE_COLOR);
        });
    });
});
//# sourceMappingURL=map.spec.js.map