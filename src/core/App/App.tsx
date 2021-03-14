import React, { useRef } from 'react';
import Header from '../Header';
import SideNavigationBar, { NavigationItem } from '../SideNavigationBar';
import './App.css';

function App(): JSX.Element {
  const mainContent = useRef<HTMLDivElement>(null);

  const navigationItems: NavigationItem[] = [
    {
      icon: 'bi bi-house-door',
      label: 'Home',
      command: () => {
        console.log('Home');
      },
    },
    {
      icon: 'bi bi-briefcase',
      label: 'Info',
      command: () => {
        console.log('Info');
      },
    },
    {
      icon: 'bi bi-bookmarks',
      label: 'Credits',
      command: () => {
        console.log('Credits');
      },
    },
  ];

  const onPanelSizeChange = (panelWidth: string): void => {
    if (mainContent && mainContent.current) {
      mainContent.current.style.marginLeft = panelWidth;
    }
  };

  return (
    <>
      <Header></Header>
      <SideNavigationBar items={navigationItems} onSizeChange={onPanelSizeChange}></SideNavigationBar>
      <div className="main-content" ref={mainContent}>
        Dummy content
      </div>
    </>
  );
}

export default App;
