import { Box, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import AmaranthIcon, { aiSpinnerThird, aiSpinner } from '../../../../../dist/esm';

export default function PageSpin() {
  return (
    <Box id="spin" sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Spin</Typography>
      <Typography>
        The <Code>AmaranthIcon</Code> component supports a basic spin animation.
      </Typography>

      <Stack direction="row" fontSize={32} spacing={1}>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiSpinnerThird} />
            </Typography>
            <Code>null</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiSpinnerThird} spin />
            </Typography>
            <Code>spin</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiSpinner} spin="pulse" />
            </Typography>
            <Code>spin="pulse"</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiSpinnerThird} spin={false} />
            </Typography>
            <Code>spin={`{false}`}</Code>
          </Stack>
        </Sheet>
      </Stack>

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
              <Code>--ai-animation-duration</Code>
            </td>
            <td>
              <Code>2s</Code>, <Code>1s</Code> for pulse
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
    </Box>
  );
}
