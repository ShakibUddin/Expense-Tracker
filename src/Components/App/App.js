import CostBoard from '../CostBoard/CostBoard';
import CostForm from '../CostForm/CostForm';
import Title from '../Title/Title';
import './App.css';
function App() {
  return (
    <div className="App">
      <header>
        <Title></Title>
      </header>
      <main>
        <section className="dashboard">
          <CostBoard id="today" title="Today" amount="10" background="#E4B457"></CostBoard>
          <CostBoard id="this-month" title="This Month" amount="100" background="#A657E4"></CostBoard>
          <CostBoard id="this-year" title="This year" amount="900" background="#45D6A1"></CostBoard>
          <CostBoard id="all-time" title="All Time" amount="2300" background="#D65645"></CostBoard>
        </section>
        <section>
          <CostForm></CostForm>
        </section>
      </main>
    </div>
  );
}

export default App;
