import { Box, Container } from '@mui/joy';

export default function Header({ children }) {
  return (
    <Box
      sx={{
        backgroundImage:
          'radial-gradient(49% 81% at 45% 47%, #B05EFF21 0%, #073AFF00 100%),radial-gradient(113% 91% at 81% 41%, #BE5EFF2B 0%, #FF000000 100%),radial-gradient(142% 91% at 83% 7%, #0040FF47 0%, #FF000000 100%),radial-gradient(142% 91% at -6% 74%, #7E5EFF00 0%, #7E5EFF2B 100%),radial-gradient(142% 91% at 111% 84%, #FFFFFF00 0%, #FFFFFF00 100%)',
        pb: 3,
        pt: 12,
        borderBottom: '1px solid var(--joy-palette-primary-outlinedBorder)'
      }}
    >
      <Container>{children}</Container>
    </Box>
  );
}
