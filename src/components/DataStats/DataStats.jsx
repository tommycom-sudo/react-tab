import React from 'react';
import styles from './DataStats.module.css';

const DataStats = () => {
  const statsData = {
    today: {
      visits: 2345,
      sales: 88888,
      orders: 666
    },
    weekly: {
      visits: 12345,
      sales: 443322,
      orders: 3210
    }
  };

  return (
    <div className={styles.container}>
      {/* 统计卡片区域 */}
      <div className={styles.statsCards}>
        <div className={styles.card}>
          <h3>今日访问量</h3>
          <div className={styles.number}>{statsData.today.visits}</div>
          <div className={styles.compare}>周同比 +15%</div>
        </div>
        <div className={styles.card}>
          <h3>今日销售额</h3>
          <div className={styles.number}>¥{statsData.today.sales}</div>
          <div className={styles.compare}>日同比 +20%</div>
        </div>
        <div className={styles.card}>
          <h3>订单数量</h3>
          <div className={styles.number}>{statsData.today.orders}</div>
          <div className={styles.compare}>周同比 +8%</div>
        </div>
      </div>

      {/* 数据表格区域 */}
      <div className={styles.tableSection}>
        <h2>订单明细</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>订单编号</th>
              <th>商品名称</th>
              <th>订单金额</th>
              <th>订单状态</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024031501</td>
              <td>商品 A</td>
              <td>¥1299</td>
              <td>已完成</td>
            </tr>
            <tr>
              <td>2024031502</td>
              <td>商品 B</td>
              <td>¥899</td>
              <td>处理中</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataStats; 