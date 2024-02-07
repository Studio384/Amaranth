import { Outlet } from 'react-router-dom';

import { Box, Container, Stack, Typography } from '@mui/joy';

import Footer from './LayoutElements/Footer';
import Navbar from './LayoutElements/Navbar';

export default function DocsLayout() {
  return (
    <Box sx={{ mt: -15.25 }}>
      <Navbar />
      <Box
        sx={{
          backgroundImage:
            'radial-gradient(49% 81% at 45% 47%, #B05EFF21 0%, #073AFF00 100%),radial-gradient(113% 91% at 81% 41%, #BE5EFF2B 0%, #FF000000 100%),radial-gradient(142% 91% at 83% 7%, #0040FF47 0%, #FF000000 100%),radial-gradient(142% 91% at -6% 74%, #7E5EFF00 0%, #7E5EFF2B 100%),radial-gradient(142% 91% at 111% 84%, #FFFFFF00 0%, #FFFFFF00 100%)',
          pb: 3,
          pt: 12,
          borderBottom: '1px solid var(--joy-palette-primary-outlinedBorder)'
        }}
      >
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5}>
            <Stack gap={5} sx={{ flexGrow: 1 }}>
              <Box>
                <Typography level="h1" fontWeight="xl" fontSize={48}>
                  Documentation
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>
      <Outlet />
      <Footer />
    </Box>
  );
}
