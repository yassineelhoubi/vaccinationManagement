import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertColor, AlertProps } from '@mui/material/Alert';
import { SnackBarProps } from "../interfaces"
import { useEffect } from 'react';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const CustomizedSnackbar:React.FC<SnackBarProps> = ({text, color , state, setState}) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(state);
    console.log(state);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setState(false);
  };


  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={state} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={color as AlertColor} sx={{ width: '100%' }}>
          { text }
        </Alert>
      </Snackbar>
    </Stack>
  );
}
