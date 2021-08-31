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

const translateLedgerEntryType = (ledgerEntryType) => {
  let entryType;
  if (ledgerEntryType === "Income") entryType = "income";
  else if (ledgerEntryType === "Payment") entryType = "payment";
  else entryType = "dailyCashRelease";

  return entryType;
};

const addAndOrderLedgerList = (ledgerList, entry) => {
  let index;
  for (let i = ledgerList.length - 1; i >= 0; i--) {
    index = i;
    if (entry["date"].getTime() < ledgerList[i]["date"].getTime()) {
      break;
    }
  }
  return [...ledgerList.slice(0, index), entry, ...ledgerList.slice(index)];
};

export default function useLedger() {
  const [cash, setCash] = useState(60);
  const [debt, setDebt] = useState(-100);
  const [savings, setSavings] = useState(500);
  const [ledger, setLedger] = useState({
    income: [],
    payment: [],
    dailyCashRelease: [],
  });

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

    const entryType = translateLedgerEntryType(ledgerEntryType);

    let entry = { date: new Date(), frequency, entryType };
    for (let ele of Object.entries(form)) {
      const value = ele[1].value;
      if (value) {
        const name = ele[1].name;
        entry[name] = value;
      }
    }

    setLedger((ledger) => {
      let ledgerList = ledger[entryType];
      ledgerList = addAndOrderLedgerList(ledgerList, entry);
      ledger[entryType] = ledgerList;

      return ledger;
    });
  };

  const addSavings = () => {
    const [newCash, newSavings] = calculateSavings(cash, savings);
    setCash(newCash);
    setSavings(newSavings);
  };

  return {
    addCash,
    addDebt,
    addPayment,
    addSavings,
    cash,
    debt,
    ledger,
    savings,
  };
}
