import { Component } from "react";
import Statistics from "./Statistics";

class FeedbackColector extends Component {

    state = {
        good: 0,
        neutral: 0,
        bad: 0,
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

  render() {
    return(<div>
                <h1>Please leave feedback</h1>
        <button onClick={this.goodBtn}>Good</button>
        <button onClick={this.neutralBtn}>Neutral</button>
        <button onClick={this.badBtn}>Bad</button>
        <Statistics good={this.state.good} bad={this.state.bad} natural={this.state.neutral}/>
        </div>);
  }     
}
export default FeedbackColector;
