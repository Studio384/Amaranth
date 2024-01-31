import { CSSProperties, useMemo, useState } from 'react';

import { Box, Card, Chip, Divider, FormControl, FormLabel, IconButton, Input, Sheet, Stack, Table, Typography } from '@mui/joy';

import Code from '@/design/components/Code';
import Codeblock from '@/design/components/Codeblock';

import AmaranthIcon, { aiGear, aiSpinner, aiSpinnerThird, IAmaranthIcon } from '../../../../../dist/esm';

export default function PageSpin() {
  const [playgroundIcon, setPlaygroundIcon] = useState<IAmaranthIcon>(aiSpinnerThird);
  const [playgroundSpin, setPlaygroundSpin] = useState<boolean | undefined | 'pulse'>(true);
  const [playgroundCssVariable, setPlaygroundCssVariable] = useState<CSSProperties>({});

  const iconProperty = useMemo(() => {
    switch (playgroundIcon) {
      case aiSpinnerThird:
        return 'aiSpinnerThird';
      case aiSpinner:
        return 'aiSpinner';
      case aiGear:
        return 'aiGear';
    }
  }, [playgroundIcon]);

  const spinProperty = useMemo(() => {
    switch (playgroundSpin) {
      case true:
        return ' spin';
      case false:
        return '';
      case 'pulse':
        return ' spin="pulse"';
    }
  }, [playgroundSpin]);

  return (
    <Stack id="spin" gap={1} sx={{ scrollMarginTop: 73 }}>
      <Typography level="h3">Spin</Typography>
      <Typography>
        With the <Code>Spin</Code> property you can make your icons play a rotation animation.
      </Typography>

      <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 280px', p: 0, contain: 'paint', gap: 0 }}>
        <Stack sx={{ p: 2 }}>
          <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', fontSize: 'xl4' }}>
            <AmaranthIcon icon={playgroundIcon} spin={playgroundSpin} style={playgroundCssVariable} />
          </Box>
          <Codeblock>{`<AmaranthIcon icon={${iconProperty}}${spinProperty} />`}</Codeblock>
        </Stack>
        <Sheet sx={{ p: 2, borderWidth: '0 0 0 1px' }} variant="outlined" color="primary">
          <Typography level="title-lg">Playground</Typography>
          <Divider sx={{ my: 2, mx: -2 }} />
          <Stack gap={1.5}>
            <FormControl>
              <FormLabel>Icon</FormLabel>
              <Stack direction="row" gap={0.5}>
                <IconButton variant={playgroundIcon === aiSpinnerThird ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiSpinnerThird)}>
                  <AmaranthIcon icon={aiSpinnerThird} />
                </IconButton>
                <IconButton variant={playgroundIcon === aiSpinner ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiSpinner)}>
                  <AmaranthIcon icon={aiSpinner} />
                </IconButton>
                <IconButton variant={playgroundIcon === aiGear ? 'soft' : 'outlined'} color="primary" onClick={() => setPlaygroundIcon(aiGear)}>
                  <AmaranthIcon icon={aiGear} />
                </IconButton>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>State</FormLabel>
              <Stack direction="row" gap={0.5}>
                <Chip onClick={() => setPlaygroundSpin(true)} color="primary" variant={playgroundSpin === true ? 'soft' : 'outlined'}>
                  true
                </Chip>
                <Chip onClick={() => setPlaygroundSpin('pulse')} color="primary" variant={playgroundSpin === 'pulse' ? 'soft' : 'outlined'}>
                  pulse
                </Chip>
                <Chip onClick={() => setPlaygroundSpin(false)} color="primary" variant={playgroundSpin === false ? 'soft' : 'outlined'}>
                  false
                </Chip>
              </Stack>
            </FormControl>
            <FormControl>
              <FormLabel>--ai-animation-duration</FormLabel>
              <Input
                color="primary"
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-animation-duration': e.target.value }))}
                placeholder={playgroundSpin === 'pulse' ? '2s' : '1s'}
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
            {playgroundSpin === 'pulse' && (
              <FormControl>
                <FormLabel>--ai-animation-pulse-steps</FormLabel>
                <Input
                  color="primary"
                  onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, '--ai-animation-pulse-steps': e.target.value }))}
                  placeholder="8"
                />
              </FormControl>
            )}
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
                <Code>2s</Code>, <Code>1s</Code> for pulse
              </td>
              <td>Time for a full play through of the animation.</td>
            </tr>
            <tr>
              <td>
                <Code>--ai-animation-timing-function</Code>
              </td>
              <td>
                <Code>linear</Code>
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
            <tr>
              <td>
                <Code>--ai-animation-pulse-steps</Code>
              </td>
              <td>
                <Code>8</Code>
              </td>
              <td>
                Number of steps when the spin property is set to <Code>pulse</Code>.
              </td>
            </tr>
          </tbody>
        </Table>
      </Sheet>
    </Stack>
  );
}
