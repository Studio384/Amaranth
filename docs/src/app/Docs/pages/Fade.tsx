import { Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { aiExpand, aiHeart, aiPlay } from '@studio384/amaranth';

import Playground, { IPlaygroundConfig } from '../playground/Playground';

export default function PageFade() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [aiHeart, aiExpand, aiPlay],
    properties: [
      {
        label: 'Fade',
        type: 'chip',
        name: 'fade',
        values: [true, false],
        default: true
      }
    ],
    cssVariables: [
      {
        name: '--ai-animation-duration',
        default: '1.5s'
      },
      {
        name: '--ai-animation-timing-function',
        default: 'ease-in-out'
      },
      {
        name: '--ai-animation-iteration-count',
        default: 'infinite'
      },
      {
        name: '--ai-animation-opacity',
        default: '.4'
      }
    ]
  };

  return (
    <Stack id="fade" gap={2} sx={{ scrollMarginTop: 58 + 32 }}>
      <Typography level="h3">Fade</Typography>
      <Typography>
        With the <Code>fade</Code> property gives you a basic fade animation.
      </Typography>

      <Playground config={playgroundConfig} />

      <Typography level="h4">API</Typography>
      <Sheet variant="outlined" sx={{ borderRadius: 'sm', boxShadow: 'md' }}>
        <Table variant="outlined">
          <thead>
            <tr>
              <th style={{ width: '30%' }}>Property name</th>
              <th style={{ width: '15%' }}>Default</th>
              <th style={{ width: '55%' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>--ai-animation-duration</Code>
              </td>
              <td>
                <Code>1.5s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-timing-function</Code>
              </td>
              <td>
                <Code>ease-in-out</Code>
              </td>
              <td>The timing function used for the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-iteration-count</Code>
              </td>
              <td>
                <Code>infinite</Code>
              </td>
              <td>Number of times the animation is repeated.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-opacity</Code>
              </td>
              <td>
                <Code>.4</Code>
              </td>
              <td>The lowest opacity of the icon.</td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
