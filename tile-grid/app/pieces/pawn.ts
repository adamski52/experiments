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
    }

    public mayMoveTo(map:Map, destination:Tile):boolean {
        var neighbors:ITileNeighbors = map.getTileNeighbors(this._location);
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
    }

    public render():void {
        var loc:createjs.Shape = this._location.getElement();

        this._shape.graphics.clear();
        this._shape.graphics.setStrokeStyle(this.CONFIG.STYLES.PAWN.STROKE.SIZE);
        this._shape.graphics.beginStroke(this.CONFIG.STYLES.PAWN.STROKE.COLOR);
        this._shape.graphics.beginFill(this.CONFIG.STYLES.PAWN.FILL.COLOR);
        this._shape.graphics.drawRect(loc.x, loc.y, this.CONFIG.STYLES.PAWN.SIZE, this.CONFIG.STYLES.PAWN.SIZE);
    }
}