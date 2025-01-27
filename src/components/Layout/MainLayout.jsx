import React, { useState } from 'react';
import Sidebar from './Sidebar';
import TabsContainer from './TabsContainer';
import DataStats from '../DataStats/DataStats';
import styles from './MainLayout.module.css';

const MainLayout = () => {
  const [tabs, setTabs] = useState([
    { id: 1, title: '首页', content: '首页内容' }
  ]);
  const [activeTab, setActiveTab] = useState(1);

  const handleMenuClick = (menuItem) => {
    // 检查标签是否已存在
    const existingTab = tabs.find(tab => tab.id === menuItem.id);
    if (!existingTab) {
      // 根据菜单项 ID 返回对应的内容
      const getContent = (id) => {
        switch(id) {
          case 1:
            return '首页内容';
          case 2:
            return <DataStats />;
          case 3:
            return '设置内容';
          default:
            return '内容未定义';
        }
      };

      setTabs([...tabs, {
        id: menuItem.id,
        title: menuItem.label,
        content: getContent(menuItem.id)
      }]);
    }
    setActiveTab(menuItem.id);
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