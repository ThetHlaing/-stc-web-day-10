import React, { Component } from "react";

class LoginCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      loginCount: 0
    };
  }

  render() {
    return (
      <div className="Form">
        <button>
          {this.state.isLogin ? "Logout" : "Login"}
        </button>
        <div>Total Login {this.state.loginCount}</div>
        {this.state.isLogin && (
          <React.Fragment>
            <h1>Welcome {this.props.name}</h1>            
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default LoginCount;
