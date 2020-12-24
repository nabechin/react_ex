import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createPost } from "../actions";

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
    // handleSubmitによって、prevent.defaultが自動で呼び出される
    this.props.createPost(formValue);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
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

export default connect(null, { createPost })(
  reduxForm({ form: "postForm" })(PostCreate)
);
