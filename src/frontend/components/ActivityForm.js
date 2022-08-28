import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as yup from 'yup';

import schema from '../validation/activitySchema';

const initialFormValues = {
  activity: '',
  description: '',
  theme: null,
  boss: null,
  requirements: '',
  effectiveness: 0,
  isApproved: false,
};
const initialFormErrors = {
  activity: '',
  description: '',
  theme: '',
  boss: '',
  requirements: '',
  effectiveness: '',
  isApproved: '',
};

const ActivityForm = ({ active = initialFormValues }) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log('formValues: ', formValues);
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
    const formBody = {
      activity: formValues.activity,
      description: formValues.description,
      theme_id: formValues.theme,
      boss_id: formValues.boss,
      requirements: formValues.requirements,
      effectiveness: formValues.effectiveness,
      is_approved: formValues.approved,
    };
    e.preventDefault();
    axios
      .post(`${process.env.DEV_API_URL}activities`, formBody)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleReset = (e) => {
    console.log('resetting');
    e.preventDefault();
    setFormValues(initialFormValues);
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  // useEffect(() => {
  //   const { activity, description, theme_id, boss_id, requirements, effectiveness, isApproved } =
  //     active;
  //   setFormValues({
  //     activity: activity,
  //     description: description,
  //     theme: theme_id,
  //     boss: boss_id,
  //     requirements: requirements,
  //     effectiveness: effectiveness,
  //     isApproved: isApproved,
  //   });
  // }, [active]);

  return (
    <StyledActivityForm>
      <h2>New Form</h2>
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
          <label htmlFor="requirements">
            Requirements:
            <input
              type="text"
              placeholder="optional"
              name="requirements"
              value={formValues.requirements}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
          <label htmlFor="requirements">
            Effectiveness:
            <input
              type="number"
              placeholder="optional"
              name="effectiveness"
              value={formValues.effectiveness}
              onChange={handleChange}
              autoComplete="off"
            />
          </label>

          <label htmlFor="theme">
            Theme:
            <select type="dropdown" name="theme" onChange={handleChange} defaultValue={'---'}>
              <option value={null} disabled>
                ---
              </option>
              <option value={0}>Biodiversity</option>
              <option value={1}>Business, finance and economics</option>
              <option value={2}>Climate change</option>
              <option value={3}>Freshwater and water security</option>
              <option value={4}>Governance - law and rights</option>
              <option value={5}>Nature-based Solutions</option>
              <option value={6}>Ocean and coasts</option>
              <option value={7}>Protected areas and land use</option>
            </select>
          </label>

          <label htmlFor="boss">
            Boss:
            <select type="dropdown" name="boss" onChange={handleChange} defaultValue={'---'}>
              <option value={null} disabled>
                ---
              </option>
              <option value={0}>Air</option>
              <option value={1}>Land</option>
              <option value={2}>Ocean</option>
              <option value={3}>Water</option>
            </select>
          </label>

          <label htmlFor="approved" className="checkbox">
            Approved:
            <input type="checkbox" name="approved" onChange={handleChange} />
          </label>
          <ButtonContainer>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubmit} disabled={disabled}>
              Submit
            </button>
          </ButtonContainer>
        </form>
        <h4>{formErrors.activity}</h4>
        <h4>{formErrors.description}</h4>
        <h4>{formErrors.theme}</h4>
        <h4>{formErrors.boss}</h4>
      </FormContainer>
    </StyledActivityForm>
  );
};

export default ActivityForm;

const StyledActivityForm = styled.div`
  min-width: 600px;
  height: 100%;
  position: sticky;
  top: 0;
  margin-left: 16px;

  h2 {
    text-align: left;
    font-size: 0.8rem;
    font-weight: 800;
    color: white;
    padding: 8px;
    width: 111px;
  }
`;

const FormContainer = styled.div`
  width: 100%;
  height: fit-content;
  border: 1px solid #ccc;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: rgba(255, 255, 255, 0.1);
  padding-top: 8px;
  position: relative;

  header {
    padding: 8px 12px;
    border-bottom: 1px solid #ccc;
  }

  form {
    display: flex;
    flex-direction: column;
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

  .checkbox {
    position: absolute;
    top: -4px;
    left: 12px;
    font-size: 0.8rem;
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
