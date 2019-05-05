export class BarGraphData {
    x: number[];
    y: number[];
    type: string;

    constructor(x, y){
        this.x = [x];
        this.y = [y];
        this.type = 'bar';
    }
}
