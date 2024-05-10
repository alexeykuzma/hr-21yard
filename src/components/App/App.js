import GroupList from '../GroupList';
import Header from '../Header';
import Breadclumbs from '../Breadcrumbs';
import CardRequest from '../CardRequest';
import './App.css';

function App() {



  return (
    <div className="App">
      <Header />
      <main className={"Main"}>
        <CardRequest/>
        <GroupList items={testMenu} />
        <Breadclumbs path={pathTest} />
      </main>

    </div>
  );
}

export default App;
