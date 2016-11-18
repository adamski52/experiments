import {Tile} from "./tile";
import {CONFIG} from "../config/config";
import {CONSTANTS} from "../config/constants";
import {Piece} from "../pieces/piece";
import {Pawn} from "../pieces/pawn";
import {DonJohnson} from "../pieces/don-johnson";
import {Rook} from "../pieces/rook";
import {Bishop} from "../pieces/bishop";
import {HorsieNeighNeigh} from "../pieces/horsie-neigh-neigh";
import {King} from "../pieces/king";
import {Queen} from "../pieces/queen";

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
        var piece:Piece,
            manImLazy:string;

        manImLazy = "ROOKS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new Rook(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

        manImLazy = "HORSIE_NEIGH_NEIGHS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new HorsieNeighNeigh(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

        manImLazy = "BISHOPS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new Bishop(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

        manImLazy = "QUEENS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new Queen(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

        manImLazy = "KINGS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new King(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

        manImLazy = "DON_JOHNSONS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new DonJohnson(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

        manImLazy = "PAWNS";
        for(let p in this.CONFIG.BOARD[manImLazy]) {
            piece = new Pawn(this._grid[this.CONFIG.BOARD[manImLazy][p].row][this.CONFIG.BOARD[manImLazy][p].col], this._grid, this.CONFIG.STYLES[manImLazy]);
            this._pieces.push(piece);
        }

    }

    public getGrid():Array<Array<Tile>> {
        return this._grid;
    }

    public renderTiles():Array<Tile> {
        for(var t in this._tiles) {
            this._tiles[t].render();
        }
        return this._tiles;
    }

    public renderPieces():Array<Piece> {
        for(var p in this._pieces) {
            this._pieces[p].render();
        }
        return this._pieces;
    }
}