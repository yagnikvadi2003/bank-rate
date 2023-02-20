import React, { CSSProperties, ChangeEvent, FC, useEffect, useRef } from 'react';

interface InputProps {
    className?: string;
    id: string;
    name: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type: string;
    value?: number;
}

const Input: FC<InputProps> = ({ className, id, name, onChange, placeholder, type, value }) => {

    const ref = useRef<null | HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current) {
          ref.current.focus();
        }
    }, []);

    const styles: { [key: string]: CSSProperties } = {
        input: {
            border: "1px solid black",
            padding: "5px",
            borderRadius: "5px"
        },
    };

    return (
        <input className={className} id={id} name={name} onChange={onChange} placeholder={placeholder} style={styles.input} type={type} value={value} ref={ref}/>
    );
};

export default Input