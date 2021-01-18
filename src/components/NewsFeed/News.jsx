import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './newsstyles.css'

import axios from "axios";

// const news_api = "https://finnhub.io/api/v1/company-news?symbol=AAPL&from=2020-12-21&to=2020-12-21&token=bvgjokf48v6oab5303kg";

const api2 = "https://stocknewsapi.com/api/v1?tickers=AAPL,HSBC,MSFT,TRX,TRV,STZ,PG,TRIP,ADBE,TWTR,TSLA,NVDA,AMZN&items=50&token=7aafvdrkeejbrahvhiw9nyrghycpcbxupikc9l99";

export default class News extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: "",
            isLoaded: false
        }
    }

    componentDidMount() {

        axios.get(api2)
            .then(res => {
                const items = res.data;
                this.setState({
                    isLoaded: true,
                    items
                })
            });

      
    
        }

    render() {
        const { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
        }
        else {

            return (
                <div className="news-cont">
                    <nav className="navbar navbar-light bg-light NavigationBar">
                        <span className="navbar-brand mb-0">News Feed</span>
                    </nav>
                    

                    {items.data.map(news =>
                        <div className="card mb-3 ItemCont" style={{ maxWidth: '80%' }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={news.image_url} class="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">{news.title}</h5>
                                        <p className="card-text">{news.text}</p>
                                        <p className="card-text"><small className="text-muted"><a href={news.news_url} target={"_blank"}>{news.source_name}</a></small></p>
                                    </div>
                                </div>
                            </div>
                         </div>



                    )}

                    
               </div>

            )


        }
    }




}




