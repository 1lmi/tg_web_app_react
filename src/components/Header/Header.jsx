import React from "react";
import Button from "../Button/Button";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
    const {user, onClose} = useTelegram();

    retutn (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <samp className={'username'}>
                {user?.username}
            </samp>
        </div>
    );
};

export default Header