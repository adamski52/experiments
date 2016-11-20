"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var Pawn = (function (_super) {
    __extends(Pawn, _super);
    function Pawn() {
        _super.apply(this, arguments);
    }
    Pawn.prototype.onMouseDown = function (e) {
        this.figureSingleTileMovement(["nw", "se", "sw", "ne"]);
    };
    return Pawn;
}(piece_1.Piece));
exports.Pawn = Pawn;
//# sourceMappingURL=pawn.js.map