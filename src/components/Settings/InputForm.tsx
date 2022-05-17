/* eslint-disable react-hooks/exhaustive-deps */
import { ApolloError } from '@apollo/client';
import { FormControl, FormHelperText, Input, InputLabel } from '@mui/material';
import React, { useEffect } from 'react';
import useGetGuildSettings, { GuildSettingsType } from '../../hooks/settings';
import PageLoader from '../Page/PageLoader';

type Props = {
  data: GuildSettingsType;
  error: ApolloError | undefined;
  loading: boolean;
};

export default function InputForm(props: Props): any {
  const { data, loading, error } = props;

  if (loading) return <PageLoader />;
  if (!data) return null;
  return (
    <FormControl>
      <InputLabel htmlFor="my-input">Email address</InputLabel>
      <Input
        id="my-input"
        aria-describedby="my-helper-text"
        defaultValue={data.server_id}
      />
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
}
