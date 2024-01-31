import { ReactNode } from 'react';

import { Sheet, SheetProps } from '@mui/joy';

interface ICodeblockProps extends SheetProps {
  children: ReactNode;
}

export default function Codeblock({ children, ...props }: ICodeblockProps) {
  return (
    <Sheet
      variant="outlined"
      color="primary"
      sx={{
        fontSize: 'sm',
        fontFamily: 'code',
        p: 1,
        my: 1,
        borderRadius: 'sm'
      }}
      {...props}
    >
      {children}
    </Sheet>
  );
}
