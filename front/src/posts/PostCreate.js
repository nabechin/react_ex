import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createPost } from "../actions";
import validation from "./validation";

class PostCreate extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return <div style={{ color: "red" }}>{error}</div>;
    }
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}></input>
        {this.renderError(meta)}
      </div>
    );
  };
  onSubmit = (formValues) => {
    // handleSubmitによって、prevent.defaultが自動で呼び出される
    this.props.createPost(formValues);
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
  reduxForm({ form: "postForm", validate: validation })(PostCreate)
);
