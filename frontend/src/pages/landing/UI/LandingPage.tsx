import { Grid, GridItem } from '@chakra-ui/react';

export const LandingPage = () => (
  <Grid templateColumns='repeat(4, 1fr)'>
    <GridItem />
    <GridItem
      colSpan={2}
      backgroundColor='teal'
    >
      test
    </GridItem>
    <GridItem />
  </Grid>
);
