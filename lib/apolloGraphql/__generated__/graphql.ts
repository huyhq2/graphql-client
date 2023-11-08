/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Author = {
  __typename?: 'Author';
  age?: Maybe<Scalars['Int']['output']>;
  books?: Maybe<Array<Maybe<Book>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type AuthorInput = {
  age?: InputMaybe<Scalars['Int']['input']>;
  name: Scalars['String']['input'];
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Author>;
  genre?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type BookInput = {
  authorId: Scalars['ID']['input'];
  genre: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor?: Maybe<Author>;
  createBook?: Maybe<Book>;
  createGenre?: Maybe<Genre>;
};


export type MutationCreateAuthorArgs = {
  data: AuthorInput;
};


export type MutationCreateBookArgs = {
  data: BookInput;
};


export type MutationCreateGenreArgs = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
};


export type QueryAuthorArgs = {
  id: Scalars['ID']['input'];
};


export type QueryBookArgs = {
  id: Scalars['ID']['input'];
};
