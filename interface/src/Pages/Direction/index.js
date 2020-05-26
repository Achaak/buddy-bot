import React from 'react';
import { Grid } from '@material-ui/core'

import 'react-nipple/lib/styles.css';

import { Map, Joystick, DistanceSensor, Page } from './../../Components'

const Direction = ({ socket }) => {

  return (
    <Page className="page">
      <Map socket={socket} />

      <Grid item sm={12}>
        <DistanceSensor socket={socket} />
        <Joystick socket={socket} />
      </Grid>
    </Page>
  )
}

export default Direction