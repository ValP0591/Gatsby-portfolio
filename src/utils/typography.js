import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'

funstonTheme.overrideThemeStyles = ({ rhythm }, options) => ({
    'h2,h3': {
      marginBottom: rhythm(1/2),
      marginTop: rhythm(2),
    }
  })

const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
    typography.injectStyles()
  }

export const { scale, rhythm, options } = typography
export default typography