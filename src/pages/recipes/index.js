import React from 'react'
import Layout from '../../components/Layout'
import RecipeList from '../../components/RecipeList'

export default class RecipeIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <RecipeList />}
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
