import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase()});
    }

    handleSubmit(event) {
        this.props.get(this.state.value);
        event.preventDefault();
        console.log("handleSubmit");

    }

    render() {
        return (
            <div className="search-Container">
                <form onSubmit={this.handleSubmit}>
                    <input className="searchinput" type="text" placeholder="Stock Symbol...(AAPL etc.)" value={this.state.value.toUpperCase()} onChange={this.handleChange} />
                    <button className="search-button">Search</button>
                </form>
            </div>

        );
    }
}
