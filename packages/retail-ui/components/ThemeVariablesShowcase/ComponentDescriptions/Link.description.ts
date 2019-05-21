export default {
  useDefault: {
    contents: "css`\n  color: ${t.linkColor};\n\n  &:hover {\n    color: ${t.linkHoverColor};\n    text-decoration-color: ${t.linkHoverTextDecoration};\n  }\n  &:active {\n    color: ${t.linkActiveColor};\n  }\n`",
    variables: [
      "linkColor",
      "linkHoverColor",
      "linkHoverTextDecoration",
      "linkActiveColor"
    ]
  },
  focus: {
    contents: "css`\n  .${styles.useDefault}& {\n    color: ${t.linkColor};\n    text-decoration: ${t.linkHoverTextDecoration};\n  }\n  .${styles.useSuccess}& {\n    text-decoration: ${t.linkHoverTextDecoration};\n  }\n  .${styles.useDanger}& {\n    text-decoration: ${t.linkHoverTextDecoration};\n  }\n  .${styles.useGrayed}& {\n    color: ${t.linkDisabledColor};\n    text-decoration: ${t.linkHoverTextDecoration};\n  }\n`",
    variables: [
      "linkColor",
      "linkHoverTextDecoration",
      "linkDisabledColor"
    ]
  },
  useGrayed: {
    contents: "css`\n  color: ${t.linkDisabledColor};\n\n  &:hover {\n    color: ${t.linkDisabledColor};\n    text-decoration-color: ${t.linkHoverTextDecoration};\n  }\n  &:active {\n    color: ${t.linkDisabledColor};\n  }\n`",
    variables: [
      "linkDisabledColor",
      "linkHoverTextDecoration"
    ]
  },
  disabled: {
    contents: "css`\n  .${styles.useDefault}& {\n    color: ${t.linkDisabledColor};\n\n    &:hover {\n      color: ${t.linkDisabledColor};\n    }\n  }\n  .${styles.useSuccess}& {\n    color: ${t.linkDisabledColor};\n\n    &:hover {\n      color: ${t.linkDisabledColor};\n    }\n  }\n  .${styles.useDanger}& {\n    color: ${t.linkDisabledColor};\n\n    &:hover {\n      color: ${t.linkDisabledColor};\n    }\n  }\n  .${styles.useGrayed}& {\n    color: ${t.linkDisabledColor};\n\n    &:hover {\n      color: ${t.linkDisabledColor};\n    }\n  }\n`",
    variables: [
      "linkDisabledColor"
    ]
  }
};