import {Piece} from "./piece";

export class Rook extends Piece {
    protected onMouseDown(e:Object):void {
        this.figureCardinalMovement();
    }
}
