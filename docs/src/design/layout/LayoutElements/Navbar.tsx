import { useLocation, useNavigate } from 'react-router-dom';

import { Button, Container, IconButton, Link, Sheet, Stack } from '@mui/joy';

import AmaranthIcon, { aiArrowDownToLine, aiGithub } from '@studio384/amaranth';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container
      maxWidth="lg"
      sx={{
        position: 'sticky',
        zIndex: 1600,
        top: 0,
        pt: 2,
        mb: 2
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
          boxShadow: 'xs',
          height: 58
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
  );
}
