import {Injectable} from '@angular/core';
import {Tile} from "./tile";
import {CONFIG} from "../config/config";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

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

    private onTileClick(tile:Tile) {
        var neighbors:ITileNeighbors = this.getTileNeighbors(tile);
        console.log(neighbors);
    }


    public render():Array<Tile> {
        return this._tiles;
    }

    private getTileNeighbors(tile:Tile):ITileNeighbors {
        var n:Tile,
            ne:Tile,
            se:Tile,
            s:Tile,
            sw:Tile,
            nw:Tile;

        console.log("CLICKED TILE: ", tile);

        if(tile.row - 1 > 0) {
            ne = this._grid[tile.row-1][tile.col];

            if(tile.col - 1 > 0) {
                nw = this._grid[tile.row-1][tile.col-1];
            }

            if(tile.row - 2 > 0) {
               n = this._grid[tile.row-2][tile.col];
            }
        }

        if(this._grid.length > tile.row + 1) {
            se = this._grid[tile.row+1][tile.col];

            if(tile.col - 1 > 0) {
                sw = this._grid[tile.row+1][tile.col-1];
            }

            if(this._grid.length > tile.row + 2) {
                s = this._grid[tile.row+2][tile.col];
            }
        }

        return {
            n: n,
            ne: ne,
            se: se,
            s: s,
            sw: sw,
            nw: nw
        };
    }
}