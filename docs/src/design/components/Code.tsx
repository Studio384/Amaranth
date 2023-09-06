import { ReactNode } from 'react';

import { Typography, TypographyProps } from '@mui/joy';

interface ICodeProps extends TypographyProps {
  children: ReactNode;
}

export default function Code({ children, ...props }: ICodeProps) {
  return (
    <Typography component="code" color="primary" variant="soft" {...props}>
      {children}
    </Typography>
  );
}
