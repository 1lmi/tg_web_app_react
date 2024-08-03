import React from "react";
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp;
   
    const onClose = () => {
            tg.close()
        }

    retutn (
        <div className={'header'}>
            <button onClick={onClose}>Закрыть</button>
            <samp className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </samp>
        </div>
    );
};

export default Header