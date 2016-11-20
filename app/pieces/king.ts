import {Piece} from "./piece";

export class King extends Piece {
    protected onMouseDown(e:Object):void {
        this.figureSingleTileMovement(["n", "s", "nw", "se", "sw", "ne"]);
    }
}