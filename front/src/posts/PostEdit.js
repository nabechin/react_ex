import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { editPost } from "../actions";
import _ from "lodash";

class PostEdit extends React.Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      <div style={{ color: "red" }}>{error}</div>;
    }
  };
  renderInput = ({ input, label }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input}></input>
        {this.renderError}
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.editPost(formValues);
  };
  render() {
    return (
      <div>
        <form className="ui form">
          <Field
            name="title"
            label="title"
            component={this.renderInput}
          ></Field>
          <Field
            name="content"
            label="content"
            component={this.renderInput}
          ></Field>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    initialValues: _.pick(
      state.posts[ownProps.match.params.id],
      "title",
      "content"
    ),
  };
};

export default connect(mapStateToProps, { editPost })(
  reduxForm({ form: "editForm" })(PostEdit)
);
