import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import { formatPostDate, formatReadingTime } from '../utils/helpers'
import { ReactCusdis } from '../components/cusdis'
import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { useIsUseBrowser } from '../hooks/isInBrowser'
import { GlobalContext } from '../core/context'
import CodeBlock from '../components/CodeBlock'
import { MDXProvider } from '@mdx-js/react'

const components = {
  pre: CodeBlock,
  code: ({ children }: any) => (
    <code className="language-inline-code">{children}</code>
  ),
}

const BlogPostTemplate = ({ data, location, children }: any) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  const isInBrowser = useIsUseBrowser()

  return (
    <Layout location={location} title={siteTitle}>
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
            {` • ${formatReadingTime(post.fields.timeToRead.minutes)}`}
          </small>
        </header>
        {/* <section itemProp="articleBody">{children}</section> */}
        <MDXProvider components={components}>{children}</MDXProvider>
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
                {previous.frontmatter.title}
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
          {({ state }: any) => (
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

export const Head = ({ data }: any) => {
  const post = data.mdx
  console.log('post: ', post)
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
    </>
  )
}

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
    mdx(id: { eq: $id }) {
      id
      fields {
        timeToRead {
          minutes
        }
      }
      excerpt
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
