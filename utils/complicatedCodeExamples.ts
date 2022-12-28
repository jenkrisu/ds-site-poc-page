export const themeExampleJSX = `
import React from 'react';
import { 
  Button, 
  SuomifiThemeProvider 
} from 'suomifi-ui-components';

const customTheme = {
  gradients: {
    highlightBaseToHighlightDark1: 
      'linear-gradient(to top, orange, red);',
    highlightLight1ToHighlightBase: 
      'linear-gradient(to top, crimson, red);',
  },
  colors: {
    highlightDark1: 'darkred',
    highlightBase: 'blue',
    highlightLight1: 'green',
  }
};

export const Example = () => (
  <>
    <SuomifiThemeProvider theme={customTheme}>
      <Button>Theme</Button>
    </SuomifiThemeProvider>
  </>
);
`;

export const styleExampleFromTokens = `
import React from 'react';
import { suomifiDesignTokens } from 'suomifi-design-tokens';

export const Example = () => (
  <div
    style={{
      margin: suomifiDesignTokens.spacing.xl,
      padding: suomifiDesignTokens.spacing.s,
      background: suomifiDesignTokens.colors.highlightBase,
      fontSize:
        suomifiDesignTokens.values.typography.bodyText.fontSize
          .value +
        suomifiDesignTokens.values.typography.bodyText.fontSize.unit,
      color: suomifiDesignTokens.colors.whiteBase,
    }}
  >
    Example
  </div>
);
`;

export const styleExampleFromUIComps = `
import React from 'react';
import { defaultSuomifiTheme } from 'suomifi-ui-components';

export const Example = () => (
  <div
    style={{
      margin: defaultSuomifiTheme.spacing.xl,
      padding: defaultSuomifiTheme.spacing.s,
      background: defaultSuomifiTheme.colors.highlightBase,
      boxShadow: defaultSuomifiTheme.shadows.panelShadow,
      fontSize:
        defaultSuomifiTheme.values.typography.bodyText.fontSize.value +
        defaultSuomifiTheme.values.typography.bodyText.fontSize.unit,
      color: defaultSuomifiTheme.colors.whiteBase,
    }}
  >
    Example
  </div>
);
`;