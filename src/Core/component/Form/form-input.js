import React from "react";
import events from "@flk/events";
import Is from "@flk/supportive-is";
import ReactorComponent from "Core/component/reactor.component";

export default class FormInput extends ReactorComponent {
  state = {
    validationError: null,
  };

  messages = {
    required: "This field is required",
    email: "Invalid email address",
  };

  constructor(props) {
    super(props);

    this.inputReference = React.createRef();

    events.on("form.validation", (form) => {
      //validate the input

      this.validate({
        target: this.input,
      });
      if (this.get("validationError")) {
        form.isValidForm = false;
      }
    });
  }

  /**
   * @inheritdoc
   */

  ready() {
    this.input = this.inputReference.current;
  }

  /**
   * submit form
   *
   */
  /**
   *
   *@inheritdoc
   */

  // Email validation
  validate = (e) => {
    let input = e.target,
      value = input.value;

    //reset validation input
    let inputValidation = null;

    //check if the email input is not Empty
    if (this.props.required === true && Is.empty(value)) {
      inputValidation = this.messages.required;
    }

    //check if the input value is a valid email address
    if (
      this.props.type === "email" &&
      inputValidation === null &&
      !Is.empty(value) &&
      !Is.email(value)
    ) {
      inputValidation = "Invalid Email Address";
    }
    this.set("validationError", inputValidation);
  };

  render() {
    return (
      <div className="form-group">
        <input
          ref={this.inputReference}
          type={this.props.type}
          name={this.props.name}
          className={this.props.className}
          placeholder={this.props.placeholder}
          onInput={this.validate.bind(this)}
        />
        {this.get("validationError") !== null && (
          <label className="error">{this.get("validationError")}</label>
        )}
      </div>
    );
  }
}
