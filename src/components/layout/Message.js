import React, { useState, useEffect } from 'react';


import styles from './Message.module.css'
import { SiInteractiondesignfoundation } from 'react-icons/si';

function Message({ type, msg }) {

    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if (!msg) {
            setVisible(false)
            return
        }

        setVisible(true)

        const timer = setTimeout(() => {
            setVisible(false)
        }, 10000)

        return () => clearTimeout(timer)
    }, [msg]);

    return (
        <>
            {visible && (
                <div
                    className={`${styles.message} ${styles[type]}`}
                    onClick={() => { setVisible(false) }}
                >{msg}</div>
            )}

        </>
    )
}

export default Message