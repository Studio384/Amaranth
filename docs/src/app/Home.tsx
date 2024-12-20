import { useState } from 'react';
import { createSearchParams, NavLink, useNavigate } from 'react-router-dom';

import { Alert, Box, Button, Container, IconButton, Input, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import Codeblock from '@/design/components/Codeblock';
import Header from '@/design/layout/LayoutElements/Header';

import Amicon, { aiAmicons, aiBook, aiCircleExclamation, aiFlag, aiHeart, aiIcons, aiLockOpen, aiMagnifyingGlass, aiPatreon } from '@studio384/amicons';

import LargeIconGrid from './Components/LargeIconGrid';

export default function Home() {
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  function onSearchSubmit() {
    const searchParams = { search };
    const searchQuery = `?${createSearchParams(searchParams)}`;
    navigate({ pathname: '/icons', search: searchQuery });
  }

  return (
    <>
      <Header>
        <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center" justifyContent="space-between" gap={5} sx={{ my: 7 }}>
          <Stack gap={5} sx={{ flexGrow: 1, order: { xs: 2, md: 1 } }}>
            <Box>
              <Typography level="h1" fontSize={{ xs: 36, md: 48 }} sx={{ textAlign: { xs: 'center', md: 'initial' } }}>
                <Typography color="primary">{icons.length}</Typography> amicable icons
                <br />
                to delight <Typography color="primary">your</Typography> designs
              </Typography>
            </Box>

            <form onSubmit={onSearchSubmit}>
              <Input
                startDecorator={
                  <IconButton type="submit" color="primary" sx={{ borderRadius: 'md' }}>
                    <Amicon icon={aiMagnifyingGlass} />
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
                  boxShadow: 'none',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
                }}
              />
            </form>
          </Stack>
          <LargeIconGrid icon={aiAmicons} sx={{ order: { xs: 1, md: 2 }, '--Amicon-scale': { xs: '8px', md: '16px' } }} />
        </Stack>
      </Header>
      <Container>
        <Stack gap={5} sx={{ my: 5 }}>
          <Alert color="danger" variant="solid" startDecorator={<Amicon icon={aiCircleExclamation} />} size="lg" sx={{ borderRadius: 'xl' }}>
            We're still working on this, a lot can change.
          </Alert>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1f', md: '1fr 1fr' }, gap: 5 }}>
            <Stack gap={1} justifyContent="center" sx={{ order: { xs: 2, md: 1 } }}>
              <Typography level="h2">Get started</Typography>
              <Typography>Get started with Amicons by installing the npm package.</Typography>
              <Codeblock>npm install @studio384/amicons</Codeblock>
              <Stack direction="row" gap={1} sx={{ mt: 3 }}>
                <Button startDecorator={<Amicon icon={aiBook} />} component={NavLink} to="/docs">
                  Documentation
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                p: 3,
                borderRadius: 'xl',
                bgcolor: 'primary.100',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                fontSize: 'xl4',
                border: '1px solid var(--joy-palette-primary-outlinedBorder)',
                height: { xs: 120, md: 300 }
              }}
            >
              <Amicon icon={aiFlag} />
              <Amicon icon={aiAmicons} />
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1f', md: '1fr 1fr' }, gap: 5 }}>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                p: 3,
                borderRadius: 'xl',
                bgcolor: 'success.100',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                fontSize: 'xl4',
                border: '1px solid var(--joy-palette-success-outlinedBorder)',
                height: { xs: 120, md: 300 }
              }}
            >
              <Amicon icon={aiAmicons} />
              <Amicon icon={aiHeart} />
              <Amicon icon={aiIcons} />
            </Box>
            <Stack gap={1} justifyContent="center" sx={{ order: { xs: 1, md: 2 } }}>
              <Typography level="h2">Icons with love</Typography>
              <Typography>Every icon is made by hand, and with our heart. We don't include that in the package tho, we still need it.</Typography>
              <Stack direction="row" gap={1} sx={{ mt: 3 }}>
                <Button startDecorator={<Amicon icon={aiAmicons} />} component={NavLink} to="/icons">
                  Full library
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1f', md: '1fr 1fr' }, gap: 5 }}>
            <Stack gap={1} justifyContent="center" sx={{ order: { xs: 2, md: 1 } }}>
              <Typography level="h2">Open source. Powered by you.</Typography>
              <Typography>Amicons is open source, and funded by you.</Typography>
              <Stack direction="row" gap={1} sx={{ mt: 3 }}>
                <Button startDecorator={<Amicon icon={aiPatreon} />} component={NavLink} to="/icons">
                  Support us at Patreon
                </Button>
              </Stack>
            </Stack>
            <Box
              sx={{
                order: { xs: 1, md: 2 },
                p: 3,
                borderRadius: 'xl',
                bgcolor: 'danger.100',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 3,
                fontSize: 'xl4',
                border: '1px solid var(--joy-palette-danger-outlinedBorder)',
                height: { xs: 120, md: 300 }
              }}
            >
              <Amicon icon={aiLockOpen} />
              <Amicon icon={aiPatreon} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </>
  );
}
