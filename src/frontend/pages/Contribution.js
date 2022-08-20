import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import schema from '../validation/activitySchema';

import PageWrapper from '../components/PageWrapper';

const initialFormValues = {
  activity: '',
  description: '',
  effectiveness: 0,
  requirements: '',
};

const Contribution = () => {
  const [formValues, setFormValues] = useState(initialFormValues);

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
    console.log('submitting: ', formValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <PageWrapper>
      <StyledContribution>
        <h1>Contribution page</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="activity">
            <input
              type="text"
              placeholder="Activity"
              name="activity"
              value={formValues.activity}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="description">
            <input
              type="text"
              placeholder="Description"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="requirements">
            <input
              type="text"
              placeholder="Requirements"
              name="requirements"
              value={formValues.requirements}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="effectiveness">
            <input
              type="number"
              placeholder="Effectiveness"
              name="effectiveness"
              value={formValues.effectiveness}
              onChange={handleChange}
            />
          </label>
          <button>Suggest</button>
        </form>
      </StyledContribution>
    </PageWrapper>
  );
};

export default Contribution;

const StyledContribution = styled.div`
  form {
    display: flex;
    flex-direction: column;
  }
`;
