import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Box, Button, Card, Container, Divider, Input, Sheet, Stack, Typography, useTheme } from '@mui/joy';

import icons from '@/data/icons';

import AmaranthIcon, { aiAmicons, aiBook, aiMagnifyingGlass } from '@studio384/amaranth';

export default function Home() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');

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

            <Input
              startDecorator={<AmaranthIcon icon={aiMagnifyingGlass} />}
              size="lg"
              placeholder="Find your icon"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              sx={{
                borderRadius: 'xl',
                boxShadow: 'md',
                px: 3,
                py: 2,
                borderColor: 'primary.100',
                [theme.getColorSchemeSelector('dark')]: {
                  borderColor: 'primary.800'
                }
              }}
            />
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
              width: 'calc((var(--Amicon-scale) + 4px) * 16)',
              height: 'calc((var(--Amicon-scale) + 4px) * 16)',
              borderRadius: 'sm',
              backgroundSize: 'var(--Amicon-scale) var(--Amicon-scale)',
              backgroundPosition: '-1px -1px',
              backgroundImage:
                'linear-gradient(to right, var(--joy-palette-primary-outlinedBorder) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-outlinedBorder) 1px, transparent 1px)'
            }}
          >
            <Divider sx={{ position: 'absolute', top: 'calc(2 * var(--Amicon-scale) - 1px)', left: 0, right: 0, bgcolor: 'primary.500' }} />
            <Divider sx={{ position: 'absolute', bottom: 'calc(2 * var(--Amicon-scale) - 2px)', left: 0, right: 0, bgcolor: 'primary.500' }} />
            <Divider
              orientation="vertical"
              sx={{ position: 'absolute', left: 'calc(2 * var(--Amicon-scale) - 1px)', top: 0, bottom: 0, bgcolor: 'primary.500' }}
            />
            <Divider
              orientation="vertical"
              sx={{ position: 'absolute', right: 'calc(2 * var(--Amicon-scale) - 2px)', top: 0, bottom: 0, bgcolor: 'primary.500' }}
            />
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
            <Button size="lg" startDecorator={<AmaranthIcon icon={aiBook} />} onClick={() => navigate('/usage')}>
              Docs
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
}
