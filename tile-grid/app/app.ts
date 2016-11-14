import {Component} from "@angular/core";
import {Stage} from "./stage/stage";
import {State} from "./state/state";
import {CONFIG} from "./config/config";
import {Map} from "./map/map";

@Component({
    selector: "hex-grid",
    templateUrl: "templates/stage.html"
})

export class App {
    private _stage:Stage;
    private CONFIG:CONFIG;
    private _map:Map;
    private _state:State;

    constructor() {
        this.CONFIG = new CONFIG();
        this._state = new State();
    }

    private tick():void {
        console.log("TICK!");
    }

    private render():void {
        this._stage.clear();
        this._map.render();
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
        this._stage = new Stage("stage");
        this._map = new Map(this.CONFIG, this._stage);

        //window.setInterval(() => {
            this.run();
        //}, 0);
    }

    ngOnInit() {
        this.start();
    }
}
