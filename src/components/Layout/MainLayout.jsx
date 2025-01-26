import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TabsContainer from './TabsContainer';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: '首页', content: '首页内容' }
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const handleMenuClick = (menuItem) => {
    // 检查标签是否已经存在
    const existingTab = tabs.find(tab => tab.title === menuItem.label);
    if (existingTab) {
      // 如果标签已存在，切换到该标签
      setActiveTab(existingTab.id);
    } else {
      // 如果标签不存在，创建新标签
      const newTab = {
        id: Date.now(),
        title: menuItem.label,
        content: `${menuItem.label}的内容`
      };
      setTabs([...tabs, newTab]);
      setActiveTab(newTab.id);
    }
  };

  return (
    <div className={styles.mainLayout}>
      <Sidebar onMenuClick={handleMenuClick} />
      <div className={styles.content}>
        <TabsContainer 
          tabs={tabs}
          setTabs={setTabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
    </div>
  );
};

export default MainLayout; 