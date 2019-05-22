export default {
  root: {
    contents: "css`\n  &:hover {\n    border-bottom: 3px solid ${t.tabColorHover};\n  }\n`",
    variables: [
      "tabColorHover"
    ]
  },
  vertical: {
    contents: "css`\n  .${styles.root}&:hover {\n    border-left: 3px solid ${t.tabColorHover};\n  }\n`",
    variables: [
      "tabColorHover"
    ]
  },
  focus: {
    contents: "css`\n  border: 2px solid ${t.tabColorFocus};\n`",
    variables: [
      "tabColorFocus"
    ]
  },
  disabled: {
    contents: "css`\n  color: rgba(\n    ${ColorFunctions.red(t.textColorDefault)},\n    ${ColorFunctions.green(t.textColorDefault)},\n    ${ColorFunctions.blue(t.textColorDefault)},\n    0.5\n  );\n`",
    variables: [
      "textColorDefault"
    ]
  },
  primary: {
    contents: "css`\n  &:hover {\n    border-bottom: 3px solid ${t.tabColorHoverPrimary};\n  }\n`",
    variables: [
      "tabColorHoverPrimary"
    ]
  },
  success: {
    contents: "css`\n  &:hover {\n    border-bottom: 3px solid ${t.tabColorHoverSuccess};\n  }\n`",
    variables: [
      "tabColorHoverSuccess"
    ]
  },
  warning: {
    contents: "css`\n  &:hover {\n    border-bottom: 3px solid ${t.tabColorHoverWarning};\n  }\n`",
    variables: [
      "tabColorHoverWarning"
    ]
  },
  error: {
    contents: "css`\n  &:hover {\n    border-bottom: 3px solid ${t.tabColorHoverError};\n  }\n`",
    variables: [
      "tabColorHoverError"
    ]
  }
};