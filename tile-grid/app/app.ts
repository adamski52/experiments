import {Component} from "@angular/core";
import {State} from "./state/state";
import {CONFIG} from "./config/config";
import {Map} from "./map/map";

@Component({
    selector: "hex-grid",
    templateUrl: "templates/stage.html"
})

export class App {
    private _stage:createjs.Stage;
    private _state:State;
    private CONFIG:CONFIG;
    private _map:Map;
    private _ticks:number = 0;
    private _frames:number = 0;
    private tps:number = 0;
    private fps:number = 0;

    constructor() {
        this.CONFIG = new CONFIG();
        this._state = new State();
    }

    private tick():void {
        this._ticks++;
    }

    private draw(items:Array<any>):void {
        this._frames++;
        for(let item of items) {
            this._stage.addChild(item.getElement());
        }
    }

    private render():void {
        this._stage.removeAllChildren();

        this.draw(this._map.render());

        this._stage.update();
    }

    private loop():void {
        if(this._state.isPaused()) {
            return;
        }

        var next = new Date().getTime(),
            loops = 0,
            skips = 1000 / this.CONFIG.FPS;

        while(new Date().getTime() >= next && loops < this.CONFIG.MAX_SKIP) {
            this.tick();
            next += skips;
            loops++;
        }

        this.render();
    }

    private start():void {
        this._stage = new createjs.Stage(this.CONFIG.STAGE_ID);
        this._map = new Map(this.CONFIG);

        window.setInterval(() => {
            this.loop();
        }, 1);

        window.setInterval(() => {
            this.fps = this._frames;
            this.tps = this._ticks;

            this._frames = 0;
            this._ticks = 0;
        }, 1000);
    }

    ngOnInit() {
        this.start();
    }
}
