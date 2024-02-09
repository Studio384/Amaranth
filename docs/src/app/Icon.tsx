import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Button, Card, Chip, Container, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import Codeblock from '@/design/components/Codeblock';
import Header from '@/design/layout/LayoutElements/Header';
import { IIcon, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiArrowLeft } from '@studio384/amaranth';

import IconCard from './Components/IconCard';

export default function Icon() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [icon, setIcon] = useState<IIcon | null>(null);
  const firstCategory = icon?.categories?.[0];

  useEffect(() => {
    fetch(`/data/icons/${slug}.json`)
      .then((res) => res.json())
      .then((data) => setIcon(data));
  }, [slug]);

  const reactImport = slug
    ? `ai${slug
        .split('-')
        .map((word) => {
          return word[0].toUpperCase() + word.substring(1);
        })
        .join('')}`
    : '';

  const categoryIcons = useMemo(() => {
    if (firstCategory) {
      return icons.filter((icon) => icon.categories.includes(firstCategory));
    }

    return icons;
  }, [firstCategory]);

  const aiIcon: ILibraryIcon = useMemo(() => icons.find((icon) => icon.component === reactImport)!, [reactImport]);

  return (
    <>
      <Header>
        <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5}>
          <Stack gap={1} alignItems="flex-start" sx={{ flexGrow: 1 }}>
            <IconButton variant="plain" color="primary" onClick={() => navigate('/icons')}>
              <AmaranthIcon icon={aiArrowLeft} />
            </IconButton>
            <Typography level="h1" fontSize={48}>
              {icon?.title}
            </Typography>

            {(icon?.categories || icon?.tags) && (
              <Stack direction="row" gap={0.5}>
                {icon?.categories?.map((cat) => (
                  <Chip variant="solid" color="primary" size="sm" key={cat}>
                    {cat}
                  </Chip>
                ))}
                {icon?.tags?.map((tag) => (
                  <Chip key={tag} variant="outlined" size="sm">
                    {tag}
                  </Chip>
                ))}
              </Stack>
            )}

            <Stack direction="row" gap={3} alignItems="center" justifyContent="center" sx={{ mt: 1 }}>
              {icon?.created && (
                <Stack direction="row" gap={1}>
                  <Typography>Created</Typography>{' '}
                  <Chip size="sm" color="primary">
                    {icon?.created}
                  </Chip>
                </Stack>
              )}
              {icon?.updated && (
                <Stack direction="row" gap={1}>
                  <Typography>Last updated</Typography>{' '}
                  <Chip size="sm" color="primary">
                    {icon?.updated}
                  </Chip>
                </Stack>
              )}
            </Stack>
          </Stack>
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
                borderColor: 'var(--joy-palette-primary-600)',
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
                  'linear-gradient(to right, var(--joy-palette-primary-600) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-primary-600) 1px, transparent 1px)'
              }}
            >
              <AmaranthIcon icon={aiIcon?.icon} style={{ fontSize: 'calc(var(--Amicon-scale) * 16)' }} />
            </Sheet>
          </Box>
        </Stack>
      </Header>
      <Container>
        <Stack gap={4} sx={{ my: 5 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
            <Card variant="outlined" sx={{ flexGrow: 1 }}>
              <Typography level="h3" sx={{ mb: 3 }} startDecorator={<AmaranthIcon icon={aiIcon?.icon} />}>
                Heading icon
              </Typography>
              <Typography level="body-md" sx={{ mb: 3 }} startDecorator={<AmaranthIcon icon={aiIcon?.icon} />}>
                Inline icon
              </Typography>
              <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
                <Button color="primary" startDecorator={<AmaranthIcon icon={aiIcon?.icon} />}>
                  Button icon
                </Button>
                <IconButton color="primary" variant="outlined">
                  <AmaranthIcon icon={aiIcon?.icon} />
                </IconButton>
              </Box>
              <Input color="primary" startDecorator={<AmaranthIcon icon={aiIcon?.icon} />} placeholder={icon?.title} />
            </Card>
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography level="h3" sx={{ mb: 2 }}>
                Usage
              </Typography>
              <Codeblock>
                {`import AmaranthIcon, { ${reactImport} } from "@studio384/amaranth";

<AmaranthIcon icon={${reactImport}} />`}
              </Codeblock>
            </Box>
          </Stack>
          <Stack gap={2}>
            <Typography level="h3">More icons in <Typography color="primary">{firstCategory}</Typography></Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(min(9rem, 100%), 1fr))',
                gap: { xs: 1 }
              }}
            >
              {categoryIcons.slice(0, 20).map((icon: ILibraryIcon) => (
                <IconCard key={icon.slug} icon={icon} />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
