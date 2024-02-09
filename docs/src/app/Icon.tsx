import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Alert, Avatar, Box, Button, Card, Chip, Container, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import Codeblock from '@/design/components/Codeblock';
import Header from '@/design/layout/LayoutElements/Header';
import { IIcon, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiArrowLeft, aiXmark } from '@studio384/amaranth';

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
          <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography level="h3" sx={{ mb: 2 }}>
                Examples
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gap: 3,
                  gridTemplateColumns: {
                    xs: 'repeat(2, minmax(0, 1fr))',
                    sm: 'repeat(3, minmax(0, 1fr))',
                    md: 'repeat(4, minmax(0, 1fr))',
                    lg: 'repeat(6, minmax(0, 1fr))'
                  },
                  gridAutoRows: '140px'
                }}
              >
                <Card
                  variant="solid"
                  color="primary"
                  sx={{ fontSize: 'xl4', display: 'flex', justifyContent: 'center', alignItems: 'center', order: 1, boxShadow: 'none' }}
                >
                  <AmaranthIcon icon={aiIcon?.icon} />
                </Card>
                <Card
                  variant="outlined"
                  color="primary"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: 'span 2', order: 2, boxShadow: 'none' }}
                >
                  <Typography fontSize="xl4" color="primary" startDecorator={<AmaranthIcon icon={aiIcon?.icon} />} noWrap sx={{ maxWidth: 1 }}>
                    {icon?.title}
                  </Typography>
                </Card>
                <Card
                  variant="solid"
                  color="primary"
                  sx={{
                    fontSize: 'xl4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'primary.300',
                    gridColumn: 'span 2',
                    order: 3,
                    boxShadow: 'none'
                  }}
                >
                  <Stack direction="row" gap={10}>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} spin />
                      <Typography sx={{ color: 'primary.800', lineHeight: 1 }}>Spin</Typography>
                    </Stack>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} spin="pulse" />
                      <Typography sx={{ color: 'primary.800', lineHeight: 1 }}>Pulse</Typography>
                    </Stack>
                  </Stack>
                </Card>
                <Card
                  variant="outlined"
                  color="primary"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 4, md: 2, lg: 4 }, boxShadow: 'none' }}
                >
                  <Input startDecorator={<AmaranthIcon icon={aiIcon?.icon} />} placeholder={icon?.title} sx={{ maxWidth: 1 }} />
                </Card>
                <Card
                  variant="outlined"
                  color="primary"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 6, sm: 10, lg: 5 }, boxShadow: 'none' }}
                >
                  <Avatar color="primary" size="lg" variant="solid">
                    <AmaranthIcon icon={aiIcon?.icon} />
                  </Avatar>
                </Card>
                <Card
                  variant="soft"
                  color="primary"
                  sx={{
                    fontSize: 'xl4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gridColumn: { xs: 'span 2', sm: 'span 3', md: 'span 2', lg: 'span 3' },
                    order: 7,
                    boxShadow: 'none'
                  }}
                >
                  <Stack direction="row" gap={10}>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} rotate={90} />
                      <Typography sx={{ lineHeight: 1 }}>90°</Typography>
                    </Stack>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} rotate={180} />
                      <Typography sx={{ lineHeight: 1 }}>180°</Typography>
                    </Stack>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} rotate={270} />
                      <Typography sx={{ lineHeight: 1 }}>270°</Typography>
                    </Stack>
                  </Stack>
                </Card>
                <Card variant="outlined" color="primary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: 8, boxShadow: 'none' }}>
                  <Avatar color="primary" size="lg" variant="outlined" sx={{ borderRadius: 'md', bgcolor: 'primary.200', borderColor: 'primary.400' }}>
                    <AmaranthIcon icon={aiIcon?.icon} />
                  </Avatar>
                </Card>
                <Card
                  variant="solid"
                  color="primary"
                  sx={{ fontSize: 'xl4', display: 'flex', justifyContent: 'center', alignItems: 'center', bgcolor: 'primary.700', order: 9, boxShadow: 'none' }}
                >
                  <Stack justifyContent="center" alignItems="center" gap={1}>
                    <AmaranthIcon icon={aiIcon?.icon} beat />
                    <Typography sx={{ color: 'primary.200', lineHeight: 1 }}>Beat</Typography>
                  </Stack>
                </Card>
                <Card
                  variant="solid"
                  color="primary"
                  sx={{
                    fontSize: 'xl4',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gridColumn: { xs: 'span 2', sm: 'span 3', md: 'span 2', lg: 'span 3' },
                    order: { xs: 10, md: 8, lg: 10 },
                    boxShadow: 'none'
                  }}
                >
                  <Stack direction="row" gap={10}>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} flip />
                      <Typography sx={{ color: 'common.white', lineHeight: 1 }}>Flip</Typography>
                    </Stack>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} flip="x" />
                      <Typography sx={{ color: 'common.white', lineHeight: 1 }}>X</Typography>
                    </Stack>
                    <Stack justifyContent="center" alignItems="center" gap={1}>
                      <AmaranthIcon icon={aiIcon?.icon} flip="y" />
                      <Typography sx={{ color: 'common.white', lineHeight: 1 }}>Y</Typography>
                    </Stack>
                  </Stack>
                </Card>
                <Card
                  variant="soft"
                  color="primary"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', order: { xs: 1, sm: 11 }, boxShadow: 'none' }}
                >
                  <Button size="lg" startDecorator={<AmaranthIcon icon={aiIcon?.icon} />}>
                    Button
                  </Button>
                </Card>
                <Card
                  variant="outlined"
                  color="primary"
                  sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gridColumn: 'span 2', order: 12, boxShadow: 'none' }}
                >
                  <Alert
                    variant="outlined"
                    color="primary"
                    sx={{ bgcolor: 'primary.100' }}
                    startDecorator={<AmaranthIcon icon={aiIcon?.icon} />}
                    endDecorator={
                      <IconButton size="sm" variant="solid" color="primary">
                        <AmaranthIcon icon={aiXmark} />
                      </IconButton>
                    }
                  >
                    Hi! We're demoing you an icon.
                  </Alert>
                </Card>
              </Box>
            </Box>
          </Stack>
          <Stack gap={2}>
            <Typography level="h3">
              More icons in <Typography color="primary">{firstCategory}</Typography>
            </Typography>
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
