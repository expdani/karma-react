import React, { useState } from 'react';
import useUserDiscordOwnerGuilds from '../../hooks/user/guild';
import PageHelp from '../page/PageHelp';
import PageLoader from '../page/PageLoader';
import PageTitle from '../page/PageTitle';
import InputForm from './InputForm/InputForm';
import ServerSelect from './ServerSelect';

export const GUILD_KEY = 'guild';

export default function Settings(): any {
  const { data, error, loading } = useUserDiscordOwnerGuilds();
  const [selectedGuild, setSelectedGuild] = useState(
    localStorage.getItem('guild') || ''
  );

  function handleGuildChange(guild: string): void {
    localStorage.setItem('guild', guild || selectedGuild);
    setSelectedGuild(guild);
  }

  if (error) return <h1>{error.message}</h1>;
  if (loading) return <PageLoader />;
  return (
    <>
      <PageTitle title="Settings" />
      <PageHelp
        helpText={
          <>
            <div>
              On this page you can manage the bot settings for your server. Down
              below you can see a list of servers you own.
            </div>
            {`\n`}
            <div>
              Select a server and you will get an overview of options you can
              manage.
            </div>
          </>
        }
      />
      <ServerSelect
        availableGuilds={data}
        selectedGuild={selectedGuild}
        handleGuildChange={handleGuildChange}
      />
      <InputForm selectedGuild={selectedGuild} />
    </>
  );
}
