import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  apps: Array<App>;
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
};

export type App = {
  __typename?: 'App';
  apiKey: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type CreateFeedbackAppInput = {
  apiKey: Scalars['String'];
};

export type CreateFeedbackInput = {
  app: CreateFeedbackAppInput;
  text: Scalars['String'];
  user?: InputMaybe<CreateFeedbackUserInput>;
};

export type CreateFeedbackUserInput = {
  id: Scalars['String'];
};

export type Feedback = {
  __typename?: 'Feedback';
  id: Scalars['Int'];
  text: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createApp: App;
  createFeedback: Feedback;
  deleteApp: Scalars['Boolean'];
  regenerateApiKey: App;
  register: Account;
  updateApp: App;
};


export type MutationCreateAppArgs = {
  name: Scalars['String'];
};


export type MutationCreateFeedbackArgs = {
  input: CreateFeedbackInput;
};


export type MutationDeleteAppArgs = {
  id: Scalars['Int'];
};


export type MutationRegenerateApiKeyArgs = {
  id: Scalars['Int'];
};


export type MutationRegisterArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationUpdateAppArgs = {
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  noop?: Maybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  userId: Scalars['String'];
};

export type CreateFeedbackMutationVariables = Exact<{
  input: CreateFeedbackInput;
}>;


export type CreateFeedbackMutation = { __typename?: 'Mutation', createFeedback: { __typename?: 'Feedback', id: number, text: string } };


export const CreateFeedbackDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateFeedback"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateFeedbackInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createFeedback"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]} as unknown as DocumentNode<CreateFeedbackMutation, CreateFeedbackMutationVariables>;