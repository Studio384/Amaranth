import { CSSProperties, useMemo, useState } from 'react';

import { Box, Card, Chip, Divider, FormControl, FormLabel, IconButton, Input, Sheet, Stack, Typography } from '@mui/joy';

import Codeblock from '@/design/components/Codeblock';

import AmaranthIcon, { aiBroom, IAmaranthIcon } from '@studio384/amaranth';

interface IPlaygroundProps {
  config: {
    icons: IAmaranthIcon[];
    properties: {
      label: string;
      type: 'chip';
      name: string;
      values: unknown[];
      default: unknown;
    }[];
    cssVariables: {
      name: string;
      default: string;
    }[];
  };
}

export default function Playground({ config }: IPlaygroundProps) {
  const [playgroundIcon, setPlaygroundIcon] = useState<IAmaranthIcon>(config.icons[0]);

  // Get the icon name
  function getIconName(icon: string): string {
    return `ai${icon
      .split('_')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')}`;
  }

  const iconName = useMemo(() => getIconName(playgroundIcon.name), [playgroundIcon]);

  // Properties
  const [playgroundProps, setPlaygroundProps] = useState({});

  const iconProperties = useMemo(() => {
    const props = {};

    config.properties?.map((property) => {
      props[property.name] = playgroundProps?.[property.name] ?? property.default;
    });

    return props;
  }, [config.properties, playgroundProps]);

  const propertyParser = useMemo(() => {
    let exampleString = '';

    Object.keys(iconProperties).map((propName) => {
      if (iconProperties[propName] === true) {
        exampleString += `\n  ${propName}`;
        return;
      } else if (iconProperties[propName] === false) {
        return;
      } else if (typeof iconProperties[propName] === 'number') {
        exampleString += `\n  ${propName}={${iconProperties[propName]}}`;
      } else if (typeof iconProperties[propName] === 'string') {
        exampleString += `\n  ${propName}="${iconProperties[propName]}"`;
      }
    });

    return exampleString;
  }, [iconProperties]);

  // CSS Variables
  const [playgroundCssVariable, setPlaygroundCssVariable] = useState<CSSProperties>({});

  const iconVariables = useMemo(() => {
    const props = {};

    config.cssVariables?.map((variable) => {
      props[variable.name] = playgroundCssVariable?.[variable.name] ?? variable.default;
    });

    return props;
  }, [config.cssVariables, playgroundCssVariable]);

  const variableParser = useMemo(() => {
    let exampleString = '';
    let hasProperty = false;

    Object.keys(iconVariables).map((varName) => {
      const variableProperties = config.cssVariables.find((variable) => variable.name === varName);

      if (iconVariables[varName] === variableProperties.default) return;

      hasProperty = true;

      if (typeof iconVariables[varName] === 'number') {
        exampleString += `\n    ${varName}: ${iconVariables[varName]},`;
      } else if (typeof iconVariables[varName] === 'string') {
        exampleString += `\n    ${varName}: "${iconVariables[varName]}",`;
      }
    });

    return hasProperty ? exampleString : '';
  }, [config.cssVariables, iconVariables]);

  return (
    <Card sx={{ display: 'grid', gridTemplateColumns: 'auto 280px', p: 0, contain: 'paint', gap: 0 }}>
      <Stack sx={{ p: 2 }}>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'center', alignItems: 'center', fontSize: 'xl4' }}>
          <AmaranthIcon icon={playgroundIcon} {...iconProperties} style={playgroundCssVariable} />
        </Box>
        <Codeblock>{`<AmaranthIcon
  icon={${iconName}}${propertyParser}${
    variableParser !== ''
      ? `
  style={{${variableParser}
  }}`
      : ''
  }
/>`}</Codeblock>
      </Stack>
      <Sheet sx={{ p: 2, borderWidth: '0 0 0 1px' }} variant="outlined">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography level="title-lg">Playground</Typography>
          <IconButton
            onClick={() => {
              setPlaygroundIcon(config.icons[0]);
              setPlaygroundProps({});
              setPlaygroundCssVariable({});
            }}
            size="sm"
          >
            <AmaranthIcon icon={aiBroom} />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 2, mx: -2 }} />
        <Stack gap={1.5}>
          <FormControl>
            <FormLabel>Icon</FormLabel>
            <Stack direction="row" gap={0.5}>
              {config.icons.map((icon) => (
                <IconButton variant={playgroundIcon === icon ? 'soft' : 'outlined'} color={playgroundIcon === icon ? 'primary' : 'neutral'} onClick={() => setPlaygroundIcon(icon)} key={icon.name}>
                  <AmaranthIcon icon={icon} />
                </IconButton>
              ))}
            </Stack>
          </FormControl>
          {config.properties?.map((property) => {
            switch (property.type) {
              case 'chip': {
                return (
                  <FormControl key={property.name}>
                    <FormLabel>{property.label}</FormLabel>
                    <Stack direction="row" gap={0.5}>
                      {property.values.map((value, key) => (
                        <Chip
                          key={key}
                          onClick={() => setPlaygroundProps((prev) => ({ ...prev, [property.name]: value }))}
                          color={iconProperties?.[property.name] === value ? 'primary' : 'neutral'}
                          variant={iconProperties?.[property.name] === value ? 'soft' : 'outlined'}
                        >
                          {value.toString()}
                        </Chip>
                      ))}
                    </Stack>
                  </FormControl>
                );
              }
            }
          })}
          {config.cssVariables?.map((variable) => (
            <FormControl key={variable.name}>
              <FormLabel>{variable.name}</FormLabel>
              <Input
                onChange={(e) => setPlaygroundCssVariable((prev) => ({ ...prev, [variable.name]: e.target.value }))}
                placeholder={variable.default}
                value={playgroundCssVariable?.[variable.name] ?? ''}
              />
            </FormControl>
          ))}
        </Stack>
      </Sheet>
    </Card>
  );
}
