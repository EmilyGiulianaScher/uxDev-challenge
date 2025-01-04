
import Card from "../components/cards/card"; // Asegúrate de tener el componente Card
import { ProductProps, Table } from "../components/table/table";
import data from "../data/data.json";
import styles from "./dashboard.module.css"; // Asegúrate de tener los estilos adecuados

export const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      {/* Renderiza las cards */}
      <div className={styles.cards}>
        {data.cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            amount={card.amount}
            historicalAmount={card.historicalAmount}
            result={card.result}
          />
        ))}
      </div>
      
      {/* Renderiza la tabla de productos */}
      <Table data={data.orders as ProductProps[]} />
    </div>
  );
};
