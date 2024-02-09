import { Container, IconButton, Link, Sheet, Stack, Typography, useColorScheme } from '@mui/joy';

import AmaranthIcon, { aiCircleHalfInner, aiHeart, aiMoon, aiSun } from '@studio384/amaranth';

export default function Footer() {
  const { mode, setMode } = useColorScheme();

  return (
    <Sheet
      variant="soft"
      color="primary"
      sx={{
        borderTop: '1px solid var(--joy-palette-primary-300)'
      }}
    >
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center">
            <img src="/favicon.png" style={{ width: 36, height: 36, marginRight: 8 }} />
            <Typography level="h1" fontSize="xl3">
              Amicons
            </Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>
              Amicons is a set of icons made with <AmaranthIcon icon={aiHeart} /> in Belgium.
            </Typography>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography>
                &copy;{' '}
                <Link href="https://studio384.be" color="neutral" sx={{ color: 'inherit' }}>
                  Studio 384
                </Link>
              </Typography>
              <IconButton color="primary" onClick={() => setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')}>
                <AmaranthIcon icon={mode === 'dark' ? aiMoon : mode === 'light' ? aiSun : aiCircleHalfInner} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Sheet>
  );
}
