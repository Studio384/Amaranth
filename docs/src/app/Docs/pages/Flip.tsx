import { Box, Sheet, Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import AmaranthIcon, { aiMessageSmile } from '../../../../../dist/esm';

export default function PageFlip() {
  return (
    <Box id="flip" sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Flip</Typography>
      <Typography>
        The <Code>AmaranthIcon</Code> component supports flipping the icon on its axis.
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
              <AmaranthIcon icon={aiMessageSmile} flip />
            </Typography>
            <Code>flip</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} flip="x" />
            </Typography>
            <Code>flip={`"x"`}</Code>
          </Stack>
        </Sheet>
        <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
          <Stack spacing={1}>
            <Typography fontSize={32}>
              <AmaranthIcon icon={aiMessageSmile} flip="y" />
            </Typography>
            <Code>flip={`"y"`}</Code>
          </Stack>
        </Sheet>
      </Stack>
    </Box>
  );
}
