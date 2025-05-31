import React from 'react';
import './Typography.css';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'body' | 'caption';
  children: React.ReactNode;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const Tag = variant === 'h1' ? 'h1' : variant === 'h2' ? 'h2' : variant === 'body' ? 'p' : 'span';

  return <Tag className={`typography typography-${variant} ${className}`}>{children}</Tag>;
};

export default Typography;
