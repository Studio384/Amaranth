import { Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { aiAmicons, aiCar, aiMessageSmile } from '../../../../../dist/esm';
import Playground from '../playground/Playground';

export default function PageFlip() {
  const playgroundConfig = {
    icons: [aiMessageSmile, aiAmicons, aiCar],
    properties: [
      {
        label: 'Flip',
        type: 'chip',
        name: 'flip',
        values: [true, 'x', 'y', false],
        default: true
      }
    ]
  };

  return (
    <Stack id="flip" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Flip</Typography>
      <Typography>
        With the <Code>flip</Code> property you can mirror your icon on its x-axis, y-axis or both.
      </Typography>

      <Playground config={playgroundConfig} />
    </Stack>
  );
}
