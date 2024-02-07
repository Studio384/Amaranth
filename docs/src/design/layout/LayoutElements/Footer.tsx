import { Container, Dropdown, ListItemDecorator, Menu, MenuButton, MenuItem, Sheet, Stack, Typography, useColorScheme, useTheme } from '@mui/joy';

import AmaranthIcon, { aiCircleHalfInner, aiMoon, aiSun } from '@studio384/amaranth';

export default function Footer() {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();

  return (
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
  );
}
