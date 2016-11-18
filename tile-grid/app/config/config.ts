export class CONFIG {
    public IDS:any = {
        STAGE_ID: "tile-grid-stage",
        FPS_ID: "tile-grid-fps",
        TPS_ID: "tile-grid-tps"
    };

    public STYLES:any = {
        TILES: {
            FILL: {
                COLOR: "#f0f0f0",
                ACTIVE: "#000000",
                HINT: "#ffffff"
            },
            STROKE: {
                COLOR: "#cccccc",
                SIZE: 1
            },
            SIZE: 50
        },
        ROOKS: {
            FILL: {
                COLOR: "#42cbf4"
            },
            SHAPE: {
                SIDES: 4,
                DEPTH: .3,
                ANGLE: 0
            },
            STROKE: {
                COLOR: "#3387a0",
                SIZE: 1
            },
            SIZE: 30
        },
        HORSIE_NEIGH_NEIGHS: {
            FILL: {
                COLOR: "#a35b2c"
            },
            STROKE: {
                COLOR: "#703c19",
                SIZE: 1
            },
            SHAPE: {
                SIDES: 5,
                DEPTH: 0,
                ANGLE: 17.5
            },
            SIZE: 30
        },
        BISHOPS: {
            FILL: {
                COLOR: "#9774f7"
            },
            STROKE: {
                COLOR: "#7142f4",
                SIZE: 1
            },
            SHAPE: {
                SIDES: 3,
                DEPTH: 0,
                ANGLE: 30
            },
            SIZE: 30
        },
        QUEENS: {
            FILL: {
                COLOR: "#ffd8fd"
            },
            STROKE: {
                COLOR: "#ddaadc",
                SIZE: 2
            },
            SHAPE: {
                SIDES: 7,
                DEPTH: .25,
                ANGLE: 0
            },
            SIZE: 40
        },
        KINGS: {
            FILL: {
                COLOR: "#5e259b"
            },
            STROKE: {
                COLOR: "#380d66",
                SIZE: 2
            },
            SHAPE: {
                SIDES: 8,
                DEPTH: .25,
                ANGLE: 0
            },
            SIZE: 40
        },
        PAWNS: {
            FILL: {
                COLOR: "#b8d330"
            },
            STROKE: {
                COLOR: "#8fa522",
                SIZE: 0
            },
            SHAPE: {
                SIDES: 8,
                DEPTH: 0,
                ANGLE: 0
            },
            SIZE: 30
        },
        DON_JOHNSONS: {
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
                SIZE: 1
            },
            SIZE: 80
        }
    };

    public BOARD:any = {
        ROOKS: [{
            col: 0,
            row: 0
        }, {
            col: 8,
            row: 0
        }],
        HORSIE_NEIGH_NEIGHS: [{
            col: 1,
            row: 0
        }, {
            col: 7,
            row: 0
        }],
        BISHOPS: [{
            col: 2,
            row: 0
        }, {
            col: 6,
            row: 0
        }],
        QUEENS: [{
            col: 3,
            row: 0
        }],
        DON_JOHNSONS: [{
            row: 0,
            col: 4
        }],
        KINGS: [{
            col: 5,
            row: 0
        }],
        PAWNS: [{
            col: 0,
            row: 1
        }, {
            col: 1,
            row: 1
        }, {
            col: 2,
            row: 1
        }, {
            col: 3,
            row: 1
        }, {
            col: 4,
            row: 1
        }, {
            col: 5,
            row: 1
        }, {
            col: 6,
            row: 1
        }, {
            col: 7,
            row: 1
        }, {
            col: 8,
            row: 1
        }]
    };

    public DISPLAY:any = {
        FPS: 33,
        MAX_FRAME_SKIP: 10,
        MAP_WIDTH: 9,
        MAP_HEIGHT: 8,
    };
}
