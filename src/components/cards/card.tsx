import styles from "./card.module.css";
import {
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";

type CardProps = {
  title: string;
  amount: string;
  historicalAmount: string;
  result: string | null;
};

const Card = ({ title, amount, historicalAmount, result }: CardProps) => {
  const getIcon = () => {
    switch (title) {
      case "Total Revenue":
      case "Sales":
        return <ArrowTrendingUpIcon className={styles.iconSucces} />;
      case "Subscriptors":
        return <ArrowTrendingDownIcon className={styles.iconError} />;
      default:
        return null; // No icon for "Active Now"
    }
  };

  const getHistoricalAmount = () => {
    return title === "Active Now" ? "since last hour" : `Today ${historicalAmount || "-"}`;
  };

  const getAmountClass = () => {
    return title === "Subscriptors" ? `${styles.amount} ${styles.errorText}` : styles.amount;
  };

  return (
    <div className={`${styles.card} ${result ? styles[result] : ""}`}>
      <div className={styles.header}>
        <h1>{title}</h1>
        {getIcon()} {/* Render the icon */}
      </div>
      <p className={getAmountClass()}>{amount || "-"}</p>
      <p className={styles.historicalAmount}>{getHistoricalAmount()}</p>
    </div>
  );
};

export default Card;
