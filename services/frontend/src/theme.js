import { createMuiTheme } from '@material-ui/core/styles'

export default createMuiTheme({
  typography: {
    useNextVariants: true,
  },

  overrides: {
    Execution: {
      width: 200,
    },

    noDecorationLink: {
      textDecoration: 'none',
    },

    cursor: {
      pointer: {
        cursor: 'pointer',
      },
    },
  },
})
