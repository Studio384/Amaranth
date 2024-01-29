import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Button, Card, Chip, Container, Divider, IconButton, Input, Sheet, Stack, Typography, useTheme } from '@mui/joy';

import icons from '@/data/icons';
import { IIcon, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiArrowLeft } from '@studio384/amaranth';

export default function Icon() {
  const navigate = useNavigate();
  const theme = useTheme();
  const { slug } = useParams();

  const [icon, setIcon] = useState<IIcon | null>(null);

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

  const aiIcon: ILibraryIcon = useMemo(() => icons.find((icon) => icon.component === reactImport)!, [reactImport]);

  return (
    <Container>
      <Stack gap={2} sx={{ my: 2 }}>
        <Stack direction="row" gap={1} justifyContent="space-between" alignItems="center">
          <Stack direction="row" gap={1} alignItems="center">
            <IconButton variant="outlined" size="sm" onClick={() => navigate('/')}>
              <AmaranthIcon icon={aiArrowLeft} />
            </IconButton>
            <Typography level="h2">{icon?.title}</Typography>
          </Stack>
        </Stack>

        {(icon?.categories || icon?.tags) && (
          <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
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
          </Box>
        )}

        <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
          <Sheet
            variant="outlined"
            sx={{
              '--Amicon-scale': '16px',
              color: 'text.primary',
              borderColor: 'primary.100',
              [theme.getColorSchemeSelector('dark')]: {
                borderColor: 'primary.800'
              },
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 'calc((var(--Amicon-scale) + 4px) * 16)',
              height: 'calc((var(--Amicon-scale) + 4px) * 16)',
              borderRadius: 'sm',
              backgroundSize: 'var(--Amicon-scale) var(--Amicon-scale)',
              backgroundPosition: '-1px -1px',
              backgroundImage:
                'linear-gradient(to right, var(--joy-palette-neutral-outlinedBorder) 1px, transparent 1px), linear-gradient(to bottom, var(--joy-palette-neutral-outlinedBorder) 1px, transparent 1px)'
            }}
          >
            <Divider sx={{ position: 'absolute', top: 'calc(2 * var(--Amicon-scale) - 1px)', left: 0, right: 0, bgcolor: 'primary.500' }} />
            <Divider sx={{ position: 'absolute', bottom: 'calc(2 * var(--Amicon-scale) - 2px)', left: 0, right: 0, bgcolor: 'primary.500' }} />
            <Divider
              orientation="vertical"
              sx={{ position: 'absolute', left: 'calc(2 * var(--Amicon-scale) - 1px)', top: 0, bottom: 0, bgcolor: 'primary.500' }}
            />
            <Divider
              orientation="vertical"
              sx={{ position: 'absolute', right: 'calc(2 * var(--Amicon-scale) - 2px)', top: 0, bottom: 0, bgcolor: 'primary.500' }}
            />
            <AmaranthIcon icon={aiIcon?.icon} style={{ fontSize: 'calc(var(--Amicon-scale) * 16)' }} />
          </Sheet>
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
              React
            </Typography>
            <Card variant="outlined" sx={{ py: 2 }}>
              <code>{`import AmaranthIcon, { ${reactImport} } from "@studio384/amaranth";`}</code>
              <code>{`<AmaranthIcon icon={${reactImport}} />`}</code>
            </Card>
          </Box>
        </Stack>
        <Stack direction="row" gap={3} alignItems="center" justifyContent="center">
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
    </Container>
  );
}
