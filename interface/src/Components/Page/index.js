import React from 'react';
import { Grid } from '@material-ui/core'
import classNames from 'classnames';

import './Page.scss'

const Page = ({children, className}) => {

  return (
    <Grid container className={classNames("page", className)}>
      { children }
    </Grid>
  )
}

export default Page