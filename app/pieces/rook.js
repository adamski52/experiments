"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var Rook = (function (_super) {
    __extends(Rook, _super);
    function Rook() {
        _super.apply(this, arguments);
    }
    Rook.prototype.onMouseDown = function (e) {
        this.figureCardinalMovement();
    };
    return Rook;
}(piece_1.Piece));
exports.Rook = Rook;
//# sourceMappingURL=rook.js.map