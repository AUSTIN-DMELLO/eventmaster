"use client";

import React, { useContext } from 'react';
import './Main.css';
import { Context } from '../../context/Context';
import Image from 'next/image';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <Image src='/user_icon.png' alt="User" width={30} height={30} />
            </div>
            <div className="main-container">
                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest some events in Mumbai</p>
                                <Image src='/compass_icon.png' alt="Compass" width={24} height={24} />
                            </div>
                            <div className="card">
                                <p>Give me some musical events</p>
                                <Image src='/message_icon.png' alt="Message" width={24} height={24} />
                            </div>
                            <div className="card">
                                <p>When is the Kala Ghoda Festival occurring?</p>
                                <Image src='/question_icon.png' alt="Code" width={24} height={24} />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <Image src='/user_icon.png' alt="User" width={30} height={30} />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <Image src='/gemini_icon.png' alt="Gemini" width={30} height={30} />
                            {loading
                                ? <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
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
                            <Image src='/gallery_icon.png' alt="Gallery" width={24} height={24} />
                            <Image src='/mic_icon.png' alt="Mic" width={24} height={24} />
                            {input ? (
                                <Image 
                                    onClick={() => onSent()} 
                                    src='/send_icon.png' 
                                    alt="Send" 
                                    width={24} 
                                    height={24} 
                                    style={{ cursor: 'pointer' }}
                                />
                            ) : null}
                        </div>
                    </div>
                    <p className="bottom-info">
                        Chatbot may display inaccurate information, including about people, so double-check its responses.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;