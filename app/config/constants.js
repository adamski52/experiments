"use strict";
var CONSTANTS = (function () {
    function CONSTANTS() {
    }
    Object.defineProperty(CONSTANTS, "EVENTS", {
        get: function () {
            return {
                TILE_CLICK: "TILE_CLICK"
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(CONSTANTS, "MESSAGES", {
        get: function () {
            return {
                ERRORS: {
                    INVALID_MAP: "Invalid map size specified."
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    ;
    return CONSTANTS;
}());
exports.CONSTANTS = CONSTANTS;
//# sourceMappingURL=constants.js.map