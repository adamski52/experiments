"use strict";
var config_1 = require("../config/config");
var constants_1 = require("../config/constants");
var map_1 = require("../map/map");
describe("Map class", function () {
    describe("the instantiation", function () {
        it("should not accept a x:1 configuration.", function () {
            var config = new config_1.CONFIG();
            config.DISPLAY.MAP_HEIGHT = 1;
            config.DISPLAY.MAP_WIDTH = 100;
            expect(function () {
                new map_1.Map(config);
            }).toThrow(new Error(constants_1.CONSTANTS.MESSAGES.ERRORS.INVALID_MAP));
        });
        it("should not accept a 1:x configuration.", function () {
            var config = new config_1.CONFIG();
            config.DISPLAY.MAP_HEIGHT = 100;
            config.DISPLAY.MAP_WIDTH = 1;
            expect(function () {
                new map_1.Map(config);
            }).toThrow(new Error(constants_1.CONSTANTS.MESSAGES.ERRORS.INVALID_MAP));
        });
        it("should accept a square configuration.", function () {
            var config = new config_1.CONFIG();
            config.DISPLAY.MAP_HEIGHT = 5;
            config.DISPLAY.MAP_WIDTH = 5;
            var map = new map_1.Map(config);
            expect(map.renderTiles().length).toBe(25);
        });
        it("should accept a rectangular configuration.", function () {
            var config = new config_1.CONFIG();
            config.DISPLAY.MAP_HEIGHT = 5;
            config.DISPLAY.MAP_WIDTH = 10;
            var map = new map_1.Map(config);
            expect(map.renderTiles().length).toBe(50);
        });
    });
});
//# sourceMappingURL=map.spec.js.map