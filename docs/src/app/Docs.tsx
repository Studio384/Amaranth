import { Box, Container, Stack, Typography } from '@mui/joy';

import DocsNavigation from './Docs/Navigation';
import PageBeat from './Docs/pages/Beat';
import PageFlip from './Docs/pages/Flip';
import PageInstallation from './Docs/pages/Installation';
import PageRotate from './Docs/pages/Rotate';
import PageSpin from './Docs/pages/Spin';

export default function Docs() {
  return (
    <Container sx={{my: 2 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '200px auto',
          gap: { xs: 1 }
        }}
      >
        <Box sx={{ position: 'sticky', top: 58 + 32, overflow: 'auto', maxHeight: 'calc(100dvh - 57px)', alignSelf: 'flex-start' }}>
          <DocsNavigation />
        </Box>
        <Stack gap={4}>
          <PageInstallation />
          <PageSpin />
          <PageRotate />
          <PageFlip />
          <PageBeat />
        </Stack>
      </Box>
    </Container>
  );
}
