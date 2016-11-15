import {Injectable} from '@angular/core';

@Injectable()
export class CONFIG {
    public STAGE_ID:string = "stage";

    public FPS: number = 33;
    public MAX_SKIP:number = 10;

    public MAP_WIDTH:number = 2;
    public MAP_HEIGHT:number = 5;

    public TILE_SIZE:number = 100;

    public FILL_COLOR:string = "#f0f0f0";
    public FILL_ACTIVE_COLOR:string = "#dddddd";
    public STROKE_COLOR:string = "#cccccc";
    public STROKE_SIZE:number = 1;

    public TILE_CLICK:string = "TILE_CLICK";

    public INVALID_SIZE_ERROR:string = "Invalid map size specified.";
}