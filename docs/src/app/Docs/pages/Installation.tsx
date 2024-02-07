import { Stack, Typography } from '@mui/joy';

import Codeblock from '@/design/components/Codeblock';

export default function PageInstallation() {
  return (
    <Stack id="installation" gap={1} sx={{ scrollMarginTop: 58 + 32 }}>
      <Typography level="h3">Install Amicons</Typography>
      <Typography>Get started with Amicons by running the following command in your project.</Typography>
      <Codeblock>npm install @studio384/amaranth</Codeblock>
    </Stack>
  );
}
