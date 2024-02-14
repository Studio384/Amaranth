import { Stack, Typography } from '@mui/joy';

import Code from '@/design/components/Code';

import { aiExpand, aiHeart, aiPlay } from '@studio384/amaranth';

import ApiTable from '../playground/ApiTable';
import Playground, { IIconCssVariables, IPlaygroundConfig } from '../playground/Playground';

export default function PageBeat() {
  const playgroundConfig: IPlaygroundConfig = {
    icons: [aiHeart, aiExpand, aiPlay],
    properties: [
      {
        label: 'Beat',
        type: 'chip',
        name: 'beat',
        values: [true, false],
        default: true
      }
    ],
    cssVariables: [
      {
        name: '--ai-animation-duration',
        default: '1s',
        description: 'Time for a full play through of the animation.'
      },
      {
        name: '--ai-animation-timing-function',
        default: 'ease-in-out',
        description: 'The timing function used for the animation.'
      },
      {
        name: '--ai-animation-iteration-count',
        default: 'infinite',
        description: 'Number of times the animation is repeated.'
      },
      {
        name: '--ai-animation-scale',
        default: '1.4',
        description: 'The scale at which the icon can grow.'
      }
    ]
  };

  return (
    <Stack id="beat" gap={2} sx={{ scrollMarginTop: 58 + 32 }}>
      <Typography level="h3">Beat</Typography>
      <Typography>
        With the <Code>beat</Code> property gives you a basic beat animation.
      </Typography>

      <Playground config={playgroundConfig} />

      <Typography level="h4">API</Typography>

      <ApiTable cssVariables={playgroundConfig.cssVariables as IIconCssVariables[]} />
    </Stack>
  );
}
