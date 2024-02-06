import { Fragment } from 'react';

import { Box, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, ListSubheader, Typography } from '@mui/joy';

import AmaranthIcon, { aiAmicons, aiArrowRotateRight, aiArrowsDownLeftRightUpCenter, aiHeart, aiReact, aiSpinner } from '../../../../dist/esm';

export default function DocsNavigation() {
  const pages = [
    {
      title: 'Get started',
      icon: aiAmicons,
      pages: [
        {
          title: 'Installation',
          icon: aiAmicons,
          link: '#installation'
        }
      ]
    },
    {
      title: 'React component',
      icon: aiReact,
      pages: [
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
          icon: aiArrowsDownLeftRightUpCenter,
          link: '#flip'
        },
        {
          title: 'Beat',
          icon: aiHeart,
          link: '#beat'
        }
      ]
    }
  ];

  return (
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
      {pages.map((category, key) => (
        <Fragment key={key}>
          <ListSubheader sx={{ '&:not(:first-child)': { mt: 2 } }}>
            <Typography level="title-sm" textTransform="none" letterSpacing="initial" fontSize="md" startDecorator={<AmaranthIcon icon={category.icon} />}>
              {category.title}
            </Typography>
          </ListSubheader>
          {category.pages.map((page) => (
            <ListItem key={page.link}>
              <ListItemButton component="a" href={page.link} color="primary">
                <ListItemContent>
                  <Typography noWrap>{page.title}</Typography>
                </ListItemContent>
              </ListItemButton>
            </ListItem>
          ))}
        </Fragment>
      ))}
    </List>
  );
}
