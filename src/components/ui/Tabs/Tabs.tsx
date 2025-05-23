import { useState } from "react";
import styles from "./Tabs.module.scss";
import Button from "../Button/Button";

interface Tab {
  id: number;
  tabName: string;
  title: string;
  text: string;
  image: string;
}

interface TabsProps {
  tabs: Tab[];
}
export default function Tabs({ tabs }: TabsProps) {
  const [activeTab, setActiveTab] = useState(1);

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className={styles.features}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`${styles.tab} ${
              activeTab === tab.id ? styles.active : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.tabName}
          </li>
        ))}
      </ul>

      <div className={styles.content}>
        <img src={active?.image} alt={active?.title} />
        <div className={styles.text}>
          <h2>{active?.title}</h2>
          <p>{active?.text}</p>
          <Button variant="blue-solid" className={styles.button}>
            More Info
          </Button>
        </div>
      </div>
    </section>
  );
}
