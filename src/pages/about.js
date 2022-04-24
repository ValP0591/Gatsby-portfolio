import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import { rhythm, scale } from "../utils/typography"
import Button from 'react-bootstrap/Button'
import AniLink from "gatsby-plugin-transition-link/AniLink"

// функция для расчёта количества лет 
let now = new Date(); //Текущя дата
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
let dob = new Date(1983, 9, 10); //Дата рождения
let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
//Возраст = текущий год - год рождения
let age = today.getFullYear() - dob.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobnow) {
  age = age-1;
}   


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About"/>
              <h1 style={{
                ...scale(2),
                marginBottom: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 900,
                letterSpacing: -1,
                }}
                >About me</h1>
            <div style={{
                ...scale(.2),
                fontFamily: `Raleway, sans-serif`,
                marginBottom: rhythm(1),
                marginTop: rhythm(1),
                color: 'var(--textTitle)',
                transition: 'color 0.2s ease-out, background 0.2s ease-out',
                fontWeight: 300,     
            }}>
              <p>I`m {age} years old and have {new Date().getFullYear() - 2018} years of web developing experience</p>
              <p>I`m using Java Script while building front-end and some JS frameworks at back-end such as ExpressJS</p>
              <p>This SPA created with React-based open source framework <strong>Gatsby</strong> and I use <strong>Contentful</strong> as an API-first content management platform to create, manage and publish content on any digital channel</p>
              <p>You can go ahead and contact me if you'd like to have some awesome web-app</p>
              <p>So, what are you waiting for? </p></div> 
              <Button variant="outline-secondary"><AniLink paintDrip to ="/contact/" hex="#6c757d"
                style={{
                    ...scale(.6),
                    fontFamily: `Titillium Web, sans-serif`,
                    color: 'var(--textLink)',
                    padding: '1rem', 
                    borderRadius: '3px',
                    transition: 'color 1.2s ease-out, background 0.2s ease-out',
                    fontWeight: 800,   
                    textTransform: 'uppercase', 
                    textShadow: '1px 1px 4px black',       
                }}>
                    One click is all it takes.</AniLink></Button>
        </Layout>    
    )
}

export default AboutPage


