import * as Yup from 'yup';
const MAX_DESCRIPTION_LENGTH = 100000;

export const NewCategorySchema = Yup.object().shape({
  name: Yup.string().required('Vui lòng không để trống tên'),
  description: Yup.string()
    .required('Vui lòng không để trống mô tả')
    .max(
      MAX_DESCRIPTION_LENGTH,
      `Mô tả không được vượt quá ${MAX_DESCRIPTION_LENGTH} ký tự`
    ),
});
