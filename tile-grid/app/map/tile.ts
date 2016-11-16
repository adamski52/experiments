import {Subject} from 'rxjs/Subject';
import {CONFIG} from "../config/config";
import {Observable} from "rxjs/Observable";
import {ITileStyle} from "../interfaces/tile-style";

export class Tile {
    private _shape:createjs.Shape;

    // i dont have an answer to this quite yet.  pixels being rectangular or something?
    // every 50px of tile size creates 7 pixels of y-offset.
    private _offset:number;

    private _style:ITileStyle;

    public row:number;
    public col:number;

    private onClick:Subject<Tile> = new Subject<Tile>();
    public onClick$:Observable<Tile> = this.onClick.asObservable();

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

        this._shape.addEventListener("click", () => {
            this.onClick.next(this);
        });
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

    public hint():void {
        this._style.fill = this.CONFIG.STYLES.TILE.FILL.HINT;
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
}