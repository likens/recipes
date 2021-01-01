import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import RecipeList from '../components/RecipeList'

export const IndexPageTemplate = () => (
    <section className="recipes">
        <div className="recipes__heading">Recipes</div>
        <RecipeList />
    </section>
)

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        name
      }
    }
  }
`