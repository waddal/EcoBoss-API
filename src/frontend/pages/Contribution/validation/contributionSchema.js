import * as yup from 'yup';

const contributionSchema = yup.object().shape({
  activity: yup.string().required('Activity is required').min(4, 'Add some more detail please'),
  description: yup
    .string()
    .required('Description is required')
    .min(6, 'A descriptive description please'),
});

export default contributionSchema;
