import React from "react";
import { Link, graphql } from "gatsby";

export default function Template({data}) {
  const post = data.markdownRemark

  return (
    <div
      style={{
        margin: `1rem auto`,
        maxWidth: 960,
      }}
    >
      <Link to="/blog">Go Back</Link>
      <hr />
      <h4>
        {post.frontmatter.title}
        <br />
        <small>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </small>
      </h4>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuer = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`