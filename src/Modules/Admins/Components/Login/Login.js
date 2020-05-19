import React from "react";
import ReactorComponent from "Core/component/reactor.component";
import Form from "core/component/Form/form";
import { title, description } from "core/metaData";
import "./Login.scss";
import FormInput from "core/component/Form/form-input";

export default class Login extends ReactorComponent {
  state = {
    validation: {
      email: null, //email input
      password: null, //password input
    },
  };

  init() {
    //My website title
    title("Login Page");

    //My website description
    description("Login Page Description");
  }

  login = (e) => {
    console.log("Success Login !");
  };

  render() {
    return (
      <div id="login-page">
        <h1>Login Page</h1>
        <Form onSubmit={this.login}>
          <FormInput
            required={true}
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
          />
          <FormInput
            className="form-control"
            required={true}
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <div className="button-wrapper">
            <button>Login</button>
          </div>
        </Form>
      </div>
    );
  }
}
