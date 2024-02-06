import { useNavigate } from 'react-router-dom';

import { Box, Button, Container, Stack, Typography } from '@mui/joy';

import Codeblock from '@/design/components/Codeblock';

import AmaranthIcon, { aiAGum, aiAmicons, aiBook, aiCircleInfo, aiFlag, aiLockOpen, aiPatreon } from '@studio384/amaranth';

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Stack gap={10} sx={{ my: 5 }}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Stack gap={1} justifyContent="center">
            <Typography level="h2">Get started</Typography>
            <Typography>Get started with Amicons by installing the npm package.</Typography>
            <Codeblock>npm install @studio384/amaranth</Codeblock>
            <Stack direction="row" gap={1} sx={{ mt: 3 }}>
              <Button startDecorator={<AmaranthIcon icon={aiBook} />} onClick={() => navigate('/docs')}>
                Documentation
              </Button>
            </Stack>
          </Stack>
          <Box
            sx={{
              p: 3,
              borderRadius: 'xl',
              backgroundImage:
                'radial-gradient(49% 81% at 45% 47%, #032CFF26 0%, #0309FF00 100%),radial-gradient(113% 91% at 17% -2%, #00FFEC1C 0%, #00FFEC00 100%),radial-gradient(142% 91% at 83% 7%, #008BFF36 0%, #00C9FF00 100%),radial-gradient(142% 91% at -6% 74%, #0045FF1C 0%, #0045FF00 100%),radial-gradient(142% 91% at 111% 84%, #007BFF26 0%, #007BFF12 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              fontSize: 'xl4',
              border: '1px solid var(--joy-palette-primary-outlinedBorder)',
              height: 300
            }}
          >
            <AmaranthIcon icon={aiFlag} />
            <AmaranthIcon icon={aiAmicons} />
          </Box>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Box
            sx={{
              p: 3,
              borderRadius: 'xl',
              backgroundImage:
                'radial-gradient(49% 81% at 45% 47%, #5EFFAC21 0%, #073AFF00 100%),radial-gradient(113% 91% at 81% 41%, #8BFF5E1F 0%, #FF000000 100%),radial-gradient(142% 91% at 83% 7%, #B8FF001A 0%, #FF000000 100%),radial-gradient(142% 91% at -6% 74%, #5EFF6700 0%, #5EFF6C2B 100%),radial-gradient(142% 91% at 111% 84%, #FFFFFF00 0%, #FFFFFF00 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              fontSize: 'xl4',
              border: '1px solid var(--joy-palette-success-outlinedBorder)',
              height: 300
            }}
          >
            <AmaranthIcon icon={aiAGum} />
            <AmaranthIcon icon={aiCircleInfo} />
          </Box>
          <Stack gap={1} justifyContent="center">
            <Typography level="h2">Made by hand</Typography>
            <Typography>The only "AI" in Amicons are these 2 icons. We may do a full alphabet later.</Typography>
            <Stack direction="row" gap={1} sx={{ mt: 3 }}>
              <Button startDecorator={<AmaranthIcon icon={aiAmicons} />} onClick={() => navigate('/icons')}>
                Full library
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <Stack gap={1} justifyContent="center">
            <Typography level="h2">Open source. Powered by you.</Typography>
            <Typography>Amicons is open source, and funded by you.</Typography>
            <Stack direction="row" gap={1} sx={{ mt: 3 }}>
              <Button startDecorator={<AmaranthIcon icon={aiPatreon} />} onClick={() => navigate('/icons')}>
                Support us at Patreon
              </Button>
            </Stack>
          </Stack>
          <Box
            sx={{
              p: 3,
              borderRadius: 'xl',
              backgroundImage:
                'radial-gradient(49% 81% at 45% 47%, #FFE20326 0%, #FFE20300 100%),radial-gradient(113% 91% at 17% -2%, #FF5A0021 0%, #FF5A0000 100%),radial-gradient(142% 91% at 83% 7%, #FFDB0036 0%, #FFDB0000 100%),radial-gradient(142% 91% at -6% 74%, #FF004917 0%, #FF004900 100%),radial-gradient(142% 91% at 111% 84%, #FF700026 0%, #FF000014 100%)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 3,
              fontSize: 'xl4',
              border: '1px solid var(--joy-palette-danger-outlinedBorder)',
              height: 300
            }}
          >
            <AmaranthIcon icon={aiLockOpen} />
            <AmaranthIcon icon={aiPatreon} />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
}
