import { Outlet } from 'react-router-dom';

import { Box } from '@mui/joy';

import Footer from './LayoutElements/Footer';
import Navbar from './LayoutElements/Navbar';

export default function Layout() {
  return (
    <Box sx={{ mt: -11.25 }}>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
}
