import React from "react";
import PortfolioService from "../../../../services/Portfolio-Service";
import AuthService from "../../../../services/auth.service";
import axios from "axios";
import StockRow from "../../../Stocks/StockRow";
import '../table.css'
import ProfileFooter from "../../PrFooter";

const currentUser = AuthService.getCurrentUser();

class Portfolio1 extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            portfolios: [],
            stockPrices: {},
            isLoaded: false,
            value: ''
        }
    }

 componentDidMount() {
     PortfolioService.getPortfolioPerAccount(currentUser.id).then((res) => {
     console.log(res.data);
            this.setState({ isLoaded: true, portfolios: res.data }); 
            const symbols = res.data.map(stock => {
                return stock.symbol;
            } )
            console.log("symbols:",symbols);
            const api_key = '246b90a994f3c966cd3cfd54ac7b81f9';
            const url = 'http://api.marketstack.com/v1/intraday/latest?access_key='+api_key+'&symbols='+symbols.join();
            console.log(url);
            return axios.get(url);
                })
                .then(res => {
                    console.log("stockData",res.data);
                    const stockPrices = {};
                    res.data.data.map(currentPrice => {
                             console.log("price:",currentPrice);
                             stockPrices[currentPrice.symbol]=currentPrice.close;
                             
                         })
                         console.log("stockprices",stockPrices);
                         this.setState({ stockPrices  });
                }).catch(error => console.log(error.res));
    }
   
    render() {
        const { isLoaded, portfolios,stockPrices} = this.state;
        const data = portfolios.filter(portfolios => portfolios.numShares > 0);
        

        if (!isLoaded) {
            return <div className="">
                <div className="" role="status">
                    <span className=""></span>
                </div>
            </div>
        }
        else {
            return (
                <>
                <ProfileFooter/>
            <div className="tableContainer">
                          
                <table className="tableMain" >
                    <thead>
                        <tr>
                            <th>Market</th>
                            <th>Units</th>
                            <th>Avg Price</th>
                            <th>Current Price</th>
                            <th>P/L</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {data.map(portfolio =>
                        <StockRow portfolio={portfolio} stockPrices={stockPrices}></StockRow>
                    )}
                    </tbody>            
                </table>
            </div>
            </>
            )
        }
    }
}

export default Portfolio1;
