import {Piece} from "./piece";

export class Queen extends Piece {
    protected onMouseDown(e:Object):void {
        this.figureCardinalMovement();
        this.figureDiagonalMovement();
    }
}