export class ScatterPlotLayout {
    xaxis: object;
    yaxis: object;
    legend: object;
    title: object;

    _extendRange(actualValue: number, extendRatio: number){
        return parseInt((actualValue + (actualValue * extendRatio)).toString())
    }
    constructor(xAxisTitle, yAxisTitle, title){
        this.xaxis = {title: { text: xAxisTitle, font: { family: 'Roboto', size: 24}}};
        this.yaxis = {title: { text: yAxisTitle, font: { family: 'Roboto', size: 24}}};
        this.legend =  {y: 0.5, yref: 'paper', font: { family: 'Roboto', size: 20, color: '#777', } };
        this.title = {text: title, font: { family: 'Roboto', size: 32}};
    }
}
