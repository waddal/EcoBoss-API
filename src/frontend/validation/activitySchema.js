import * as yup from 'yup';

const activitySchema = yup.object().shape({
  activity: yup
    .string()
    .required('Username is required')
    .min(6, 'Username must contain at least 4 characters'),
  description: yup
    .string()
    .required('Description is required')
    .min(6, 'Description must be descriptive'),
  effectiveness: yup.number().optional(),
  requirements: yup.string().optional(),
});

export default activitySchema;
