import {Injectable} from '@angular/core';
import {Stage} from "../stage/stage";
import {Tile} from "./tile";
import {CONFIG} from "../config/config";

@Injectable()
export class Map {
    constructor(private CONFIG:CONFIG, private _stage:Stage) {}

    public render():void {
        var tile;

        for(var x = 0; x < this.CONFIG.MAP_WIDTH; x++) {
            for(var y = 0; y < this.CONFIG.MAP_HEIGHT; y++) {
                tile = new Tile(x, y, this.CONFIG.TILE_SIZE);

                this._stage.addChild(tile, false);
            }
        }

        this._stage.update();
    }
}