/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getListing = /* GraphQL */ `
  query GetListing($id: ID!) {
    getListing(id: $id) {
      id
      title
      image
      price
      description
      category
      brand
      condition
      availability
      quantity
      seller
      shipping
      rating
      reviews
      attributes
      sku
      date
      createdAt
      updatedAt
    }
  }
`;
export const listListings = /* GraphQL */ `
  query ListListings(
    $filter: ModelListingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        image
        price
        description
        category
        brand
        condition
        availability
        quantity
        seller
        shipping
        rating
        reviews
        attributes
        sku
        date
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
