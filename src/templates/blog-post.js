import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Menu from "../components/menu"
import nigel from"../../static/Nigel_Slater.png"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Menu></Menu>
      <article
        className="content content--article content--pillar-lifestyle content--type-recipe section-food tonal tonal--tone-feature"
        itemScope
        itemType="http://schema.org/Article"
      >
        <div className="content__main tonal__main tonal__main--tone-feature">
        <div className="gs-container">
        <div className="content__main-column content__main-column--article js-content-main-column ">

        <header className="content__head content__head--article tonal__head tonal__head--tone-feature">
        <div class="content__labels content__labels--not-immersive">
            <div class="content__series-label content__label">
            <p class="content__label__link" href="https://www.theguardian.com/food/series/nigel-slater-recipes">
            <span class="label__link-wrapper"> Nigel Slater recipes</span>
            </p>
            </div>
            <div class="content__section-label content__label">
            <p class="content__label__link" data-link-name="article section" href="https://www.theguardian.com/food">
            <span class="label__link-wrapper">
            Food
            </span>
            </p>
            </div>
            </div>
        <div class="content__headline-standfirst-wrapper">
          {/*title*/}
        <div class="content__header tonal__header">
        <div class="u-cf">
        <h1 class="content__headline " itemprop="headline">
        {post.frontmatter.title}
        </h1>
        </div>
        </div>
        {/*title end*/}
        {/*summary/desc*/}
        <div class="tonal__standfirst u-cf">
        <div class="content__standfirst" data-link-name="standfirst" data-component="standfirst">
        <p>{post.excerpt}</p>
        </div>
        </div>
        {/*summary/desc end*/}
        </div>
        {/*Nigel author*/}
        <div class="content__meta-container js-content-meta u-cf">
          {/*image part*/}
          <div class="media__img meta__image">
            <div class="byline-img">
              <img class="byline-img__img" src={nigel} alt="Nigel Slater"/>
            </div>
          </div>
          {/*image part end*/}
          {/*authorname*/}
          <div class="meta__contact-wrap">
            <p class="byline" data-link-name="byline" data-component="meta-byline"><span itemscope="" itemtype="http://schema.org/Person" itemprop="author">
              <p rel="author" class="tone-colour" itemprop="sameAs" data-link-name="auto tag link"><span itemprop="name">Nigel Slater</span></p></span></p>
                <p class="content__dateline" aria-hidden="true">
                  <time itemprop="datePublished" datetime="2020-07-26T10:30:20+0100" data-timestamp="1595755820000" class="content__dateline-wpd js-wpd content__dateline-wpd--modified">
                    {post.frontmatter.date}
                  </time>
              <time datetime="2020-07-26T20:39:30+0100" data-timestamp="1595792370000" class="content__dateline-lm js-lm u-h" itemprop="dateModified">
                  Last modified on Sun 26 Jul 2020 <span class="content__dateline-time">20.39&nbsp;BST</span>
              </time>
            </p>
          </div>
          {/*authorname end*/}
          {/*share*/}
          <div className="meta__extras">
            <div class="meta__social" data-component="share">
          <ul class="social social--top js-social--top u-unstyled u-cf" data-component="social">
          <li class="social__item social__item--facebook " data-link-name="facebook">
          <p class="social__action js-social__action--top social-icon-wrapper" data-link-name="social top" title="Facebook">
          <span class="inline-icon__fallback button">Share on Facebook</span>
          <span class="inline-share-facebook inline-icon rounded-icon centered-icon social-icon social-icon--facebook">
          <svg width="32" height="32" viewBox="-2 -2 32 32" class="rounded-icon__svg centered-icon__svg social-icon__svg social-icon--facebook__svg inline-share-facebook__svg inline-icon__svg">
          <path d="M17.9 14h-3v8H12v-8h-2v-2.9h2V8.7C12 6.8 13.1 5 16 5c1.2 0 2 .1 2 .1v3h-1.8c-1 0-1.2.5-1.2 1.3v1.8h3l-.1 2.8z"></path>
          </svg>
          </span>
          </p>
          </li>
          <li class="social__item social__item--twitter " data-link-name="twitter">
          <p class="social__action js-social__action--top social-icon-wrapper" data-link-name="social top" title="Twitter">
          <span class="inline-icon__fallback button">Share on Twitter</span>
          <span class="inline-share-twitter inline-icon rounded-icon centered-icon social-icon social-icon--twitter">
          <svg width="32" height="32" viewBox="-2 -2 32 32" class="rounded-icon__svg centered-icon__svg social-icon__svg social-icon--twitter__svg inline-share-twitter__svg inline-icon__svg">
          <path d="M21.3 10.5v.5c0 4.7-3.5 10.1-9.9 10.1-2 0-3.8-.6-5.3-1.6.3 0 .6.1.8.1 1.6 0 3.1-.6 4.3-1.5-1.5 0-2.8-1-3.3-2.4.2 0 .4.1.7.1l.9-.1c-1.6-.3-2.8-1.8-2.8-3.5.5.3 1 .4 1.6.4-.9-.6-1.6-1.7-1.6-2.9 0-.6.2-1.3.5-1.8 1.7 2.1 4.3 3.6 7.2 3.7-.1-.3-.1-.5-.1-.8 0-2 1.6-3.5 3.5-3.5 1 0 1.9.4 2.5 1.1.8-.1 1.5-.4 2.2-.8-.3.8-.8 1.5-1.5 1.9.7-.1 1.4-.3 2-.5-.4.4-1 1-1.7 1.5z"></path>
          </svg>
          </span>
          </p>
          </li>
          <li class="social__item social__item--email " data-link-name="email">
          <p class="social__action js-social__action--top social-icon-wrapper" data-link-name="social top"  title="Email">
          <span class="inline-icon__fallback button">Share via Email</span>
          <span class="inline-share-email inline-icon rounded-icon centered-icon social-icon social-icon--email">
          <svg width="32" height="32" viewBox="0 0 32 32" class="rounded-icon__svg centered-icon__svg social-icon__svg social-icon--email__svg inline-share-email__svg inline-icon__svg">
          <path d="M23.363 20.875H8.637v-8.938l6.545 5.687h1.637l6.544-5.687v8.938zm-1.635-9.75L16 16l-5.728-4.875h11.456zM23.363 9.5H8.637L7 11.125v9.75L8.637 22.5h14.727L25 20.875v-9.75L23.363 9.5z"></path>
          </svg>
          </span>
          </p>
          </li>
          </ul>
          </div>
          </div>
          {/*share end*/}
        </div>
        {/*Nigel author end*/}

        {/*Image as figure goes here*/}
        {/*Image as figure goes here end*/}
        </header>
        {/*html content in here*/}
        <section className="content__article-body from-content-api js-article__body"
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        {/*html content in here end*/}
        <em>Follow Nigel on Twitter <p data-link-name="in body link" class="u-underline">@NigelSlater</p></em>
        {/*divider*/}
        <div class="after-article js-after-article"></div>
        {/*divider end*/}
        {/*sub*/}
        <div class="submeta ">
          <span class="submeta__label">Topics</span>
          <div class="submeta__section-labels">
              <ul class="submeta__links">
                <li class="submeta__link-item">
                  <a class="submeta__link" data-link-name="article section" href="https://www.theguardian.com/food">
                  Food
                  </a>
                </li>
                <li class="submeta__link-item">
                  <a class="submeta__link" data-link-name="" href="https://www.theguardian.com/food/series/nigel-slater-recipes">
                  Nigel Slater recipes
                  </a>
                </li>
              </ul>
            </div>
            <div class="submeta__keywords">
              <ul class="submeta__links">
              <li class="submeta__link-item">
              <a class="submeta__link" href="https://www.theguardian.com/food/chicken" data-link-name="keyword: food/chicken">
              Chicken
              </a>
              </li>
              <li class="submeta__link-item">
              <a class="submeta__link" href="https://www.theguardian.com/food/vegetables" data-link-name="keyword: food/vegetables">
              Vegetables
              </a>
              </li>
              <li class="submeta__link-item">
              <a class="submeta__link" href="https://www.theguardian.com/food/salad" data-link-name="keyword: food/salad">
              Salad
              </a>
              </li>
              <li class="submeta__link-item">
              <a class="submeta__link" href="https://www.theguardian.com/tone/recipes" data-link-name="tone: recipes">
              recipes
              </a>
              </li>
              </ul>
            </div>
        </div>
        {/*share icons*/}
        {/*sub end*/}
        </div>
        {/*right section*/}
        <div class="content__secondary-column js-secondary-column" aria-hidden="true">
          {/*ad section*/}
        <div class="aside-slot-container js-aside-slot-container" aria-hidden="true">
          <div class="contributions__adblock">
              <div class="contributions__adblock-content">
                  <div class="contributions__adblock-header">
                      <h2>
                          Read The<br/>
                          Guardian without<br/>
                          interruption on all<br/>
                          your devices
                      </h2>
                  </div>
                  <a class="contributions__adblock-button" href="https://support.theguardian.com/subscribe/digital?acquisitionData=%7B%22componentType%22%3A%22ACQUISITIONS_OTHER%22%2C%22source%22%3A%22GUARDIAN_WEB%22%2C%22campaignCode%22%3A%22shady_pie_open_2019%22%2C%22componentId%22%3A%22shady_pie_open_2019%22%7D&amp;INTCMP=shady_pie_open_2019">
                      <span class="component-button__content">Subscribe now</span>
                  </a>
                  <img src="https://media.guim.co.uk/b437f809d9fa4c72336ccbead1730b6bb0965239/0_0_432_503/432.png" class="contributions__adblock-image" alt=""/>
              </div>
            </div>
          </div>
          {/*ad section*/}
          {/*most viewed section*/}
          <div class="js-components-container">
            <div class="js-right-most-popular right-most-popular right-most-popular--image component--rhc hide-on-childrens-books-site" data-component="geo-most-popular" data-importance="-1" data-test-id="right-most-popular">
              <h3 class="content__meta-heading right-most-popular__heading">most viewed </h3>
              <ul class="right-most-popular__items u-unstyled" data-link-name="Right hand most popular geo GB"> 
                <li class="right-most-popular-item" data-link-name="trail | 1">
                      {previous && (
                    <Link to={previous.fields.slug} rel="prev" className="right-most-popular-item__url media u-cf">
                      <div class="right-most-popular-item__img media__img">
                                <img class="responsiveimg" src="https://i.guim.co.uk/img/media/280a5330aaa5ac1e45faac332bbb9c907f323d82/0_240_4000_2399/master/4000.jpg?width=300&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=e5c006e90a7d0bff21a9b816f3661c48" alt=""/>
                            </div>
                              <div class="media__body right-most-popular__content">
                                  <h4 class="right-most-popular-item__headline">
                                          {previous.frontmatter.title}
                                  </h4>
                            </div>
                    </Link>
                  )}
                </li>
                <li class="right-most-popular-item" data-link-name="trail | 1">
                      {next && (
                    <Link to={next.fields.slug} rel="next">
                      <div class="right-most-popular-item__img media__img">
                                <img class="responsiveimg" src="https://i.guim.co.uk/img/media/280a5330aaa5ac1e45faac332bbb9c907f323d82/0_240_4000_2399/master/4000.jpg?width=300&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=e5c006e90a7d0bff21a9b816f3661c48" alt=""/>
                            </div>
                              <div class="media__body right-most-popular__content">
                                  <h4 class="right-most-popular-item__headline">
                                          {next.frontmatter.title}
                                  </h4>
                            </div>
                    </Link>
                  )}
                </li>
              </ul>
          </div>
        </div>
          {/*most viewed section end*/}
        </div>
        {/*right section end*/}
        </div>
        </div>
        <hr />
        <footer>
          {/*<Bio />*/}
        </footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
