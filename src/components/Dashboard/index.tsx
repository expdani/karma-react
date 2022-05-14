import React from 'react';

export default function Dashboard(props: any): any {
  console.log(props);

  const { data, error, loading } = props;
  return (
    <>
      <h1>dashboard</h1>
    </>
  );
}
