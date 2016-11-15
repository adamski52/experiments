import {Tile} from "../map/tile";

export interface ITileNeighbors {
    n: Tile | undefined,
    ne: Tile | undefined,
    se: Tile | undefined,
    s: Tile | undefined,
    sw: Tile | undefined,
    nw: Tile | undefined
}