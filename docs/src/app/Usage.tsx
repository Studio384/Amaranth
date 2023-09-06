import { Card, Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

export default function Usage() {
  return (
    <Stack gap={2}>
      <Typography level="h1">Documentation</Typography>
      <Card sx={{ textAlign: 'initial', contain: 'paint' }}>
        <Typography level="h3">Install Amaranth</Typography>
        <Typography>
          Run the following command in npm to get started <Code>npm install @studio384/amaranth@next</Code>.
        </Typography>
      </Card>
    </Stack>
  );
}
