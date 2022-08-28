import * as yup from 'yup';

const activitySchema = yup.object().shape({
  activity: yup.string().required('Activity is required').min(6, 'Add some more detail please'),
  description: yup
    .string()
    .required('Description is required')
    .min(6, 'How is this activity effective?'),
  theme: yup.number().required('Theme is required').oneOf([0, 1, 2, 3, 4, 5, 6, 7]),
  boss: yup.number().required('Boss is required').oneOf([0, 1, 2, 3]),
  requirements: yup.string().optional(),
  effectiveness: yup.number().optional(),
  approved: yup.boolean().optional(),
});

export default activitySchema;
