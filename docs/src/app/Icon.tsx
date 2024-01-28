import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Button, Card, Chip, IconButton, Input, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import { IIcon, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiArrowLeft } from '@studio384/amaranth';

export default function Icon() {
  const navigate = useNavigate();
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
    <Stack gap={2} sx={{my: 2 }}>
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
        <Card
          variant="outlined"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 8,
            backgroundImage: 'radial-gradient(circle, var(--joy-palette-neutral-500) 1px, rgba(0, 0, 0, 0) 1px)',
            backgroundSize: '1rem 1rem',
            backgroundPosition: 'calc(.5rem - 1px) calc(.5rem - 1px)',
            fontSize: '10rem',
            width: '20rem',
            height: '20rem'
          }}
        >
          <AmaranthIcon icon={aiIcon?.icon} />
        </Card>
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
            <Typography>Created</Typography> <Chip size="sm" color="primary">{icon?.created}</Chip>
          </Stack>
        )}
        {icon?.updated && (
          <Stack direction="row" gap={1}>
            <Typography>Last updated</Typography> <Chip size="sm" color="primary">{icon?.updated}</Chip>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
