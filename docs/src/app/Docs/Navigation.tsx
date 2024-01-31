import { List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Typography } from '@mui/joy';

import AmaranthIcon, { aiAmicons, aiArrowRotateRight, aiHeart, aiSpinner } from '../../../../dist/esm';

export default function DocsNavigation() {
  const pages = [
    {
      title: 'Installation',
      icon: aiAmicons,
      link: '#installation'
    },
    {
      title: 'Spin',
      icon: aiSpinner,
      link: '#spin'
    },
    {
      title: 'Rotate',
      icon: aiArrowRotateRight,
      link: '#rotate'
    },
    {
      title: 'Flip',
      icon: aiSpinner,
      link: '#flip'
    },
    {
      title: 'Beat',
      icon: aiHeart,
      link: '#beat'
    }
  ];

  return (
    <>
      <Typography level="title-md" sx={{ mb: 1.5 }}>
        Documentation
      </Typography>
      <List
        sx={{
          p: 0,
          gap: 0.25,
          '--ListItem-paddingY': 0,
          '--ListItem-radius': 'var(--joy-radius-md)',
          '--ListItem-minHeight': '2rem',
          '--ListItem-paddingLeft': '.5rem',
          '--ListItem-paddingRight': '.5rem',
          '--ListItemDecorator-size': '1.5rem'
        }}
      >
        {pages.map((page) => (
          <ListItem key={page.link}>
            <ListItemButton component="a" href={page.link} color="primary">
              <ListItemDecorator>
                <AmaranthIcon icon={page.icon} />
              </ListItemDecorator>
              <ListItemContent>
                <Typography noWrap>{page.title}</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
