import type { NextPage } from 'next';
import { useTranslation } from 'next-export-i18n';
import Head from 'next/head';
import {
  Block,
  Button,
  Heading,
  Paragraph,
  SuomifiThemeProvider,
} from 'suomifi-ui-components';
import ComponentExample from '../../components/ComponentExample/ComponentExample';
import CardLayout from '../../layouts/CardLayout/CardLayout';
import { navItems } from '../../utils/components-sidenav';
import { themeExampleJSX } from '../../utils/complicatedCodeExamples';

const customTheme = {
  gradients: {
    highlightBaseToHighlightDark1: 'linear-gradient(to top, orange, red);',
    highlightLight1ToHighlightBase: 'linear-gradient(to top, crimson, red);',
  },
  colors: {
    highlightDark1: 'darkred',
    highlightBase: 'blue',
    highlightLight1: 'green',
  },
};

const FrontPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>Komponentit | Suomi.fi Design System</title>
      </Head>
      <CardLayout navItems={navItems}>
        <Heading variant="h1" className="mb-xl">
          {t('components_main_page.component_guide')}
        </Heading>
        <Block variant="section">
          <Heading variant="h2" className="mb-xl">
            {t('components_main_page.customizing_theme.heading')}
          </Heading>
          <ComponentExample codeString={themeExampleJSX}>
            <SuomifiThemeProvider theme={customTheme}>
              <Button>
                {t('components_main_page.customizing_theme.buttonText')}
              </Button>
            </SuomifiThemeProvider>
          </ComponentExample>
          <Paragraph className="mt-xl">
            {t('components_main_page.customizing_theme.text')}
          </Paragraph>
        </Block>
      </CardLayout>
    </>
  );
};

export default FrontPage;
