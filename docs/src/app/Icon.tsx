import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Button, Card, Chip, IconButton, Input, Stack, Typography } from '@mui/joy';

import * as Icons from '@studio384/amaranth';
import AmaranthIcon, { aiArrowLeft } from '@studio384/amaranth';
import { IIcon } from '@/types';

export default function Icon() {
  const navigate = useNavigate();
  const { slug } = useParams();

  const [icon, setIcon] = useState<IIcon | null>(null);

  useEffect(() => {
    fetch(`/data/icons/${slug}.json`)
      .then((res) => res.json())
      .then((data) => setIcon(data));
  }, [slug]);

  const reactImport = slug ? `ai${slug
    .split('-')
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join('')}` : '';

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={1} justifyContent="space-between" alignItems="center">
        <Stack direction="row" spacing={1} alignItems="center">
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

      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
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
          <AmaranthIcon icon={Icons[reactImport]} />
        </Card>
        <Card variant="outlined" sx={{ flexGrow: 1 }}>
          <Typography level="h3" sx={{ mb: 3 }}>
            <AmaranthIcon icon={Icons[reactImport]} /> Heading icon
          </Typography>
          <Typography level="body-md" sx={{ mb: 3 }}>
            <AmaranthIcon icon={Icons[reactImport]} /> Inline icon
          </Typography>
          <Box sx={{ mb: 3, display: 'flex', gap: 1 }}>
            <Button startDecorator={<AmaranthIcon icon={Icons[reactImport]} />}>Button icon</Button>
            <IconButton color="primary" variant="soft">
              <AmaranthIcon icon={Icons[reactImport]} />
            </IconButton>
          </Box>
          <Input startDecorator={<AmaranthIcon icon={Icons[reactImport]} />} placeholder={icon?.title} />
        </Card>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          <Typography level="h3" sx={{ mb: 2 }}>
            HTML
          </Typography>
          <Card variant="outlined" sx={{ py: 2 }}>
            <code>{`<i class="ai ai-${slug}"></i>`}</code>
          </Card>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Typography level="h3" sx={{ mb: 2 }}>
            React
          </Typography>
          <Card variant="outlined" sx={{ py: 2 }}>
            <code>{`<AmaranthIcon icon={${reactImport}} />`}</code>
          </Card>
        </Box>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
        {icon?.created && (
          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography color="neutral">Created</Typography> <Chip size="sm">{icon?.created}</Chip>
          </Stack>
        )}
        {icon?.updated && (
          <Stack direction="row" spacing={1} alignItems="baseline">
            <Typography color="neutral">Last updated</Typography> <Chip size="sm">{icon?.updated}</Chip>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}
