import React, { useState } from 'react';
import useGetGuildSettings from '../../hooks/settings';
import useUserDiscordOwnerGuilds from '../../hooks/user/guild';
import { SESSION_TOKEN } from '../constants';
import PageLoader from '../Page/PageLoader';
import PageTitle from '../Page/PageTitle';
import InputForm from './InputForm';
import ServerSelect from './ServerSelect';

export const GUILD_KEY = 'guild';

export default function Settings(): any {
  const { data, error, loading } = useUserDiscordOwnerGuilds();
  const {
    data: settingsData,
    error: settingsError,
    loading: settingsLoading,
    refetch,
  } = useGetGuildSettings(localStorage.getItem('guild') || data[0].id);
  const [selectedGuild, setSelectedGuild] = useState(
    localStorage.getItem('guild') || data[0].id
  );

  function handleGuildChange(guild_id: string): void {
    localStorage.setItem('guild', guild_id || selectedGuild);
    setSelectedGuild(guild_id);
    refetch();
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
      <InputForm
        data={settingsData}
        loading={settingsLoading}
        error={settingsError}
      />
    </>
  );
}
