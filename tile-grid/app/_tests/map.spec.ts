import {CONFIG} from "../config/config";
import {Map} from "../map/map";
import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

describe("Map class", () => {
    describe("the instantiation", () => {
        it("should not accept a x:1 configuration.", () => {
            var config:CONFIG = {
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
                new Map(config);
            }).toThrow(new Error(config.INVALID_SIZE_ERROR));
        });

        it("should not accept a 1:x configuration.", () => {
            var config:CONFIG = {
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
                new Map(config);
            }).toThrow(new Error(config.INVALID_SIZE_ERROR));
        });

        it("should accept a square configuration.", () => {
            var config:CONFIG = {
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

            var map:Map = new Map(config);

            expect(map.render().length).toBe(25);
        });

        it("should accept a rectangular configuration.", () => {
            var config:CONFIG = {
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

            var map:Map = new Map(config);

            expect(map.render().length).toBe(50);
        });
    });

    describe("tile arrangements", () => {
        var config:CONFIG,
            map:Map,
            tiles:Array<Tile>,
            center:Tile,
            neighbors:ITileNeighbors;

        beforeEach(() => {
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

            map = new Map(config);

            tiles = map.render();

            center = tiles.find((element) => {
                return element.col === 1 && element.row === 2;
            });

            neighbors = map.getTileNeighbors(center);
        });

        it("should create proper arrangement", () => {
            expect(center).toBeDefined();
            expect(center.col).toBe(1);
            expect(center.row).toBe(2);
        });

        it("should create a proper northern neighbor", () => {
            expect(neighbors.n).toBeDefined();
            expect(neighbors.n.col).toBe(1);
            expect(neighbors.n.row).toBe(0);
        });

        it("should create a proper northwestern neighbor", () => {
            expect(neighbors.nw).toBeDefined();
            expect(neighbors.nw.col).toBe(0);
            expect(neighbors.nw.row).toBe(1);
        });

        it("should create a proper northeastern neighbor", () => {
            expect(neighbors.ne).toBeDefined();
            expect(neighbors.ne.col).toBe(1);
            expect(neighbors.ne.row).toBe(1);
        });

        it("should create a proper southern neighbor", () => {
            expect(neighbors.s).toBeDefined();
            expect(neighbors.s.col).toBe(1);
            expect(neighbors.s.row).toBe(4);
        });

        it("should create a proper southwestern neighbor", () => {
            expect(neighbors.sw).toBeDefined();
            expect(neighbors.sw.col).toBe(0);
            expect(neighbors.sw.row).toBe(3);
        });

        it("should create a proper southeastern neighbor", () => {
            expect(neighbors.se).toBeDefined();
            expect(neighbors.se.col).toBe(1);
            expect(neighbors.se.row).toBe(3);
        });

        it("should highlight the clicked tile", () => {
            center.getElement().click();
            expect(center.getStyle().fill).toBe(config.FILL_ACTIVE_COLOR);
        });
    });
});