import React, { CSSProperties, FC, MouseEvent, MouseEventHandler, ReactNode, useState } from 'react'

interface ButtonProps {
    onClick?: MouseEventHandler;
    children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }): JSX.Element=> {
    const [isHover, setIsHover] = useState<boolean>(false);

    const styles: { [key: string]: CSSProperties } = {
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

    return (
        <button 
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={styles.button}
        >
            {children}
        </button>
    );
};

export default Button;