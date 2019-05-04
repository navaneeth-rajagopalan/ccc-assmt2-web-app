export class ScatterPlotData {
    x: number[];
    y: number[];
    mode: string;
    type: string;
    name: string;
    text: string[];
    textposition: string;
    textfont: object;
    marker: object;

    constructor(x, y, name, text){
        this.x = [x];
        this.y = [y];
        this.mode = 'markers';
        this.name = name;
        this.text = [text.toString() + ' %'];
        this.textposition = 'top center';
        this.textfont = { family:'Roboto' };
        this.marker = { size: 10 }
    }
}
