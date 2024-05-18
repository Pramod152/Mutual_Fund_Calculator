import "./App.css";
import { useState } from "react";

function App() {
  const [investment, setInvestment] = useState(0);
  const [contribution, setContribution] = useState(0);
  const [interest, setInterest] = useState(0);
  const [time, setTime] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [interestEarned, setInterestEarned] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const getData = (e) => {
    e.preventDefault();
    const inv = parseInt(e.target[0].value);
    const contr = parseInt(e.target[1].value);
    const int = parseInt(e.target[2].value) / (12 * 100);
    const t = parseInt(e.target[3].value) * 12;

    setInvestment(inv);
    setContribution(contr);
    setInterest(int);
    setTime(t);

    calculate(inv, contr, int, t);
  };

  const calculate = (inv, contr, int, t) => {
    const tempTotalInvestment = inv + contr * t;
    const FV = inv * (1 + int) ** t + contr * (((1 + int) ** t - 1) / int);
    const tempInterestEarned = FV - tempTotalInvestment;

    setTotalInvestment(tempTotalInvestment);
    setTotalValue(FV.toFixed(3));
    setInterestEarned(tempInterestEarned.toFixed(3));

    console.log(tempTotalInvestment, tempInterestEarned, FV);
  };

  return (
    <>
      <main>
        <div className="container">
          <h1>
            Mutual Fund <br /> Compound Interest Calculator
          </h1>
          <form onSubmit={getData}>
            <div className="form_content">
              <div>
                <label htmlFor="investment">Initial Investment{"(रू)"}: </label>
                <input type="text" name="investment" />
              </div>
              <div>
                <label htmlFor="contribution">Monthly Contribution{"(रू)"}: </label>
                <input type="text" name="contribution" />
              </div>
              <div>
                <label htmlFor="interest">Annual Interest Rate {"(%)"}: </label>
                <input type="text" name="interest" />
              </div>
              <div>
                <label htmlFor="time">Number of Years: </label>
                <input type="text" name="time" />
              </div>
            </div>
            <button type="submit" className="calculate">Calculate</button>
          </form>
          <div>
            <h3>Total Investment {"(रू)"}: {totalInvestment} </h3>
            <h3>Interest Earned{"(रू)"}: {interestEarned}</h3>
            <h3>Total Value{"(रू)"}: {totalValue}</h3>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
