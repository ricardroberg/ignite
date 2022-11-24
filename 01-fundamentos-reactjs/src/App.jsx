import { Sidebar } from "./components/Sidebar";
import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ricard Roberg"
            content="Foi filho tornou-se pai. Foi pai tornou-se filho."
          />
          <Post author="Henrik Roberg" content="Muito conteúdo interessante." />
        </main>
      </div>
    </div>
  );
}
