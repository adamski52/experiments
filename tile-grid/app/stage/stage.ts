import {Injectable} from '@angular/core';

@Injectable()
export class Stage {
    private _stage:createjs.Stage;

    public clear():void {
        this._stage.removeAllChildren();
        this._stage.update();
    }

    public update():void {
        this._stage.update();
    }

    public addChild(child:any, update:boolean = true) {
        this._stage.addChild(child.getElement());
        if(update) {
            this.update();
        }
    }

    constructor (stage:string) {
        this._stage = new createjs.Stage(stage);
    }
}