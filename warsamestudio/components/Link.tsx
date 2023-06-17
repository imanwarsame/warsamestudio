'use client';
import * as React from 'react';
import NextLink from 'next/link';
import MuiLink from '@mui/material/Link';
import MuiButton from '@mui/material/Button';

interface LinkProps {
  type?: "link" | "button";
  href: string;
  children: React.ReactNode;
  [key: string]: any;
}

export default function Link({ type, href, children, ...props }: LinkProps) {
  if (type === "link" || !type) {
    return (
      <NextLink href={href} passHref>
        <MuiLink {...props}>{children}</MuiLink>
      </NextLink>
    );
  } else {
    //Type is button
    return (
      <NextLink href={href} passHref>
        <MuiButton {...props}>{children}</MuiButton>
      </NextLink>
    );
  }
}
