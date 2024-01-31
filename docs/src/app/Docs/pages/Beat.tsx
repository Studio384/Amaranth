import { Box, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import AmaranthIcon, { aiHeart } from '../../../../../dist/esm';

export default function PageBeat() {
  return (
    <Box id="beat" sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Beat</Typography>
      <Typography>
        The <Code>AmaranthIcon</Code> component supports a basic beat animation.
      </Typography>

      <Stack direction="row" fontSize={32} spacing={1}>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiHeart} />
            </Typography>
            <Code>null</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiHeart} beat />
            </Typography>
            <Code>beat</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiHeart} beat={false} />
            </Typography>
            <Code>beat={`{false}`}</Code>
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
    </Box>
  );
}
