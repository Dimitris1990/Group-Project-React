import React from 'react';
import Plot from 'react-plotly.js';
import './usermarket.css'


class StockChart extends React.Component {
  render() {
    let name = this.props.stock.stockName;
    if(name!=null){
    return (
      <div className="plot-chart">
        <h1 className="plot-title">Stock Market</h1>

        <Plot
          data={[
            {
              x: this.props.stock.stockChartXValues,
              y: this.props.stock.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            }
          ]}
          layout={{width: 620, height: 340, title: name}}   
        />
      </div>
    )} else return(null)
  }
}

export default StockChart;