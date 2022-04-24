import React from "react";
import { graphql, useStaticQuery } from 'gatsby'
import Link from 'gatsby-plugin-transition-link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ThemeToggle from "./themeToggle";
import AniLink from "gatsby-plugin-transition-link/AniLink"
import instalogo from '../../images/instalogo.png'
import telegram from '../../images/telegram.png'

// import './header.module.scss'
import headerStyles from './header.module.scss'

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (

    <header className={headerStyles.header}>
      {/* <Row> 
            <Col md={{ }}> 
              <h1>
                  <Link className={headerStyles.title} to = "/">
                    { data.site.siteMetadata.title }
                  </Link>
              </h1>
            </Col>
          </Row>*/}
      <Row>
        <Col xs={8} sm={8}>
          <nav>
            <ul className={headerStyles.navList}>
              <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} cover to="/" direction="left" bg="#6c757d" duration={2}>First</AniLink></li>
              <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} cover to="/about" bg="#6c757d" direction="right">bio</AniLink></li>
              <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} paintDrip to="/blog" hex="#6c757d" duration={1} >articles</AniLink></li>
              <li><AniLink className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} paintDrip to="/portfolio" hex="#6c757d" duration={1} >projects</AniLink></li>
            </ul>
          </nav>
        </Col>
        <Col xs={2} sm={3}>
          <div className={headerStyles.icons}>
            <div className={headerStyles.icon}><a href="https://www.instagram.com/valp0591/"><img src={instalogo} alt="img" width="20" /></a></div>
            <div className={headerStyles.icon}><a href="https://github.com/ValP0591"><svg class="" viewBox="0 0 16 38" version="1.1" width="20" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg></a></div>
            <div className={headerStyles.icon}><a href="https://t.me/@valp0591"><img src={telegram} alt="img" width="20" /></a></div>
          </div>
        </Col>
        <Col xs={2} sm={1}>
          <ThemeToggle />
        </Col>
      </Row>

    </header>

  )
}

export default Header
