/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createReview = /* GraphQL */ `
  mutation CreateReview(
    $input: CreateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    createReview(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      description
      content
      __typename
    }
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview(
    $input: UpdateReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    updateReview(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      description
      content
      __typename
    }
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview(
    $input: DeleteReviewInput!
    $condition: ModelReviewConditionInput
  ) {
    deleteReview(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      description
      content
      __typename
    }
  }
`;
