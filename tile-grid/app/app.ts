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

    constructor() {
        this.CONFIG = new CONFIG();
        this._state = new State();
    }

    private tick():void {

    }

    private draw(items:Array<any>):void {
        for(let item of items) {
            this._stage.addChild(item.getElement());
        }
    }

    private render():void {
        this._stage.removeAllChildren();

        this.draw(this._map.render());

        this._stage.update();
    }

    private run():void {
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
            this.run();
        }, 0);
    }

    ngOnInit() {
        this.start();
    }
}
