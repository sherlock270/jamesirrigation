import React from "react";

class Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: ""
    };
  }

  render() {
    return (
      <div>
        <p>Request an appointment</p>
      </div>
    );
  }
}

export default Request;
