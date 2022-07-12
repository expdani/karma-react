import * as React from 'react';
import { Icon } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import iconKeys from '../icon/iconKeys';

interface Props {
  loading: boolean;
  onSubmit: (event: any) => void;
  text: string;
}

export default function SubmitButton(props: Props): any {
  const { loading, onSubmit, text } = props;

  return (
    <LoadingButton
      color="success"
      loading={loading}
      loadingPosition="start"
      startIcon={<Icon>{iconKeys.Save}</Icon>}
      variant="contained"
      onClick={onSubmit}
    >
      {text}
    </LoadingButton>
  );
}
