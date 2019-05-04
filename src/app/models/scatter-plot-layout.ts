export class ScatterPlotLayout {
    xaxis: object;
    yaxis: object;
    legend: object;
    title: string;

    _extendRange(actualValue: number, extendRatio: number){
        return parseInt((actualValue + (actualValue * extendRatio)).toString())
    }
    constructor(xMin, xMax, yMin, yMax, xAxisTitle, yAxisTitle, title){
        this.xaxis = {title: { text: xAxisTitle}};
        this.yaxis = {title: { text: yAxisTitle}};
        this.legend =  {y: 0.5, yref: 'paper', font: { family: 'Roboto', size: 20, color: '#777', } };
        this.title = title;
    }
}
