// src/components/Header/Header.tsx
import React, { FC, useState } from 'react';
import { SrcComponentsHeaderWrapper } from './src/components/header.styled';

interface SrcComponentsHeaderProps {}

const SrcComponentsHeader: FC<SrcComponentsHeaderProps> = () => {
  const [isHovered, setHovered] = useState(false);

  return (
    <SrcComponentsHeaderWrapper
      className={`header ${isHovered ? 'hovered' : ''}`}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      data-testid="SrcComponentsHeader"
    >
      {/* Your dynamic header content */}
      SrcComponentsHeader Component
    </SrcComponentsHeaderWrapper>
  );
};

export default SrcComponentsHeader;
