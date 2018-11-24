import React, { Component } from "react";

class LoginCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: false,
      loginCount: 0
    };
    this.clickEventHandler = this.clickEventHandler.bind(this);
  }

  clickEventHandler() {
    this.setState({
      isLogin: !this.state.isLogin
    });
    this.setState((state) => ({
      loginCount: !state.isLogin ? state.loginCount : state.loginCount + 1
    }));    
  }

  render() {
    return (
      <div className="Form">
        <button onClick={this.clickEventHandler}>
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
