import { Box, Sheet } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';

import Amicon, { IAmicon } from '@studio384/amaranth';

export default function LargeIconGrid({ icon, sx }: { icon: IAmicon; sx?: SxProps }) {
  return (
    <Box
      sx={[
        {
          p: 'calc(var(--Amicon-scale, 16px) * 2)',
          background: 'rgba(var(--joy-palette-background-channel) / .5)',
          borderRadius: 'xl',
          boxShadow: 'lg',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
    >
      <Sheet
        variant="outlined"
        sx={{
          // Icon display
          color: 'text.primary',
          borderColor: 'var(--joy-palette-primary-200)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'calc(var(--Amicon-scale, 16px) * 16)',
          height: 'calc(var(--Amicon-scale, 16px) * 16)',
          borderRadius: 'sm',
          backgroundColor: 'transparent',
          backgroundSize: 'var(--Amicon-scale, 16px) var(--Amicon-scale, 16px)',
          backgroundPosition: '-1px -1px',
          backgroundImage:
            'linear-gradient(to right, var(--joy-palette-primary-200) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-200) 1px, transparent 1px)'
        }}
      >
        <Amicon icon={icon} style={{ fontSize: 'calc(var(--Amicon-scale, 16px) * 16)' }} />
      </Sheet>
    </Box>
  );
}
