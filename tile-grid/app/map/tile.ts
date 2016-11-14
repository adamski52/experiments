import {Injectable, Inject} from '@angular/core';
import {CONFIG} from "../config/config";

@Injectable()
export class Tile {
    private _shape:createjs.Shape;

    // i dont have an answer to this quite yet.  pixels being rectangular or something?
    // every 50px of tile size creates 7 pixels of y-offset.
    private _offset:number;

    constructor(private _x:number, private _y:number, private _size:number) {
        this._offset = Math.floor((this._size / 50))*7;

        this._shape = new createjs.Shape();

        this._shape.graphics.setStrokeStyle(1);
        this._shape.graphics.beginStroke("#cccccc");
        this._shape.graphics.beginFill("#f0f0f0");
        this._shape.graphics.drawPolyStar(0, 0, this._size, 6, 0, 0);
        this.setPosition(this._x, this._y);
    }

    public setPosition(x:number, y:number):void {
        this._x = x;
        this._y = y;

        if(this._y % 2 === 0) {
            this._shape.x = (this._x * this._size * 3) + this._size;;
        }
        else {
            this._shape.x = (this._x * this._size * 3) + (this._size * 1.5) + this._size;
        }

        this._shape.y = (this._y * (this._size - this._offset)) + this._size - this._offset;
    }

    public getElement():createjs.Shape {
        return this._shape;
    }
}