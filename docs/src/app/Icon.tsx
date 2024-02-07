import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { Box, Button, Card, Chip, Container, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';

import icons from '@/data/icons';
import { IIcon, ILibraryIcon } from '@/types';

import AmaranthIcon, { aiArrowLeft } from '@studio384/amaranth';
import Codeblock from '@/design/components/Codeblock';

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
    <>
      <Box
        sx={{
          backgroundImage:
            'radial-gradient(49% 81% at 45% 47%, #B05EFF21 0%, #073AFF00 100%),radial-gradient(113% 91% at 81% 41%, #BE5EFF2B 0%, #FF000000 100%),radial-gradient(142% 91% at 83% 7%, #0040FF47 0%, #FF000000 100%),radial-gradient(142% 91% at -6% 74%, #7E5EFF00 0%, #7E5EFF2B 100%),radial-gradient(142% 91% at 111% 84%, #FFFFFF00 0%, #FFFFFF00 100%)',
          pb: 3,
          pt: 12,
          borderBottom: '1px solid var(--joy-palette-primary-outlinedBorder)'
        }}
      >
        <Container>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={5}>
            <Stack gap={1} alignItems="flex-start" sx={{ flexGrow: 1 }}>
              <IconButton variant="plain" color="primary" onClick={() => navigate('/')}>
                <AmaranthIcon icon={aiArrowLeft} />
              </IconButton>
              <Typography level="h1">{icon?.title}</Typography>

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
        </Container>
      </Box>
      <Container>
        <Stack gap={2} sx={{ my: 2 }}>
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
        </Stack>
      </Container>
    </>
  );
}
