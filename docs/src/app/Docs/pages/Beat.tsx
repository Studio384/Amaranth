import { CSSProperties, useMemo, useState } from 'react';

import { Box, Card, Chip, Divider, FormControl, FormLabel, IconButton, Input, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import Codeblock from '@/design/components/Codeblock';

import AmaranthIcon, { aiPlay, aiHeart, aiExpand, IAmaranthIcon } from '../../../../../dist/esm';

export default function PageBeat() {
  const [playgroundIcon, setPlaygroundIcon] = useState<IAmaranthIcon>(aiHeart);
  const [playgroundBeat, setPlaygroundBeat] = useState<boolean | undefined>(true);
  const [playgroundCssVariable, setPlaygroundCssVariable] = useState<CSSProperties>({});

  const iconProperty = useMemo(() => {
    switch (playgroundIcon) {
      case aiHeart:
        return 'aiHeart';
      case aiExpand:
        return 'aiExpand';
      case aiPlay:
        return 'aiPlay';
    }
  }, [playgroundIcon]);

  const beatProperty = useMemo(() => {
    switch (playgroundBeat) {
      case true:
        return ' beat';
      case false:
        return '';
    }
  }, [playgroundBeat]);

  return (
    <Stack id="beat" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Beat</Typography>
      <Typography>
        With the <Code>beat</Code> property gives you a basic beat animation.
      </Typography>

      <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 280px', p: 0, contain: 'paint', gap: 0 }}>
        <Stack sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', fontSize: 'xl4' }}>
            <AmaranthIcon icon={playgroundIcon} beat={playgroundBeat} style={playgroundCssVariable} />
          </Box>
          <Codeblock>{`<AmaranthIcon icon={${iconProperty}}${beatProperty} />`}</Codeblock>
        </Stack>
        <Sheet sx={{ p: 2, borderWidth: '0 0 0 1px' }} variant="outlined" color="primary">
          <Typography level="title-lg">Playground</Typography>
          <Divider sx={{ my: 2, mx: -2 }} />
          <Stack gap={1.5}>
            <FormControl>
              <FormLabel>Icon</FormLabel>
              <Stack direction="row" gap={0.5}>
                <IconButton variant={playgroundIcon === aiHeart ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiHeart)}>
                  <AmaranthIcon icon={aiHeart} />
                </IconButton>
                <IconButton variant={playgroundIcon === aiExpand ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiExpand)}>
                  <AmaranthIcon icon={aiExpand} />
                </IconButton>
                <IconButton variant={playgroundIcon === aiPlay ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiPlay)}>
                  <AmaranthIcon icon={aiPlay} />
                </IconButton>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Stack direction="row" gap={0.5}>
                <Chip onClick={() => setPlaygroundBeat(true)} color="primary" variant={playgroundBeat === true ? 'soft' : 'outlined'}>
                  true
                </Chip>
                <Chip onClick={() => setPlaygroundBeat(false)} color="primary" variant={playgroundBeat === false ? 'soft' : 'outlined'}>
                  false
                </Chip>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>--ai-animation-duration</FormLabel>
              <Input
                color="primary"
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-animation-duration': e.target.value }))}
                placeholder={playgroundBeat === 'pulse' ? '2s' : '1s'}
              />
            </FormControl>
            <FormControl>
              <FormLabel>--ai-animation-timing-function</FormLabel>
              <Input
                color="primary"
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-animation-timing-function': e.target.value }))}
                placeholder="linear"
              />
            </FormControl>
            <FormControl>
              <FormLabel>--ai-animation-iteration-count</FormLabel>
              <Input
                color="primary"
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-animation-iteration-count': e.target.value }))}
                placeholder="infinite"
              />
            </FormControl>
          </Stack>
        </Sheet>
      </Card>

      <Typography level="h4">API</Typography>
      <Sheet variant="outlined" sx={{ borderRadius: 'sm' }}>
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
                <Code>--ai-animation-duration</Code>
              </td>
              <td>
                <Code>1s</Code>
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-timing-function</Code>
              </td>
              <td>
                <Code>ease-in-out</Code>
              </td>
              <td>The timing function used for the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-iteration-count</Code>
              </td>
              <td>
                <Code>infinite</Code>
              </td>
              <td>Number of times the animation is repeated.</td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
