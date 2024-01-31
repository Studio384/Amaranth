import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Dropdown,
  IconButton,
  Link,
  ListItemDecorator,
  Menu,
  MenuButton,
  MenuItem,
  Sheet,
  Stack,
  Typography,
  useColorScheme,
  useTheme
} from '@mui/joy';

import AmaranthIcon, { aiAmicons, aiCircleHalfInner, aiGithub, aiMoon, aiSun } from '@studio384/amaranth';

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  return (
    <>
      <Sheet
        variant="outlined"
        sx={{
          borderWidth: 0,
          borderBottomWidth: 1,
          position: 'sticky',
          top: 0,
          zIndex: 1600,
          bgcolor: 'primary.50',
          borderColor: 'primary.100',
          [theme.getColorSchemeSelector('dark')]: {
            bgcolor: 'primary.900',
            borderColor: 'primary.800'
          }
        }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" justifyContent="space-between" sx={{ py: 1.5 }}>
            <Stack direction="row" alignItems="center" gap={1}>
              <Link color="neutral" underline="none" level="h1" fontSize="xl" fontWeight="xl" sx={{ color: 'primary.500' }} onClick={() => navigate('/')}>
                <Box sx={{ mt: 0.625, mr: .75 }}>
                  <AmaranthIcon icon={aiAmicons} />
                </Box>
                Amicons
              </Link>
            </Stack>
            <Stack direction="row" gap={0.5}>
              <Button
                onClick={() => navigate('/')}
                variant={location?.pathname === '/' ? 'soft' : 'plain'}
                size="sm"
                color={location?.pathname === '/' ? 'primary' : 'primary'}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate('/icons')}
                variant={location?.pathname?.startsWith('/icons') ? 'soft' : 'plain'}
                size="sm"
                color={location?.pathname?.startsWith('/icons') ? 'primary' : 'primary'}
              >
                Icons
              </Button>
              <Button
                onClick={() => navigate('/docs')}
                variant={location?.pathname?.startsWith('/docs') ? 'soft' : 'plain'}
                size="sm"
                color={location?.pathname?.startsWith('/docs') ? 'primary' : 'primary'}
              >
                Docs
              </Button>
              <IconButton size="sm" variant="plain" color="primary" component="a" href="https://github.com/studio384/amaranth" target="_blank">
                <AmaranthIcon icon={aiGithub} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Sheet>
        <Outlet />
      <Sheet
        variant="outlined"
        sx={{
          borderWidth: 0,
          borderTopWidth: 1,
          bgcolor: 'transparent',
          borderColor: 'primary.50',
          [theme.getColorSchemeSelector('dark')]: {
            borderColor: 'primary.900'
          }
        }}
      >
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography level="body-sm">&copy; Studio 384 2021-2024</Typography>
              <Dropdown>
                <MenuButton size="sm" startDecorator={<AmaranthIcon icon={mode === 'dark' ? aiMoon : mode === 'light' ? aiSun : aiCircleHalfInner} />} color="primary" variant="plain">
                  {mode === 'dark' ? 'Dark theme' : mode === 'light' ? 'Light theme' : 'System theme'}
                </MenuButton>
                <Menu size="sm">
                  <MenuItem selected={mode === 'light'} onClick={() => setMode('light')}>
                    <ListItemDecorator>
                      <AmaranthIcon icon={aiSun} />
                    </ListItemDecorator>
                    Light
                  </MenuItem>
                  <MenuItem selected={mode === 'dark'} onClick={() => setMode('dark')}>
                    <ListItemDecorator>
                      <AmaranthIcon icon={aiMoon} />
                    </ListItemDecorator>
                    Dark
                  </MenuItem>
                  <MenuItem selected={mode === 'system'} onClick={() => setMode('system')}>
                    <ListItemDecorator>
                      <AmaranthIcon icon={aiCircleHalfInner} />
                    </ListItemDecorator>
                    System
                  </MenuItem>
                </Menu>
              </Dropdown>
            </Stack>
          </Stack>
        </Container>
      </Sheet>
    </>
  );
}
