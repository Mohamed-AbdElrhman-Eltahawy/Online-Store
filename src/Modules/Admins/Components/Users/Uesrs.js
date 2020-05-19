import React from "react";
import ReactorComponent from "Core/component/reactor.component";
import { Link } from "react-router-dom";
import { title, description } from "core/metaData";
export default class users extends ReactorComponent {
  
  init(){
    title('Users Page');
    description('Users Page Description')
  }

  render() {
    return (
      <div id="container">
        <Link to="/">Back Home...</Link>
        <h1 onClick={() => this.setState({ number: this.state.number + 1 })}>
          Hello worled
        </h1>
      </div>
    );
  }
}
