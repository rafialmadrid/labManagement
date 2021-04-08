import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="2" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}

export function Email(props) {
  return (
    <div className="form-group">
      <label> Email Address</label>
      <input type="email" className="form-control" {...props} />
    </div>
  );
}

export function Sex(props) {
  return (
    <div class="row">
      <div class="col-sm-10">

        <div class="col-sm-10">
        <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
          <label class="form-check-label" for="gridRadios1">
              Male
          </label>
        </div>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
          <label class="form-check-label" for="gridRadios1">
              Female
          </label>
        </div>
        </div>
    </div>   
  );
}
