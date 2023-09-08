import { useMemo, useState } from 'react';

import { Box, IconButton, Input, Link, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, Sheet, Stack, Typography } from '@mui/joy';

import categories from '@/data/categories';
import icons from '@/data/icons';
import useSearch from '@/hooks/useSearch';
import { IIconCategory, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiChevronLeft, aiChevronRight, aiMagnifyingGlass, aiXmark } from '@studio384/amaranth';

export default function Home() {
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
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="baseline">
          <Typography level="h2">{result.length} icons</Typography>
          <Typography color="neutral">
            Page {page + 1} of {Math.ceil(result.length / 99)}
          </Typography>
        </Stack>

        <Input
          startDecorator={<AmaranthIcon icon={aiMagnifyingGlass} />}
          endDecorator={
            <IconButton onClick={() => setNeedle('')} disabled={!needle}>
              <AmaranthIcon icon={aiXmark} />
            </IconButton>
          }
          placeholder="Search"
          value={needle}
          onChange={(e) => {
            setNeedle(e.target.value);
            setPage(0);
          }}
        />
      </Stack>
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
              '--ListItem-radius': '4px',
              '--ListItem-minHeight': '2.25rem',
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
                  selected={category?.slug === _category.slug}
                  color="primary"
                >
                  <ListItemDecorator>
                    <AmaranthIcon icon={_category.icon} />
                  </ListItemDecorator>
                  <ListItemContent>
                    <Typography>{_category.title}</Typography>
                  </ListItemContent>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <div>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(9.5rem, 100%), 1fr))',
              gap: { xs: 1 }
            }}
          >
            {result.slice(page * 99, (page + 1) * 99).map((icon: ILibraryIcon) => (
              <Sheet
                key={icon.slug}
                variant="outlined"
                sx={{
                  gap: 0,
                  borderRadius: 'sm',
                  '&:hover, &:focus-within': {
                    backgroundColor: 'rgba(var(--joy-palette-primary-mainChannel) / .0625)',
                    '& > div > a > .MuiTypography-root': {
                      backgroundColor: 'rgba(var(--joy-palette-primary-mainChannel) / .125)'
                    }
                  }
                }}
              >
                <Stack gap={3} justifyContent="center" alignItems="center" sx={{ pt: 3, pb: 1 }}>
                  <AmaranthIcon icon={icon.icon} sx={{ fontSize: 32 }} />
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
        </div>
      </Box>

      <Stack direction="row" justifyContent="center" alignItems="center" gap={1}>
        <IconButton variant="solid" color="primary" onClick={() => setPage((prev) => prev - 1)} disabled={page === 0}>
          <AmaranthIcon icon={aiChevronLeft} />
        </IconButton>
        <IconButton variant="solid" color="primary" onClick={() => setPage((prev) => prev + 1)} disabled={page === Math.ceil(result.length / 99) - 1}>
          <AmaranthIcon icon={aiChevronRight} />
        </IconButton>
      </Stack>
    </Stack>
  );
}
