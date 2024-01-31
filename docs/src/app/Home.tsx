import { useState } from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { Box, Button, Card, Container, IconButton, Input, Sheet, Stack, Typography, useTheme } from '@mui/joy';

import icons from '@/data/icons';

import AmaranthIcon, { aiAmicons, aiBook, aiMagnifyingGlass } from '@studio384/amaranth';

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

  function onSearchSubmit() {
    const searchParams = { search };
    const searchQuery = `?${createSearchParams(searchParams)}`;
    navigate({ pathname: '/icons', search: searchQuery });
  }

  return (
    <Container>
      <Stack gap={5} sx={{ my: 5 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5}>
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
                  borderRadius: 'xl',
                  boxShadow: 'md',
                  px: 4,
                  py: 2,
                  borderColor: 'primary.100',
                  [theme.getColorSchemeSelector('dark')]: {
                    borderColor: 'primary.800'
                  }
                }}
              />
            </form>
          </Stack>
          <Sheet
            variant="outlined"
            sx={{
              '--Amicon-scale': '16px',
              color: 'text.primary',
              borderColor: 'primary.100',
              [theme.getColorSchemeSelector('dark')]: {
                borderColor: 'primary.800'
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'calc(var(--Amicon-scale) * 16)',
              height: 'calc(var(--Amicon-scale) * 16)',
              borderRadius: 'sm',
              backgroundSize: 'var(--Amicon-scale) var(--Amicon-scale)',
              backgroundPosition: '-1px -1px',
              backgroundImage:
                'linear-gradient(to right, var(--joy-palette-primary-outlinedBorder) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-outlinedBorder) 1px, transparent 1px)'
            }}
          >
            <AmaranthIcon icon={aiAmicons} style={{ fontSize: 'calc(var(--Amicon-scale) * 16)' }} />
          </Sheet>
        </Stack>
        <Card sx={{ p: 3, borderRadius: 'xl' }}>
          <Typography level="h2">Get started</Typography>
          <Typography>Get started with Amicons by installing the npm package.</Typography>
          <Sheet variant="outlined" color="primary" sx={{ p: 1, borderRadius: 'sm' }}>
            <code>npm install @studio384/amaranth</code>
          </Sheet>
          <Stack direction="row" gap={1} justifyContent="center">
            <Button size="lg" startDecorator={<AmaranthIcon icon={aiAmicons} />} onClick={() => navigate('/icons')}>
              Full library
            </Button>
            <Button size="lg" startDecorator={<AmaranthIcon icon={aiBook} />} onClick={() => navigate('/docs')}>
              Docs
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
