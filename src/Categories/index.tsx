import React from 'react';
import { Box } from 'grommet';
import { getTopNewsInAllCategories } from '../utils';

type CategoriesProps = {
  country: string;
}
const Categories:React.FC<CategoriesProps> = ({country}) => {
  getTopNewsInAllCategories(country, 5);
  return (
    <Box>
      hello
    </Box>
  )
}

export default Categories;