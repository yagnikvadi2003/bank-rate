import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';

const BankRate: FC = (): JSX.Element => {
    const [bankBalance, setBankBalance] = useState<number>(10000);
    const [getAmount, setGetAmount] = useState<number>(0);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setGetAmount(parseInt(event.target.value));
    };

    const withDrawBalance = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBankBalance(bankBalance - getAmount);
    };

    const depositeBalance = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBankBalance(getAmount + bankBalance);
    };

    return (
        <div className="app">
            <div className='stopwatch-card'>
                <label htmlFor="currentBalance">
                    Current bank balance : {bankBalance}
                </label>
                <br /><br />
                <input type="number" className="numberBox" id="Amount" name="Enter Amount" value={getAmount} onChange={handleChange} />
                <br /><br />
                <button onClick={withDrawBalance} style={{ margin: "0 5px" }} >withdraw</button>
                <button onClick={depositeBalance} style={{ margin: "0 5px" }} >deposit</button>
            </div>
        </div>
    )
}

export default BankRate;