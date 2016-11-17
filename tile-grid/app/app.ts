import {State} from "./state/state";
import {CONFIG} from "./config/config";
import {Map} from "./map/map";

export class App {
    private _stage:createjs.Stage;
    private _state:State = new State();
    private CONFIG:CONFIG = new CONFIG();
    private _map:Map;
    private _ticks:number = 0;
    private _frames:number = 0;

    private tick():void {
        this._ticks++;
    }

    private draw(items:Array<any>):void {
        for(let item of items) {
            this._stage.addChild(item.getElement());
        }
    }

    private render():void {
        this._frames++;

        this._stage.removeAllChildren();

        this.draw(this._map.renderTiles());
        this.draw(this._map.renderPieces());

        this._stage.update();
    }

    public loop():void {
        if(this._state.isPaused()) {
            return;
        }

        var next = new Date().getTime(),
            loops = 0,
            skips = 1000 / this.CONFIG.DISPLAY.FPS;

        while(new Date().getTime() >= next && loops < this.CONFIG.DISPLAY.MAX_FRAME_SKIP) {
            this.tick();
            next += skips;
            loops++;
        }

        this.render();
    }

    public start():void {
        this._stage = new createjs.Stage(this.CONFIG.IDS.STAGE_ID);
        this._stage.enableMouseOver(this.CONFIG.DISPLAY.FPS);


        this._map = new Map(this.CONFIG);

        window.setInterval(() => {
            this.loop();
        }, 1);

        window.setInterval(() => {
            document.getElementById(this.CONFIG.IDS.FPS_ID).innerHTML = this._frames + "";
            document.getElementById(this.CONFIG.IDS.TPS_ID).innerHTML = this._ticks + "";

            this._frames = 0;
            this._ticks = 0;
        }, 1000);
    }
}
