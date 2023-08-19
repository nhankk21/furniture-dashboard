import { Container } from '@mui/material';
import Page from '../../common/components/Page';
import useSettings from '../../common/hooks/useSettings';
import CategoryNewForm from './components/CategoryNewForm';
import CategoryNewHeader from './components/CategoryNewHeader';

const CreateProductContainer = () => {
  const { themeStretch } = useSettings();
//   const idProduct = searchParams.get('id');

  return (
    <Page title={'Tạo mới sản phẩm'}>
      <Container maxWidth={themeStretch ? false : 'xl'}>
        <CategoryNewHeader />
        <CategoryNewForm />
      </Container>
    </Page>
  );
};

export default CreateProductContainer;
