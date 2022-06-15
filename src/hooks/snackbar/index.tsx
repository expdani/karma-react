import React, { useRef } from 'react';
import { useSnackbar as useDefaultSnackbar, OptionsObject } from 'notistack';
import ErrorSnackbar from '../../components/snackbar/ErrorSnackbar';
import SimpleAlert from '../../components/snackbar/SimpleAlert';

export default function useEnqueueSnackbar() {
  const { enqueueSnackbar } = useDefaultSnackbar();

  const pushSnackbar = (
    message: string,
    // extend the default options object
    options?: OptionsObject &
      Partial<{
        variant: 'success' | 'error' | 'warning' | 'info';
        error?: string;
        autoHideDuration?: number;
      }>
  ) => {
    enqueueSnackbar(message, {
      ...options,
      content: (key: any) => {
        const { variant, error } = options || {
          variant: undefined,
        };

        if (variant === 'error' && error)
          return <ErrorSnackbar message={message} error={error} key={key} />;
        return <SimpleAlert variant={variant} key={key} message={message} />;
      },
    });
  };

  return pushSnackbar;
}
