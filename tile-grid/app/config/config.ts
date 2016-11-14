import {Injectable} from '@angular/core';

@Injectable()
export class CONFIG {
    public FPS: number = 33;
    public MAX_SKIP:number = 10;
    public MAP_HEIGHT:number = 5;
    public MAP_WIDTH:number = 5;
    public TILE_SIZE:number = 100;
}