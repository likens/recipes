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


            // <div className="recipe" key={recipe.id}>
            //   <Link className="recipe__link" to={recipe.fields.slug}>
            //     <div className="recipe__image recipe__image--list">
            //       <img className={`recipe__img recipe__img--list`} 
            //         src={recipe.frontmatter.image ? recipe.frontmatter.image : undefined}
            //         alt={recipe.frontmatter.image ? `Image for ${recipe.frontmatter.name}` : ``} />
            //     </div>
            //     <div className="recipe__info">
            //       <div className="recipe__heading recipe__heading--list">{recipe.frontmatter.name}</div>
            //       <div className="recipe__icon">
            //         <svg className="receipe__svg" width="24" height="24" viewBox="0 0 320 512"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/></svg>
            //       </div>
            //     </div>
                
            //   </Link>
            // </div>
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
