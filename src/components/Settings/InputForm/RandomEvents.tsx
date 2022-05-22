import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import { GuildSettingsType } from '../../../hooks/settings';
import PropertySwitch from '../../form/PropertySwitch';
import PageLoader from '../../page/PageLoader';
import HelpIcon from '../../form/HelpIcon';
import { makeStyles } from '@mui/styles';

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formValues: GuildSettingsType;
  loading: boolean;
};

const useStyles = makeStyles((theme) => ({
  formContainer: {
    display: 'flex',
    maxWidth: '50%',
  },
}));

export default function RandomEventsSettings(props: Props) {
  const { loading, handleChange, formValues } = props;
  const classes = useStyles();
  if (loading) return <PageLoader />;

  if (formValues)
    return (
      <FormGroup className={classes.formContainer}>
        <PropertySwitch
          name="random_message_events_enabled"
          legend="Random events"
          defaultChecked={formValues.random_message_events_enabled}
          checked={formValues.random_message_events_enabled}
          helperText="This enables or disables chat random events for your server."
          onChange={handleChange}
        />
      </FormGroup>
    );
  return <PageLoader />;
}
