import { Entity } from "./entity.js";
import { Board } from "./board.js";
import { generate_ID, pointInRect, Rect } from "../modules/utils.js";

export class Layer {
    readonly ID: string = generate_ID();

    entities: Entity[] = [];

    add(...entities: Entity[]): void {
        for (let entity of entities) {
            // check for duplicates
            if (this.entities.findIndex(e => e.ID === entity.ID) > -1) {
                console.warn(`Entity with ID ${entity.ID} already exists in layer ${this.ID}.`);
                continue;
            }
            this.entities.push(entity);
        }
    }

    destroy(...entities: Entity[]): void {
        // remove all entities if none are specified
        if (entities.length === 0) {
            for (let e of this.entities) e.destroy();
            this.entities = [];
            return;
        }

        // remove specified entities
        for (let entity of entities) {
            let index = this.entities.findIndex(e => e.ID === entity.ID);
            if (index != -1) this.entities.splice(index, 1);
        }
    }

    firstIntersection(x: number, y: number): Entity {
        for (let e of this.entities) {
            if (e.isIntersectingPoint(x, y)) return e;
        }
        return null;
    }

    rectIntersection(rect: Rect): Entity[] {
        return this.entities.filter(e => pointInRect(e.rect.x, e.rect.y, rect));;
    }

    duplicate(): Layer {
        // create new layer
        let layer = new Layer();

        // duplicate entities to the new layer
        for (let e of this.entities) layer.add(e.duplicate());

        // return new layer
        return layer;
    }

    render(board: Board): void {
        for (let e of this.entities) e.render(board);
    }
}