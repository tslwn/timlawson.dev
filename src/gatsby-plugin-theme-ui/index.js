export default {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    body: `Roboto, system-ui, sans-serif`,
    heading: `Roboto, system-ui, sans-serif`,
    monospace: `"Roboto Mono", monospace`,
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: `#121212`,
    background: `#f9f9f9`,
    primary: `#010a43`,
    secondary: `#ffdddd`,
    muted: `#767676`,
  },
  styles: {
    root: {
      fontFamily: `body`,
      lineHeight: `body`,
      fontWeight: `body`,
    },
    h1: {
      color: `text`,
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
      fontSize: 5,
    },
    h2: {
      color: `text`,
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
      fontSize: 4,
    },
    h3: {
      color: `text`,
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
      fontSize: 3,
    },
    h4: {
      color: `text`,
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
      fontSize: 2,
    },
    h5: {
      color: `text`,
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
      fontSize: 1,
    },
    h6: {
      color: `text`,
      fontFamily: `heading`,
      lineHeight: `heading`,
      fontWeight: `heading`,
      fontSize: 0,
    },
    p: {
      color: `text`,
      fontFamily: `body`,
      fontWeight: `body`,
      lineHeight: `body`,
    },
    a: {
      color: `primary`,
    },
    pre: {
      fontFamily: `monospace`,
      overflowX: `auto`,
      code: {
        color: `inherit`,
      },
    },
    code: {
      fontFamily: `monospace`,
      fontSize: `inherit`,
    },
    table: {
      width: `100%`,
      borderCollapse: `separate`,
      borderSpacing: 0,
    },
    th: {
      textAlign: `left`,
      borderBottomStyle: `solid`,
    },
    td: {
      textAlign: `left`,
      borderBottomStyle: `solid`,
    },
    img: {
      maxWidth: `100%`,
    },
    a: {
      color: `text`,
      textDecoration: `none`,
      ':hover': {
        textDecoration: `underline`,
      },
      ':visited': {
        color: `accent`,
      },
    },
    ul: {
      listStyleType: `none`,
      margin: 0,
      padding: 0,
    },
  },
}
