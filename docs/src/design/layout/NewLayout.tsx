import { useState } from 'react';
import { createSearchParams, Outlet, useNavigate } from 'react-router-dom';

import { Box, Container, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';

import AmaranthIcon, { aiAmicons, aiMagnifyingGlass } from '@studio384/amaranth';

import Footer from './LayoutElements/Footer';
import Navbar from './LayoutElements/Navbar';

export default function NewLayout() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  function onSearchSubmit() {
    const searchParams = { search };
    const searchQuery = `?${createSearchParams(searchParams)}`;
    navigate({ pathname: '/icons', search: searchQuery });
  }

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
      <Footer />
    </Box>
  );
}
