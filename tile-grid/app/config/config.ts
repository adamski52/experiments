export class CONFIG {
    public IDS:any = {
        STAGE_ID: "tile-grid-stage",
        FPS_ID: "tile-grid-fps",
        TPS_ID: "tile-grid-tps"
    };

    public STYLES:any = {
        TILE: {
            FILL: {
                COLOR: "#f0f0f0",
                ACTIVE: "#000000",
                HINT: "#ffffff"
            },
            STROKE: {
                COLOR: "#cccccc",
                SIZE: 1
            },
            SIZE: 100
        },
        PAWN: {
            FILL: {
                COLOR: "#333333"
            },
            STROKE: {
                COLOR: "#ff0000",
                SIZE: 1
            },
            SIZE: 20
        }
    };

    public DISPLAY:any = {
        FPS: 33,
        MAX_FRAME_SKIP: 10,
        MAP_WIDTH: 3,
        MAP_HEIGHT: 6,
    };
}
