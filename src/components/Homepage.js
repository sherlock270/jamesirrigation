import React from "react";
import Login from "./Login";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal,
      toggleModal: props.toggleModal
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showModal !== this.props.showModal) {
      this.setState({ showModal: this.props.showModal });
    }
  }

  render() {
    return (
      <div className="homepage-wrapper">
        {this.state.showModal ? (
          <Login toggleModal={this.state.toggleModal} />
        ) : null}
      </div>
    );
  }
}

export default Homepage;
