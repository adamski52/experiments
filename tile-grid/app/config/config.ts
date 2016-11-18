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
                COLOR: "#b8d330"
            },
            STROKE: {
                COLOR: "#8fa522",
                SIZE: 1
            },
            SHAPE: {
                SIDES: 8,
                DEPTH: 0,
                ANGLE: 0
            },
            SIZE: 30
        },
        DON_JOHNSON: {
            FILL: {
                IMAGE: "images/don-johnson.jpg",
                COLOR: "#ffcc00"
            },
            SHAPE: {
                SIDES: 9,
                DEPTH: .7,
                ANGLE: 0
            },
            STROKE: {
                COLOR: "#d3b830",
                SIZE: 2
            },
            SIZE: 115
        },
        ROOK: {
            FILL: {
                COLOR: "#42cbf4"
            },
            SHAPE: {
                SIDES: 5,
                DEPTH: .7,
                ANGLE: 0
            },
            STROKE: {
                COLOR: "#3387a0",
                SIZE: 2
            },
            SIZE: 75
        }
    };

    public BOARD:any = {
        PAWNS: [{
            col: 1,
            row: 1
        }, {
            col: 2,
            row: 2
        }],
        BISHOPS: [],
        ROOKS: [],
        KINGS: [],
        QUEENS: [],
        DON_JOHNSONS: [{
            row: 0,
            col: 2
        }],
        HORSIE_NEIGH_NEIGHS: []
    };

    public DISPLAY:any = {
        FPS: 33,
        MAX_FRAME_SKIP: 10,
        MAP_WIDTH: 3,
        MAP_HEIGHT: 6,
    };
}
