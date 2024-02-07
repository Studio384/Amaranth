import { Box, Container, Stack, Typography } from '@mui/joy';

import Header from '@/design/layout/LayoutElements/Header';

import DocsNavigation from './Docs/Navigation';
import PageBeat from './Docs/pages/Beat';
import PageFlip from './Docs/pages/Flip';
import PageInstallation from './Docs/pages/Installation';
import PageRotate from './Docs/pages/Rotate';
import PageSpin from './Docs/pages/Spin';

export default function Docs() {
  return (
    <>
      <Header>
        <Typography level="h1" fontWeight="xl" fontSize={48}>
          Documentation
        </Typography>
      </Header>
      <Container sx={{ my: 2 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '200px auto',
            gap: { xs: 1 }
          }}
        >
          <Box sx={{ position: 'sticky', top: 58 + 32, overflow: 'auto', maxHeight: 'calc(100dvh - 58px - 32px)', alignSelf: 'flex-start' }}>
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
    </>
  );
}
