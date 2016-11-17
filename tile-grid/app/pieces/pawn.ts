import {Tile} from "../map/tile";
import {Map} from "../map/map";
import {ITileNeighbors} from "../interfaces/tile-neighbors";
import {CONFIG} from "../config/config";

export class Pawn {
    private _shape:createjs.Shape;

    constructor(private CONFIG:CONFIG, private _location:Tile) {
        this._shape = new createjs.Shape();

        this.moveTo(this._location);
        this.render();

        this._shape.on("mousedown", (e) => {
            this.onMouseDown(e);
        });

        this._shape.on("pressup", (e) => {
            this.onMouseUp(e);
        });
    }

    private hintTile(tile:Tile | undefined):void {
        if(!tile) {
            return;
        }

        tile.hint();
    }

    private resetAndMove(tile:Tile | undefined):void {
        if(!tile) {
            return;
        }

        if(tile.isActive()) {
            this.moveTo(tile);
        }

        tile.reset();
    }

    private onMouseDown(e:Object):void {
        var neighbors:ITileNeighbors = this._location.getNeighbors();
        this.hintTile(neighbors.nw);
        this.hintTile(neighbors.ne);
        this.hintTile(neighbors.sw);
        this.hintTile(neighbors.se);
    }

    private onMouseUp(e:Object):void {
        var neighbors:ITileNeighbors = this._location.getNeighbors();
        this.resetAndMove(neighbors.nw);
        this.resetAndMove(neighbors.ne);
        this.resetAndMove(neighbors.sw);
        this.resetAndMove(neighbors.se);
    }

    public mayMoveTo(map:Map, destination:Tile):boolean {
        var neighbors:ITileNeighbors = this._location.getNeighbors();
        for(var n in neighbors) {
            if(neighbors[n] && neighbors[n] === destination) {
                return true;
            }
        }

        return false;
    }

    public getElement():createjs.Shape {
        return this._shape;
    }

    public moveTo(destination:Tile):void {
        this._location = destination;
        this.render();
    }

    public render():void {
        var loc:createjs.Shape = this._location.getElement();

        this._shape.graphics.clear();
        this._shape.graphics.setStrokeStyle(this.CONFIG.STYLES.PAWN.STROKE.SIZE);
        this._shape.graphics.beginStroke(this.CONFIG.STYLES.PAWN.STROKE.COLOR);
        this._shape.graphics.beginFill(this.CONFIG.STYLES.PAWN.FILL.COLOR);
        this._shape.graphics.drawRect(loc.x - this.CONFIG.STYLES.PAWN.SIZE/2, loc.y- this.CONFIG.STYLES.PAWN.SIZE/2, this.CONFIG.STYLES.PAWN.SIZE, this.CONFIG.STYLES.PAWN.SIZE);
    }
}