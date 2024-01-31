import { Box, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import AmaranthIcon, { aiMessageSmile } from '../../../../../dist/esm';

export default function PageRotate() {
  return (
    <Box id="rotate" sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Rotation</Typography>
      <Typography>
        The <Code>AmaranthIcon</Code> component supports a changing the orientation of the icon.
      </Typography>

      <Stack direction="row" fontSize={32} spacing={1}>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} />
            </Typography>
            <Code>null</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} rotate={0} />
            </Typography>
            <Code>rotate={`{0}`}</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} rotate={90} />
            </Typography>
            <Code>rotate={`{90}`}</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} rotate={180} />
            </Typography>
            <Code>rotate={`{180}`}</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} rotate={270} />
            </Typography>
            <Code>rotate={`{270}`}</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} rotate={false} />
            </Typography>
            <Code>rotate={`{false}`}</Code>
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
    </Box>
  );
}
