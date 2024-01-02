import styled from 'styled-components';

export const SrcComponentsHeaderWrapper = styled.div`

.full_height{
    height: calc(100vh - 56px);
}

#filters{
    background-color: #e6eef1;
    box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);
   -webkit-box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);
   -moz-box-shadow: 0px 0px 34px -13px rgba(0,0,0,0.75);
    overflow: auto;
    max-height: 100%;
}

.loader {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: inline-block;
    border-top: 4px solid #FFF;
    border-right: 4px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
.loader::after {
    content: '';  
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border-left: 4px solid #FF3D00;
    border-bottom: 4px solid transparent;
    animation: rotation 0.5s linear infinite reverse;
}
`;
