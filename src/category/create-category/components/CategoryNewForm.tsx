import { yupResolver } from '@hookform/resolvers/yup';
import { LoadingButton } from '@mui/lab';
import { Button, FormLabel, Paper, Stack } from '@mui/material';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { FormProvider, RHFEditor, RHFTextField } from '../../../common/components/hook-form';
import useShowSnackbar from '../../../common/hooks/useMessage';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import axiosInstance from '../../../common/utils/axios';
import { IFormNewCategory } from '../interface';
import { NewCategorySchema } from '../schema';

const CategoryNewForm = () => {
  const navigate = useNavigate();

  const { showErrorSnackbar, showSuccessSnackbar } = useShowSnackbar();

  const methods = useForm<IFormNewCategory>({
    resolver: yupResolver(NewCategorySchema),
    defaultValues: {
      name: '',
      description: '',
    },
  });
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { isSubmitting, errors },
  } = methods;

//   useEffect(() => {
//     (async () => {
//       if (idProduct && data) {
//         try {
//           reset({
//             name: data?.name || '',
//             description: data?.description || '',
//           });
//         } catch (error) {}
//       }
//     })();
//   }, [reset, idProduct, data]);

//   const { mutate, error } = useCreateProduct({
//     onSuccess: () => {
//       showSuccessSnackbar(`Tạo sản phẩm thành công`);
//       navigate(PATH_DASHBOARD.product.list);
//     },
//     onError: () => {
//       showErrorSnackbar(`Tạo sản phẩm thất bại, ${error}`);
//     },
//   });
//   const { mutate: mutateUpdate, error: errorUpdate } = useUpdateProduct({
//     onSuccess: () => {
//       showSuccessSnackbar(`Cập nhật sản phẩm thành công`);
//       navigate(PATH_DASHBOARD.product.list);
//     },
//     onError: () => {
//       showErrorSnackbar(`Cập nhật sản phẩm thất bại, ${errorUpdate}`);
//     },
//   });

  const onSubmit = async (dataSubmit: IFormNewCategory) => {
    try {
        const res = axiosInstance.post('https://be-node.onrender.com/category', {...dataSubmit, description: dataSubmit.description.replace(/<\/?[^>]+(>|$)/g, "")});
        console.log('res', res)
        showSuccessSnackbar(`Tạo danh mục thành công`);
        navigate(PATH_DASHBOARD.category.list);
    } catch (e: any) {
        showErrorSnackbar(`Cập nhật sản phẩm thất bại, ${e.message}`);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="row" spacing={3}>
        <Stack direction="column" spacing={3} width={'70%'}>
        <Stack direction="column" spacing={3}>
      <Paper elevation={3}>
        <Stack spacing={3} padding={3}>
          <RHFTextField name="name" label={'Thêm mới danh mục'} />

          <Stack spacing={1}>
            <FormLabel sx={{ marginLeft: '14px' }}>
              {'Mô tả chi tiết'}
            </FormLabel>
            <RHFEditor name="description" />
          </Stack>
        </Stack>
      </Paper>
    </Stack>
        </Stack>
        <Stack width={'30%'} spacing={3}>
        </Stack>
      </Stack>
      <Stack
        direction={'row'}
        width={'100%'}
        alignItems={'center'}
        justifyContent={'flex-end'}
        spacing={3}
        mt={3}
      >
        <LoadingButton
          variant="contained"
          size="large"
          type="submit"
          loading={isSubmitting}
        >
          Tạo mới danh mục
        </LoadingButton>
        <Button
          color="inherit"
          variant="contained"
          size="large"
          onClick={() => navigate(PATH_DASHBOARD.category.list)}
        >
          Hủy
        </Button>
      </Stack>
    </FormProvider>
  );
};

export default CategoryNewForm;
