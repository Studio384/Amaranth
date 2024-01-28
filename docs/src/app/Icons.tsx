import { useMemo, useState } from 'react';

import { Box, IconButton, Input, Link, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Sheet, Stack, Typography, useTheme } from '@mui/joy';

import categories from '@/data/categories';
import icons from '@/data/icons';
import useSearch from '@/hooks/useSearch';
import { IIconCategory, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiChevronLeft, aiChevronRight, aiFilterXmark, aiMagnifyingGlass, aiXmark } from '@studio384/amaranth';

export default function Icons() {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  const [category, setCategory] = useState<null | IIconCategory>(null);

  const searchableList = useMemo(() => {
    if (category?.slug) {
      return icons.filter((icon) => icon.categories.includes(category.slug));
    }

    return icons;
  }, [category]);

  const { result, needle, setNeedle } = useSearch(searchableList, ['slug', 'tags']);

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '200px auto',
        gap: { xs: 1 }
      }}
    >
      <Box sx={{ position: 'sticky', top: 56, height: 'calc(100vh - 40px - 16px)', overflow: 'auto', py: 1.5 }}>
        <Typography level="title-md" sx={{ mb: 1.5 }}>
          Categories
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
                  <AmaranthIcon icon={_category.icon} />
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

          <Stack direction="row" gap={.5} alignItems="baseline">
            <Input
              startDecorator={<AmaranthIcon icon={aiMagnifyingGlass} />}
              placeholder="Search"
              value={needle}
              onChange={(e) => {
                setNeedle(e.target.value);
                setPage(0);
              }}
              sx={{
                borderColor: 'primary.100',
                [theme.getColorSchemeSelector('dark')]: {
                  borderColor: 'primary.800'
                }
              }}
            />
            <IconButton
              color="primary"
              variant="outlined"
              disabled={needle === '' && category === null}
              onClick={() => {
                setNeedle('');
                setCategory(null);
              }}
            >
              <AmaranthIcon icon={aiFilterXmark} />
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
            <Sheet
              key={icon.slug}
              variant="outlined"
              sx={{
                gap: 0,
                borderRadius: 'sm',
                borderColor: 'primary.50',
                '&:hover, &:focus-within': {
                  backgroundColor: 'primary.50'
                },
                [theme.getColorSchemeSelector('dark')]: {
                  borderColor: 'primary.900',
                  '&:hover, &:focus-within': {
                    backgroundColor: 'primary.900'
                  }
                }
              }}
            >
              <Stack gap={1} justifyContent="center" alignItems="center" sx={{ pt: 2, pb: 1 }}>
                <Box sx={{ height: 24, width: 24, fontSize: 24 }} lineHeight="1rem">
                  <AmaranthIcon icon={icon.icon} />
                </Box>
                <Link
                  overlay
                  href={`/icons/${icon.slug}`}
                  underline="none"
                  color="neutral"
                  sx={{
                    maxWidth: 'calc(100% - 16px)'
                  }}
                >
                  <Typography
                    noWrap
                    level="body-sm"
                    sx={{
                      px: 0.5,
                      py: 0.25,
                      borderRadius: 'sm',
                      fontSize: 12,
                      fontFamily: 'SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace'
                    }}
                  >
                    {icon.slug}
                  </Typography>
                </Link>
              </Stack>
            </Sheet>
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
            <AmaranthIcon icon={aiChevronLeft} />
          </IconButton>
          <IconButton
            size="sm"
            variant={page === Math.ceil(result.length / 96) - 1 ? 'plain' : 'solid'}
            color={page === Math.ceil(result.length / 96) - 1 ? 'neutral' : 'primary'}
            onClick={() => setPage((prev) => prev + 1)}
            disabled={page === Math.ceil(result.length / 96) - 1}
          >
            <AmaranthIcon icon={aiChevronRight} />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}
