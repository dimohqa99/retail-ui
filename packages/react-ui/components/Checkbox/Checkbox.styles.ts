import { css, cssName, memoizeStyle } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';

const styles = {
  root(t: Theme) {
    return css`
      display: inline-flex;
      align-items: baseline;
      cursor: pointer;
      position: relative;
      user-select: none;
      line-height: ${t.checkboxLineHeight};

      &:hover ${cssName(styles.box(t))} {
        background: ${t.checkboxHoverBg};
        box-shadow: ${t.checkboxShadowHover};
      }

      &:active ${cssName(styles.box(t))} {
        box-shadow: ${t.checkboxShadowActive};
        background: ${t.checkboxActiveBg};
      }
    `;
  },

  rootFallback() {
    return css`
      display: inline-table !important;
    `;
  },

  rootWrapperIE11() {
    return css`
      display: inline;
    `;
  },

  box(t: Theme) {
    return css`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: ${t.checkboxBoxSize};
      height: ${t.checkboxBoxSize};
      flex: none;
      font-size: ${t.checkboxFontSize};
      color: ${t.checkboxTextColorDefault};
      border: ${t.checkboxBorder};
      border-radius: ${t.checkboxBorderRadius};
      box-shadow: ${t.checkboxShadow};
      background: ${t.checkboxBg};
      align-self: baseline;
    `;
  },

  input() {
    return css`
      display: inline-block;
      opacity: 0;
      width: 0;
      height: 0;
      position: absolute;
      z-index: -1;
    `;
  },

  warning(t: Theme) {
    return css`
      & ${cssName(styles.box(t))} {
        box-shadow: inset 0 0 0 1px ${t.checkboxOutlineColorFocus},
          0 0 0 ${t.checkboxShadowWidth} ${t.checkboxBorderColorWarning} !important;
      }
    `;
  },

  error(t: Theme) {
    return css`
      & ${cssName(styles.box(t))} {
        box-shadow: inset 0 0 0 1px ${t.checkboxOutlineColorFocus},
          0 0 0 ${t.checkboxShadowWidth} ${t.checkboxBorderColorError} !important;
      }
    `;
  },

  checked(t: Theme) {
    return css`
      & ${cssName(styles.box(t))} {
        background: ${t.checkboxCheckedBg};
        color: ${t.checkboxCheckedColor};
        box-shadow: ${t.checkboxCheckedShadow};
      }

      &:hover ${cssName(styles.box(t))} {
        box-shadow: ${t.checkboxCheckedHoverShadow};
        background: ${t.checkboxCheckedHoverBg};
      }

      &:active ${cssName(styles.box(t))} {
        background: ${t.checkboxCheckedActiveBg};
      }
    `;
  },

  indeterminate(t: Theme) {
    return css`
      & ${cssName(styles.box(t))} {
        background: ${t.checkboxBoxIndeterminateBg};
        color: ${t.checkboxIndeterminateBg};
        box-shadow: ${t.checkboxCheckedShadow};
      }

      &:hover ${cssName(styles.box(t))} {
        box-shadow: ${t.checkboxCheckedHoverShadow};
        background: ${t.checkboxCheckedHoverBg};
      }
      &:active ${cssName(styles.box(t))} {
        background: ${t.checkboxCheckedActiveBg};
      }
    `;
  },

  focus(t: Theme) {
    return css`
      & ${cssName(styles.box(t))} {
        box-shadow: inset 0 0 0 1px ${t.checkboxOutlineColorFocus},
          0 0 0 ${t.checkboxShadowWidth} ${t.checkboxBorderColorFocus} !important;
      }
    `;
  },

  disabled(t: Theme) {
    return css`
      color: ${t.checkboxTextColorDisabled};
      cursor: default;

      & ${cssName(styles.box(t))} {
        box-shadow: ${t.checkboxShadowDisabled} !important; //to override hover and active
        background: ${t.checkboxBgDisabled} !important;
        color: ${t.checkboxTextColorDisabled} !important;
      }
    `;
  },

  iconFixBaseline() {
    return css`
      margin-top: -2px;
    `;
  },

  iconUnchecked() {
    return css`
      color: transparent;
    `;
  },

  caption(t: Theme) {
    return css`
      padding-left: ${t.checkboxPaddingX};
    `;
  },

  captionIE11() {
    return css`
      display: table-cell;
    `;
  },
};

export const jsStyles = memoizeStyle(styles);