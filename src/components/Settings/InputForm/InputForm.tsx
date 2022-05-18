import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from 'react';
import useGetGuildSettings from '../../../hooks/settings';
import PageLoader from '../../page/PageLoader';
import LoadingButton from '@mui/lab/LoadingButton';
import { Icon } from '@mui/material';
import iconKeys from '../../Icon/iconKeys';
import KarmaSettings from './KarmaSettings';

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
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <PageLoader />;
  if (data)
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Karma" {...a11yProps(0)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <KarmaSettings data={data} />
        </TabPanel>

        <LoadingButton
          color="secondary"
          // onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<Icon>{iconKeys.Save}</Icon>}
          variant="contained"
        >
          Save
        </LoadingButton>
      </Box>
    );
}
