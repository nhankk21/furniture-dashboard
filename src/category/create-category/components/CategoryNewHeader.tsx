import React from 'react';
import HeaderBreadcrumbs from '../../../common/components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../common/routes/paths';
import { BREADCUMBS } from '../../../common/constants/common.constants';

const CategoryNewHeader = () => {
  return (
      <HeaderBreadcrumbs
        heading={'Danh mục sản phẩm mới'}
        links={[
          { name: BREADCUMBS.DASHBOARD, href: PATH_DASHBOARD.root },
          { name: BREADCUMBS.CATEGORY_NEW_VN, href: PATH_DASHBOARD.category.new },
          { name: 'Danh mục mới' },
        ]}
      />
  );
};

export default CategoryNewHeader;
