import {Tile} from "./tile";
import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Piece} from "../pieces/piece";
import {Pawn} from "../pieces/pawn";
import {DonJohnson} from "../pieces/don-johnson";

export class Map {
    private _tiles:Array<Tile> = [];
    private _grid:Array<Array<Tile>> = [];
    private _pieces:Array<Piece> = [];

    constructor(private CONFIG:CONFIG) {
        if(this.CONFIG.DISPLAY.MAP_WIDTH <= 1 || this.CONFIG.DISPLAY.MAP_HEIGHT <= 1) {
            throw new Error(CONSTANTS.MESSAGES.ERRORS.INVALID_MAP);
        }

        this.createTiles();
        this.createPieces();
    }

    private createTiles():void {
        var tile:Tile;
        for(var x = 0; x < this.CONFIG.DISPLAY.MAP_WIDTH; x++) {
            for(var y = 0; y < this.CONFIG.DISPLAY.MAP_HEIGHT; y++) {
                tile = new Tile(x, y, this.CONFIG);
                this._tiles.push(tile);
            }
        }

        for(var tile of this._tiles) {
            if(this._grid.length - 1 < tile.row) {
                this._grid[tile.row] = [];
            }

            this._grid[tile.row][tile.col] = tile;
        }

        for(var tile of this._tiles) {
            tile.setGrid(this._grid);
        }
    }

    private createPieces():void {
        var piece:Piece;
        for(let p in this.CONFIG.BOARD.PAWNS) {
            piece = new Pawn(this._grid[this.CONFIG.BOARD.PAWNS[p].row][this.CONFIG.BOARD.PAWNS[p].col], this._grid, this.CONFIG.STYLES.PAWN);
            this._pieces.push(piece);
        }

        for(let p in this.CONFIG.BOARD.DON_JOHNSONS) {
            piece = new DonJohnson(this._grid[this.CONFIG.BOARD.DON_JOHNSONS[p].row][this.CONFIG.BOARD.DON_JOHNSONS[p].col], this._grid, this.CONFIG.STYLES.DON_JOHNSON);
            this._pieces.push(piece);
        }
    }

    public getGrid():Array<Array<Tile>> {
        return this._grid;
    }

    public renderTiles():Array<Tile> {
        return this._tiles;
    }

    public renderPieces():Array<Piece> {
        return this._pieces;
    }
}