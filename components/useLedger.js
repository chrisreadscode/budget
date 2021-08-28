import { useState } from "react";

const calculateAddCash = (cash, amount, minusSignOn) => {
  if (minusSignOn) amount = -amount;
  return cash + amount;
};

const calculateDebt = (cash, debt) => {
  let _cash = cash;
  let _debt = debt;

  _debt += _cash;
  _cash = 0;
  if (_debt > 0) {
    _cash = _debt;
    _debt = 0;
  }

  return [_cash, _debt];
};

const calculateSave = (cash, save) => {
  let _cash = cash;
  let _save = save;

  _save += _cash;
  _cash = 0;
  if (_save < 0) {
    _cash = _save;
    _save = 0;
  }

  return [_cash, _save];
};

export default function useLedger() {
  const [cash, setCash] = useState(60);
  const [dailyCash, setDailyCash] = useState("");
  const [debt, setDebt] = useState(-100);
  const [save, setSave] = useState(500);

  const addCash = (amount, minusSignOn) => {
    setCash(calculateAddCash(cash, amount, minusSignOn));
  };

  const updateDailyCash = (e, setDailyCashComponent) => {
    e.preventDefault();

    setDailyCash(parseInt(e.target.elements[0].value));
    setDailyCashComponent("");
  };

  const updateDebtOrSave = (showDebt) => {
    if (showDebt) {
      const [_cash, _debt] = calculateDebt(cash, debt);
      setCash(_cash);
      setDebt(_debt);
    } else {
      const [_cash, _save] = calculateSave(cash, save);
      setCash(_cash);
      setSave(_save);
    }
  };

  return {
    addCash,
    updateDailyCash,
    updateDebtOrSave,
    cash,
    dailyCash,
    debt,
    save,
  };
}