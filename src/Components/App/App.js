import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import CostBoard from '../CostBoard/CostBoard';
import CostCard from '../CostCard/CostCard';
import CostForm from '../CostForm/CostForm';
import SearchBox from '../SearchBox/SearchBox';
import Title from '../Title/Title';
import './App.css';
function App() {
  let [costs, setCosts] = useState([]);
  let [todaysCost, setTodaysCost] = useState(0);
  let [thisMonthsCost, setThisMonthsCost] = useState(0);
  let [thisYearsCost, setThisYearsCost] = useState(0);
  let [allTimesCost, setAllTimesCost] = useState(0);

  function costFormHandler(e, cost) {
    let newCosts = [...costs, cost];
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = String(today.getFullYear());

    today = yyyy + '-' + mm + '-' + dd;
    console.log(cost.date.split("-")[0], yyyy);
    //incrementing all times cost
    setAllTimesCost(allTimesCost + Number(cost.amount));
    //incrementing todays cost
    if (today === cost.date) setTodaysCost(todaysCost + Number(cost.amount));
    //incrementing this months cost
    if (mm === cost.date.split("-")[1]) setThisMonthsCost(thisMonthsCost + Number(cost.amount));
    //incrementing this years cost
    if (yyyy === cost.date.split("-")[0]) setThisYearsCost(thisYearsCost + Number(cost.amount));
    setCosts(newCosts);
    e.preventDefault();
  }
  return (
    <Container>
      <header>
        <Title></Title>
      </header>
      <main>
        <Row>
          <CostBoard id="today" title="Today" amount={todaysCost} background="#E4B457"></CostBoard>
          <CostBoard id="this-month" title="This Month" amount={thisMonthsCost} background="#A657E4"></CostBoard>
          <CostBoard id="this-year" title="This year" amount={thisYearsCost} background="#45D6A1"></CostBoard>
          <CostBoard id="all-time" title="All Time" amount={allTimesCost} background="#D65645"></CostBoard>
        </Row>
        <section>
          <CostForm costFormHandler={costFormHandler}></CostForm>
        </section>
        <section className="search-field">
          <SearchBox></SearchBox>
        </section>
        <section>
          {
            costs.map(cost => <CostCard cost={cost}></CostCard>)
          }
        </section>
      </main>
    </Container>
  );
}

export default App;
