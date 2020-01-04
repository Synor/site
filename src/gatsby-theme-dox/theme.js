import theme from 'gatsby-theme-dox/src/theme'

export default {
  ...theme,
  layout: {
    ...theme.layout,
    root: {
      ...theme.layout.root,
      maxWidth: 1080
    }
  }
}
