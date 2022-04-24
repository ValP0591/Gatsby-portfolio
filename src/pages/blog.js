import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'
import { rhythm, scale } from "../utils/typography"

const BlogPage = () => {
  const data = useStaticQuery (graphql `
    query {
      allContentfulBlogPost (sort: { fields: publishedDate,order: DESC } ) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow:true)
          }
        }
      }
    }
  `)
    return (
        <Layout>
          <Head title="Blog"/>
          <h1 
          style={{
            ...scale(2),
            fontFamily: `Titillium Web, sans-serif`,
            marginBottom: rhythm(1),
            color: 'var(--textTitle)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            fontWeight: 900,
            letterSpacing: -1,}}
          >My blog</h1>

          <p
          style={{
            ...scale(.5),
            fontFamily: 'Raleway, sans-serif',
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
            color: 'var(--textTitle)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            fontWeight: 300,               
          }}
          >Here is some of my posts</p>
            <ol className={blogStyles.posts}>
              {data.allContentfulBlogPost.edges.map((edge) => {
                  return (
                    <li style={{
                      margin: '1rem .5rem',
                      minWidth: '15rem',
                      borderLeft: 'rgba(121, 120, 120, 0.623) solid 1em',
                      borderRadius: '.5em 1em 2em .5em',
                      backgroundColor: 'rgb(61, 61, 61)',
                      boxShadow: '1px 1px 1px 1px grey',
                      backgroundColor: 'var(--bg)',
                      margin: '1em 1em',
                      textDecoration: 'none',
                      transition: 'all .2s ease-in-out'
                    }}>
                        <Link to={`/blog/${edge.node.slug}`}>
                        <h3
                        style={{
                          ...scale(.6),
                          fontFamily: `Lora, sans-serif`,
                          marginBottom: '.8em',
                          marginTop: rhythm(1),
                          color: 'var(--textTitle)',
                          transition: 'color 0.2s ease-out, background 0.2s ease-out',
                          fontWeight: 800,
                          textShadow: '1px 1px 1px black',
                        }}
                        >{edge.node.title}</h3>
                        <p
                        style={{
                          
                          fontSize: '8px',
                          fontFamily: 'Lora, sans-serif',
                          marginBottom: '.8em',
                          marginTop: rhythm(1),
                          color: 'var(--textTitle)',
                          transition: 'color 0.2s ease-out, background 0.2s ease-out',
                          fontWeight: 200,
                        }}
                        >{edge.node.publishedDate}</p>
                        <p
                        style={{
                          fontSize: '12px',
                          fontFamily: 'Lora, sans-serif',
                          marginBottom: '.8em',
                          color: 'var(--textTitle)',
                          transition: 'color 0.2s ease-out, background 0.2s ease-out',
                          fontWeight: 200,
                        }}
                        >Time to read is about {edge.node.timeToRead} min.</p>
                        </Link>
                    </li>
                  )
              })}
            </ol>
        </Layout>
    )
}

export default BlogPage 