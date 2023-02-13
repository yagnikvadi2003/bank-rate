import React, { FC, useState } from 'react'

const BankRate: FC = () => {
    const [bankBalance, setBankBalance] = useState<number | string>(5000);

    return (
        <h3>Current bank balance : {bankBalance}</h3>
    )
}

export default BankRate