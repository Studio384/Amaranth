import { Card, Sheet, Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import AmaranthIcon, { aiMessageSmile, aiSpinnerThird } from '../../../dist/esm';

export default function Usage() {
  return (
    <Stack gap={2} sx={{ my: 2 }}>
      <Typography level="h1">Documentation</Typography>
      <Card>
        <Typography level="h3">Install Amicons</Typography>
        <Typography>
          Run the following command in npm to get started <Code>npm install @studio384/amaranth@next</Code>.
        </Typography>
      </Card>
      <Card>
        <Typography level="h3">Spin</Typography>
        <Typography>
          The <Code>AmaranthIcon</Code> component supports a basic spin animation.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiSpinnerThird} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiSpinnerThird} spin />
              </Typography>
              <Code>spin</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiSpinnerThird} spin={false} />
              </Typography>
              <Code>spin={`{false}`}</Code>
            </Stack>
          </Sheet>
        </Stack>
      </Card>
      <Card>
        <Typography level="h3">Rotation</Typography>
        <Typography>
          The <Code>AmaranthIcon</Code> component supports a changing the orientation of the icon.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} rotate={0} />
              </Typography>
              <Code>rotate={`{0}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} rotate={90} />
              </Typography>
              <Code>rotate={`{90}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} rotate={180} />
              </Typography>
              <Code>rotate={`{180}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} rotate={270} />
              </Typography>
              <Code>rotate={`{270}`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} rotate={false} />
              </Typography>
              <Code>rotate={`{false}`}</Code>
            </Stack>
          </Sheet>
        </Stack>
      </Card>
      <Card>
        <Typography level="h3">Flip</Typography>
        <Typography>
          The <Code>AmaranthIcon</Code> component supports flipping the icon on its axis.
        </Typography>

        <Stack direction="row" fontSize={32} spacing={1}>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} />
              </Typography>
              <Code>null</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} flip />
              </Typography>
              <Code>flip</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} flip="x" />
              </Typography>
              <Code>flip={`"x"`}</Code>
            </Stack>
          </Sheet>
          <Sheet sx={{ p: 1, minWidth: 120, textAlign: 'center', borderRadius: 'sm' }} variant="outlined">
            <Stack spacing={1}>
              <Typography fontSize={32}>
                <AmaranthIcon icon={aiMessageSmile} flip="y" />
              </Typography>
              <Code>flip={`"y"`}</Code>
            </Stack>
          </Sheet>
        </Stack>
      </Card>
    </Stack>
  );
}
