import { Component } from "react";

class Statistics extends Component {
    render() {
        const { good, neutral, bad } = this.props;
        const total = good + neutral + bad;
        const positivePercentage = total ? Math.round((good / total) * 100) : 0;
        return ((<div>
        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage}%</p>
    </div>));
    }
}

export default Statistics;