import {Tile} from "../map/tile";

export abstract class Piece {
    protected _container:createjs.Container;
    private _background:createjs.Shape | createjs.Bitmap;
    private _image:HTMLImageElement;
    private _actualWidth:number;
    private _actualHeight:number;

    constructor(protected _location:Tile, protected _grid:Array<Array<Tile>>, protected _style:any) {
        this._container = new createjs.Container();

        if(this._style.FILL.IMAGE) {
            this._image = new Image();
            this._image.onload = () => {
                this._background = new createjs.Bitmap(this._image);

                var w:number = this._background.getBounds().width,
                    h:number = this._background.getBounds().height,
                    scale:number;

                if(w > h) {
                    scale = this._style.SIZE / w;
                }
                else {
                    scale = this._style.SIZE / h;
                }

                this._background.setTransform(0, 0, scale, scale);

                this._actualWidth = w * scale;
                this._actualHeight = h * scale;

                this.finishCreation();
            };
            this._image.src = this._style.FILL.IMAGE;
        }
        else {
            this._background = new createjs.Shape();

            this._background.graphics.setStrokeStyle(this._style.STROKE.SIZE);
            this._background.graphics.beginStroke(this._style.STROKE.COLOR);
            this._background.graphics.beginFill(this._style.FILL.COLOR);
            this._background.graphics.drawRect(0, 0, this._style.SIZE, this._style.SIZE);

            this._actualHeight = this._style.SIZE;
            this._actualWidth = this._style.SIZE;

            this.finishCreation();
        }
    }

    private finishCreation():void {
        this._container.addChild(this._background);

        this.moveTo(this._location);

        this.getElement().on("mousedown", (e) => {
            this.onMouseDown(e);
        });

        this.getElement().on("pressup", (e) => {
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

    public getElement():createjs.Container {
        return this._container;
    }

    public getLocation():Tile {
        return this._location;
    }

    protected moveTo(destination:Tile):void {
        this._location = destination;
    }

    public render():void {
        var loc:createjs.Container = this._location.getElement();

        this._container.x = loc.x - this._actualWidth/2;
        this._container.y = loc.y - this._actualHeight/2;
    }
}
