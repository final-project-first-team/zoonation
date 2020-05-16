import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import PaymentIcon from '@material-ui/icons/Payment';

const useStyles = makeStyles({
  root: {
    width: 500,
    height: '300px',
    background: '#907C60',
  },
  // forzoo: {
  //   width: 500,
  //   height: '300px',
  //   background: '#907C60',
  // },
  // ourprj: {
  //   width: 500,
  //   height: '300px',
  //   background: 'transparent',
  // },
  // gendon: {
  //   width: 500,
  //   height: '300px',
  //   background: '#907C60',
  // },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction /* className={classes.forzoo} */ label="Donation for Zoo" icon={<PaymentIcon />} />
      <BottomNavigationAction /* className={classes.ourprj} */ label="Our Project" icon={<PaymentIcon />} />
      <BottomNavigationAction /* className={classes.gendon} */ label="General Donation" icon={<PaymentIcon />} />
    </BottomNavigation>
  );
}
