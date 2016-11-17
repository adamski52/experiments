import {Piece} from "./piece";

export class DonJohnson extends Piece {
    protected onMouseDown(e:Object):void {
        for(var r:number = 0; r < this._grid.length; r++) {
            for(var c:number = 0; c < this._grid[r].length; c++) {
                this._grid[r][c].hint();
            }
        }
    }

    protected onMouseUp(e:Object):void {
        for(var r:number = 0; r < this._grid.length; r++) {
            for(var c:number = 0; c < this._grid[r].length; c++) {
                this.resetAndMove(this._grid[r][c]);
            }
        }
    }
}