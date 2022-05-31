import { gql } from '@apollo/client';

const GET_DASHBOARD = gql`
  query GetDashboard {
    getDashboard {
      highlights {
        total_votes {
          total
          week
        }
        total_messages {
          total
          week
        }
        sessions {
          total
          week
        }
      }
      statistics {
        total_votes {
          upvotes
          downvotes
        }
      }
    }
  }
`;

export default GET_DASHBOARD;
