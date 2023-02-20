import React, { CSSProperties, ChangeEvent, FC, MouseEvent, useEffect, useState } from 'react';

import Button from '../common/button/Button';
import Input from '../common/input/Input';

interface Storage {
    clear(): void;
    getItem(key: string): string | null;
    key(index: number): string | null;
    removeItem(key: string): void;
    setItem(key: string, value: string): void;
    [name: string]: any;
}

const BankRate: FC = (): JSX.Element => {
    const [bankBalance, setBankBalance] = useState<number>(10000);
    const [getAmount, setGetAmount] = useState<number>(0);
    
    const [history, setHistory] = useState<Storage[]>([]);
    
    useEffect(() => {
        localStorage.setItem('History', JSON.stringify(bankBalance));
        setHistory(JSON.parse(localStorage.getItem('History') || '[]'));
    }, [history, getAmount, bankBalance]); 
    
    const styles: { [key: string]: CSSProperties } = {
        container: {
            backgroundColor: "#0e4d92",
            margin: "0 auto",
            marginTop: "35vh",
            width: "300px",
            height: "200px",
            position: "relative",
            borderRadius: "10px"
        },
        main: {
            width: "300px",
            height: "150px",
            position: "absolute",
            top: "100px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            backgroundColor: "white",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)"
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setGetAmount(parseInt(event.target.value));
    };

    const withDrawBalance = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBankBalance(bankBalance - getAmount);
    };

    const depositsBalance = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setBankBalance(getAmount + bankBalance);
    };

    return (
        <div style={styles.container} className="app">
            <div style={styles.main}>
                <h3>Current bank balance : {bankBalance}</h3>
                <Input type="number" id="Amount" name="Enter Amount" value={getAmount} onChange={handleChange} />
                <br /><br />
                <Button onClick={withDrawBalance} children='withdraw' />
                <Button onClick={depositsBalance} children='deposit' />
            </div>
        </div>
    )
}

export default BankRate;