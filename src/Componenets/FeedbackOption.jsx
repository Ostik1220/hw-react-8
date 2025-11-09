import { Component } from "react";
import Statistics from "./Statistics";

class FeedbackOption extends Component {

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
    if (this.state.good === 0 && this.state.neutral === 0 && this.state.bad === 0) {
        return(<div>
        <button onClick={this.goodBtn}>Good</button>
        <button onClick={this.neutralBtn}>Neutral</button>  
        <button onClick={this.badBtn}>Bad</button>
        <h2>No feedback given</h2>
        </div>);
    }
       return(<div>
        <button onClick={this.goodBtn}>Good</button>
        <button onClick={this.neutralBtn}>Neutral</button>
        <button onClick={this.badBtn}>Bad</button>
        <Statistics good={this.state.good} bad={this.state.bad} neutral={this.state.neutral}/>
        </div>);
  }     
}
export default FeedbackOption;
