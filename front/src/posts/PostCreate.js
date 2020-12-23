import React from "react";
import { Field, reduxForm } from "redux-form";

class PostCreate extends React.Component {
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}></input>
      </div>
    );
  };
  onSubmit = (formValue) => {
    console.log(formValue);
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className="ui form">
        <Field name="title" component={this.renderInput} label="title"></Field>
        <Field
          name="content"
          component={this.renderInput}
          label="content"
        ></Field>
        <button class="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({ form: "postForm" })(PostCreate);
