import React from 'react';
import styles from './TabsContainer.module.css';

/**
 * TabsContainer 组件 - 实现标签页容器功能
 * @param {Object[]} tabs - 标签页数组
 * @param {Function} setTabs - 更新标签页数组的函数
 * @param {string|number} activeTab - 当前激活的标签页ID
 * @param {Function} setActiveTab - 更新当前激活标签页的函数
 */
const TabsContainer = ({ tabs, setTabs, activeTab, setActiveTab }) => {
  /**
   * 处理标签页点击事件
   * @param {string|number} tabId - 被点击的标签页ID
   */
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  /**
   * 处理关闭标签页事件
   * @param {string|number} tabId - 要关闭的标签页ID
   * @param {Event} e - 事件对象
   */
  const handleCloseTab = (tabId, e) => {
    // 阻止事件冒泡，防止触发标签页点击事件
    e.stopPropagation();
    // 确保至少保留一个标签页
    if (tabs.length > 1) {
      // 过滤掉要关闭的标签页
      const newTabs = tabs.filter(tab => tab.id !== tabId);
      setTabs(newTabs);
      // 如果关闭的是当前激活的标签页，则激活第一个标签页
      if (activeTab === tabId) {
        setActiveTab(newTabs[0].id);
      }
    }
  };

  return (
    <div className={styles.tabsContainer}>
      {/* 标签页列表区域 */}
      <div className={styles.tabsList}>
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            <span>{tab.title}</span>
            {/* 关闭按钮 */}
            <span 
              className={styles.closeButton}
              onClick={(e) => handleCloseTab(tab.id, e)}
            >
              ×
            </span>
          </div>
        ))}
      </div>
      {/* 标签页内容区域 */}
      <div className={styles.tabContent}>
        {tabs.find(tab => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabsContainer; 