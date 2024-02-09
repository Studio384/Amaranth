import { Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { aiGear, aiSpinner, aiSpinnerThird } from '@studio384/amaranth';

import Playground from '../playground/Playground';

export default function PageSpin() {
  const playgroundConfig = {
    icons: [aiSpinnerThird, aiSpinner, aiGear],
    properties: [
      {
        label: 'Spin',
        type: 'chip',
        name: 'spin',
        values: [true, 'pulse', false],
        default: true
      }
    ],
    cssVariables: [
      {
        name: '--ai-animation-duration',
        default: '2s'
      },
      {
        name: '--ai-animation-timing-function',
        default: 'linear'
      },
      {
        name: '--ai-animation-iteration-count',
        default: 'infinite'
      },
      {
        name: '--ai-animation-pulse-steps',
        default: 8
      }
    ]
  };

  return (
    <Stack id="spin" gap={1} sx={{ scrollMarginTop: 58 + 32 }}>
      <Typography level="h3">Spin</Typography>
      <Typography>
        With the <Code>spin</Code> property you can make your icons play a rotation animation.
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
                <Code>2s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-timing-function</Code>
              </td>
              <td>
                <Code>linear</Code>
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
          </tbody>
        </Table>
      </Sheet>
      <Typography>
        When setting the property to <Code>pulse</Code>, some additional variables are available while some defaults are changed. The following variables are
        available or changed, otherwise everything functions the same.
      </Typography>
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
                <Code>1s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-pulse-steps</Code>
              </td>
              <td>
                <Code>8</Code>
              </td>
              <td>
                Number of steps when the spin property is set to <Code>pulse</Code>.
              </td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
