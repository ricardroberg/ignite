import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Ricard Roberg"
        content="Foi filho tornou-se pai. Foi pai tornou-se filho."
      />
      <Post author="Henrik Roberg" content="Muito conteúdo interessante." />
    </div>
  );
}
