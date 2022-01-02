import React, { Component } from "react";
import "./styles.css";
import CustomInput from "./components/CustomInput";
import Button from "./components/Button";
// import { useNavigate } from 'react-router-dom';
import {

  Link
} from "react-router-dom";



export default class Signin extends Component {

  state = {
    email: "",
    password: ""
  };




  handleChange = e => {
    this.setState({ [e.currentTarget.id]: e.currentTarget.value });
  };

  render() {

    return (
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}
            handleChange={this.handleChange}
            type="password"
          />
          <Link to="/driver" style={{ textDecoration: 'none' }}>
            <Button type="button" color="primary" className="form__custom-button">
              Log in
            </Button>
          </Link>
          <br />
          <a href="/signup">Don't have an account? Sign up</a>
        </form>
      </div>
    );
  }
}
