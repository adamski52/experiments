import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {App} from "./app";
import {State} from "./state/state";
import {Tile} from "./map/tile";
import {CONFIG} from "./config/config";


@NgModule({
    imports: [BrowserModule],
    declarations: [App],
    bootstrap: [App],
    providers: [State, CONFIG]
})

export class AppModule {}
