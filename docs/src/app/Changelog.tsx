import { Container, Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import Header from '@/design/layout/LayoutElements/Header';

import Release from './Release';

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
            name="Amicons 1.0 alpha 7"
            date="February 2024"
            version="1.0.0-alpha.7"
            added={[
              <>Introduces a brand new documentation website with improved component documentation with playground, this changelog, and much more.</>,
              <>
                The <Code>AmaranthIcon</Code> component has been renamed to <Code>Amicon</Code>.
              </>,
              <>
                The <Code>Amicon</Code> component now supports the <Code>beat</Code> and <Code>fade</Code> property.
              </>
            ]}
            changed={[
              <>
                We're updating our branding from Amaranth to Amicons, with a brand new logo and mascot to boot. While the <Code>Amaranth</Code> and{' '}
                <Code>Amicons</Code> icons have existed at the same time in the previous version, we consider the removal of the <Code>Amaranth</Code> icon a
                rename.
              </>,
              <>
                The default values for all properties of our <Code>Amicon</Code> component are now being set to <Code>Undefined</Code> rather than a default
                truthy value.
              </>,
              <>
                The various CSS variables have been renamed to be more consistent with new variables introduced in this update. See the documentation for more
                info.
              </>,
              <>
                You can now pass properties to the <Code>Amicon</Code> component.
              </>,
              <>Various updates to the categorization of icons in the documentation.</>
            ]}
            fixed={[
              <>
                Fixed the <Code>expand</Code> icon including excessive shapes.
              </>,
              <>
                Fixed the misalignment in the <Code>heading-2</Code> icon to better map the icon to a pixel grid.
              </>,
              <>
                Fixes various issues with the CSS variables in the <Code>Amicon</Code> component.
              </>
            ]}
            newIcons={[
              '0',
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              'a',
              'arrow-up-right-from-square',
              'b',
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
              'c',
              'calculator',
              'camera',
              'car-side',
              'clipboard',
              'command',
              'computer-mouse-scroll-wheel',
              'computer-mouse',
              'crop',
              'cursor',
              'd',
              'dice-five',
              'dice-four',
              'dice-one',
              'dice-six',
              'dice-three',
              'dice-two',
              'dice',
              'e',
              'ellipsis-h',
              'envelope-open',
              'export',
              'f',
              'flask',
              'folder-min',
              'folder-open',
              'folder-plus',
              'frame',
              'g',
              'h',
              'i',
              'icons',
              'j',
              'k',
              'keyboard-brightness-high',
              'keyboard-brightness-low',
              'keyboard',
              'l',
              'loader',
              'm',
              'n',
              'o',
              'option',
              'p',
              'q',
              'r',
              'road',
              's',
              'share-nodes',
              'spinner',
              'square-dashed',
              'square',
              'studio-384',
              't',
              'threads',
              'toast',
              'train-track',
              'triangle-dashed',
              'triangle',
              'truck-pickup',
              'truck-tow',
              'u',
              'v',
              'w',
              'x',
              'y',
              'z'
            ]}
            updatedIcons={[
              'a-gum',
              'envelope',
              'facebook',
              'heading-1',
              'heading-2',
              'heading-3',
              'heading-4',
              'heading-5',
              'heading-6',
              'patreon',
              'safari',
              'shuffle',
              'triangle-exclamation',
              'volume-0',
              'volume-1',
              'volume-2',
              'volume-3',
              'volume-slash'
            ]}
            renamedIcons={[
              { old: 'amaranth', new: 'amicons' },
              { old: 'ellipsis', new: 'ellipsis-h' }
            ]}
            removedIcons={['amaranth', 'bootstrap', 'font-awesome']}
          />
          <Release
            name="Amicons 1.0 alpha 6"
            version="1.0.0-alpha.6"
            date="30 January 2024"
            newIcons={['align-center', 'align-justify', 'align-left', 'align-right', 'amicons', 'subscript', 'superscript']}
          />
          <Release name="Amicons 1.0 alpha 5" version="1.0.0-alpha.5" date="17 November 2023" newIcons={['circle']} />
          <Release
            name="Amicons 1.0 alpha 4"
            version="1.0.0-alpha.4"
            date="17 November 2023"
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
            name="Amicons 1.0 alpha 3"
            version="1.0.0-alpha.3"
            date="23 August 2023"
            removed={[<>The repository no longer provides font files or CSS files.</>]}
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
          <Release name="Amicons 1.0 alpha 2" version="1.0.0-alpha.2" date="22 August 2023" added={[<>Migrations from ChangeWindows to a Studio 384</>]} />
        </Stack>
      </Container>
    </>
  );
}
