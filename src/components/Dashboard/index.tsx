import React, { useState } from 'react';
import useUserDiscordOwnerGuilds from '../../hooks/user/guild';
import PageHelp from '../page/PageHelp';
import PageLoader from '../page/PageLoader';
import PageTitle from '../page/PageTitle';

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
    </>
  );
}
