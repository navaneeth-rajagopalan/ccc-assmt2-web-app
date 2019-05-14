export class BarGraphLayout {
    title: object;
    xaxis: object;
    showlegend: boolean;

    _extendRange(actualValue: number, extendRatio: number){
        return parseInt((actualValue + (actualValue * extendRatio)).toString())
    }
    
    constructor(title){
        this.xaxis = {
            tickangle: -45
        };
        this.showlegend = false;
        this.title = {text: title, font: { family: 'Roboto', size: 32}};
    }
}
