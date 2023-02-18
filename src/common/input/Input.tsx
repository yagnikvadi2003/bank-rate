import React, { CSSProperties, ChangeEvent, FC } from 'react';

interface InputProps {
    className?: string;
    id: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: string;
    value?: string | number;
}

const Input: FC<InputProps> = ({ className, id, name, onChange, placeholder, type, value }) => {

    const styles: { [key: string]: CSSProperties } = {
        input: {
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px"
        },
    };

    return (
        <input className={className} id={id} name={name} onChange={onChange} placeholder={placeholder} style={styles.input} type={type} value={value} />
    );
};

export default Input