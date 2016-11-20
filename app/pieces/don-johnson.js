"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var DonJohnson = (function (_super) {
    __extends(DonJohnson, _super);
    function DonJohnson() {
        _super.apply(this, arguments);
    }
    DonJohnson.prototype.onMouseDown = function (e) {
        for (var r = 0; r < this._grid.length; r++) {
            for (var c = 0; c < this._grid[r].length; c++) {
                this.hintTile(this._grid[r][c]);
            }
        }
    };
    return DonJohnson;
}(piece_1.Piece));
exports.DonJohnson = DonJohnson;
//# sourceMappingURL=don-johnson.js.map