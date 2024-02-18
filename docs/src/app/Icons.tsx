import { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import {
  Box,
  Chip,
  ChipDelete,
  Container,
  IconButton,
  Input,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  ListItemDecorator,
  Stack,
  Typography
} from '@mui/joy';

import categories from '@/data/categories';
import icons from '@/data/icons';
import Header from '@/design/layout/LayoutElements/Header';
import useSearch from '@/hooks/useSearch';
import { ILibraryIcon } from '@/types';

import Amicon, { aiFilterXmark, aiMagnifyingGlass } from '@studio384/amaranth';

import IconCard from './Components/IconCard';
import Pagination from './Components/Pagination';

export default function Icons() {
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();

  const [searchCategories, searchQuery, searchPage]: [string[], string, number] = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const categories = params.get('category');
    const query = params.get('search');
    const page = Number(params.get('page') ?? 1);

    return [categories?.split(',').filter((item) => item !== '') ?? [], query ?? '', page ?? 1];
  }, [location.search]);

  const searchableList = useMemo(() => {
    if (searchCategories.length >= 1) {
      return icons.filter((icon) => searchCategories.every((_searchCategory) => icon.categories.includes(_searchCategory)));
    }

    return icons;
  }, [searchCategories]);

  const { result } = useSearch(searchableList, ['slug', 'tags'], searchQuery);

  // c: categories
  // q: query
  // p: page
  function setSearchQuery(type: 'q' | 'c' | 'p', value: string) {
    let search = searchParams.get('search');
    let page = searchParams.get('page');
    let category =
      searchParams
        .get('category')
        ?.split(',')
        .filter((item) => item !== '') ?? [];

    switch (type) {
      case 'c': {
        if (category.includes(value)) {
          category = category.filter((item) => item !== value);
        } else {
          category.push(value);
        }
        break;
      }
      case 'q': {
        search = value;
        break;
      }
      case 'p': {
        page = value;
        break;
      }
    }

    setSearchParams({
      page: (page ?? 1).toString(),
      search: search ?? '',
      category: category.join(',') ?? ''
    });
  }

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
            gridTemplateColumns: '220px auto',
            gap: 3
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
                '--ListItem-paddingLeft': '.5rem',
                '--ListItem-paddingRight': '.5rem',
                '--ListItemDecorator-size': '1.5rem'
              }}
            >
              {categories.map((_category) => {
                const categoryIcons = searchableList.filter((icon) => icon.categories.includes(_category.slug));

                if (categoryIcons.length === 0) {
                  return;
                }

                return (
                  <ListItem key={_category.slug}>
                    <ListItemButton
                      onClick={() => setSearchQuery('c', _category.slug)}
                      variant={searchCategories.includes(_category.slug) ? 'soft' : 'plain'}
                      color="primary"
                    >
                      <ListItemDecorator>
                        <Amicon icon={_category.icon} />
                      </ListItemDecorator>
                      <ListItemContent>
                        <Typography noWrap>{_category.title}</Typography>
                      </ListItemContent>
                      <ListItemContent sx={{ fontFamily: 'display', textAlign: 'right' }}>{categoryIcons.length}</ListItemContent>
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
          <Stack gap={2} sx={{ my: 2 }}>
            <Stack direction="row" gap={1} justifyContent="space-between" alignItems="center">
              <Stack direction="row" gap={1} alignItems="baseline">
                <Typography level="h2">{result.length} icons</Typography>
                <Typography color="neutral">
                  Page {searchPage} of {Math.ceil(result.length / 96)}
                </Typography>
              </Stack>

              <Stack direction="row" gap={0.5} alignItems="baseline">
                <Input
                  startDecorator={<Amicon icon={aiMagnifyingGlass} />}
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery('q', e.target.value);
                    setSearchQuery('p', 0);
                  }}
                />
                <IconButton
                  variant="outlined"
                  disabled={searchQuery === '' && searchCategories.length === 0}
                  onClick={() => {
                    setSearchParams({
                      search: '',
                      category: ''
                    });
                  }}
                >
                  <Amicon icon={aiFilterXmark} />
                </IconButton>
              </Stack>
            </Stack>
            {(searchQuery || searchCategories.length >= 1) && (
              <Stack direction="row" gap={0.5} sx={{ '--_Chip-minHeight': '2rem' }}>
                {searchQuery && (
                  <Chip
                    size="lg"
                    sx={{ fontSize: 'sm', fontWeight: '300', gap: 1.25, fontFamily: 'display', '--_Chip-minHeight': '2rem' }}
                    endDecorator={<ChipDelete onClick={() => setSearchQuery('q', '')} />}
                  >
                    "{searchQuery}"
                  </Chip>
                )}
                {searchCategories.map((category) => (
                  <Chip
                    key={category}
                    size="lg"
                    sx={{ fontSize: 'sm', fontWeight: '300', gap: 1.25, fontFamily: 'display', '--_Chip-minHeight': '2rem' }}
                    endDecorator={<ChipDelete onClick={() => setSearchQuery('c', category)} />}
                  >
                    {category}
                  </Chip>
                ))}
              </Stack>
            )}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
                gap: { xs: 1 }
              }}
            >
              {result.slice((searchPage - 1) * 96, searchPage * 96).map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>

            {result.length > 0 && <Pagination count={Math.ceil(result.length / 96)} page={searchPage} onChange={(e, page) => setSearchQuery('p', page)} />}
          </Stack>
        </Box>
      </Container>
    </>
  );
}
