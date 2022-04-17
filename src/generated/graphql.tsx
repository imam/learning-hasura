import { gql } from '@apollo/client';
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

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "_helloworld.article" */
export type _Helloworld_Article = {
  __typename?: '_helloworld_article';
  /** An object relationship */
  author: _Helloworld_Author;
  author_id: Scalars['Int'];
  id: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

/** aggregated selection of "_helloworld.article" */
export type _Helloworld_Article_Aggregate = {
  __typename?: '_helloworld_article_aggregate';
  aggregate?: Maybe<_Helloworld_Article_Aggregate_Fields>;
  nodes: Array<_Helloworld_Article>;
};

/** aggregate fields of "_helloworld.article" */
export type _Helloworld_Article_Aggregate_Fields = {
  __typename?: '_helloworld_article_aggregate_fields';
  avg?: Maybe<_Helloworld_Article_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Helloworld_Article_Max_Fields>;
  min?: Maybe<_Helloworld_Article_Min_Fields>;
  stddev?: Maybe<_Helloworld_Article_Stddev_Fields>;
  stddev_pop?: Maybe<_Helloworld_Article_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Helloworld_Article_Stddev_Samp_Fields>;
  sum?: Maybe<_Helloworld_Article_Sum_Fields>;
  var_pop?: Maybe<_Helloworld_Article_Var_Pop_Fields>;
  var_samp?: Maybe<_Helloworld_Article_Var_Samp_Fields>;
  variance?: Maybe<_Helloworld_Article_Variance_Fields>;
};


/** aggregate fields of "_helloworld.article" */
export type _Helloworld_Article_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "_helloworld.article" */
export type _Helloworld_Article_Aggregate_Order_By = {
  avg?: InputMaybe<_Helloworld_Article_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<_Helloworld_Article_Max_Order_By>;
  min?: InputMaybe<_Helloworld_Article_Min_Order_By>;
  stddev?: InputMaybe<_Helloworld_Article_Stddev_Order_By>;
  stddev_pop?: InputMaybe<_Helloworld_Article_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<_Helloworld_Article_Stddev_Samp_Order_By>;
  sum?: InputMaybe<_Helloworld_Article_Sum_Order_By>;
  var_pop?: InputMaybe<_Helloworld_Article_Var_Pop_Order_By>;
  var_samp?: InputMaybe<_Helloworld_Article_Var_Samp_Order_By>;
  variance?: InputMaybe<_Helloworld_Article_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "_helloworld.article" */
export type _Helloworld_Article_Arr_Rel_Insert_Input = {
  data: Array<_Helloworld_Article_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<_Helloworld_Article_On_Conflict>;
};

/** aggregate avg on columns */
export type _Helloworld_Article_Avg_Fields = {
  __typename?: '_helloworld_article_avg_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Avg_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "_helloworld.article". All fields are combined with a logical 'AND'. */
export type _Helloworld_Article_Bool_Exp = {
  _and?: InputMaybe<Array<_Helloworld_Article_Bool_Exp>>;
  _not?: InputMaybe<_Helloworld_Article_Bool_Exp>;
  _or?: InputMaybe<Array<_Helloworld_Article_Bool_Exp>>;
  author?: InputMaybe<_Helloworld_Author_Bool_Exp>;
  author_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_helloworld.article" */
export enum _Helloworld_Article_Constraint {
  /** unique or primary key constraint */
  ArticlePkey = 'article_pkey'
}

/** input type for incrementing numeric columns in table "_helloworld.article" */
export type _Helloworld_Article_Inc_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_helloworld.article" */
export type _Helloworld_Article_Insert_Input = {
  author?: InputMaybe<_Helloworld_Author_Obj_Rel_Insert_Input>;
  author_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _Helloworld_Article_Max_Fields = {
  __typename?: '_helloworld_article_max_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Max_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type _Helloworld_Article_Min_Fields = {
  __typename?: '_helloworld_article_min_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Min_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "_helloworld.article" */
export type _Helloworld_Article_Mutation_Response = {
  __typename?: '_helloworld_article_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Helloworld_Article>;
};

/** on_conflict condition type for table "_helloworld.article" */
export type _Helloworld_Article_On_Conflict = {
  constraint: _Helloworld_Article_Constraint;
  update_columns?: Array<_Helloworld_Article_Update_Column>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};

/** Ordering options when selecting data from "_helloworld.article". */
export type _Helloworld_Article_Order_By = {
  author?: InputMaybe<_Helloworld_Author_Order_By>;
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _helloworld_article */
export type _Helloworld_Article_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_helloworld.article" */
export enum _Helloworld_Article_Select_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "_helloworld.article" */
export type _Helloworld_Article_Set_Input = {
  author_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type _Helloworld_Article_Stddev_Fields = {
  __typename?: '_helloworld_article_stddev_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Stddev_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type _Helloworld_Article_Stddev_Pop_Fields = {
  __typename?: '_helloworld_article_stddev_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Stddev_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type _Helloworld_Article_Stddev_Samp_Fields = {
  __typename?: '_helloworld_article_stddev_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Stddev_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type _Helloworld_Article_Sum_Fields = {
  __typename?: '_helloworld_article_sum_fields';
  author_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Sum_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** update columns of table "_helloworld.article" */
export enum _Helloworld_Article_Update_Column {
  /** column name */
  AuthorId = 'author_id',
  /** column name */
  Id = 'id',
  /** column name */
  Rating = 'rating',
  /** column name */
  Title = 'title'
}

/** aggregate var_pop on columns */
export type _Helloworld_Article_Var_Pop_Fields = {
  __typename?: '_helloworld_article_var_pop_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Var_Pop_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type _Helloworld_Article_Var_Samp_Fields = {
  __typename?: '_helloworld_article_var_samp_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Var_Samp_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type _Helloworld_Article_Variance_Fields = {
  __typename?: '_helloworld_article_variance_fields';
  author_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "_helloworld.article" */
export type _Helloworld_Article_Variance_Order_By = {
  author_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
};

/** columns and relationships of "_helloworld.author" */
export type _Helloworld_Author = {
  __typename?: '_helloworld_author';
  /** An array relationship */
  articles: Array<_Helloworld_Article>;
  /** An aggregate relationship */
  articles_aggregate: _Helloworld_Article_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
};


/** columns and relationships of "_helloworld.author" */
export type _Helloworld_AuthorArticlesArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Article_Order_By>>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};


/** columns and relationships of "_helloworld.author" */
export type _Helloworld_AuthorArticles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Article_Order_By>>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};

/** aggregated selection of "_helloworld.author" */
export type _Helloworld_Author_Aggregate = {
  __typename?: '_helloworld_author_aggregate';
  aggregate?: Maybe<_Helloworld_Author_Aggregate_Fields>;
  nodes: Array<_Helloworld_Author>;
};

/** aggregate fields of "_helloworld.author" */
export type _Helloworld_Author_Aggregate_Fields = {
  __typename?: '_helloworld_author_aggregate_fields';
  avg?: Maybe<_Helloworld_Author_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<_Helloworld_Author_Max_Fields>;
  min?: Maybe<_Helloworld_Author_Min_Fields>;
  stddev?: Maybe<_Helloworld_Author_Stddev_Fields>;
  stddev_pop?: Maybe<_Helloworld_Author_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<_Helloworld_Author_Stddev_Samp_Fields>;
  sum?: Maybe<_Helloworld_Author_Sum_Fields>;
  var_pop?: Maybe<_Helloworld_Author_Var_Pop_Fields>;
  var_samp?: Maybe<_Helloworld_Author_Var_Samp_Fields>;
  variance?: Maybe<_Helloworld_Author_Variance_Fields>;
};


/** aggregate fields of "_helloworld.author" */
export type _Helloworld_Author_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<_Helloworld_Author_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type _Helloworld_Author_Avg_Fields = {
  __typename?: '_helloworld_author_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "_helloworld.author". All fields are combined with a logical 'AND'. */
export type _Helloworld_Author_Bool_Exp = {
  _and?: InputMaybe<Array<_Helloworld_Author_Bool_Exp>>;
  _not?: InputMaybe<_Helloworld_Author_Bool_Exp>;
  _or?: InputMaybe<Array<_Helloworld_Author_Bool_Exp>>;
  articles?: InputMaybe<_Helloworld_Article_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "_helloworld.author" */
export enum _Helloworld_Author_Constraint {
  /** unique or primary key constraint */
  AuthorPkey = 'author_pkey'
}

/** input type for incrementing numeric columns in table "_helloworld.author" */
export type _Helloworld_Author_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "_helloworld.author" */
export type _Helloworld_Author_Insert_Input = {
  articles?: InputMaybe<_Helloworld_Article_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type _Helloworld_Author_Max_Fields = {
  __typename?: '_helloworld_author_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type _Helloworld_Author_Min_Fields = {
  __typename?: '_helloworld_author_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "_helloworld.author" */
export type _Helloworld_Author_Mutation_Response = {
  __typename?: '_helloworld_author_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<_Helloworld_Author>;
};

/** input type for inserting object relation for remote table "_helloworld.author" */
export type _Helloworld_Author_Obj_Rel_Insert_Input = {
  data: _Helloworld_Author_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<_Helloworld_Author_On_Conflict>;
};

/** on_conflict condition type for table "_helloworld.author" */
export type _Helloworld_Author_On_Conflict = {
  constraint: _Helloworld_Author_Constraint;
  update_columns?: Array<_Helloworld_Author_Update_Column>;
  where?: InputMaybe<_Helloworld_Author_Bool_Exp>;
};

/** Ordering options when selecting data from "_helloworld.author". */
export type _Helloworld_Author_Order_By = {
  articles_aggregate?: InputMaybe<_Helloworld_Article_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: _helloworld_author */
export type _Helloworld_Author_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "_helloworld.author" */
export enum _Helloworld_Author_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "_helloworld.author" */
export type _Helloworld_Author_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type _Helloworld_Author_Stddev_Fields = {
  __typename?: '_helloworld_author_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type _Helloworld_Author_Stddev_Pop_Fields = {
  __typename?: '_helloworld_author_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type _Helloworld_Author_Stddev_Samp_Fields = {
  __typename?: '_helloworld_author_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type _Helloworld_Author_Sum_Fields = {
  __typename?: '_helloworld_author_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "_helloworld.author" */
export enum _Helloworld_Author_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type _Helloworld_Author_Var_Pop_Fields = {
  __typename?: '_helloworld_author_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type _Helloworld_Author_Var_Samp_Fields = {
  __typename?: '_helloworld_author_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type _Helloworld_Author_Variance_Fields = {
  __typename?: '_helloworld_author_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "_helloworld.article" */
  delete__helloworld_article?: Maybe<_Helloworld_Article_Mutation_Response>;
  /** delete single row from the table: "_helloworld.article" */
  delete__helloworld_article_by_pk?: Maybe<_Helloworld_Article>;
  /** delete data from the table: "_helloworld.author" */
  delete__helloworld_author?: Maybe<_Helloworld_Author_Mutation_Response>;
  /** delete single row from the table: "_helloworld.author" */
  delete__helloworld_author_by_pk?: Maybe<_Helloworld_Author>;
  /** insert data into the table: "_helloworld.article" */
  insert__helloworld_article?: Maybe<_Helloworld_Article_Mutation_Response>;
  /** insert a single row into the table: "_helloworld.article" */
  insert__helloworld_article_one?: Maybe<_Helloworld_Article>;
  /** insert data into the table: "_helloworld.author" */
  insert__helloworld_author?: Maybe<_Helloworld_Author_Mutation_Response>;
  /** insert a single row into the table: "_helloworld.author" */
  insert__helloworld_author_one?: Maybe<_Helloworld_Author>;
  /** update data of the table: "_helloworld.article" */
  update__helloworld_article?: Maybe<_Helloworld_Article_Mutation_Response>;
  /** update single row of the table: "_helloworld.article" */
  update__helloworld_article_by_pk?: Maybe<_Helloworld_Article>;
  /** update data of the table: "_helloworld.author" */
  update__helloworld_author?: Maybe<_Helloworld_Author_Mutation_Response>;
  /** update single row of the table: "_helloworld.author" */
  update__helloworld_author_by_pk?: Maybe<_Helloworld_Author>;
};


/** mutation root */
export type Mutation_RootDelete__Helloworld_ArticleArgs = {
  where: _Helloworld_Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Helloworld_Article_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete__Helloworld_AuthorArgs = {
  where: _Helloworld_Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete__Helloworld_Author_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert__Helloworld_ArticleArgs = {
  objects: Array<_Helloworld_Article_Insert_Input>;
  on_conflict?: InputMaybe<_Helloworld_Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Helloworld_Article_OneArgs = {
  object: _Helloworld_Article_Insert_Input;
  on_conflict?: InputMaybe<_Helloworld_Article_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Helloworld_AuthorArgs = {
  objects: Array<_Helloworld_Author_Insert_Input>;
  on_conflict?: InputMaybe<_Helloworld_Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert__Helloworld_Author_OneArgs = {
  object: _Helloworld_Author_Insert_Input;
  on_conflict?: InputMaybe<_Helloworld_Author_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate__Helloworld_ArticleArgs = {
  _inc?: InputMaybe<_Helloworld_Article_Inc_Input>;
  _set?: InputMaybe<_Helloworld_Article_Set_Input>;
  where: _Helloworld_Article_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Helloworld_Article_By_PkArgs = {
  _inc?: InputMaybe<_Helloworld_Article_Inc_Input>;
  _set?: InputMaybe<_Helloworld_Article_Set_Input>;
  pk_columns: _Helloworld_Article_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate__Helloworld_AuthorArgs = {
  _inc?: InputMaybe<_Helloworld_Author_Inc_Input>;
  _set?: InputMaybe<_Helloworld_Author_Set_Input>;
  where: _Helloworld_Author_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate__Helloworld_Author_By_PkArgs = {
  _inc?: InputMaybe<_Helloworld_Author_Inc_Input>;
  _set?: InputMaybe<_Helloworld_Author_Set_Input>;
  pk_columns: _Helloworld_Author_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "_helloworld.article" */
  _helloworld_article: Array<_Helloworld_Article>;
  /** fetch aggregated fields from the table: "_helloworld.article" */
  _helloworld_article_aggregate: _Helloworld_Article_Aggregate;
  /** fetch data from the table: "_helloworld.article" using primary key columns */
  _helloworld_article_by_pk?: Maybe<_Helloworld_Article>;
  /** fetch data from the table: "_helloworld.author" */
  _helloworld_author: Array<_Helloworld_Author>;
  /** fetch aggregated fields from the table: "_helloworld.author" */
  _helloworld_author_aggregate: _Helloworld_Author_Aggregate;
  /** fetch data from the table: "_helloworld.author" using primary key columns */
  _helloworld_author_by_pk?: Maybe<_Helloworld_Author>;
};


export type Query_Root_Helloworld_ArticleArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Article_Order_By>>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};


export type Query_Root_Helloworld_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Article_Order_By>>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};


export type Query_Root_Helloworld_Article_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_Root_Helloworld_AuthorArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Author_Order_By>>;
  where?: InputMaybe<_Helloworld_Author_Bool_Exp>;
};


export type Query_Root_Helloworld_Author_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Author_Order_By>>;
  where?: InputMaybe<_Helloworld_Author_Bool_Exp>;
};


export type Query_Root_Helloworld_Author_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "_helloworld.article" */
  _helloworld_article: Array<_Helloworld_Article>;
  /** fetch aggregated fields from the table: "_helloworld.article" */
  _helloworld_article_aggregate: _Helloworld_Article_Aggregate;
  /** fetch data from the table: "_helloworld.article" using primary key columns */
  _helloworld_article_by_pk?: Maybe<_Helloworld_Article>;
  /** fetch data from the table: "_helloworld.author" */
  _helloworld_author: Array<_Helloworld_Author>;
  /** fetch aggregated fields from the table: "_helloworld.author" */
  _helloworld_author_aggregate: _Helloworld_Author_Aggregate;
  /** fetch data from the table: "_helloworld.author" using primary key columns */
  _helloworld_author_by_pk?: Maybe<_Helloworld_Author>;
};


export type Subscription_Root_Helloworld_ArticleArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Article_Order_By>>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};


export type Subscription_Root_Helloworld_Article_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Article_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Article_Order_By>>;
  where?: InputMaybe<_Helloworld_Article_Bool_Exp>;
};


export type Subscription_Root_Helloworld_Article_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_Root_Helloworld_AuthorArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Author_Order_By>>;
  where?: InputMaybe<_Helloworld_Author_Bool_Exp>;
};


export type Subscription_Root_Helloworld_Author_AggregateArgs = {
  distinct_on?: InputMaybe<Array<_Helloworld_Author_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<_Helloworld_Author_Order_By>>;
  where?: InputMaybe<_Helloworld_Author_Bool_Exp>;
};


export type Subscription_Root_Helloworld_Author_By_PkArgs = {
  id: Scalars['Int'];
};
