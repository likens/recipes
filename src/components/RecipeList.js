import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import RecipeCard from "../components/RecipeCard";
// import PreviewCompatibleImage from './PreviewCompatibleImage'

class RecipeList extends React.Component {
  render() {
    const { data } = this.props
    const { edges: recipes } = data.allMarkdownRemark

    return (

      <div className="recipes__list">
        {recipes?.map(({ node: recipe }, i) => (
            <RecipeCard recipe={recipe} key={`recipe__${i}`} />
          ))}
      </div>
    )
  }
}

RecipeList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query RecipeListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "recipe" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                templateKey
                name
                date(formatString: "MMMM DD, YYYY")
                author
                image
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <RecipeList data={data} count={count} />}
  />
)
