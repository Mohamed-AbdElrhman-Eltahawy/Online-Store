import React from "react";
import events from "@flk/events";
import ReactorComponent from "Core/component/reactor.component";
export default class Form extends ReactorComponent {
  isValidForm = true;
  /**
   * submit form
   *
   */
  /**
   *
   *@inheritdoc
   */
  submit(e) {
    e.preventDefault();
    e.stopPropagation();

    this.isValidForm = true;

    //validate all inputs
    events.trigger("form.validation", this);

    //check if the form is valid
    //if not, then do not submit
    if (this.isValidForm === false) return;

    let formElemnt = e.target;
    if (this.props.onSubmit) {
      this.props.onSubmit(e, formElemnt);
    }
  }
  render() {
    return (
      <form noValidate={true} onSubmit={this.submit.bind(this)}>
        {this.props.children}
      </form>
    );
  }
}
