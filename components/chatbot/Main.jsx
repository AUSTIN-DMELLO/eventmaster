"use client";

import React, { useContext, useRef, useEffect } from 'react';
import './Main.css';
import { Context } from '../../context/Context';
import Image from 'next/image';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const resultTextRef = useRef(null);
    
    // Auto-scroll when new content is added
    useEffect(() => {
        if (resultTextRef.current && !loading) {
            resultTextRef.current.scrollTop = resultTextRef.current.scrollHeight;
        }
    }, [resultData, loading]);

    return (
        <div className='main'>
            <div className='nav'>
                <p>EventMaster Chatbot</p>
                <Image src='/assets/icons/user_icon.png' alt="User" width={30} height={30} />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card" onClick={() => onSent("Suggest some events in Mumbai")}>
                                <p>Suggest some events in Mumbai</p>
                                <Image src='/assets/icons/compass_icon.png' alt="Compass" width={24} height={24} />
                            </div>
                            <div className="card" onClick={() => onSent("Give me some musical events")}>
                                <p>Give me some musical events</p>
                                <Image src='/assets/icons/message_icon.png' alt="Message" width={24} height={24} />
                            </div>
                            <div className="card" onClick={() => onSent("When is the Kala Ghoda Festival occurring?")}>
                                <p>When is the Kala Ghoda Festival occurring?</p>
                                <Image src='/assets/icons/question_icon.png' alt="Code" width={24} height={24} />
                            </div>
                            <div className="card" onClick={() => onSent("What events are happening within the next few weeks?")}>
                                <p>What events are happening within the next few weeks?</p>
                                <Image src='/assets/icons/question_icon.png' alt="Code" width={24} height={24} />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <Image src='/assets/icons/user_icon.png' alt="User" width={30} height={30} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <Image src='/assets/icons/gemini_icon.png' alt="Gemini" width={30} height={30} />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <div className="result-text" ref={resultTextRef}>
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                  </div>
                            }
                        </div>
                    </div>
                }

                <div className="main-bottom">
                    <div className="search-box">
                        <input 
                            onChange={(e) => setInput(e.target.value)} 
                            value={input} 
                            type="text" 
                            placeholder='Enter a prompt here'
                            onKeyDown={(e) => e.key === 'Enter' && input.trim() !== '' && onSent()}
                        />
                        <div>
                            <Image src='/assets/icons/gallery_icon.png' alt="Gallery" width={24} height={24} />
                            <Image src='/assets/icons/mic_icon.png' alt="Mic" width={24} height={24} />
                            {input ? (
                                <Image 
                                    onClick={() => onSent()} 
                                    src='/assets/icons/send_icon.png' 
                                    alt="Send" 
                                    width={24} 
                                    height={24} 
                                    style={{ cursor: 'pointer' }}
                                />
                            ) : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        EventMaster Chatbot may display inaccurate information, including about events, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;