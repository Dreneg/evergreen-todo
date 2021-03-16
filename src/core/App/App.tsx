import React, { Suspense, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoadingSpinner from '../../shared/LoadingSpinner';
import Header from '../Header/Header';
import SideNavigationBar, { NavigationItem } from '../SideNavigationBar';
import './App.css';

function App(): JSX.Element {
  const mainContent = useRef<HTMLDivElement>(null);
  const LazyBoard = React.lazy(() => import('../../task/Board'));
  const LazyBacklog = React.lazy(() => import('../../task/Backlog'));
  const LazyTaskForm = React.lazy(() => import('../../task/TaskForm'));
  const LazyArchive = React.lazy(() => import('../../task/Archive'));

  const navigationItems: NavigationItem[] = [
    {
      icon: 'bi bi-plus-square',
      label: 'Create',
      link: '/create',
    },
    {
      icon: 'bi bi-briefcase',
      label: 'Backlog',
      link: '/backlog',
    },
    {
      icon: 'bi bi-columns',
      label: 'Board',
      link: '/',
    },
    {
      icon: 'bi bi-archive',
      label: 'Archive',
      link: '/archive',
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
        <Switch>
          <Route path="/create">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyTaskForm />
            </Suspense>
          </Route>
          <Route path="/backlog">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyBacklog />
            </Suspense>
          </Route>
          <Route path="/archive">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyArchive />
            </Suspense>
          </Route>
          <Route path="/">
            <Suspense fallback={<LoadingSpinner />}>
              <LazyBoard />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
