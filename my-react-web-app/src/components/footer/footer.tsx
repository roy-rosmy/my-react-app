// src/components/Footer/Footer.tsx
import React, { FC } from 'react';
import { SrcComponentsFooterWrapper } from './src/components/footer.styled';

interface SrcComponentsFooterProps {}

const SrcComponentsFooter: FC<SrcComponentsFooterProps> = () => {
  return (
    <SrcComponentsFooterWrapper data-testid="SrcComponentsFooter">
      {/* Your footer content with details */}
      SrcComponentsFooter Component
    </SrcComponentsFooterWrapper>
  );
};

export default SrcComponentsFooter;
