import { gql, request } from 'graphql-request'
import { useState } from 'react'
import {
  CreateFeedbackMutation,
  CreateFeedbackMutationVariables,
} from './graphql'

const query = gql`
  mutation CreateFeedback($input: CreateFeedbackInput!) {
    createFeedback(input: $input) {
      id
      text
    }
  }
`

type UseFeedbackProps = {
  apiKey: string
}

type UseFeedbackCreate = (
  feedback: string,
  userId: string | undefined
) => Promise<any>

type UseFeedbackState = {
  loading: boolean
  error?: Error
  data?: CreateFeedbackMutation
}

type UseFeedbackReturn = [UseFeedbackCreate, UseFeedbackState]

export const useFeedback = ({
  apiKey,
}: UseFeedbackProps): UseFeedbackReturn => {
  const [state, setState] = useState<UseFeedbackState>(() => ({
    loading: false,
  }))

  const create: UseFeedbackCreate = async (
    feedback: string,
    userId: string | undefined
  ) => {
    setState((s) => ({
      ...s,
      loading: true,
    }))
    const result = await request<
      CreateFeedbackMutation,
      CreateFeedbackMutationVariables
    >('https://reiterate.so/api/query', query, {
      input: {
        text: feedback,
        app: {
          apiKey,
        },
        user: {
          id: userId || 'anonymous',
        },
      },
    })
    return result
  }

  return [create, state]
}
