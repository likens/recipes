import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ContentLink from "../components/ContentLink"

export const RecipeTemplate = ({
  name,
  helmet,
  author,
  date,
  inspiredby,
  preptime,
  cooktime,
  servingsize,
  ingredients,
  directions
}) => {

  return (
    <section className="recipe recipe--detail">
      {helmet || ''}
      <h1 className="recipe__heading recipe__heading--detail">{name}</h1>
      <div className="recipe__main">
        <div className="recipe__intro">
          <div className="recipe__item recipe__date">
            <div className="recipe__label">Published</div>
            <div className="recipe__value">{date}</div>
          </div>
          <div className="recipe__item recipe__author">
            <div className="recipe__label">Author</div>
            <div className="recipe__value">{author}</div>
          </div>
          <div className="recipe__item recipe__inspired">
            <div className="recipe__label">Inspired by</div>
            <div className="recipe__value">{inspiredby}</div>
          </div>
          <div className="recipe__item recipe__prep">
            <div className="recipe__label">Prep Time</div>
            <div className="recipe__value">{preptime}</div>
          </div>
          <div className="recipe__item recipe__cook">
            <div className="recipe__label">Cook Time</div>
            <div className="recipe__value">{cooktime}</div>
          </div>
          <div className="recipe__item recipe__size">
            <div className="recipe__label">Serving Size</div>
            <div className="recipe__value">{servingsize}</div>
          </div>
        </div>
        <div className="recipe__full">
          <div className="recipe__section recipe__section--ingredients">
            <div className="recipe__heading recipe__heading--content">Ingredients</div>
            <div className="recipe__content">
              <ul className="recipe__list recipe__ingredients">
                {ingredients && ingredients.map((ing, idx) => ( 
                  <li className="recipe__list-item recipe__ingredients-item" key={idx}>
                    <input className="recipe__list-check" type="checkbox" id={`i${idx}`} />
										<label className="recipe__list-label" htmlFor={`i${idx}`}>
											{ing.quantity ? `${ing.quantity} ` : ``}
											{ing.measurement ? `${ing.measurement}(s) ` : ``}
											{ing.name ? ing.name : ``}
										</label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="recipe__section recipe__section--directions">
            <div className="recipe__heading recipe__heading--content">Directions</div>
            <div className="recipe__content">
              <ol className="recipe__list recipe__directions">
                {directions && directions.map((dir, idx) => ( 
                  <li className="recipe__list-item recipe__directions-item" key={idx}>
                      <input className="recipe__list-check" type="checkbox" id={`d${idx}`} />
											<label className="recipe__list-label" htmlFor={`d${idx}`}>
												{dir.direction}
											</label>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          {/* <div className="recipe__section recipe__section--related">
            <div className="recipe__heading recipe__heading--content">Related</div>
            <div className="recipe__content">
              [related recipes here]
            </div>
          </div> */}
        </div>
      </div>
      <div className="recipe__back">
          <ContentLink href={"/"} back={true} text={"Back To Recipes"} />
      </div>
    </section>
  )
}

RecipeTemplate.propTypes = {
  name: PropTypes.string,
  ingredients: PropTypes.array,
  helmet: PropTypes.object,
}

const Recipe = ({ data }) => {
  const { markdownRemark: recipe } = data

  return (
    <Layout>
      <RecipeTemplate
        helmet={
          <Helmet titleTemplate="%s | Recipes">
            <title>{`${recipe.frontmatter.name} Recipe ${recipe.frontmatter.author ? 
              ` by ${recipe.frontmatter.author}` : ``}`}</title>
            {/* <meta
              name="description"
              content={`${recipe.frontmatter.description}`}
            /> */}
          </Helmet>
        }
        name={recipe.frontmatter.name}
        author={recipe.frontmatter.author}
        date={recipe.frontmatter.date}
        inspiredby={recipe.frontmatter.inspiredby}
        preptime={recipe.frontmatter.preptime}
        cooktime={recipe.frontmatter.cooktime}
        servingsize={recipe.frontmatter.servingsize}
        ingredients={recipe.frontmatter.ingredients}
        directions={recipe.frontmatter.directions}
      />
    </Layout>
  )
}

Recipe.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default Recipe

export const pageQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        name
        author
        inspiredby
        preptime
        cooktime
        servingsize
        ingredients {
          quantity
          measurement
          name
        }
        directions {
          direction
        }
      }
    }
  }
`