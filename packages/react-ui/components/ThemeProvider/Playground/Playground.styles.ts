import { css } from '../../../lib/theming/Emotion';
import { Theme } from '../../../lib/theming/Theme';

import { PlaygroundTheme } from './ThemeProviderPlayground';

export const jsStyles = {
  playground() {
    return css`
      margin: -16px;
      padding: 32px;
    `;
  },

  title(t: Theme) {
    return css`
      width: 110px;
      color: ${t.textColorMain};
    `;
  },

  componentsGroup(t: Theme) {
    return css`
      max-width: 700px;
      color: ${t.textColorMain};
    `;
  },

  sidePageBody() {
    return css`
      padding-left: 30px;
      padding-bottom: 30px;
    `;
  },

  variableName(t: Theme) {
    return css`
      margin-bottom: 5px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 250px;
      position: relative;
      z-index: 1;
      line-height: 34px;
      color: ${t.textColorMain};
    `;
  },

  colorIcon() {
    return css`
      height: 16px;
      width: 16px;
    `;
  },

  baseLinkWrapper() {
    return css`
      margin-left: auto;
    `;
  },

  linkRoot() {
    return css`
      position: relative;
      z-index: 1;
    `;
  },

  baseVariableRoot() {
    return css`
      position: relative;
      z-index: 1;
      padding-left: 10px;
      width: 240px;
      display: flex;
    `;
  },

  loaderWrapper() {
    return css`
      width: 500px;
    `;
  },

  loader() {
    return css`
      height: 300px;
      margin: auto;
    `;
  },

  tabsWrapper() {
    return css`
      margin: 0 -32px;
      padding: 11px 32px;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        z-index: -1;
      }
    `;
  },

  tooltipContent() {
    return css`
      width: 210px;
    `;
  },

  stickyTabsWrapper(t: PlaygroundTheme) {
    return css`
      &:after {
        box-shadow: 0 2px 10px 0px ${t.textColorMain || 'black'};
      }
    `;
  },
  tabsInnerWrapper(t: PlaygroundTheme) {
    return css`
      color: ${t.textColorMain};
    `;
  },
  playgroundWrapper(t: PlaygroundTheme) {
    return css`
      background: ${t.backgroundMain};
    `;
  },
  editorHeaderWrapper(t: PlaygroundTheme) {
    return css`
      color: ${t.textColorMain};
    `;
  },
  editorGroupHeader(t: Theme) {
    return css`
      color: ${t.textColorMain};
    `;
  },
};
