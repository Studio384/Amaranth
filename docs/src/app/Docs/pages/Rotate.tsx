import { Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { aiAmicons, aiArrowUp, aiMessageSmile } from '../../../../../dist/esm';
import Playground from '../playground/Playgrond';

export default function PageRotate() {
  const playgroundConfig = {
    icons: [aiMessageSmile, aiAmicons, aiArrowUp],
    properties: [
      {
        label: 'Rotate',
        type: 'chip',
        name: 'rotate',
        values: [0, 90, 180, 270, false],
        default: 90
      }
    ],
    cssVariables: [
      {
        name: '--ai-transition-duration',
        default: '0.2s'
      },
      {
        name: '--ai-animation-timing-function',
        default: 'ease-in-out'
      }
    ]
  };

  return (
    <Stack id="rotate" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Rotate</Typography>
      <Typography>
        With the <Code>rotate</Code> property you can change the default rotation of your icon.
      </Typography>

      <Playground config={playgroundConfig} />

      <Typography level="h4">API</Typography>
      <Sheet variant="outlined" color="primary" sx={{ borderRadius: 'sm' }}>
        <Table variant="outlined">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Property name</th>
              <th style={{ width: '15%' }}>Default</th>
              <th style={{ width: '60%' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>--ai-transition-duration</Code>
              </td>
              <td>
                <Code>0.2s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-transition-timing-function</Code>
              </td>
              <td>
                <Code>ease-in-out</Code>
              </td>
              <td>The timing function used for the animation.</td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
