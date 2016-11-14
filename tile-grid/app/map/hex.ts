import {Injectable, Inject} from '@angular/core';
import {CONFIG} from "../config/config";

@Injectable()
export class Hex {
    private _shape:createjs.Shape;

    constructor(private CONFIG:CONFIG) {
        this._shape = new createjs.Shape();
        this._shape.graphics.beginFill("black").drawCircle(0, 0, this.CONFIG.TILE_RADIUS);
    }

    public setPosition(x:number, y:number):void {
        this._shape.x = x * this.CONFIG.TILE_RADIUS;
        this._shape.y = y * this.CONFIG.TILE_RADIUS;
    }

    public getElement():createjs.Shape {
        return this._shape;
    }
}