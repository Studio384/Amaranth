import { Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { aiExpand, aiHeart, aiPlay } from '../../../../../dist/esm';
import Playground from '../playground/Playground';

export default function PageBeat() {
  const playgroundConfig = {
    icons: [aiHeart, aiExpand, aiPlay],
    properties: [
      {
        label: 'Beat',
        type: 'chip',
        name: 'beat',
        values: [true, false],
        default: true
      }
    ],
    cssVariables: [
      {
        name: '--ai-animation-duration',
        default: '1s'
      },
      {
        name: '--ai-animation-timing-function',
        default: 'ease-in-out'
      },
      {
        name: '--ai-animation-iteration-count',
        default: 'infinite'
      }
    ]
  };

  return (
    <Stack id="beat" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Beat</Typography>
      <Typography>
        With the <Code>beat</Code> property gives you a basic beat animation.
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
                <Code>1s</Code>
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
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
