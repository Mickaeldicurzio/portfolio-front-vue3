import gql from "graphql-tag";

export const GET_ARTICLE_BY_ID = gql`query GetArticleById ($id: ID!){
  article(id : $id){
    data {
      id
      attributes {
        title,
        ckeditor
      }
    }
  }
}`

//
// query {
//     articles(filters: { title: { startsWith: "mon"  }}) {
//         data {
//             id
//         }
//     }
// }