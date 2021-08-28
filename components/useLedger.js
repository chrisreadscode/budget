import { useState } from "react";

const calculateCash = (cash, amount, minusSignOn) => {
  if (minusSignOn) amount = -amount;
  return cash + amount;
};

const calculateDebt = (cash, debt) => {
  const sum = debt + cash;
  const newDebt = Math.min(sum, 0);
  const newCash = Math.max(0, sum);

  return [newCash, newDebt];
};

const calculateSavings = (cash, savings) => {
  const sum = savings + cash;
  const newCash = Math.min(sum, 0);
  const newSavings = Math.max(0, sum);

  return [newCash, newSavings];
};

export default function useLedger() {
  const [cash, setCash] = useState(60);
  const [dailyCash, setDailyCash] = useState("");
  const [debt, setDebt] = useState(-100);
  const [savings, setSavings] = useState(500);
  const [ledger, setLedger] = useState([]);

  console.log(ledger);

  const addCash = (amount, minusSignOn) => {
    setCash(calculateCash(cash, amount, minusSignOn));
  };

  const addDebt = () => {
    const [newCash, newDebt] = calculateDebt(cash, debt);
    setCash(newCash);
    setDebt(newDebt);
  };

  const addPayment = (e, frequency, ledgerEntryType) => {
    const form = e.target;

    let entry = { frequency, ledgerEntryType };
    for (let ele of Object.entries(form)) {
      const value = ele[1].value;
      if (value) {
        const name = ele[1].name;
        entry[name] = value;
      }
    }
    setLedger((ledger) => [...ledger, entry]);
  };

  const addSavings = () => {
    const [newCash, newSavings] = calculateSavings(cash, savings);
    setCash(newCash);
    setSavings(newSavings);
  };

  const updateDailyCash = (e, setDailyCashComponent) => {
    e.preventDefault();

    setDailyCash(parseInt(e.target.elements[0].value));
    setDailyCashComponent("");
  };

  return {
    addCash,
    addDebt,
    addPayment,
    addSavings,
    updateDailyCash,
    cash,
    dailyCash,
    debt,
    savings,
  };
}
