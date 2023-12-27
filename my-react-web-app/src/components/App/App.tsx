import React, { FC } from 'react';
import { SrcComponentsAppWrapper } from './src/components/App.styled';

interface SrcComponentsAppProps {}

const SrcComponentsApp: FC<SrcComponentsAppProps> = () => (
 <SrcComponentsAppWrapper data-testid="SrcComponentsApp">
    SrcComponentsApp Component
 </SrcComponentsAppWrapper>
);

export default SrcComponentsApp;
