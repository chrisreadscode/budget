import Head from "next/head";
import {
  Button,
  Input,
  Header,
  Form,
  Label,
  Popup,
  Segment,
} from "semantic-ui-react";
import { useState } from "react";

export default function Home() {
  const [activeButton, setActiveButton] = useState(100);
  const [money, setMoney] = useState(60);
  const [debt, setDebt] = useState(-100);
  const [save, setSave] = useState(500);
  const [showDebt, setShowDebt] = useState(false);
  const [showMinus, setShowMinus] = useState(false);
  const [dailyAmount, setDailyAmount] = useState();
  const [storeDailyAmount, setStoreDailyAmount] = useState(0);

  const buttons = [1, 5, 20, 50, 100];
  const square = { width: 200, height: 200 };

  const makeCalculatorButton = (value) => {
    return (
      <Button
        color={activeButton === value ? (showMinus ? "red" : "green") : "black"}
        onClick={(state) => {
          setActiveButton(value);
          updateMoney(value);
        }}
      >
        {value}
      </Button>
    );
  };

  const updateMoney = (value) => {
    if (showMinus) value = -value;
    const newMoney = money + value;
    setMoney(newMoney);
  };

  const updateDailyAmount = (e) => {
    e.preventDefault();

    let newDailyAmount = parseInt(e.target.elements[0].value);
    if (newDailyAmount || newDailyAmount === 0)
      setStoreDailyAmount(newDailyAmount);

    let changeInAmount = 0;
    if (newDailyAmount < storeDailyAmount)
      changeInAmount -= storeDailyAmount - newDailyAmount;
    else if (storeDailyAmount < newDailyAmount)
      changeInAmount += newDailyAmount - storeDailyAmount;
    newDailyAmount = "";

    setMoney(money + changeInAmount);
    setDailyAmount(newDailyAmount);
  };

  const updateDebtAndSave = () => {
    if (showDebt) {
      const newDebt = money + debt;
      if (newDebt > 0) {
        setMoney(newDebt);
        newDebt = 0;
      } else {
        setMoney(0);
      }
      setDebt(newDebt);
    } else {
      const newSave = save + money;
      if (newSave < 0) {
        setMoney(newSave);
        newSave = 0;
      } else {
        setMoney(0);
      }
      setSave(newSave);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Budget</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <h1 className="title">Welcome to Budget!</h1>

        <br />
        <p className="description">Start by clicking to discover features</p>

        <div>
          <Button
            color={showDebt ? "red" : "green"}
            icon="add"
            floated="right"
            onClick={(event) => setShowDebt(!showDebt)}
            style={{ position: "relative", right: "125px" }}
          >
            ${showDebt ? `${Math.abs(debt)} Debt` : `${save} Save`}
          </Button>

          <Popup
            content={`Add today's sum to your ${showDebt ? "debt" : "save"}`}
            size="big"
            trigger={
              <Button
                circular
                icon="add"
                floated="right"
                onClick={updateDebtAndSave}
                style={{ position: "relative", left: "200px" }}
              />
            }
          />
        </div>

        <div>
          <br />
          <Popup
            content="Click to add a recurring +/-"
            size="big"
            trigger={
              <Segment circular inverted style={square}>
                <Header as="h1">
                  ${money}
                  <Header sub color={money < 0 ? "red" : "green"}>
                    left today
                  </Header>
                </Header>
              </Segment>
            }
          />
        </div>
        <br />
        <br />
        <div>
          <Button
            color={showMinus ? "red" : "green"}
            onClick={(event) => setShowMinus(!showMinus)}
          >
            {showMinus ? "-" : "+"}
          </Button>
          <Button.Group>
            {buttons.map((buttonValue) => makeCalculatorButton(buttonValue))}
          </Button.Group>
        </div>
        <br />
        <br />
        <div>
          <Form onSubmit={updateDailyAmount}>
            <Input
              labelPosition="left"
              type="text"
              onChange={(state) => setDailyAmount(state.value)}
              placeholder={
                storeDailyAmount
                  ? `${storeDailyAmount} Available A Day`
                  : "Daily Amount Available"
              }
              value={dailyAmount}
            >
              <Label>$</Label>
              <input />
            </Input>
            <br />
            <br />
            <Button fluid type="submit">
              Submit
            </Button>
          </Form>
        </div>

        <br />
        <br />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
