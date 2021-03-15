import React, { useRef } from 'react';
import Board from '../../task/Board';
import Header from '../Header/Header';
import SideNavigationBar, { NavigationItem } from '../SideNavigationBar';
import './App.css';

function App(): JSX.Element {
  const mainContent = useRef<HTMLDivElement>(null);

  const navigationItems: NavigationItem[] = [
    {
      icon: 'bi bi-plus-square',
      label: 'Create',
      command: () => {
        console.log('Create');
      },
    },
    {
      icon: 'bi bi-briefcase',
      label: 'Backlog',
      command: () => {
        console.log('Backlog');
      },
    },
    {
      icon: 'bi bi-columns',
      label: 'Board',
      command: () => {
        console.log('Board');
      },
    },
    {
      icon: 'bi bi-archive',
      label: 'Archive',
      command: () => {
        console.log('Archive');
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
        <Board></Board>
      </div>
    </>
  );
}

export default App;
