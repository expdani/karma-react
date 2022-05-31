import { ApolloError, useQuery } from '@apollo/client';
import GET_DASHBOARD from './gql';

export type DashboardType = {
  highlights: HighlightsType;
  statistics: StatisticsType;
};

export type HighlightsType = {
  total_votes: {
    total: number;
    week: number;
  };
  total_messages: {
    total: number;
    week: number;
  };
  sessions: {
    total: number;
    week: number;
  };
};

export type StatisticsType = {
  total_votes: {
    upvotes: number;
    downvotes: number;
  };
};
type HookResponse = {
  loading: boolean;
  error: ApolloError | undefined;
  data: DashboardType;
  refetch: () => void;
};

export default function useDashboard(): HookResponse {
  const { data, error, loading, refetch } = useQuery(GET_DASHBOARD);

  return {
    data: data?.getDashboard,
    error,
    loading,
    refetch,
  };
}
