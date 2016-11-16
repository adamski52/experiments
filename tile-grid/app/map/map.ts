import {Tile} from "./tile";
import {CONFIG} from "../config/config";
import {ITileNeighbors} from "../interfaces/tile-neighbors";

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

    private figureNorth(tile:Tile):Tile | undefined {
        var row:number = tile.row - 2,
            col:number = tile.col;


        if(row < 0) {
            return;
        }

        return this._grid[row][col];
    }

    private figureSouth(tile:Tile):Tile | undefined {
        var row:number = tile.row + 2,
            col:number = tile.col;

        if(row >= this._grid.length) {
            return;
        }

        return this._grid[row][col];
    }


    private figureNorthWest(tile:Tile):Tile | undefined {
        var row:number = tile.row - 1,
            col:number = tile.row % 2 === 0 ? tile.col - 1 : tile.col;

        if(col < 0 || row < 0) {
            return;
        }

        return this._grid[row][col];
    }

    private figureNorthEast(tile:Tile):Tile | undefined {
        var row:number = tile.row - 1,
            col:number = tile.row % 2 === 0 ? tile.col : tile.col + 1;

        if(row < 0 || col >= this._grid[row].length) {
            return;
        }

        return this._grid[row][col];
    }

    private figureSouthWest(tile:Tile):Tile | undefined {
        var row:number = tile.row + 1,
            col:number = tile.row % 2 === 0 ? tile.col - 1: tile.col;

        if(row >= this._grid.length || col < 0) {
            return;
        }

        return this._grid[row][col];
    }

    private figureSouthEast(tile:Tile):Tile | undefined {
        var row:number = tile.row + 1,
            col:number = tile.row % 2 === 0 ? tile.col : tile.col + 1;

        if(row >= this._grid.length || col >= this._grid[row].length) {
            return;
        }

        return this._grid[row][col];
    }

    public getTileNeighbors(tile:Tile):ITileNeighbors {
        console.log("TILE: ", tile);

        return {
            n: this.figureNorth(tile),
            ne: this.figureNorthEast(tile),
            se: this.figureSouthEast(tile),
            s: this.figureSouth(tile),
            sw: this.figureSouthWest(tile),
            nw: this.figureNorthWest(tile)
        };
    }
}