import { Box, Container, Stack, Typography } from '@mui/joy';

import DocsNavigation from './Docs/Navigation';
import PageInstallation from './Docs/pages/Installation';
import PageSpin from './Docs/pages/Spin';
import PageRotate from './Docs/pages/Rotate';
import PageFlip from './Docs/pages/Flip';
import PageBeat from './Docs/pages/Beat';

export default function Docs() {
  return (
    <Container>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '200px auto',
          gap: { xs: 1 }
        }}
      >
        <Box sx={{ position: 'sticky', top: 57, overflow: 'auto', py: 1.5, alignSelf: 'flex-start' }}>
          <DocsNavigation />
        </Box>
        <Stack gap={2} sx={{ my: 2 }}>
          <Typography level="h1">Documentation</Typography>
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
