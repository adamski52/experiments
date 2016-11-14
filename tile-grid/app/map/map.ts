import {Injectable} from '@angular/core';
import {Stage} from "../stage/stage";
import {Hex} from "./hex";
import {CONFIG} from "../config/config";

@Injectable()
export class Map {
    constructor(private CONFIG:CONFIG, private _stage:Stage) {}

    public render():void {
        var hex;

        for(var x = 0; x < this.CONFIG.MAP_WIDTH; x++) {
            for(var y = 0; y < this.CONFIG.MAP_HEIGHT; y++) {
                hex = new Hex();
                hex.setPosition(x, y);
            }
        }
    }
}