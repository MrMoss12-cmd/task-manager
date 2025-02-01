import { gql } from '@apollo/client';

export const CREATE_TASK = gql`
  mutation CreateTask($data: CreateTaskInput!) {
    createTask(data: $data) {
      id
      title
      priority
    }
  }
`;