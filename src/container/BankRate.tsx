import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';

const BankRate: FC = (): JSX.Element => {
    const [bankBalance, setBankBalance] = useState<number>(10000);
    const [getAmount, setGetAmount] = useState<number>(0);
    const [isHover, setIsHover] = useState<boolean>(false);

    const styles: { [key: string]: React.CSSProperties } = {
        button: {
            outline: "none",
            background: isHover ? "blue" : "transparent",
            border: isHover ? "1px solid black" : "1px solid blue",
            padding: "5px 10px",
            borderRadius: "7px",
            color: isHover ? "white" : "blue",
            cursor: "pointer",
            margin: "0 5px"
        },
    };
     
    const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsHover(true);
    };

    const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsHover(false);
    };
    
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
                <button 
                    onClick={withDrawBalance} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={styles.button} 
                >
                    withdraw
                </button>
                <button 
                    onClick={depositeBalance} 
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={styles.button} 
                >
                    deposit
                </button>
            </div>
        </div>
    )
}

export default BankRate;