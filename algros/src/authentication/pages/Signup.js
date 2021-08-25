import React, { useCallback, useReducer } from "react";

import Input from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from "../../shared/util/validators";
import "./Signup.css";

const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

const Signup = () => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      user: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);

  const accountSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // send form data to backend
  };

  return (
    <form className="signup-form" onSubmit={accountSubmitHandler}>
      <Input
        id="user"
        element="input"
        type="text"
        label="Username"
        validators={[VALIDATOR_MINLENGTH(3)]}
        errorText="Please enter a username with at least 3 charachters"
        onInput={inputHandler}
      />
      <Input
        id="email"
        element="input"
        type="text"
        label="Email"
        validators={[VALIDATOR_EMAIL(5)]}
        errorText="Please enter a valid email address"
        onInput={inputHandler}
      />
      <Input
        id="password"
        element="input"
        type="text"
        label="Password"
        validators={[VALIDATOR_MINLENGTH(6)]}
        errorText="Please enter a password with at least 6 charachters"
        onInput={inputHandler}
      />
      <Button className="signup-form__submit-button" type="submit" disabled={!formState.isValid}>
        Create account
      </Button>
    </form>
  );
};

export default Signup;
