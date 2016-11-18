export interface IPieceStyle {
    FILL: {
        IMAGE?: string,
        COLOR: string,
    };

    SHAPE: {
        SIDES: number,
        DEPTH: number,
        ANGLE: number
    };

    STROKE: {
        COLOR: string,
        SIZE: number
    };

    SIZE: number;
}