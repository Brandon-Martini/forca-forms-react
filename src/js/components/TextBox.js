import React, { Component } from "react";

export class TextBox extends Component {
  constructor() {
    super();

    this.state = {
      value: "",
      displayError: false
    };
  }

  handleChange = e => {
    var { value, displayError } = this.state;
    displayError = false;
    value = e.target.value;
    this.setState({ value, displayError });
  };

  handleBlur = e => {
    var displayError = this.state.displayError;
    displayError = false;
    var patternValid = e.target.value.match(this.props.pattern);
    if (!patternValid) {
      displayError = true;
    }
    this.setState({ displayError });
  };

  render = () => {
    return (
      <div className={this.props.outerClasses}>
        <input
          className={this.props.inputClasses}
          type="text"
          autoComplete={this.props.autoComplete}
          autoFocus={this.props.autoFocus}
          dirname={this.props.dirname}
          disabled={this.props.disabled}
          form={this.props.form}
          formNoValidate={this.props.formNoValidate}
          maxLength={this.props.maxLength}
          name={this.props.name}
          pattern={this.props.pattern}
          placeholder={this.props.placeholder}
          readOnly={this.props.readOnly}
          required={this.props.required}
          size={this.props.size}
          step={this.props.step}
          value={this.state.value}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <span className={this.props.errorMessageClasses}>
          {this.state.displayError ? this.props.errorMessage : null}
        </span>
        
      </div>
    );
  };
}
