import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './styles.scss'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (

    <div className="master">

      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#000000" /> */}
        <meta name="theme-color" content="#000" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
      </Helmet>
      
      <Header />
      <main className="main">{children}</main>
      <Footer />

    </div>
  )
}

export default TemplateWrapper
