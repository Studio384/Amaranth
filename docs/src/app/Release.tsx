import { ReactNode, useMemo } from 'react';

import { Avatar, Box, List, ListItem, ListItemContent, ListItemDecorator, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import Code from '@/design/components/Code';
import { ILibraryIcon } from '@/types';

import AmaranthIcon, { aiBoxOpenFull, aiPen, aiPlus, aiTrashCan } from '@studio384/amaranth';

import IconCard from './Components/IconCard';

export default function Release({
  name,
  date,
  version,
  added,
  changed,
  removed,
  newIcons,
  updatedIcons,
  removedIcons
}: {
  name: string;
  date: string;
  version: string;
  added?: ReactNode[];
  changed?: ReactNode[];
  removed?: ReactNode[];
  newIcons?: string[];
  updatedIcons?: string[];
  removedIcons?: string[];
}) {
  const newList = useMemo(() => icons.filter((icon) => newIcons?.includes(icon.slug)), [newIcons]);
  const updateList = useMemo(() => icons.filter((icon) => updatedIcons?.includes(icon.slug)), [updatedIcons]);

  return (
    <Sheet sx={{ borderRadius: 'lg', p: 3, bgcolor: 'transparent', boxShadow: 'sm' }} variant="outlined">
      <Stack gap={4}>
        <Stack direction="row" alignItems="center" gap={2}>
          <Avatar size="lg" color="primary" variant="solid">
            <AmaranthIcon icon={aiBoxOpenFull} />
          </Avatar>
          <Stack gap={0.5}>
            <Typography level="h2" lineHeight={1}>
              {name}
            </Typography>
            <Typography level="title-md" lineHeight={1}>
             {date} <Typography sx={{ color: 'neutral.600'}}>&middot; Version {version}</Typography>
            </Typography>
          </Stack>
        </Stack>
        {added && (
          <Stack gap={2}>
            <Typography level="h3">Added</Typography>
            <List sx={{ '--ListItem-minHeight': '1.5rem', '--ListItem-paddingY': '.125rem', '--ListItemDecorator-size': '1.75rem' }}>
              {added.map((item: ReactNode, key: number) => (
                <ListItem key={key}>
                  <ListItemDecorator>
                    <AmaranthIcon icon={aiPlus} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography>{item}</Typography>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
        {changed && (
          <Stack gap={2}>
            <Typography level="h3">Changed</Typography>
            <List sx={{ '--ListItem-minHeight': '1.5rem', '--ListItem-paddingY': '.125rem', '--ListItemDecorator-size': '1.75rem' }}>
              {changed.map((item: ReactNode, key: number) => (
                <ListItem key={key}>
                  <ListItemDecorator>
                    <AmaranthIcon icon={aiPen} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography>{item}</Typography>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
        {removed && (
          <Stack gap={2}>
            <Typography level="h3">Removed</Typography>
            <List sx={{ '--ListItem-minHeight': '1.5rem', '--ListItem-paddingY': '.125rem', '--ListItemDecorator-size': '1.75rem' }}>
              {removed.map((item: ReactNode, key: number) => (
                <ListItem key={key}>
                  <ListItemDecorator>
                    <AmaranthIcon icon={aiTrashCan} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography>{item}</Typography>
                  </ListItemContent>
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
        {newIcons && (
          <Stack gap={2}>
            <Typography level="h3">New icons &middot; {newIcons?.length}</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
                gap: { xs: 1 }
              }}
            >
              {newList.map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>
          </Stack>
        )}
        {updatedIcons && (
          <Stack gap={2}>
            <Typography level="h3">Updated icons &middot; {updatedIcons?.length}</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
                gap: { xs: 1 }
              }}
            >
              {updateList.map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>
          </Stack>
        )}
        {removedIcons && (
          <Stack gap={2}>
            <Typography level="h3">Removed icons &middot; {removedIcons?.length}</Typography>
            <List marker="disc" sx={{ '--ListItem-minHeight': '1.5rem', '--ListItem-paddingY': '.125rem' }}>
              {removedIcons.map((icon: string) => (
                <ListItem key={icon.slug}>
                  <Code>{icon}</Code>
                </ListItem>
              ))}
            </List>
          </Stack>
        )}
      </Stack>
    </Sheet>
  );
}
