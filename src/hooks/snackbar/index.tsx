import { useContext } from 'react';

import { SnackbarContext } from '../../providers/snackbar/SnackbarProvider';

const useSnackBars = () => useContext(SnackbarContext);

export default useSnackBars;
