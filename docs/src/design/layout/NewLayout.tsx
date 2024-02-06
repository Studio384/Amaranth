import { useState } from 'react';
import { createSearchParams, Outlet, useLocation, useNavigate } from 'react-router-dom';

import {
  Box,
  Button,
  Container,
  Dropdown,
  IconButton,
  Input,
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

import icons from '@/data/icons';

import AmaranthIcon, { aiAmicons, aiArrowDownToLine, aiCircleHalfInner, aiGithub, aiMagnifyingGlass, aiMoon, aiSun } from '@studio384/amaranth';

export default function NewLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  const [search, setSearch] = useState('');

  function onSearchSubmit() {
    const searchParams = { search };
    const searchQuery = `?${createSearchParams(searchParams)}`;
    navigate({ pathname: '/icons', search: searchQuery });
  }

  return (
    <Box sx={{ mt: -15.25 }}>
      <Container
        maxWidth="lg"
        sx={{
          position: 'sticky',
          zIndex: 1600,
          top: 16,
          my: 4
        }}
      >
        <Sheet
          variant="outlined"
          sx={{
            zIndex: 1600,
            borderRadius: 'md',
            p: 1.5,
            background: 'rgba(var(--joy-palette-primary-mainChannel) / .25)',
            border: '1px solid rgba(var(--joy-palette-primary-mainChannel) / .25)',
            backdropFilter: 'blur(20px)',
            boxShadow: 'sm'
          }}
        >
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" alignItems="center" gap={1} sx={{ px: 0.5 }}>
              <Link color="neutral" underline="none" level="h1" fontSize="xl" fontWeight="xl" sx={{ color: 'primary.500' }} onClick={() => navigate('/')}>
                <img src="/favicon.png" style={{ width: 24, height: 24, marginRight: 8 }} />
                Amicons
              </Link>
            </Stack>
            <Stack direction="row" gap={0.5}>
              <Button
                onClick={() => navigate('/')}
                variant={location?.pathname === '/' ? 'solid' : 'plain'}
                size="sm"
                color={location?.pathname === '/' ? 'primary' : 'primary'}
              >
                Home
              </Button>
              <Button
                onClick={() => navigate('/icons')}
                variant={location?.pathname?.startsWith('/icons') ? 'solid' : 'plain'}
                size="sm"
                color={location?.pathname?.startsWith('/icons') ? 'primary' : 'primary'}
              >
                Icons
              </Button>
              <Button
                onClick={() => navigate('/docs')}
                variant={location?.pathname?.startsWith('/docs') ? 'solid' : 'plain'}
                size="sm"
                color={location?.pathname?.startsWith('/docs') ? 'primary' : 'primary'}
              >
                Docs
              </Button>
              <IconButton size="sm" variant="plain" color="primary" component="a" href="https://github.com/studio384/amaranth" target="_blank">
                <AmaranthIcon icon={aiGithub} />
              </IconButton>
            </Stack>
            <Stack direction="row" gap={0.5}>
              <Button onClick={() => navigate('/')} startDecorator={<AmaranthIcon icon={aiArrowDownToLine} />} size="sm">
                Download
              </Button>
            </Stack>
          </Stack>
        </Sheet>
      </Container>
      <Box
        sx={{
          backgroundImage:
            'radial-gradient(49% 81% at 45% 47%, #B05EFF21 0%, #073AFF00 100%),radial-gradient(113% 91% at 81% 41%, #BE5EFF2B 0%, #FF000000 100%),radial-gradient(142% 91% at 83% 7%, #0040FF47 0%, #FF000000 100%),radial-gradient(142% 91% at -6% 74%, #7E5EFF00 0%, #7E5EFF2B 100%),radial-gradient(142% 91% at 111% 84%, #FFFFFF00 0%, #FFFFFF00 100%)',
          pb: 3, pt: 12,
          borderBottom: '1px solid var(--joy-palette-primary-outlinedBorder)'
        }}
      >
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5} sx={{ my: 7 }}>
            <Stack gap={5} sx={{ flexGrow: 1 }}>
              <Box>
                <Typography level="h1" fontWeight="xl" fontSize={48}>
                  <Typography color="primary">{icons.length}</Typography> amicable icons
                  <br />
                  to delight <Typography color="primary">your</Typography> designs
                </Typography>
              </Box>

              <form onSubmit={onSearchSubmit}>
                <Input
                  startDecorator={
                    <IconButton type="submit" color="primary" sx={{ borderRadius: 'md' }}>
                      <AmaranthIcon icon={aiMagnifyingGlass} />
                    </IconButton>
                  }
                  size="lg"
                  placeholder="Find your icon"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{
                    px: 4,
                    py: 2,
                    background: 'rgba(var(--joy-palette-background-channel) / .5)',
                    borderRadius: 'xl',
                    boxShadow: 'lg',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
                  }}
                />
              </form>
            </Stack>
            <Box
              sx={{
                '--Amicon-scale': '16px',
                p: 4,
                background: 'rgba(var(--joy-palette-background-channel) / .5)',
                borderRadius: 'xl',
                boxShadow: 'lg',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
              }}
            >
              <Sheet
                variant="outlined"
                sx={{
                  // Icon display
                  '--Amicon-scale': '16px',
                  color: 'text.primary',
                  borderColor: 'var(--joy-palette-primary-600)',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 'calc(var(--Amicon-scale) * 16)',
                  height: 'calc(var(--Amicon-scale) * 16)',
                  borderRadius: 'sm',
                  backgroundColor: 'transparent',
                  backgroundSize: 'var(--Amicon-scale) var(--Amicon-scale)',
                  backgroundPosition: '-1px -1px',
                  backgroundImage:
                    'linear-gradient(to right, var(--joy-palette-primary-600) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-600) 1px, transparent 1px)'
                }}
              >
                <AmaranthIcon icon={aiAmicons} style={{ fontSize: 'calc(var(--Amicon-scale) * 16)' }} />
              </Sheet>
            </Box>
          </Stack>
        </Container>
      </Box>
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
                <MenuButton
                  size="sm"
                  startDecorator={<AmaranthIcon icon={mode === 'dark' ? aiMoon : mode === 'light' ? aiSun : aiCircleHalfInner} />}
                  color="primary"
                  variant="plain"
                >
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
    </Box>
  );
}
