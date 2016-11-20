"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var piece_1 = require("./piece");
var HorsieNeighNeigh = (function (_super) {
    __extends(HorsieNeighNeigh, _super);
    function HorsieNeighNeigh() {
        _super.apply(this, arguments);
    }
    HorsieNeighNeigh.prototype.onMouseDown = function (e) {
        this.figureRightAngleMovement();
    };
    return HorsieNeighNeigh;
}(piece_1.Piece));
exports.HorsieNeighNeigh = HorsieNeighNeigh;
//# sourceMappingURL=horsie-neigh-neigh.js.map