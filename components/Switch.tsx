import React, { useContext } from 'react';
import styled from 'styled-components';
// import assets
import Light from '../assets/sun.svg';
import Dark from '../assets/moon.svg';
// import context
import { ThemeContext } from '../context/ThemeContext'

const Switch = ({onChange}) => {
  const theme = useContext(ThemeContext)
  const handleToggle = () => {
    onChange()
  }
  return (
    <ToggleSwitch onClick={handleToggle}>
      <DarkImg />
      <LightImg />
      <ToggleBall theme={theme} />
    </ToggleSwitch>
  );
};

// Switch style
const ToggleSwitch = styled.button`
  background: #0f1114;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  position: relative;
  width: 64px;
  height: 28px;
  margin: 0;
  padding: 0.5rem;

  &:focus {
    outline: none;
  }
`;

const LightImg = styled(Light)`
  position: absolute;
  top: 4px;
  right: 6px;
  width: 1.2rem;
  height: auto;
`;

const DarkImg = styled(Dark)`
  position: absolute;
  top: 4px;
  left: 5px;
  width: 1.2rem;
  height: auto;
`;

const ToggleBall = styled.div<{ theme: string }>`
  position: absolute;
  top: 1px;
  left: 1px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background-color: #fefefe;
  transition: all 0.5s cubic-bezier(0.2, 1, 0.3, 1) 0ms;
  transform: ${props => (props.theme === 'dark' ? 'translateX(36px)' : 'translateX(0)')};
`;

export default Switch;