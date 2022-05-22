import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';
import { makeStyles } from '@mui/styles';

export type Props = {
  disabled?: boolean;
  label?: any;
  defaultChecked: boolean;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText: string;
  legend: string;
  name: string;
};

const useStyles = makeStyles({
  container: {
    marginBottom: '16px',
  },
});

export default function PropertySwitch(props: Props) {
  const classes = useStyles();
  const {
    name,
    legend,
    label,
    helperText,
    onChange,
    defaultChecked,
    checked,
    disabled = false,
  } = props;

  return (
    <FormControl
      className={classes.container}
      component="fieldset"
      variant="standard"
    >
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              name={name}
              defaultChecked={defaultChecked}
              checked={checked}
              onChange={onChange}
              disabled={disabled}
            />
          }
          label={label || ''}
        />
      </FormGroup>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
