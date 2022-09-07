import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';

import schema from '../../validation/contributionSchema';

import PageWrapper from '../../components/PageWrapper';

const initialFormValues = {
  activity: '',
  description: '',
};
const initialFormErrors = {
  activity: '',
  description: '',
};

const Contribution = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: '',
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.DEV_API_URL}activities/`, formValues)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReset = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <PageWrapper>
      <StyledContribution>
        <FormContainer>
          <header>
            <h1>Have a suggestion?</h1>
          </header>
          <form onSubmit={handleSubmit}>
            <label htmlFor="activity">
              Activity:
              <input
                type="text"
                placeholder="Activity"
                name="activity"
                value={formValues.activity}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
            <label htmlFor="description">
              Description:
              <input
                type="text"
                placeholder="Description"
                name="description"
                value={formValues.description}
                onChange={handleChange}
                autoComplete="off"
              />
            </label>
            <ButtonContainer>
              <button onClick={handleReset}>Reset</button>
              <button onClick={handleSubmit} disabled={disabled}>
                Submit
              </button>
            </ButtonContainer>
          </form>
        </FormContainer>
      </StyledContribution>
    </PageWrapper>
  );
};

export default Contribution;

const StyledContribution = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const FormContainer = styled.div`
  width: 80%;
  height: fit-content;
  border: 1px solid #ccc;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);

  header {
    padding: 8px 12px;
    border-bottom: 1px solid #ccc;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-right: 1px solid #ccc;
    padding: 12px;
  }

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 5px;
    padding-left: 5px;
  }

  section {
    display: flex;
    padding-bottom: 4px;
    margin-left: 8px;
  }

  select,
  input {
    height: 24px;
    width: 100%;
    margin: 0% 4px;
    text-indent: 2px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  height: 20%;
  padding: 0% 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 16px;
    margin: 10px 0%;
    &:last-of-type {
      margin-left: 10px;
    }
    box-sizing: border-box;
  }
`;
