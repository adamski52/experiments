import {Tile} from "../map/tile";

export abstract class Piece {
    protected _shape:createjs.Shape;

    constructor(protected _location:Tile, protected _grid:Array<Array<Tile>>, protected _style:any) {
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

    protected hintTile(tile:Tile | undefined):void {
        if(!tile) {
            return;
        }

        tile.hint();
    }

    protected resetAndMove(tile:Tile | undefined):void {
        if(!tile) {
            return;
        }

        if(tile.isActive()) {
            this.moveTo(tile);
        }

        tile.reset();
    }

    protected abstract onMouseDown(e:Object):void;

    protected abstract onMouseUp(e:Object):void;

    public getElement():createjs.Shape {
        return this._shape;
    }

    public getLocation():Tile {
        return this._location;
    }

    protected moveTo(destination:Tile):void {
        this._location = destination;
        this.render();
    }

    public render():void {
        var loc:createjs.Shape = this._location.getElement();

        this._shape.graphics.clear();
        this._shape.graphics.setStrokeStyle(this._style.STROKE.SIZE);
        this._shape.graphics.beginStroke(this._style.STROKE.COLOR);
        this._shape.graphics.beginFill(this._style.FILL.COLOR);
        this._shape.graphics.drawRect(loc.x - this._style.SIZE/2, loc.y - this._style.SIZE/2, this._style.SIZE, this._style.SIZE);
    }
}