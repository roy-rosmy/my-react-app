import React, { FC } from 'react';
import { SrcComponentsAppWrapper } from './App.styled.ts';
import Footer from '../footer/footer.tsx';
import SrcComponentsHeader from '../header/header.tsx';

interface SrcComponentsAppProps {}

const SrcComponentsApp: FC<SrcComponentsAppProps> = () => (
 <SrcComponentsAppWrapper data-testid="SrcComponentsApp">
   <SrcComponentsHeader/>
   
   <Footer></Footer>
 </SrcComponentsAppWrapper>
);

export default SrcComponentsApp;
