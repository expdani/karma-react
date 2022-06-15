import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useSnackbar as useDefaultSnackbar } from 'notistack';

type Props = {
  variant?: 'success' | 'info' | 'warning' | 'error';
  message: string;
  key: string;
  ref?: any;
};

const SimpleAlert = React.forwardRef((props: Props, ref) => {
  const { variant, message, key } = props;
  const { closeSnackbar } = useDefaultSnackbar();

  function onHandleClose() {
    closeSnackbar(key);
  }

  return (
    <Alert
      ref={ref as React.RefObject<HTMLDivElement>}
      onClose={onHandleClose}
      severity={variant || 'success'}
      sx={{ width: '100%' }}
      variant="filled"
      elevation={6}
    >
      {message}
    </Alert>
  );
});

export default SimpleAlert;
