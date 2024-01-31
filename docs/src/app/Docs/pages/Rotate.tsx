import { CSSProperties, useMemo, useState } from 'react';

import { Box, Card, Chip, Divider, FormControl, FormLabel, IconButton, Input, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import Codeblock from '@/design/components/Codeblock';

import AmaranthIcon, { aiAmicons, aiArrowUp, aiMessageSmile, IAmaranthIcon } from '../../../../../dist/esm';

export default function PageRotate() {
  const [playgroundIcon, setPlaygroundIcon] = useState<IAmaranthIcon>(aiMessageSmile);
  const [playgroundRotate, setPlaygroundRotate] = useState<false | 0 | 90 | 180 | 270 | undefined>(90);
  const [playgroundCssVariable, setPlaygroundCssVariable] = useState<CSSProperties>({});

  const iconProperty = useMemo(() => {
    switch (playgroundIcon) {
      case aiMessageSmile:
        return 'aiMessageSmile';
      case aiAmicons:
        return 'aiAmicons';
      case aiArrowUp:
        return 'aiArrowUp';
    }
  }, [playgroundIcon]);

  const rotateProperty = useMemo(() => {
    switch (playgroundRotate) {
      case false:
        return '';
      default:
        return ` rotate={${playgroundRotate}}`;
    }
  }, [playgroundRotate]);

  return (
    <Stack id="rotate" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Rotate</Typography>
      <Typography>
        With the <Code>rotate</Code> property you can change the default rotation of your icon.
      </Typography>

      <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 280px', p: 0, contain: 'paint', gap: 0 }}>
        <Stack sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', fontSize: 'xl4' }}>
            <AmaranthIcon icon={playgroundIcon} rotate={playgroundRotate} style={playgroundCssVariable} />
          </Box>
          <Codeblock>{`<AmaranthIcon icon={${iconProperty}}${rotateProperty} />`}</Codeblock>
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
                <IconButton variant={playgroundIcon === aiArrowUp ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiArrowUp)}>
                  <AmaranthIcon icon={aiArrowUp} />
                </IconButton>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Stack direction="row" gap={0.5}>
                <Chip onClick={() => setPlaygroundRotate(0)} color="primary" variant={playgroundRotate === 0 ? 'soft' : 'outlined'}>
                  0
                </Chip>
                <Chip onClick={() => setPlaygroundRotate(90)} color="primary" variant={playgroundRotate === 90 ? 'soft' : 'outlined'}>
                  90
                </Chip>
                <Chip onClick={() => setPlaygroundRotate(180)} color="primary" variant={playgroundRotate === 180 ? 'soft' : 'outlined'}>
                  180
                </Chip>
                <Chip onClick={() => setPlaygroundRotate(270)} color="primary" variant={playgroundRotate === 270 ? 'soft' : 'outlined'}>
                  270
                </Chip>
                <Chip onClick={() => setPlaygroundRotate(false)} color="primary" variant={playgroundRotate === false ? 'soft' : 'outlined'}>
                  false
                </Chip>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>--ai-transition-duration</FormLabel>
              <Input
                color="primary"
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-transition-duration': e.target.value }))}
                placeholder="0.2s"
              />
            </FormControl>
            <FormControl>
              <FormLabel>--ai-transition-timing-function</FormLabel>
              <Input
                color="primary"
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-transition-timing-function': e.target.value }))}
                placeholder="ease-in-out"
              />
            </FormControl>
          </Stack>
        </Sheet>
      </Card>

      <Typography level="h4">API</Typography>
      <Sheet variant="outlined" color="primary" sx={{ borderRadius: 'sm' }}>
        <Table variant="outlined">
          <thead>
            <tr>
              <th style={{ width: '25%' }}>Property name</th>
              <th style={{ width: '15%' }}>Default</th>
              <th style={{ width: '60%' }}>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Code>--ai-transition-duration</Code>
              </td>
              <td>
                <Code>0.2s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-transition-timing-function</Code>
              </td>
              <td>
                <Code>ease-in-out</Code>
              </td>
              <td>The timing function used for the animation.</td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
