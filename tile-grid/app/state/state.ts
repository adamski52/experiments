import {Injectable} from '@angular/core';

@Injectable()
export class State {
    private _paused:boolean = false;

    public pause():void {
        this._paused = true;
    }

    public unpause():void {
        this._paused = false;
    }

    public isPaused():boolean {
        return this._paused;
    }
}