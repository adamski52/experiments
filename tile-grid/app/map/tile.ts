import {Subject} from 'rxjs/Subject';
import {CONFIG} from "../config/config";
import {Observable} from "rxjs/Observable";
import {ITileStyle} from "../interfaces/tile-style";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

export class Tile {
    private _shape:createjs.Shape;
    private _grid:Array<Array<Tile>>;

    // i dont have an answer to this quite yet.  pixels being rectangular or something?
    // every 50px of tile size creates 7 pixels of y-offset.
    private _offset:number;

    private _style:ITileStyle;

    public row:number;
    public col:number;

    private onHint:Subject<Tile> = new Subject<Tile>();
    public onHint$:Observable<Tile> = this.onHint.asObservable();

    constructor(private _x:number, private _y:number, private CONFIG:CONFIG) {
        this.row = this._y;
        this.col = this._x;
        this._offset = Math.floor((this.CONFIG.STYLES.TILE.SIZE / 50))*7;
        this._style = {
            fill: this.CONFIG.STYLES.TILE.FILL.COLOR,
            strokeColor: this.CONFIG.STYLES.TILE.STROKE.COLOR,
            strokeSize: this.CONFIG.STYLES.TILE.STROKE.SIZE
        };

        this._shape = new createjs.Shape();

        this.render();

        this._shape.on("mouseover", (e) => {
            this.onMouseOver(e);
        });

        this._shape.on("mouseout", (e) => {
            this.onMouseOut(e);
        })
    }

    private onMouseOut(e:Object):void {
        this._style.fill = this._style.fill === this.CONFIG.STYLES.TILE.FILL.ACTIVE ? this.CONFIG.STYLES.TILE.FILL.HINT : this.CONFIG.STYLES.TILE.FILL.COLOR;
    }

    private onMouseOver(e:Object):void {
        if(this._style.fill === this.CONFIG.STYLES.TILE.FILL.HINT) {
            this.activate();
        }
    }

    public setGrid(grid:Array<Array<Tile>>):void {
        this._grid = grid;
    }

    public showHint():void {
        this.onHint.next();
    }

    private render():void {
        this._shape.graphics.clear();
        this._shape.graphics.setStrokeStyle(this._style.strokeSize);
        this._shape.graphics.beginStroke(this._style.strokeColor);
        this._shape.graphics.beginFill(this._style.fill);
        this._shape.graphics.drawPolyStar(0, 0, this.CONFIG.STYLES.TILE.SIZE, 6, 0, 0);
        this.setPosition(this._x, this._y);
    }

    public activate():void {
        this._style.fill = this.CONFIG.STYLES.TILE.FILL.ACTIVE;
    }

    public isActive():boolean {
        return this._style.fill === this.CONFIG.STYLES.TILE.FILL.ACTIVE;
    }

    public hint():void {
        this._style.fill = this.CONFIG.STYLES.TILE.FILL.HINT;
    }

    public isHint():boolean {
        return this._style.fill === this.CONFIG.STYLES.TILE.FILL.HINT;
    }

    public reset():void {
        this._style.fill = this.CONFIG.STYLES.TILE.FILL.COLOR;
    }

    public setPosition(x:number, y:number):void {
        this._x = x;
        this._y = y;

        if(this._y % 2 === 0) {
            this._shape.x = (this._x * this.CONFIG.STYLES.TILE.SIZE * 3) + this.CONFIG.STYLES.TILE.SIZE;
        }
        else {
            this._shape.x = (this._x * this.CONFIG.STYLES.TILE.SIZE * 3) + (this.CONFIG.STYLES.TILE.SIZE * 1.5) + this.CONFIG.STYLES.TILE.SIZE;
        }

        this._shape.y = (this._y * (this.CONFIG.STYLES.TILE.SIZE - this._offset)) + this.CONFIG.STYLES.TILE.SIZE - this._offset;
    }

    public getElement():createjs.Shape {
        this.render();
        return this._shape;
    }

    public getStyle():ITileStyle {
        return this._style;
    }


    private getNorthNeighbor():Tile | undefined {
        var row:number = this.row - 2,
            col:number = this.col;


        if(row < 0) {
            return;
        }

        return this._grid[row][col];
    }

    private getSouthNeighbor():Tile | undefined {
        var row:number = this.row + 2,
            col:number = this.col;

        if(row >= this._grid.length) {
            return;
        }

        return this._grid[row][col];
    }

    private getNorthwestNeighbor():Tile | undefined {
        var row:number = this.row - 1,
            col:number = this.row % 2 === 0 ? this.col - 1 : this.col;

        if(col < 0 || row < 0) {
            return;
        }

        return this._grid[row][col];
    }

    private getNortheastNeighbor():Tile | undefined {
        var row:number = this.row - 1,
            col:number = this.row % 2 === 0 ? this.col : this.col + 1;

        if(row < 0 || col >= this._grid[row].length) {
            return;
        }

        return this._grid[row][col];
    }

    private getSouthwestNeighbor():Tile | undefined {
        var row:number = this.row + 1,
            col:number = this.row % 2 === 0 ? this.col - 1: this.col;

        if(row >= this._grid.length || col < 0) {
            return;
        }

        return this._grid[row][col];
    }

    private getSoutheastNeighbor():Tile | undefined {
        var row:number = this.row + 1,
            col:number = this.row % 2 === 0 ? this.col : this.col + 1;

        if(row >= this._grid.length || col >= this._grid[row].length) {
            return;
        }

        return this._grid[row][col];
    }

    public getNeighbors():ITileNeighbors {

        return {
            n: this.getNorthNeighbor(),
            ne: this.getNortheastNeighbor(),
            se: this.getSoutheastNeighbor(),
            s: this.getSouthNeighbor(),
            sw: this.getSouthwestNeighbor(),
            nw: this.getNorthwestNeighbor()
        };
    }
}