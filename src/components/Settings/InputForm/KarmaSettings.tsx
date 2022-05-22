import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import { makeStyles } from '@mui/styles';
import { GuildSettingsType } from '../../../hooks/settings';
import PropertySwitch from '../../form/PropertySwitch';
import PageLoader from '../../page/PageLoader';
import HelpIcon from '../../form/HelpIcon';

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

export default function KarmaSettings(props: Props): any {
  const { loading, handleChange, formValues } = props;
  const classes = useStyles();
  if (loading) return <PageLoader />;

  if (formValues)
    return (
      <FormGroup className={classes.formContainer}>
        <PropertySwitch
          name="karma_enabled"
          legend="Karma system"
          defaultChecked={formValues.karma_enabled}
          checked={formValues.karma_enabled}
          helperText="With this option you can enable or disable the entire karma system. This includes automated reactions, related commands and counts."
          onChange={handleChange}
        />
        <PropertySwitch
          name="karma_reactions"
          legend="Automated karma reactions"
          defaultChecked={formValues.karma_reactions}
          checked={formValues.karma_reactions}
          helperText="With this option you can enable or disable automated karma (upvote and downvote) reactions on messages containing a file or a link."
          onChange={handleChange}
          disabled={!formValues?.karma_enabled}
          label={
            !formValues.karma_enabled ? (
              <HelpIcon
                tooltip="This option is only available when the karma system is enabled."
                placement="right"
              />
            ) : null
          }
        />
      </FormGroup>
    );
  return <PageLoader />;
}
