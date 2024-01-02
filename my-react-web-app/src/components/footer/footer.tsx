// src/components/Footer/Footer.tsx
import React, { FC } from 'react';
import { SrcComponentsFooterWrapper } from '../footer/footer.styled.ts';

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
