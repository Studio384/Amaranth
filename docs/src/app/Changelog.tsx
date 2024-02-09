import { Container, Stack, Typography } from '@mui/joy';

import Header from '@/design/layout/LayoutElements/Header';

import Release from './Release';
import Code from '@/design/components/Code';

export default function Changelog() {
  return (
    <>
      <Header>
        <Typography level="h1" fontSize={48}>
          Changelog
        </Typography>
      </Header>
      <Container sx={{ my: 5 }}>
        <Stack gap={5}>
          <Release
            name="Amicon 1.0 alpha 7"
            version="1.0.0-alpha.7"
            added={[
              <>Introduces a brand new documentation website with improved component documentation with playground, this changelog, and much more.</>,
              <>The <Code>AmaranthIcon</Code> component now supports the <Code>beat</Code> property.</>,
            ]}
            changed={[
              <>We're updating our branding from Amaranth to Amicons, with a brand new logo and mascot to boot.</>,
              <>The default values for all properties of our <Code>AmaranthIcon</Code> component are now being set to <Code>Undefined</Code> rather than a default truthy value.</>,
              <>The various CSS variables have been renamed to be more consistent with new variables introduced in this update. See the documentation for more info.</>,
              <>You can now pass properties to the <Code>AmaranthIcon</Code> component.</>
            ]}
            newIcons={[
              'battery-charging',
              'battery-empty',
              'battery-exclamation',
              'battery-full',
              'battery-half',
              'battery-low',
              'battery-quarter',
              'battery-slash',
              'battery-three-quarter',
              'broom',
              'clipboard',
              'command',
              'computer-mouse-scroll-wheel',
              'computer-mouse',
              'crop',
              'cursor',
              'dice-five',
              'dice-four',
              'dice-one',
              'dice-six',
              'dice-three',
              'dice-two',
              'dice',
              'ellipsis-h',
              'envelope-open',
              'export',
              'flask',
              'frame',
              'icons',
              'keyboard-brightness-high',
              'keyboard-brightness-low',
              'keyboard',
              'loader',
              'spinner'
            ]}
            updatedIcons={['envelope', 'patreon', 'shuffle', 'volume-0', 'volume-1', 'volume-2', 'volume-3', 'volume-slash']}
            removedIcons={['bootstrap', 'font-awesome']}
          />
          <Release
            name="Amicon 1.0 alpha 6"
            version="1.0.0-alpha.6"
            newIcons={['align-center', 'align-justify', 'align-left', 'align-right', 'amicons', 'subscript', 'superscript']}
          />
          <Release name="Amicon 1.0 alpha 5" version="1.0.0-alpha.5" newIcons={['circle']} />
          <Release
            name="Amicon 1.0 alpha 4"
            version="1.0.0-alpha.4"
            newIcons={[
              'arrow-down-from-cloud',
              'arrow-right-from-file',
              'arrow-right-from-smartphone',
              'arrow-right-to-file',
              'arrow-up-to-cloud',
              'compare',
              'people-xmark',
              'person-xmark',
              'react'
            ]}
          />
          <Release
            name="Amicon 1.0 alpha 3"
            version="1.0.0-alpha.3"
            removed={[
              <>The repository no longer provides font files or CSS files.</>
            ]}
            newIcons={[
              'table-cell-merge',
              'table-column-insert-left',
              'table-column-insert-right',
              'table-column-min',
              'table-header-cell',
              'table-min',
              'table-row-insert-bottom',
              'table-row-insert-top',
              'table-row-min'
            ]}
            updatedIcons={['chart-pie', 'circle-dashed', 'table-clcok', 'table-header-column', 'table-header-row', 'table', 'tag-geear', 'tag-plus', 'tag']}
          />
        </Stack>
      </Container>
    </>
  );
}
