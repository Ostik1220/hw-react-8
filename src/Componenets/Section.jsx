import { Component } from "react";
import FeedbackOption from "./FeedbackOption";

class Section extends Component {
    state = {
        title: this.props.title,
    }  

    render() {
        return ((<div>
        <h2>{this.state.title}</h2>
        <FeedbackOption />
    </div>));
    }
}

export default Section;