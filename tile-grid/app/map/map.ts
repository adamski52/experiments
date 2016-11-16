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

        if(this.CONFIG.MAP_WIDTH <= 1 || this.CONFIG.MAP_HEIGHT <= 1) {
            throw new Error(this.CONFIG.INVALID_SIZE_ERROR);
        }

        for(var x = 0; x < this.CONFIG.MAP_WIDTH; x++) {
            for(var y = 0; y < this.CONFIG.MAP_HEIGHT; y++) {
                tile = new Tile(x, y, this.CONFIG);
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

    private onTileClick(tile:Tile):ITileNeighbors {
        var neighbors:ITileNeighbors = this.getTileNeighbors(tile);

        tile.activate();
        console.log("NEIGHBORS: ", neighbors);

        for(let n in neighbors) {
            if(neighbors[n]) {
                neighbors[n].hint();
            }
        }

        return neighbors;
    }


    public render():Array<Tile> {
        return this._tiles;
    }

    public getTileNeighbors(tile:Tile):ITileNeighbors {
        console.log("TILE: ", tile);

        var n:Tile,
            ne:Tile,
            se:Tile,
            s:Tile,
            sw:Tile,
            nw:Tile;

        if(tile.row - 1 >= 0) {
            ne = this._grid[tile.row-1][tile.col];

            if(tile.col - 1 < this._grid[tile.row-1].length) {
                nw = this._grid[tile.row-1][tile.col-1];
            }

            if(tile.row - 2 >= 0) {
                n = this._grid[tile.row-2][tile.col];
            }
        }

        if(tile.row + 1 < this._grid.length) {
            se = this._grid[tile.row+1][tile.col];

            if(tile.col - 1 < this._grid[tile.row+1].length) {
                sw = this._grid[tile.row+1][tile.col-1];
            }

            if(tile.row + 2 < this._grid.length) {
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