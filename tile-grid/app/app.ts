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
    constructor(private CONFIG:CONFIG,
                private _stage:Stage,
                private _state:State,
                private _map:Map) {}

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
        //window.setInterval(() => {
            this.run();
        //}, 0);
    }

    ngOnInit() {
        this.start();
    }
}
