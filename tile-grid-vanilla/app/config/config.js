"use strict";
var CONFIG = (function () {
    function CONFIG() {
        this.STAGE_ID = "stage";
        this.FPS = 33;
        this.MAX_SKIP = 10;
        this.MAP_WIDTH = 2;
        this.MAP_HEIGHT = 5;
        this.TILE_SIZE = 100;
        this.FILL_COLOR = "#f0f0f0";
        this.FILL_ACTIVE_COLOR = "#000000";
        this.STROKE_COLOR = "#cccccc";
        this.STROKE_SIZE = 1;
        this.TILE_CLICK = "TILE_CLICK";
        this.INVALID_SIZE_ERROR = "Invalid map size specified.";
    }
    return CONFIG;
}());
exports.CONFIG = CONFIG;
//# sourceMappingURL=config.js.map