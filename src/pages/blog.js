import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/Seo/seo'
import Layout from '../components/Layout/layout'
import Hero from '../components/Hero/hero'
import ArticlePreview from '../components/ArticlePreview/article-preview'

const BlogIndex = ({ data, location }) => {
  const posts = data.allContentfulBlogPost.nodes;

  return (
    <Layout location={location}>
    <Seo title='Blog' />
    <Hero title='Blog' />
    <ArticlePreview posts={posts} />
    </Layout>
  );
};
class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Hero title="Blog" />
        <ArticlePreview posts={posts} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImage(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`
