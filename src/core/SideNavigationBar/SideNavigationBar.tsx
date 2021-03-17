import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItem from './NavigationItem';
import './SideNavigationBar.css';

interface Props {
  items: NavigationItem[];
  onSizeChange: (panelSize: string) => void;
}

function SideNavigationBar({ items, onSizeChange }: Props): JSX.Element {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    onSizeChange(collapsed ? collapsedWidth : expandedWidth);
  }, [collapsed, onSizeChange]);

  const collapsedWidth = '3rem';
  const expandedWidth = '14rem';

  const close = (): void => setCollapsed(true);
  const open = (): void => setCollapsed(false);

  const expandButton = (): JSX.Element => {
    return (
      <span className="expand-button navigation-item" onClick={() => open()}>
        <i className="bi bi-chevron-double-right"></i>
      </span>
    );
  };

  const collapseButton = (): JSX.Element => {
    return (
      <span className="collapse-button navigation-item" onClick={() => close()}>
        <i className="bi bi-chevron-double-left"></i>
      </span>
    );
  };

  const renderItem = ({ label, icon, link }: NavigationItem): JSX.Element => {
    const collapsedStateClassName = collapsed ? 'collapsed' : 'expanded';
    const itemClassName = collapsedStateClassName + ' navigation-item menu-item';
    return (
      <NavLink key={label} to={link} exact={true}>
        <div className={itemClassName}>
          <i className={'icon ' + icon}></i>
          <span className="caption">{label}</span>
        </div>
      </NavLink>
    );
  };

  return (
    <nav
      className="side-navigation"
      style={{
        width: collapsed ? '3rem' : '14rem',
      }}>
      {collapsed ? expandButton() : collapseButton()}
      {items && items.map((item) => renderItem(item))}
    </nav>
  );
}

export default SideNavigationBar;
