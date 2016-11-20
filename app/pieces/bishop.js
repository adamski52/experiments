"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var Bishop = (function (_super) {
    __extends(Bishop, _super);
    function Bishop() {
        _super.apply(this, arguments);
    }
    Bishop.prototype.onMouseDown = function (e) {
        this.figureDiagonalMovement();
    };
    return Bishop;
}(piece_1.Piece));
exports.Bishop = Bishop;
//# sourceMappingURL=bishop.js.map