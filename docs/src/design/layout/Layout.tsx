import { Outlet, useNavigate } from 'react-router-dom';

import {
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
  useColorScheme
} from '@mui/joy';

import AmaranthIcon, { aiCircleHalfInner, aiGithub, aiMoon, aiSun } from '@studio384/amaranth';

export default function Layout() {
  const navigate = useNavigate();
  const { mode, setMode } = useColorScheme();

  return (
    <>
      <Sheet variant="outlined" sx={{ borderWidth: 0, borderBottomWidth: 1, position: 'sticky', top: 0, zIndex: 1600 }}>
        <Container maxWidth="xl">
          <Stack direction="row" justifyContent="space-between" sx={{ py: 1.5 }}>
            <Link
              color="neutral"
              underline="none"
              level="h1"
              fontSize="xl"
              fontWeight="xl"
              sx={{
                backgroundImage: 'linear-gradient(135deg, #78b500, #00b573)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
              onClick={() => navigate('/')}
            >
              Amaranth
            </Link>
            <Stack direction="row" gap={0.5}>
              <Button onClick={() => navigate('/')} variant="plain" size="sm" color="neutral">
                Icons
              </Button>
              <Button onClick={() => navigate('/usage')} variant="plain" size="sm" color="neutral">
                Usage
              </Button>
              <IconButton size="sm" variant="outlined" component="a" href="https://github.com/studio384/amaranth" target="_blank">
                <AmaranthIcon icon={aiGithub} />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Sheet>
      <Container maxWidth="xl" sx={{ my: 2 }}>
        <Outlet />
      </Container>
      <Sheet variant="outlined" sx={{ borderWidth: 0, borderTopWidth: 1, bgcolor: 'transparent' }}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Stack spacing={2}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography level="body-sm">&copy; Studio 384 2021-2023</Typography>
              <Dropdown>
                <MenuButton size="sm" startDecorator={<AmaranthIcon icon={mode === 'dark' ? aiMoon : mode === 'light' ? aiSun : aiCircleHalfInner} />}>
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
