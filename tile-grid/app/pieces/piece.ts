import {Tile} from "../map/tile";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

export abstract class Piece {
    protected _container:createjs.Container;
    private _background:createjs.Shape;
    private _backgroundImage:createjs.Bitmap;
    private _image:HTMLImageElement;

    constructor(protected _location:Tile, protected _grid:Array<Array<Tile>>, protected _style:any) {
        this._container = new createjs.Container();

        if(this._style.FILL.IMAGE) {
            this._image = new Image();
            this._image.onload = () => {
                this._backgroundImage = new createjs.Bitmap(this._image);

                var w:number = this._backgroundImage.getBounds().width,
                    h:number = this._backgroundImage.getBounds().height,
                    scale:number;

                if(w > h) {
                    scale = this._style.SIZE / w;
                }
                else {
                    scale = this._style.SIZE / h;
                }

                this._backgroundImage.setTransform(-w*scale/2, -h*scale/2, scale, scale);

                this.createShape();
            };

            this._image.onerror = () => {
                this.createShape();
            };

            this._image.src = this._style.FILL.IMAGE;
        }
        else {
            this.createShape();
        }
    }

    public getStyle():any {
        return {
            background: this._background,
            backgroundImage: this._backgroundImage,
            style: this._style
        };
    }

    protected figureSingleTileMovement(directions:Array<string>):void {
        var neighbors:ITileNeighbors = this._location.getNeighbors();
        for(var d of directions) {
            this.hintTile(neighbors[d]);
        }
    }

    protected figureCardinalMovement():void {
        for(var c in this._grid[this._location.row]) {
            this.hintTile(this._grid[this._location.row][c]);
        }

        for(var r:number = 0; r < this._grid.length; r+=2) {
            this.hintTile(this._grid[r][this._location.col]);
        }
    }

    protected figureDiagonalMovement():void {
        this.testDiagonalMovement("nw");
        this.testDiagonalMovement("sw");
        this.testDiagonalMovement("ne");
        this.testDiagonalMovement("se");
    }

    private testDiagonalMovement(which:string):void {
        var neighbors:ITileNeighbors = this._location.getNeighbors();

        while(neighbors[which]) {
            this.hintTile(neighbors[which]);
            neighbors = neighbors[which].getNeighbors();
        }
    }




    protected figureRightAngleMovement() {
        this.testRightAngleMovement(this._location.row+4, this._location.col);
        this.testRightAngleMovement(this._location.row-4, this._location.col);

        this.testRightAngleMovement(this._location.row, this._location.col + 2);
        this.testRightAngleMovement(this._location.row, this._location.col - 2);
    }

    private testRightAngleMovement(row:number, col:number) {
        if(row < 0 || row >= this._grid.length || col < 0 || col >= this._grid[row].length) {
            return;
        }

        var neighbors:ITileNeighbors = this._grid[row][col].getNeighbors()

        this.hintTile(neighbors.nw);
        this.hintTile(neighbors.sw);
        this.hintTile(neighbors.ne);
        this.hintTile(neighbors.se);
    }

    private createShape():void {
        this._background = new createjs.Shape();

        this._background.graphics.setStrokeStyle(this._style.STROKE.SIZE);
        this._background.graphics.beginStroke(this._style.STROKE.COLOR);
        this._background.graphics.beginFill(this._style.FILL.COLOR);
        if(this._style.SHAPE.SIDES < 3) {
            this._style.SHAPE.SIDES = 3;
        }

        if(this._style.SHAPE.SIDES > 10) {
            this._background.graphics.drawCircle(0, 0, this._style.SIZE);
        }
        else {
            this._background.graphics.drawPolyStar(0, 0, this._style.SIZE, this._style.SHAPE.SIDES, this._style.SHAPE.DEPTH, this._style.SHAPE.ANGLE);
        }

        this._container.addChild(this._background);
        if(this._backgroundImage) {
            this._container.addChild(this._backgroundImage);
        }

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

    protected onMouseUp(e:Object):void {
         for(var r:number = 0; r < this._grid.length; r++) {
            for(var c:number = 0; c < this._grid[r].length; c++) {
                this.resetAndMove(this._grid[r][c]);
            }
        }
    }

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

        this._container.x = loc.x;
        this._container.y = loc.y;
    }
}
