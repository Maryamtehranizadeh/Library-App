import Layout from "./layouts/Layout";
import Books from "./components/Books";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <Layout>
      <SearchBox />
      <Books />
    </Layout>
  );
}

export default App;
