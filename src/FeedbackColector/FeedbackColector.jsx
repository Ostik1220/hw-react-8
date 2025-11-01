import { Component } from "react";

class FeedbackColector extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
        total: 0
        };

    goodBtn = () => {
        this.setState((prevState) => ({
            good: prevState.good + 1
        }));
    }

    neutralBtn = () => {
        this.setState((prevState) => ({
            neutral: prevState.neutral + 1
        }));
    }

    badBtn = () => {
        this.setState((prevState) => ({
            bad: prevState.bad + 1
        }));
    }

    countTotalFeedback = () => {
        this.setState((prevState) => ({
            total: prevState.good + prevState.neutral + prevState.bad
        }))
    }

  render() {
    return (<div>
        <h1>Please leave feedback</h1>
        <button onClick={this.goodBtn}>Good</button>
        <button onClick={this.neutralBtn}>Neutral</button>
        <button onClick={this.badBtn}>Bad</button>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>total: {this.state}</p>
    </div>);
  }     
}
export default FeedbackColector;
