/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateListingInput = {
  id?: string | null,
  title: string,
  image: string,
  price: number,
  description: string,
  category: string,
  brand: string,
  condition: string,
  availability: string,
  quantity: number,
  seller: string,
  shipping: string,
  rating: number,
  reviews: Array< string >,
  attributes: string,
  sku: string,
  date: string,
};

export type ModelListingConditionInput = {
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  availability?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  seller?: ModelStringInput | null,
  shipping?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  reviews?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  sku?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelListingConditionInput | null > | null,
  or?: Array< ModelListingConditionInput | null > | null,
  not?: ModelListingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Listing = {
  __typename: "Listing",
  id: string,
  title: string,
  image: string,
  price: number,
  description: string,
  category: string,
  brand: string,
  condition: string,
  availability: string,
  quantity: number,
  seller: string,
  shipping: string,
  rating: number,
  reviews: Array< string >,
  attributes: string,
  sku: string,
  date: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateListingInput = {
  id: string,
  title?: string | null,
  image?: string | null,
  price?: number | null,
  description?: string | null,
  category?: string | null,
  brand?: string | null,
  condition?: string | null,
  availability?: string | null,
  quantity?: number | null,
  seller?: string | null,
  shipping?: string | null,
  rating?: number | null,
  reviews?: Array< string > | null,
  attributes?: string | null,
  sku?: string | null,
  date?: string | null,
};

export type DeleteListingInput = {
  id: string,
};

export type ModelListingFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  image?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  brand?: ModelStringInput | null,
  condition?: ModelStringInput | null,
  availability?: ModelStringInput | null,
  quantity?: ModelIntInput | null,
  seller?: ModelStringInput | null,
  shipping?: ModelStringInput | null,
  rating?: ModelFloatInput | null,
  reviews?: ModelStringInput | null,
  attributes?: ModelStringInput | null,
  sku?: ModelStringInput | null,
  date?: ModelStringInput | null,
  and?: Array< ModelListingFilterInput | null > | null,
  or?: Array< ModelListingFilterInput | null > | null,
  not?: ModelListingFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelListingConnection = {
  __typename: "ModelListingConnection",
  items:  Array<Listing | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionListingFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  brand?: ModelSubscriptionStringInput | null,
  condition?: ModelSubscriptionStringInput | null,
  availability?: ModelSubscriptionStringInput | null,
  quantity?: ModelSubscriptionIntInput | null,
  seller?: ModelSubscriptionStringInput | null,
  shipping?: ModelSubscriptionStringInput | null,
  rating?: ModelSubscriptionFloatInput | null,
  reviews?: ModelSubscriptionStringInput | null,
  attributes?: ModelSubscriptionStringInput | null,
  sku?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionListingFilterInput | null > | null,
  or?: Array< ModelSubscriptionListingFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateListingMutationVariables = {
  input: CreateListingInput,
  condition?: ModelListingConditionInput | null,
};

export type CreateListingMutation = {
  createListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateListingMutationVariables = {
  input: UpdateListingInput,
  condition?: ModelListingConditionInput | null,
};

export type UpdateListingMutation = {
  updateListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteListingMutationVariables = {
  input: DeleteListingInput,
  condition?: ModelListingConditionInput | null,
};

export type DeleteListingMutation = {
  deleteListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetListingQueryVariables = {
  id: string,
};

export type GetListingQuery = {
  getListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListListingsQueryVariables = {
  filter?: ModelListingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListListingsQuery = {
  listListings?:  {
    __typename: "ModelListingConnection",
    items:  Array< {
      __typename: "Listing",
      id: string,
      title: string,
      image: string,
      price: number,
      description: string,
      category: string,
      brand: string,
      condition: string,
      availability: string,
      quantity: number,
      seller: string,
      shipping: string,
      rating: number,
      reviews: Array< string >,
      attributes: string,
      sku: string,
      date: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateListingSubscriptionVariables = {
  filter?: ModelSubscriptionListingFilterInput | null,
};

export type OnCreateListingSubscription = {
  onCreateListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateListingSubscriptionVariables = {
  filter?: ModelSubscriptionListingFilterInput | null,
};

export type OnUpdateListingSubscription = {
  onUpdateListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteListingSubscriptionVariables = {
  filter?: ModelSubscriptionListingFilterInput | null,
};

export type OnDeleteListingSubscription = {
  onDeleteListing?:  {
    __typename: "Listing",
    id: string,
    title: string,
    image: string,
    price: number,
    description: string,
    category: string,
    brand: string,
    condition: string,
    availability: string,
    quantity: number,
    seller: string,
    shipping: string,
    rating: number,
    reviews: Array< string >,
    attributes: string,
    sku: string,
    date: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
