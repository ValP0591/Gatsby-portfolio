import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { rhythm, scale } from "../utils/typography"
 
const ContactForm = (props) => (
    <section id="contact">
        <form 
            name="contact-form" 
            method="post" 
            action="/success/" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
        >
            <input type="hidden" name="form-name" value="contact"  />

                <Form.Control placeholder="Your name" input type="text" name="name" style={{
                    ...scale(.8),
                    fontFamily: `Raleway, sans-serif`,
                    textTransform: 'uppercase',
                    marginBottom: rhythm(1),
                    color: 'var(--textForm)',
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                    fontWeight: 200,
                    letterSpacing: -1,
                    }}
                />

                <Form.Control placeholder="E-mail" input type="email" name="email" style={{
                    ...scale(.8),
                    fontFamily: `Raleway, sans-serif`,
                    textTransform: 'uppercase',
                    marginBottom: rhythm(1),
                    color: 'var(--textForm)',
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                    fontWeight: 200,
                    letterSpacing: -1,
                    }}
                />
    
                <Form.Control as="textarea" rows="3" placeholder="Some thoughts about your project to be" input type="text" name="message" style={{
                    ...scale(.8),
                    fontFamily: `Raleway, sans-serif`,
                    textTransform: 'uppercase',
                    marginBottom: rhythm(1),
                    color: 'var(--textForm)',
                    transition: 'color 0.2s ease-out, background 0.2s ease-out',
                    fontWeight: 200,
                    letterSpacing: -1,
                    }}
                />
                
            <div className="d-flex justify-content-end">
                <Button variant="secondary" type="submit"
                    style={{
                        ...scale(.8),
                        fontFamily: `Titillium Web, sans-serif`,
                        color: 'var(--buttonText)',
                        padding: '1rem', 
                        borderRadius: '3px',
                        transition: 'color 1.2s ease-out, background 0.2s ease-out',
                        fontWeight: 800,   
                        textTransform: 'uppercase',
                        fontDecoration: 'none'       
                }}>Let's do it!
                </Button>
            </div>
        </form>
    </section>
)

export default ContactForm