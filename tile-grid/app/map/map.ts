import {Injectable} from '@angular/core';
import {Tile} from "./tile";
import {CONFIG} from "../config/config";

@Injectable()
export class Map {
    private _tiles:Array<Tile> = [];
    private _grid:Array<Array<Tile>> = [];


    constructor(private CONFIG:CONFIG) {
        var tile:Tile;

        for(var x = 0; x < this.CONFIG.MAP_WIDTH; x++) {
            for(var y = 0; y < this.CONFIG.MAP_HEIGHT; y++) {
                tile = new Tile(x, y, this.CONFIG); // good eye, cowboy.  from the docs, "but what if, but what if"....  this isn't a singleton.  different idea entirely.
                tile.onClick$.subscribe(tile => {
                    this.onTileClick(tile);
                });
                this._tiles.push(tile);
            }
        }

        for(var tile of this._tiles) {
            if(this._grid.length - 1 < tile.row) {
                this._grid[tile.row] = [];
            }

            this._grid[tile.row][tile.col] = tile;
        }
    }


    public render():Array<Tile> {
        return this._tiles;
    }

    private onTileClick(tile:Tile):void {
        console.log("TILE", tile);

        return {
            //n: this._tiles[],
            //ne: null,
            //se: null,
            //s: null,
            //sw: null,
            //nw: null
        };
    }
}