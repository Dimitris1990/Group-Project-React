import React, {useState} from 'react';
import StripeButton from '../Checkout/stripebutton';
import Search from './SearchStock';
import StockChart from './StockChart';
import StockTable from './TableStock';
import './usermarket.css'


function StockDashboard() {
  const [stock, setStock] = useState("");
  function getInput(stockName) {

    const API_KEY = '4b46d53b81f8b8f75c9b7843503bce85';
    let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockName}&outputsize=compact&apikey=${API_KEY}`;



    fetch(API_Call)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          console.log(data);
          var stockChartXValuesFunction = [];
          var stockChartYValuesFunction = [];
          var stockVolumeFunction = [];
          var stockPriceFunction = [];
          for (var key in data['Time Series (Daily)']) {
            stockChartXValuesFunction.push(key);
            stockChartYValuesFunction.push(data['Time Series (Daily)'][key]['1. open']);
            stockVolumeFunction.push(data['Time Series (Daily)'][key]['6. volume']);
            stockPriceFunction.push(data['Time Series (Daily)'][key]['4. close']);

          }

          // console.log("stockChartXValuesFunction", stockChartXValuesFunction[0]);
          // console.log("stockVolumeFunction", stockVolumeFunction[0]);

          setStock({
            stockName: stockName,
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction,
            stockPrice: stockPriceFunction[0],
            stockVolume: stockVolumeFunction[0],
            stockChange: (((stockChartYValuesFunction[0] / stockChartYValuesFunction[1]) - 1) * 100)
          });
        }
      )

  }
  return (
    <div className="father-cont">
      <Search get={getInput} />
      <StockChart stock={stock} />
      <StockTable stock={stock} />
    </div>
  );
}

export default StockDashboard;

{/* <div className="checkout">

<StripeButton price="648" />

</div> */}