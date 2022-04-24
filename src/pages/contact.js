import React from 'react'
import Layout from '../components/layout'
import Head from '../components/head'
import { graphql } from 'gatsby'
import { rhythm, scale } from "../utils/typography"
import ContactForm from '../components/contactForm'

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Head title="Contact"/>
          <h1 style={{
            ...scale(2),
            marginBottom: rhythm(1),
            color: 'var(--textTitle)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            letterSpacing: -1,
        }}
        >Get in Touch</h1>
          <p style={{
            ...scale(.5),
            marginBottom: rhythm(1),
            marginTop: rhythm(1),
            color: 'var(--textTitle)',
            transition: 'color 0.2s ease-out, background 0.2s ease-out',
            fontWeight: 300,               
          }}
          >Let me help you kick start your next project</p>
          <ContactForm />
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`