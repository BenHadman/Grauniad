import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"

import Img from "gatsby-image"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        
      <Menu></Menu>
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    

    <Layout location={location} title={siteTitle}>
      <SEO title="All Recipes" />
      {/*<Bio />*/}
      <Menu></Menu>
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug
          let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid
          return (

<section className="fc-container fc-container--tag " aria-expanded="true">
  <div className="fc-container__inner">
    <header className="fc-container__header js-container__header">
      <Link to={post.fields.slug} itemProp="url">
        <time className="fc-date-headline">
          {post.frontmatter.date}
        </time> 
      </Link>
    </header>
    <div className="fc-container--rolled-up-hide fc-container__body">
      <div className="fc-slice-wrapper">
        <ul className="u-unstyled l-row  l-row--cols-1 fc-slice fc-slice--f">
          <li className="fc-slice__item l-row__item l-row__item--span-1 u-faux-block-link">
            <div className="fc-item fc-item--force-image-upgrade fc-item--has-image fc-item--has-metadata fc-item--has-timestamp fc-item--pillar-lifestyle fc-item--type-recipe js-fc-item fc-item--list-media-mobile fc-item--full-media-50-tablet js-snappable" data-link-name="feature | group-0 | card-@1" data-item-visibility="all" data-test-id="facia-card" data-id="food/2021/jan/24/nigel-slater-sweet-and-savoury-recipes-for-pomegranate-molasses" data-loyalty-short-url="/p/g5q7e">
              <div className="fc-item__container">
                <div className="fc-item__media-wrapper">
                  <div className="fc-item__image-container u-responsive-ratio inlined-image">
                  <Img fluid={featuredImgFluid} />
                  </div>
                </div>
                <div className="fc-item__content ">
                  <div className="fc-item__header">
                    <h3 className="fc-item__title">
                      <Link to={post.fields.slug} itemProp="url">
                        <span className="u-faux-block-link__cta fc-item__headline"> 
                          <span className="js-headline-text" itemProp="headline">{title}</span>
                        </span> 
                      </Link>
                    </h3>
                  </div>
                  <div className="fc-item__standfirst-wrapper fc-item__standfirst-wrapper--timestamp">
                    <div className="fc-item__standfirst" itemProp="description">
                    {post.excerpt}
                    </div>
                    <div className="fc-item__meta js-item__meta">
                      <time className="fc-item__timestamp" dateTime="2021-01-24T10:30:43+0000" data-timestamp={1611484243000} data-relativeformat="short"> 
                        <span className="inline-clock inline-icon ">
                          <svg width={11} height={11} viewBox="0 0 11 11" className="inline-clock__svg inline-icon__svg">
                            <path d="M5.4 0C2.4 0 0 2.4 0 5.4s2.4 5.4 5.4 5.4 5.4-2.4 5.4-5.4S8.4 0 5.4 0zm3 6.8H4.7V1.7h.7L6 5.4l2.4.6v.8z" />
                          </svg> 
                        </span> 
                        <span className="fc-timestamp__text"> 
                          <span className="u-h">Published: 
                          </span>{post.frontmatter.isoDate} 
                        </span> 
                      </time>
                    </div>
                  </div>
                </div>
                <Link to={post.fields.slug} itemProp="url" className="u-faux-block-link__overlay js-headline-text">
                      {title}
                </Link>
              </div>
            </div> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>


            
            
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          isoDate: date(formatString: "HH:mm")
          title
          description
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
