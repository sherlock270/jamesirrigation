import React from "react";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: props.showModal,
      toggleModal: props.toggleModal,
    };
  }

  render() {
    return (
      <div className="homepage-wrapper">
        <p>Homepage</p>
      </div>
    );
  }
}

export default Homepage;
