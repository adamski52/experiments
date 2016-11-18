import {Piece} from "./piece";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

export class Bishop extends Piece {
    protected onMouseDown(e:Object):void {
        this.figureDiagonalMovement();
    }
}
