import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import schema from '../validation/activitySchema';

import PageWrapper from './PageWrapper';

const initialFormValues = {
  activity: '',
  description: '',
  type: [],
};
const initialFormErrors = {
  activity: '',
  description: '',
  type: '',
};

const ActivityForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

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
    console.log('submitting: ', formValues);
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
      <StyledActivityForm>
        <caption>New Activity</caption>
        <FormContainer>
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

            <label htmlFor="Type">
              Type:
              <section>
                <label htmlFor="Reduce">
                  Reduce
                  <input type="checkbox" name="type" value="Reduce" onChange={handleChange} />
                </label>
                <label htmlFor="Reuse">
                  Reuse
                  <input type="checkbox" name="type" value="Reuse" onChange={handleChange} />
                </label>
                <label htmlFor="Recycle">
                  Recycle
                  <input type="checkbox" name="type" value="Recycle" onChange={handleChange} />
                </label>
              </section>
            </label>
            <ButtonContainer>
              <button onClick={handleReset}>Reset</button>
              <button onClick={handleSubmit} disabled={disabled}>
                Submit
              </button>
            </ButtonContainer>
          </form>
        </FormContainer>
      </StyledActivityForm>
    </PageWrapper>
  );
};

export default ActivityForm;

const StyledActivityForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin: 5% 0%;

  caption {
    align-self: flex-start;
    font-size: 0.8rem;
    font-weight: 800;
    color: white;
    padding: 8px;
  }
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
