import styles from "./orders.module.css"; 

export const Orders = () => (
  <>
    <div className={styles.orderscontainer}>
      <img src="/public/whitepaper.png" alt="white-paper-image" />
      <div className={styles.orderText}>
      <h1>No orders yet</h1>
      <p>There’s currently no orders placed</p>
      </div>
      
    </div>
  </>
);
