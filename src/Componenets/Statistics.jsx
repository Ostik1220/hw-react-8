import { Component } from "react";

class Statistics extends Component {
    render() {
        const { good = 0, neutral = 0, bad = 0 } = this.props;
        const total = good + neutral + bad;
        const positivePercentage = total ? Math.round((good / total) * 100) : 0;

        return (
            <div>
                <h2>Statistics</h2>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
            </div>
        );
    }
}

export default Statistics;