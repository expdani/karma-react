import React, { useState } from 'react';
import PageHelp from '../page/PageHelp';
import PageLoader from '../page/PageLoader';
import PageTitle from '../page/PageTitle';
import { DailyVotes } from './charts/DailyVotes';
import { VotesPie } from './charts/VotesPie';
import HighlightCard from './HighlightCard';
import Highlights from './Highlights';

export const GUILD_KEY = 'guild';

export default function Dashboard(): any {
  return (
    <>
      <PageTitle title="Dashboard" />
      <PageHelp
        helpText={
          <>
            <div>Welcome!</div>
            {`\n`}
            <div>Hello there!</div>
          </>
        }
      />

      <Highlights />
      <VotesPie />
      {/* <DailyVotes /> */}
    </>
  );
}
