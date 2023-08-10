import React from "react";
import matter from "gray-matter";
import { Container } from "@mui/system";
import {
  Box,
  Button,
  Card,
  Chip,
  IconButton,
  Input,
  Link,
  Stack,
  Typography,
  useColorScheme
} from "@mui/joy";
import Head from "next/head";
import AmaranthIcon from "@studio384/amaranth";
import * as Icons from "@studio384/amaranth";
import NextLink from "next/link";

function PostTemplate({ data, slug }) {
  const { mode, setMode } = useColorScheme();
  const frontmatter = data;

  const icon = `ai${slug
    .split("-")
    .map(word => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join("")}`;

  return (
    <Container>
      <Head>
        <title>{frontmatter.title} &middot; Amaranth</title>
        <meta name="description" content="The Amaranth Icon set." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack spacing={2} sx={{ py: 2 }}>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            level="h1"
            sx={{
              display: "inline",
              backgroundImage: "linear-gradient(135deg, #78b500, #00b573)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Amaranth
          </Typography>
          <IconButton
            variant="outlined"
            size="sm"
            onClick={() =>
              setMode(
                mode === "light" ? "dark" : mode === "dark" ? "system" : "light"
              )
            }
          >
            <AmaranthIcon
              icon={
                mode === "light"
                  ? Icons.aiSun
                  : mode === "dark"
                  ? Icons.aiMoon
                  : Icons.aiCircleHalfInner
              }
            />
          </IconButton>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" alignContent="center" spacing={1}>
            <Typography level="h2" fontSize="xl2" fontWeight="md">
              <NextLink href="/">
                <Link color="neutral">Icons</Link>
              </NextLink>{" "}
              <Typography fontWeight="xl">{frontmatter.title}</Typography>
            </Typography>
          </Stack>
        </Stack>

        {(frontmatter.categories || frontmatter.tags) && (
          <Box sx={{ display: "flex", gap: 0.5, alignItems: "center" }}>
            {frontmatter.categories?.map(cat => (
              <Chip variant="solid" color="primary" size="sm" key={cat}>
                {cat}
              </Chip>
            ))}
            {frontmatter.tags?.map(tag => (
              <Chip key={tag} variant="outlined" size="sm">
                {tag}
              </Chip>
            ))}
          </Box>
        )}

        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Card
            variant="outlined"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 8,
              backgroundImage:
                "radial-gradient(circle, var(--joy-palette-neutral-500) 1px, rgba(0, 0, 0, 0) 1px)",
              backgroundSize: "1rem 1rem",
              backgroundPosition: "calc(.5rem - 1px) calc(.5rem - 1px)",
              fontSize: "10rem",
              width: "20rem",
              height: "20rem"
            }}
          >
            <AmaranthIcon icon={Icons[icon]} />
          </Card>
          <Card variant="outlined" sx={{ flexGrow: 1 }}>
            <Typography level="h3" sx={{ mb: 3 }}>
              <AmaranthIcon icon={Icons[icon]} /> Heading icon
            </Typography>
            <Typography level="body-md" sx={{ mb: 3 }}>
              <AmaranthIcon icon={Icons[icon]} /> Inline icon
            </Typography>
            <Box sx={{ mb: 3, display: "flex", gap: 1 }}>
              <Button startDecorator={<AmaranthIcon icon={Icons[icon]} />}>
                Button icon
              </Button>
              <IconButton color="primary" variant="soft">
                <AmaranthIcon icon={Icons[icon]} />
              </IconButton>
            </Box>
            <Input
              startDecorator={<AmaranthIcon icon={Icons[icon]} />}
              placeholder={frontmatter.title}
            />
          </Card>
        </Stack>
        <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography level="h3" sx={{ mb: 2 }}>
              HTML
            </Typography>
            <Card variant="outlined" sx={{ py: 2 }}>
              <code>{`<i class="ai ai-${slug.replaceAll(
                " ",
                "-"
              )}"></i>`}</code>
            </Card>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <Typography level="h3" sx={{ mb: 2 }}>
              React
            </Typography>
            <Card variant="outlined" sx={{ py: 2 }}>
              <code>{`<AmaranthIcon icon={${icon}} />`}</code>
            </Card>
          </Box>
        </Stack>
        <Stack
          direction="row"
          spacing={3}
          alignItems="center"
          justifyContent="center"
        >
          {frontmatter.created && (
            <Stack direction="row" spacing={1} alignItems="baseline">
              <Typography color="neutral">Created</Typography>{" "}
              <Chip size="sm">{frontmatter.created}</Chip>
            </Stack>
          )}
          {frontmatter.updated && (
            <Stack direction="row" spacing={1} alignItems="baseline">
              <Typography color="neutral">Last updated</Typography>{" "}
              <Chip size="sm">{frontmatter.updated}</Chip>
            </Stack>
          )}
        </Stack>
      </Stack>
    </Container>
  );
}

PostTemplate.getInitialProps = async context => {
  const { slug } = context.query;

  const content = await import(`../../icons/${slug}.md`);

  const data = matter(content.default);

  return { ...data, slug };
};

export default PostTemplate;
