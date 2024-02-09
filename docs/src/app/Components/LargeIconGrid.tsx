import { Box, Sheet } from '@mui/joy';

import AmaranthIcon, { IAmaranthIcon } from '@studio384/amaranth';

export default function LargeIconGrid({ icon }: { icon: IAmaranthIcon }) {
  return (
    <Box
      sx={{
        '--Amicon-scale': '16px',
        p: 4,
        background: 'rgba(var(--joy-palette-background-channel) / .5)',
        borderRadius: 'xl',
        boxShadow: 'lg',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(var(--joy-palette-background-channel) / .5)'
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          // Icon display
          '--Amicon-scale': '16px',
          color: 'text.primary',
          borderColor: 'var(--joy-palette-primary-200)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 'calc(var(--Amicon-scale) * 16)',
          height: 'calc(var(--Amicon-scale) * 16)',
          borderRadius: 'sm',
          backgroundColor: 'transparent',
          backgroundSize: 'var(--Amicon-scale) var(--Amicon-scale)',
          backgroundPosition: '-1px -1px',
          backgroundImage:
            'linear-gradient(to right, var(--joy-palette-primary-200) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-200) 1px, transparent 1px)'
        }}
      >
        <AmaranthIcon icon={icon} style={{ fontSize: 'calc(var(--Amicon-scale) * 16)' }} />
      </Sheet>
    </Box>
  );
}
