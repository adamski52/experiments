import {Injectable, EventEmitter} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {CONFIG} from "../config/config";
import {Observable} from "rxjs/Observable";
import {ITileStyle} from "../interfaces/tile-style";

@Injectable()
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
        this._offset = Math.floor((this.CONFIG.TILE_SIZE / 50))*7;
        this._style = {
            fill: this.CONFIG.FILL_COLOR,
            strokeColor: this.CONFIG.STROKE_COLOR,
            strokeSize: this.CONFIG.STROKE_SIZE
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
        this._shape.graphics.drawPolyStar(0, 0, this.CONFIG.TILE_SIZE, 6, 0, 0);
        this.setPosition(this._x, this._y);
    }

    public activate():void {
        this._style.fill = this.CONFIG.FILL_ACTIVE_COLOR;
    }

    public hint():void {
        this._style.fill = "#ffffff";
    }

    public setPosition(x:number, y:number):void {
        this._x = x;
        this._y = y;

        if(this._y % 2 === 0) {
            this._shape.x = (this._x * this.CONFIG.TILE_SIZE * 3) + this.CONFIG.TILE_SIZE;
        }
        else {
            this._shape.x = (this._x * this.CONFIG.TILE_SIZE * 3) + (this.CONFIG.TILE_SIZE * 1.5) + this.CONFIG.TILE_SIZE;
        }

        this._shape.y = (this._y * (this.CONFIG.TILE_SIZE - this._offset)) + this.CONFIG.TILE_SIZE - this._offset;
    }

    public getElement():createjs.Shape {
        this.render();
        return this._shape;
    }

    public getStyle():ITileStyle {
        return this._style;
    }
}