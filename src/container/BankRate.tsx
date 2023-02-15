import React, { FC, useState } from 'react'

const BankRate: FC = () => {
    const [bankBalance, setBankBalance] = useState<number>(5000);
    const [getBalance, setGetBalance] = useState<number>()

    // const withDrowBalance = (event: MouseEvent)=> {
    //     event.preventDefault();
    //     setGetBalance(event.target.value);
    //     console.log(getBalance);
    // }
    const withDrowBalance = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        event.preventDefault();
        
    };

    return (
        <>
            <h3>Current bank balance : {bankBalance}</h3>
            <input type="number" value={getBalance} onChange={(event)=>setGetBalance}/>
            <button onClick={()=>withDrowBalance}>withdraw</button>
            <button>deposit</button>
        </>
    )
}

export default BankRate