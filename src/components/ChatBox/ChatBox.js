import React, { useState } from "react";

import bubbleImg from './../../res/bubble.svg';


const ChatBox = () => {

    const [isChatOpen, setChatOpen] = useState(false);

    const [isNameFill, setIsNameFill] = useState(false);
    const [nameValue, setNameValue] = useState('');

    const [isEmailFill, setIsEmailFill] = useState(false);
    const [emailValue, setEmailValue] = useState('');


    const handleTextChange = (text, type) => {

        if (type === 'name') {
            setNameValue(text);

            if (text !== '')
                setIsNameFill(true);
            else
                setIsNameFill(false);
        } else {
            setEmailValue(text);

            if (text !== '')
                setIsEmailFill(true);
            else
                setIsEmailFill(false);
        }


    }


    const toggleChat = () => {
        setChatOpen(prevState => !prevState);
    }

    return (

        <React.Fragment>
            {/* Chat Button */}
            <div className="chat-button" onClick={toggleChat} style={{ backgroundColor: isChatOpen ? '#455a64' : '#195a75' }}>
                <i className={isChatOpen ? 'ri-close-fill' : 'ri-chat-2-fill'}></i>
            </div>


            <div className={isChatOpen ? 'chat-box chat-box--open' : 'chat-box'} >

                <div className="chat-box__top">
                    TOP STOCKS EVERY DAY

                    <div className="chat-box__close" onClick={toggleChat}>
                        <i className='ri-close-fill'></i>
                    </div>

                </div>

                <form className="chat-box__form">

                    <div className="chat-box__hi mb-1_5">
                        Hi! Let us know how we can help and we’ll respond shortly.
                        <img src={bubbleImg} alt="" className="chat-box__bubble" />
                    </div>


                    <div className="floating-input">
                        <input type="text" required
                            value={nameValue}
                            onChange={(e) => handleTextChange(e.target.value, 'name')} />
                        <label className={isNameFill ? "Active" : ""} htmlFor="text" >Name*</label>
                    </div>

                    <div className="floating-input">
                        <input type="email" required
                            value={emailValue}
                            onChange={(e) => handleTextChange(e.target.value, 'email')} />
                        <label className={isEmailFill ? "Active" : ""} htmlFor="email" >Email*</label>
                    </div>

                    <textarea className="chat-box__text-area mb-1_5" cols="30" rows="8" placeholder="How can we help?*" required></textarea>

                    <input className="btn chat-box__send mb-1_5" type="submit" value="SEND" />

                    <p className="chat-box__captcha mb-1_5">This site is protected by reCAPTCHA and the Google
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Terms of Service</a> apply.</p>

                </form>



            </div>


        </React.Fragment >
    );
}

export default ChatBox;