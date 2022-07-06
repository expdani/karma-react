import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import { Button, Card, Icon, Paper } from '@mui/material';
import iconKeys from '../icon/iconKeys';

function HomepageContent(): React.ReactElement {
  return (
    <>
      <Container
        disableGutters
        maxWidth="sm"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with default MUI components with
          little customization.
        </Typography>
      </Container>
    </>
  );
}

export default function Homepage(): React.ReactElement {
  var items = [
    {
      name: 'Random Name #1',
      description: 'Probably the most random thing you have ever seen!',
    },
    {
      name: 'Random Name #2',
      description: 'Hello World!',
    },
  ];

  const indicatorThumbnails = [
    <SliderThumb key={1} icon={iconKeys.Home} title="test" />,
    <SliderThumb key={2} icon={iconKeys.Settings} title="nice gaming" />,
  ];

  return (
    <Carousel
      IndicatorIcon={indicatorThumbnails}
      indicatorContainerProps={{
        style: {
          marginTop: '64px',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          margin: '0px 8px 0px 8px',
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function SliderThumb(props: any): React.ReactElement {
  return (
    <Card key={props.key} style={{ width: '210px', height: '130px' }}>
      <Icon>{props.icon}</Icon>
      <Typography>{props.title}</Typography>
    </Card>
  );
}

function Item(props: any) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}
