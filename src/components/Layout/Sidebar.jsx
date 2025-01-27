import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ onMenuClick }) => {
  const [collapsed, setCollapsed] = useState(false);
  
  const menuItems = [
    { id: 1, label: '首页', icon: '🏠' },
    { id: 2, label: '数据统计', icon: '📊' },
    { id: 3, label: '设置', icon: '⚙️' },
  ];

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div 
        className={styles.collapseButton}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? '❯' : '❮'}
      </div>
      
      {menuItems.map(item => (
        <div 
          key={item.id} 
          className={styles.menuItem}
          onClick={() => onMenuClick(item)}
        >
          <span className={styles.icon}>{item.icon}</span>
          {!collapsed && <span className={styles.label}>{item.label}</span>}
        </div>
      ))}
    </div>
  );
};

export default Sidebar; 