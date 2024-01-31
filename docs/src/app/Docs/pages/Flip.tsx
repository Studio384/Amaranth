import { useMemo, useState } from 'react';

import { Box, Card, Chip, Divider, FormControl, FormLabel, IconButton, Sheet, Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import Codeblock from '@/design/components/Codeblock';

import AmaranthIcon, { aiAmicons, aiCar, aiMessageSmile, IAmaranthIcon } from '../../../../../dist/esm';

export default function PageFlip() {
  const [playgroundIcon, setPlaygroundIcon] = useState<IAmaranthIcon>(aiMessageSmile);
  const [playgroundFlip, setPlaygroundFlip] = useState<boolean | undefined | 'x' | 'y'>(true);

  const iconProperty = useMemo(() => {
    switch (playgroundIcon) {
      case aiMessageSmile:
        return 'aiMessageSmile';
      case aiAmicons:
        return 'aiAmicons';
      case aiCar:
        return 'aiCar';
    }
  }, [playgroundIcon]);

  const flipProperty = useMemo(() => {
    switch (playgroundFlip) {
      case true:
        return ' flip';
      case false:
        return '';
      default:
        return ` flip="${playgroundFlip}"`;
    }
  }, [playgroundFlip]);

  return (
    <Stack id="flip" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Flip</Typography>
      <Typography>
        With the <Code>flip</Code> property you can mirror your icon on its x-axis, y-axis or both.
      </Typography>

      <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 280px', p: 0, contain: 'paint', gap: 0 }}>
        <Stack sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', fontSize: 'xl4' }}>
            <AmaranthIcon icon={playgroundIcon} flip={playgroundFlip} />
          </Box>
          <Codeblock>{`<AmaranthIcon icon={${iconProperty}}${flipProperty} />`}</Codeblock>
        </Stack>
        <Sheet sx={{ p: 2, borderWidth: '0 0 0 1px' }} variant="outlined" color="primary">
          <Typography level="title-lg">Playground</Typography>
          <Divider sx={{ my: 2, mx: -2 }} />
          <Stack gap={1.5}>
            <FormControl>
              <FormLabel>Icon</FormLabel>
              <Stack direction="row" gap={0.5}>
                <IconButton variant={playgroundIcon === aiMessageSmile ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiMessageSmile)}>
                  <AmaranthIcon icon={aiMessageSmile} />
                </IconButton>
                <IconButton variant={playgroundIcon === aiAmicons ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiAmicons)}>
                  <AmaranthIcon icon={aiAmicons} />
                </IconButton>
                <IconButton variant={playgroundIcon === aiCar ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiCar)}>
                  <AmaranthIcon icon={aiCar} />
                </IconButton>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Stack direction="row" gap={0.5}>
                <Chip onClick={() => setPlaygroundFlip(true)} color="primary" variant={playgroundFlip === true ? 'soft' : 'outlined'}>
                  true
                </Chip>
                <Chip onClick={() => setPlaygroundFlip('x')} color="primary" variant={playgroundFlip === 'x' ? 'soft' : 'outlined'}>
                  x
                </Chip>
                <Chip onClick={() => setPlaygroundFlip('y')} color="primary" variant={playgroundFlip === 'y' ? 'soft' : 'outlined'}>
                  y
                </Chip>
                <Chip onClick={() => setPlaygroundFlip(false)} color="primary" variant={playgroundFlip === false ? 'soft' : 'outlined'}>
                  false
                </Chip>
              </Stack>
            </FormControl>
          </Stack>
        </Sheet>
      </Card>
    </Stack>
  );
}
