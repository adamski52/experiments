import {Injectable, Inject} from '@angular/core';
import {CONFIG} from "../config/config";

@Injectable()
export class Tile {
    private _shape:createjs.Shape;

    constructor(private _x:number, private _y:number, private _size:number) {
        this._shape = new createjs.Shape();
        this._shape.graphics.beginFill("black").drawCircle(0, 0, this._size);
        this.setPosition(this._x, this._y);
    }

    public setPosition(x:number, y:number):void {
        this._shape.x = (x * (this._size*2)) + this._size;
        this._shape.y = (y * (this._size*2)) + this._size;
    }

    public getElement():createjs.Shape {
        return this._shape;
    }
}