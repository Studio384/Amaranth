import { Link as NavLink } from 'react-router-dom';

import {
  Box,
  Container,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Sheet,
  Stack,
  Typography,
  useColorScheme
} from '@mui/joy';

import AmaranthIcon, { aiAmaranth, aiCircleHalfInner, aiGithub, aiHeart, aiMoon, aiSun, aiTwitter } from '@studio384/amaranth';

export default function Footer() {
  const { mode, setMode } = useColorScheme();

  return (
    <Sheet
      variant="soft"
      color="primary"
      sx={{
        py: 5,
        borderTop: '1px solid var(--joy-palette-primary-300)'
      }}
    >
      <Container>
        <Grid container spacing={3}>
          <Grid
            xs={12}
            sm={5}
            md={6}
            lg={8}
            sx={{
              display: 'flex',
              flexDirection: { sx: 'row', sm: 'column' },
              justifyContent: 'space-between'
            }}
          >
            <Box>
              <Stack direction="row" alignItems="center">
                <img src="/favicon.png" style={{ width: 36, height: 36, marginRight: 8 }} />
                <Typography level="h1" fontSize="xl3">
                  Amicons
                </Typography>
              </Stack>
              <Typography sx={{ mt: 1 }}>
                Amicons is a set of SVG icons made with <AmaranthIcon icon={aiHeart} /> in Belgium.
              </Typography>
            </Box>
          </Grid>
          <Grid container xs={12} sm={7} md={6} lg={4}>
            <Grid xs={6}>
              <Typography level="title-lg" sx={{ ml: 1, mb: 1 }}>
                Support
              </Typography>
              <List
                sx={{
                  gap: 0.25,
                  '--ListItem-paddingY': 0,
                  '--ListItem-radius': 'var(--joy-radius-md)',
                  '--ListItem-paddingLeft': '.5rem',
                  '--ListItem-paddingRight': '.5rem',
                  '--ListItemDecorator-size': '1.5rem'
                }}
              >
                <ListItem>
                  <ListItemButton color="primary" variant="soft" component={NavLink} to="/docs">
                    <ListItemContent>
                      <Typography>Documentation</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton color="primary" variant="soft" component={NavLink} to="/docs/changelog">
                    <ListItemContent>
                      <Typography>Changelog</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton color="primary" variant="soft" component="a" href="https://github.com/Studio384/Amaranth/issues/new/choose">
                    <ListItemContent>
                      <Typography>Report a bug</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid xs={6}>
              <Typography level="title-lg" sx={{ ml: 1, mb: 1 }}>
                Community
              </Typography>
              <List
                sx={{
                  gap: 0.25,
                  '--ListItem-paddingY': 0,
                  '--ListItem-radius': 'var(--joy-radius-md)',
                  '--ListItem-paddingLeft': '.5rem',
                  '--ListItem-paddingRight': '.5rem',
                  '--ListItemDecorator-size': '1.5rem'
                }}
              >
                <ListItem>
                  <ListItemButton color="primary" variant="soft" component="a" href="https://github.com/studio384/amaranth">
                    <ListItemDecorator>
                      <AmaranthIcon icon={aiGithub} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography>GitHub</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton color="primary" variant="soft" component="a" href="https://twitter.com/studio384">
                    <ListItemDecorator>
                      <AmaranthIcon icon={aiTwitter} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography>Twitter</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton color="primary" variant="soft" component="a" href="https://studio384.be">
                    <ListItemDecorator>
                      <AmaranthIcon icon={aiAmaranth} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography>Studio 384</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid xs={12} sx={{ pt: { xs: 3, md: 5 } }}>
            <Stack direction="row" gap={1} justifyContent="space-between" alignItems="center">
              <Typography fontSize="sm">
                &copy; 2021-2024 &middot;{' '}
                <Link href="https://studio384.be" color="primary" sx={{ fontFamily: 'Century Gothic', fontWeight: 'lg' }}>
                  Studio 384
                </Link>
              </Typography>
              <Stack direction="row" gap={0.5}>
                <IconButton color="primary" variant="soft" onClick={() => setMode(mode === 'dark' ? 'light' : mode === 'light' ? 'system' : 'dark')}>
                  <AmaranthIcon icon={mode === 'dark' ? aiMoon : mode === 'light' ? aiSun : aiCircleHalfInner} />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Sheet>
  );
}
