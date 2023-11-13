import React, {  useEffect, useState } from 'react';
import {css, StyleSheet} from "aphrodite";

const styles = StyleSheet.create({
    appInput: {
        marginRight: '15px',
        marginLeft: '5px',
        marginBottom: '5px',
        marginTop: '5px',
        "@media (max-width: 900px)": {
            display: "block",
        },
    },
    label: {
        "@media (max-width: 900px)": {
            display: "inline-block",
            padding: "0",
            marginLeft: "5px",
        },
    },
});

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [enableSubmit, setEnableSubmit] = useState(false);

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
    };

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };

    useEffect(() => {
        setEnableSubmit(email.trim() !== '' && password.trim() !== '');
    }, [email, password]);

    return (
        <React.Fragment>
            <form onSubmit={handleLoginSubmit}>
                <p>Login to access the full dashboard</p>
                <label htmlFor='email' className={css(styles.label)}>Email:</label>
                <input type='text' name='email' id='email' className={css(styles.appInput)} value={email} onChange={handleChangeEmail}></input>
                <label htmlFor='password' className={css(styles.label)}>Password:</label>
                <input type='password' name='password' id='password' className={css(styles.appInput)} value={password} onChange={handleChangePassword}></input>
                <input type={"submit"} className={css(styles.appInput)} value={"OK"} disabled={!enableSubmit} />
            </form>
        </React.Fragment>
    );
}

export default Login;
