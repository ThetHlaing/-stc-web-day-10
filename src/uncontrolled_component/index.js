import React, { Component } from "react";

class NameForm extends Component {  
  render() {
    return (
      <form>
        <label>
          Name:
          <input type="text"/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default NameForm;
