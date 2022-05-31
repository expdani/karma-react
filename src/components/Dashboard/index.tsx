import React, { useState } from 'react';
import useDashboard from '../../hooks/dashboard';
import PageHelp from '../page/PageHelp';
import PageLoader from '../page/PageLoader';
import PageTitle from '../page/PageTitle';
import PieChart from './charts/PieChart';
import Highlights from './Highlights';

export const GUILD_KEY = 'guild';

export default function Dashboard(): any {
  const { data, error, loading } = useDashboard();

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
      {loading ? (
        <PageLoader />
      ) : (
        <>
          <Highlights data={data.highlights} />
          <PieChart
            title="Votes"
            data={[
              data.statistics.total_votes.upvotes,
              data.statistics.total_votes.downvotes,
            ]}
            labels={['Upvotes', 'Downvotes']}
            backgroundColor={['#ff4500', '#7193ff']}
            borderColor={['#ff4500', '#7193ff']}
            borderWidth={1}
            fill={false}
          />
          {/* <DailyVotes /> */}
        </>
      )}
    </>
  );
}
