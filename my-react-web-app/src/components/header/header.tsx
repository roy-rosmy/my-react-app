// src/components/Header/Header.tsx
import React, { FC, useState } from 'react';
import { SrcComponentsHeaderWrapper } from '../header/header.styled.ts';
import Filters from '../filters/filters.tsx';

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
      <div id="root">
        <div className='container-fluid'>
          <div className='row justify-content-center align-items-top full_height'>
              <div className='col-xxl-2 col-xl-2 col-lg-3 col-md-4 col-sm-12 col-xsm-12 col-12' id='filters'>
                <Filters/>
              </div>
              <div className='col-xxl-10 col-xl-10 col-lg-9 col-md-8 col-sm-12 col-xsm-12 col-12 align-items-center'>
                  <div id="calendar" className="d-flex justify-content-center h-100 align-items-center mt-3">
                      <span className="loader"></span>
                  </div>
              </div>
          </div>
      </div>
    </div>
    </SrcComponentsHeaderWrapper>
  );
};

export default SrcComponentsHeader;
