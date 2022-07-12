import * as React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Carousel from 'react-material-ui-carousel';
import { Button, Card, Icon } from '@mui/material';
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

const items = [
  {
    title: 'Invite Karma',
    description:
      "Invite the Discord bot to your server and start keeping track of your server's karma.",
    color: 'discord.main',
    buttonColor: 'discord',
    buttonText: 'Invite',
    buttonIcon: iconKeys.Discord,
  },
  {
    title: 'Play minigames',
    description: 'The bot also provides a few minigames like tic tac toe!',
    color: 'minigames.main',
    buttonColor: 'minigames',
    buttonText: 'Invite',
    buttonIcon: iconKeys.Discord,
  },
  {
    title: 'Earn money',
    description:
      'Earn money from random events or by playing minigames against your friends.',
    color: 'money.main',
    buttonColor: 'money',
    buttonText: 'Invite',
    buttonIcon: iconKeys.Discord,
  },
];

function SliderThumb(props: any): React.ReactElement {
  return (
    <Card
      key={props.key}
      style={{
        width: '200px',
        height: '120px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        boxShadow: 'inset 0 0 40px #191c27',
      }}
    >
      <Icon style={{ marginBottom: '16px' }}>{props.icon}</Icon>
      <Typography
        variant="h5"
        align="center"
        color={props.color}
        style={{
          fontWeight: 600,
        }}
      >
        {props.title}
      </Typography>
    </Card>
  );
}

const indicatorThumbnails = [
  <SliderThumb
    color="discord.main"
    key={1}
    icon={iconKeys.Discord}
    title="Discord"
  />,
  <SliderThumb
    color="minigames.main"
    key={2}
    icon={iconKeys.Minigames}
    title="Minigames"
  />,
  <SliderThumb
    color="money.main"
    key={3}
    icon={iconKeys.Money}
    title="Money"
  />,
];

function CtaButton(props: any): React.ReactElement {
  const { item } = props;
  return (
    <Button
      style={{ marginTop: '32px', fontSize: '20px', textTransform: 'none' }}
      variant="contained"
      color={item.buttonColor || 'primary'}
      size="large"
    >
      <Icon style={{ marginRight: '8px' }}>{item.buttonIcon}</Icon>
      {item.buttonText}
    </Button>
  );
}

function Item(props: any) {
  return (
    <Container
      disableGutters
      maxWidth="sm"
      component="main"
      sx={{
        pt: 8,
        pb: 6,
        height: '350px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color={props.item.color || 'text.primary'}
        gutterBottom
        style={{
          fontWeight: 600,
          fontSize: '74px',
        }}
      >
        {props.item.title}
      </Typography>
      <Typography
        variant="h5"
        align="center"
        color="text.carousel"
        component="p"
        style={{
          fontSize: '24px',
        }}
      >
        {props.item.description}
      </Typography>

      <CtaButton item={props.item} />
    </Container>
  );
}

function HomeSlider(): React.ReactElement {
  return (
    <Carousel
      IndicatorIcon={indicatorThumbnails}
      indicatorContainerProps={{
        style: {
          marginTop: '64px',
          width: '100%',
        },
      }}
      indicatorIconButtonProps={{
        style: {
          margin: '8px 8px 8px 8px',
        },
      }}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

export default function Homepage(): React.ReactElement {
  return <HomeSlider />;
}
