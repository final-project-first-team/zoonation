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
      <BottomNavigationAction label="Donation for Zoo" icon={<PaymentIcon />} />
      <BottomNavigationAction label="Our Project" icon={<PaymentIcon />} />
      <BottomNavigationAction label="General Donation" icon={<PaymentIcon />} />
    </BottomNavigation>
  );
}
