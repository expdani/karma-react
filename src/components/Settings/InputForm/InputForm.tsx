import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { Icon } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import useGetGuildSettings from '../../../hooks/settings';
import PageLoader from '../../page/PageLoader';
import iconKeys from '../../icon/iconKeys';
import KarmaSettings from './KarmaSettings';
import useUpdateGuildSettings from '../../../hooks/settings/save';
import RandomEventsSettings from './RandomEvents';
import SimpleSnackbar from '../../snackbar/SimpleSnackbar';

interface Props {
  children: React.ReactNode;
  index: number;
  value: number;
}

interface InputFormProps {
  selectedGuild: string;
}

function TabPanel(props: Props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function InputForm(props: InputFormProps): any {
  const { selectedGuild } = props;
  const { data, error, loading } = useGetGuildSettings(selectedGuild);
  const {
    handleUpdate,
    loading: saveLoading,
    error: saveError,
  } = useUpdateGuildSettings();
  const [value, setValue] = useState(0);
  const [formValues, setFormValues] = useState(data);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  }

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function handleSubmit(event: any): any {
    const { server_id, ...settings } = formValues;
    event.preventDefault();
    handleUpdate(selectedGuild, settings);
  }

  useEffect(() => {
    if (data) {
      setFormValues(data);
    }
  }, [data]);

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <PageLoader />;

  if (formValues)
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs onChange={handleTabChange} value={value}>
            <Tab label="Karma" {...a11yProps(0)} />
            <Tab label="Random events" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <KarmaSettings
            loading={loading}
            handleChange={handleChange}
            formValues={formValues}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <RandomEventsSettings
            loading={loading}
            handleChange={handleChange}
            formValues={formValues}
          />
        </TabPanel>

        <LoadingButton
          color="secondary"
          loading={saveLoading}
          loadingPosition="start"
          startIcon={<Icon>{iconKeys.Save}</Icon>}
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </LoadingButton>
      </Box>
    );
}
