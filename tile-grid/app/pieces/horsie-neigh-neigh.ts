import {Piece} from "./piece";

export class HorsieNeighNeigh extends Piece {
    protected onMouseDown(e:Object):void {
        this.figureRightAngleMovement();
    }
}
