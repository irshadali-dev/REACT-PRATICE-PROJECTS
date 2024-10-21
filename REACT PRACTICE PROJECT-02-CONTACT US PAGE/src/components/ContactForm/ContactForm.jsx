import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { MdMessage } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { MdMail } from "react-icons/md";


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
    };
    return (
        <section className={
            styles.container
        }>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text='VIA SUPPORT CHAT' icon={<MdMessage fontSize='24px' />} />
                    <Button text='VIA CALL' icon={<MdAddCall fontSize='24px' />} />
                </div>
                <Button
                    isOutline={true} text='VIA SUPPORT CHAT' icon={< MdMail fontSize='24px' />} />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' />

                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' />

                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name='text' rows='8' />

                    </div>
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button

                            text='SUBMIT' />
                    </div>
                    <div>
                        {name} <br />
                        {email} <br />
                        {text}
                    </div>

                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="./images/contact.svg" alt="" />
            </div>
        </section>
    )
}

export default ContactForm