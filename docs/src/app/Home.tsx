import { useState } from 'react';

import { Box, Input, Sheet, Stack, Typography, useTheme } from '@mui/joy';

import icons from '@/data/icons';

import AmaranthIcon, { aiAmicons, aiMagnifyingGlass } from '@studio384/amaranth';

export default function Home() {
  const theme = useTheme();

  const [search, setSearch] = useState('');

  return (
    <Stack gap={5} sx={{ my: 5 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5}>
        <Box>
          <Typography level="h1" fontWeight="xl" fontSize={48}>
            <Typography color="primary">{icons.length}</Typography> amicable icons
            <br />
            to delight <Typography color="primary">your</Typography> designs
          </Typography>
        </Box>
        <Box>
          <Sheet
            variant="outlined"
            sx={{
              '--Amicon-scale': '16px',
              color: 'text.primary',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'calc((var(--Amicon-scale) + 4px) * 16)',
              height: 'calc((var(--Amicon-scale) + 4px) * 16)',
              borderRadius: 'sm',
              backgroundSize: 'var(--Amicon-scale) var(--Amicon-scale)',
              backgroundPosition: '-1px -1px',
              backgroundImage: 'linear-gradient(to right, var(--joy-palette-neutral-outlinedBorder) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-neutral-outlinedBorder) 1px, transparent 1px)'
            }}
          >
            <AmaranthIcon icon={aiAmicons} style={{ fontSize: 'calc(var(--Amicon-scale) * 16)' }} />
          </Sheet>
        </Box>
      </Stack>

      <Input
        startDecorator={<AmaranthIcon icon={aiMagnifyingGlass} />}
        size="lg"
        placeholder="Find your icon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ borderRadius: 'xl', boxShadow: 'lg', px: 3, py: 2,
          borderColor: 'primary.100',
          [theme.getColorSchemeSelector('dark')]: {
            borderColor: 'primary.800'
          }
        }}
      />
    </Stack>
  );
}
