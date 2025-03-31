"use client";

import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { Context } from '../../context/Context';
import Image from 'next/image';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className={`sidebar ${extended ? 'extended' : ''}`}>
            <div className="top">
                <Image 
                    onClick={() => setExtended(prev => !prev)} 
                    className='menu' 
                    src='/assets/icons/menu_icon.png' 
                    alt="Menu" 
                    width={24} 
                    height={24} 
                />
                <div onClick={() => newChat()} className="new-chat">
                    <Image src='/assets/icons/plus_icon.png' alt="New Chat" width={24} height={24} />
                    {extended && <p>New chat</p>}
                </div>
                {extended && (
                    <div className="recent">
                        <p className='recent-title'>Recent</p>
                        {Array.isArray(prevPrompts) && prevPrompts.length > 0 ? (
                            prevPrompts.map((item, index) => (
                                <div 
                                    key={index}
                                    onClick={() => loadPrompt(item)} 
                                    className="recent-entry"
                                >
                                    <Image 
                                        src='/assets/icons/message_icon.png' 
                                        alt="Message" 
                                        width={18} 
                                        height={18} 
                                    />
                                    <p>{typeof item === 'string' ? item.slice(0, 18) : ''} ...</p>
                                </div>
                            ))
                        ) : (
                            <p className="no-history">No recent chats</p>
                        )}
                    </div>
                )}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <Image 
                        src='/assets/icons/question_icon.png' 
                        alt="Help" 
                        width={18} 
                        height={18} 
                    />
                    {extended && <p>Help</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <Image 
                        src='/assets/icons/history_icon.png' 
                        alt="Activity" 
                        width={18} 
                        height={18} 
                    />
                    {extended && <p>Activity</p>}
                </div>
                <div className="bottom-item recent-entry">
                    <Image 
                        src='/assets/icons/setting_icon.png' 
                        alt="Settings" 
                        width={18} 
                        height={18} 
                    />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;