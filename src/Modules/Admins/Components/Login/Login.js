import "./Login.scss";
import user from "user";
import React from "react";
import { mapObject } from "reactor/helpers";
import { login } from "../../Services/auth";
import { navigationTo } from "../../router";
import Form from "reactor/component/Form/form";
import { title, description } from "reactor/metaData";
import FormInput from "reactor/component/Form/form-input";
import ReactorComponent from "reactor/component/reactor.component";

export default class Login extends ReactorComponent {
  /**
   * @inheritdoc
   */
  state = {};

  init() {
    //My website title
    title("Login Page");

    //My website description
    description("Login Page Description");
  }

  login = async (e) => {
    this.set("errors", null); //make sure to clear previous error
    try {
      let { data } = await login(e.target);
      user.logIn(data.user);
      navigationTo("/users");
    } catch (error) {
      let errors = error.response.data.errors;

      this.set("errors", errors);

      console.log(errors);
    }
  };

  /**
   * display errors that coming from api
   *
   */
  displayErrors() {
    this.errors = this.get("errors");
    return mapObject(this.errors, (key, value) => {
      return <div key={key}>{value}</div>;
    });
  }

  render() {
    return (
      <div id="login-page">
        <h1>Login Page</h1>

        <Form onSubmit={this.login}>
          {this.get("errors") && (
            <div className="error">{this.displayErrors()}</div>
          )}
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
