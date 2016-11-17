import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {Piece} from "./piece";

export class Pawn extends Piece {
    protected onMouseDown(e:Object):void {
        var neighbors:ITileNeighbors = this._location.getNeighbors();
        this.hintTile(neighbors.nw);
        this.hintTile(neighbors.ne);
        this.hintTile(neighbors.sw);
        this.hintTile(neighbors.se);
    }

    protected onMouseUp(e:Object):void {
        var neighbors:ITileNeighbors = this._location.getNeighbors();
        this.resetAndMove(neighbors.nw);
        this.resetAndMove(neighbors.ne);
        this.resetAndMove(neighbors.sw);
        this.resetAndMove(neighbors.se);
    }
}