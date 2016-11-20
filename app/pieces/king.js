"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var King = (function (_super) {
    __extends(King, _super);
    function King() {
        _super.apply(this, arguments);
    }
    King.prototype.onMouseDown = function (e) {
        this.figureSingleTileMovement(["n", "s", "nw", "se", "sw", "ne"]);
    };
    return King;
}(piece_1.Piece));
exports.King = King;
//# sourceMappingURL=king.js.map