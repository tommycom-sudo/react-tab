import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ onMenuClick }) => {
  const menuItems = [
    { id: 1, label: '首页', icon: '🏠' },
    { id: 2, label: '数据分析', icon: '📊' },
    { id: 3, label: '设置', icon: '⚙️' },
  ];

  return (
    <div className={styles.sidebar}>
      {menuItems.map(item => (
        <div 
          key={item.id} 
          className={styles.menuItem}
          onClick={() => onMenuClick(item)}
        >
          <span className={styles.icon}>{item.icon}</span>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar; 