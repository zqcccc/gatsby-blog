import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import { ReactCusdis } from '../components/cusdis'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useIsUseBrowser } from '../hooks/isInBrowser'
import { GlobalContext } from '../core/context'

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const isInBrowser = useIsUseBrowser()

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          {/* <p>{post.frontmatter.date}</p> */}
          <small>
            {formatPostDate(post.frontmatter.date, 'zh-Hans')}
            {` • ${formatReadingTime(post.timeToRead)}`}
          </small>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>

      {isInBrowser && (
        <GlobalContext.Consumer>
          {({ state }) => (
            <ReactCusdis
              attrs={{
                host: 'https://cusdis.com',
                appId: '05e78cdc-13fc-404f-bab7-a4cc8e62a388',
                pageId: `${location.hostname}_${location.pathname}`,
                pageTitle: document.title,
                pageUrl: location.href,
                theme: state?.theme ?? window.__theme,
              }}
              lang="zh-cn"
            />
          )}
        </GlobalContext.Consumer>
      )}
      <footer>
        <Bio />
      </footer>
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
      timeToRead
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
