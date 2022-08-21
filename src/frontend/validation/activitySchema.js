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
  type: yup.array().oneOf(['Reduce', 'Reuse', 'Recycle']).optional(),
});

export default activitySchema;
