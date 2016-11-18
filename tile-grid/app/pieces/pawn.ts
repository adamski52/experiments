import {Piece} from "./piece";

export class Pawn extends Piece {
    protected onMouseDown(e:Object):void {
        this.figureSingleTileMovement(["nw", "se", "sw", "ne"]);
    }
}