import React, { useEffect, useState } from 'react';
import useGetGuildSettings from '../../hooks/settings';
import useUserDiscordOwnerGuilds from '../../hooks/user/guild';
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
      <ServerSelect
        availableGuilds={data}
        selectedGuild={selectedGuild}
        handleGuildChange={handleGuildChange}
      />
      <InputForm selectedGuild={selectedGuild} />
    </>
  );
}
