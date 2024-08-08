export type Point = {
    x: number
    y: number
}

export type Rect = {
    x: number
    y: number
    width: number
    height: number
}

export const getDistance = (p0: Point, p1: Point) => {
    Math.sqrt(Math.pow(p0.x - p1.x, 2) + Math.pow(p0.y - p1.y, 2))
}

export const getAngleDegrees = (p0: Point, p1: Point, p2: Point) => {
    var a = Math.pow(p1.x - p0.x, 2) + Math.pow(p1.y - p0.y, 2),
        b = Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2),
        c = Math.pow(p2.x - p0.x, 2) + Math.pow(p2.y - p0.y, 2);
    return Math.acos((a + b - c) / Math.sqrt(4 * a * b)) * 180 / Math.PI;
}

export const getMidpoint = (p0: Point, p1: Point) => {
    return { x: (p0.x + p1.x) / 2, y: (p0.y + p1.y) / 2 }
}