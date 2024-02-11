import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Box, Container, IconButton, Input, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Stack, Typography } from '@mui/joy';

import categories from '@/data/categories';
import icons from '@/data/icons';
import Header from '@/design/layout/LayoutElements/Header';
import useSearch from '@/hooks/useSearch';
import { IIconCategory, ILibraryIcon } from '@/types';

import Amicon, { aiChevronLeft, aiChevronRight, aiFilterXmark, aiMagnifyingGlass } from '@studio384/amaranth';

import IconCard from './Components/IconCard';

export default function Icons() {
  const location = useLocation();

  const [page, setPage] = useState(0);
  const [category, setCategory] = useState<null | IIconCategory>(null);

  const searchableList = useMemo(() => {
    if (category?.slug) {
      return icons.filter((icon) => icon.categories.includes(category.slug));
    }

    return icons;
  }, [category]);

  const { result, needle, setNeedle } = useSearch(searchableList, ['slug', 'tags']);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');

    setNeedle(search ?? '');
  }, [location.search, setNeedle]);

  return (
    <>
      <Header>
        <Typography level="h1" fontSize={48}>
          Icons
        </Typography>
      </Header>
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '200px auto',
            gap: { xs: 1 }
          }}
        >
          <Box sx={{ position: 'sticky', top: 58 + 16, overflow: 'auto', maxHeight: 'calc(100dvh - 58px - 16px)', alignSelf: 'flex-start' }}>
            <List
              sx={{
                p: 0,
                my: 2,
                gap: 0.25,
                '--ListItem-paddingY': 0,
                '--ListItem-radius': 'var(--joy-radius-md)',
                '--ListItem-minHeight': '2rem',
                '--ListItem-paddingLeft': '.5rem',
                '--ListItem-paddingRight': '.5rem',
                '--ListItemDecorator-size': '1.5rem'
              }}
            >
              {categories.map((_category) => (
                <ListItem key={_category.slug}>
                  <ListItemButton
                    onClick={() => {
                      if (category?.slug === _category.slug) {
                        setCategory(null);
                      } else {
                        setCategory(_category);
                      }

                      setPage(0);
                    }}
                    variant={category?.slug === _category.slug ? 'soft' : 'plain'}
                    color="primary"
                  >
                    <ListItemDecorator>
                      <Amicon icon={_category.icon} />
                    </ListItemDecorator>
                    <ListItemContent>
                      <Typography noWrap>{_category.title}</Typography>
                    </ListItemContent>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
          <Stack gap={2} sx={{ my: 2 }}>
            <Stack direction="row" gap={1} justifyContent="space-between" alignItems="center">
              <Stack direction="row" gap={1} alignItems="baseline">
                <Typography level="h2">{result.length} icons</Typography>
                <Typography color="neutral">
                  Page {page + 1} of {Math.ceil(result.length / 96)}
                </Typography>
              </Stack>

              <Stack direction="row" gap={0.5} alignItems="baseline">
                <Input
                  startDecorator={<Amicon icon={aiMagnifyingGlass} />}
                  placeholder="Search"
                  value={needle}
                  onChange={(e) => {
                    setNeedle(e.target.value);
                    setPage(0);
                  }}
                />
                <IconButton
                  variant="outlined"
                  disabled={needle === '' && category === null}
                  onClick={() => {
                    setNeedle('');
                    setCategory(null);
                  }}
                >
                  <Amicon icon={aiFilterXmark} />
                </IconButton>
              </Stack>
            </Stack>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
                gap: { xs: 1 }
              }}
            >
              {result.slice(page * 96, (page + 1) * 96).map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>

            <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
              <IconButton
                size="sm"
                variant={page === 0 ? 'plain' : 'solid'}
                color={page === 0 ? 'neutral' : 'primary'}
                onClick={() => setPage((prev) => prev - 1)}
                disabled={page === 0}
              >
                <Amicon icon={aiChevronLeft} />
              </IconButton>
              <IconButton
                size="sm"
                variant={page === Math.ceil(result.length / 96) - 1 ? 'plain' : 'solid'}
                color={page === Math.ceil(result.length / 96) - 1 ? 'neutral' : 'primary'}
                onClick={() => setPage((prev) => prev + 1)}
                disabled={page === Math.ceil(result.length / 96) - 1}
              >
                <Amicon icon={aiChevronRight} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
