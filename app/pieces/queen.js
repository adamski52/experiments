"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var Queen = (function (_super) {
    __extends(Queen, _super);
    function Queen() {
        _super.apply(this, arguments);
    }
    Queen.prototype.onMouseDown = function (e) {
        this.figureCardinalMovement();
        this.figureDiagonalMovement();
    };
    return Queen;
}(piece_1.Piece));
exports.Queen = Queen;
//# sourceMappingURL=queen.js.map