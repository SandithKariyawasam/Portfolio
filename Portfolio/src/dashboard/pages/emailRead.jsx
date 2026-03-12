import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EmailRead = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [isReplying, setIsReplying] = useState(false);
    const [isForwarding, setIsForwarding] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [forwardTo, setForwardTo] = useState("");

    // Mock email data
    const email = {
        id: id,
        sender: "Ingredia Nutrisha",
        emailAddress: "ingredia@example.com",
        subject: "A collection of textile samples lay spread out on the table...",
        time: "11:49 am",
        date: "Oct 24, 2026",
        content: `
            <p>Hi there,</p>
            <p>Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn't listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
            <p>Best Regards,</p>
            <br/>
            <p><strong>Ingredia Nutrisha</strong></p>
        `
    };

    const handleSendReply = () => {
        if (!replyText.trim()) return;
        alert("Reply sent successfully!");
        setIsReplying(false);
        setReplyText("");
    };

    const handleSendForward = () => {
        if (!forwardTo.trim()) {
            alert("Please enter a recipient to forward to.");
            return;
        }
        alert(`Message forwarded to ${forwardTo} successfully!`);
        setIsForwarding(false);
        setForwardTo("");
        setReplyText("");
    };

    return (
        <div className="dashboard-container" style={{ display: 'block' }}>
            
            <div className="dashboard-main" style={{ marginBottom: '30px' }}>
                <div className="promo-card-account" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <div>
                        <h3 className="section-title" style={{ marginBottom: '10px' }}>Read Message</h3>
                        <p style={{ color: '#666', margin: 0 }}>
                            Viewing email details.
                        </p>
                    </div>
                    <div style={{display: 'flex', gap: '15px'}}>
                      <button onClick={() => navigate('/dashboard/inbox')} className="button_submit" style={{ width: 'auto', padding: '12px 24px', margin: 0, backgroundColor: '#f1f1f1', color: '#333' }}>
                          <i className="fa-solid fa-arrow-left" style={{marginRight: '8px'}}></i> Back to Inbox
                      </button>
                      <button className="button_submit" style={{ width: 'auto', padding: '12px 24px', margin: 0, backgroundColor: '#fd6161' }}>
                          <i className="fa-solid fa-trash" style={{marginRight: '8px'}}></i> Delete
                      </button>
                    </div>
                </div>
            </div>

            <div className="transaction-card" style={{ padding: '40px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid #eee', paddingBottom: '20px', marginBottom: '30px', flexWrap: 'wrap', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <div style={{ width: '55px', height: '55px', borderRadius: '50%', backgroundColor: '#2f8cb6', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '22px', fontWeight: 'bold' }}>
                            {email.sender.charAt(0)}
                        </div>
                        <div>
                            <h4 style={{ margin: '0 0 5px 0', fontSize: '18px', color: '#333' }}>{email.sender} <span style={{ fontSize: '14px', color: '#888', fontWeight: 'normal' }}>&lt;{email.emailAddress}&gt;</span></h4>
                            <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>To: me</p>
                        </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <p style={{ margin: '0 0 5px 0', color: '#555', fontWeight: 'bold' }}>{email.date}</p>
                        <p style={{ margin: 0, color: '#888', fontSize: '13px' }}>{email.time}</p>
                    </div>
                </div>

                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ fontSize: '24px', marginBottom: '25px', color: '#222' }}>{email.subject}</h2>
                    <div style={{ color: '#444', lineHeight: '1.8', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: email.content }}></div>
                </div>

                {(!isReplying && !isForwarding) ? (
                    <div style={{ borderTop: '1px solid #eee', paddingTop: '25px', display: 'flex', gap: '15px' }}>
                        <button onClick={() => setIsReplying(true)} className="button_submit" style={{ width: 'auto', padding: '10px 24px', margin: 0, backgroundColor: '#f1f1f1', color: '#333' }}>
                            <i className="fa-solid fa-reply" style={{marginRight: '8px'}}></i> Reply
                        </button>
                        <button onClick={() => setIsForwarding(true)} className="button_submit" style={{ width: 'auto', padding: '10px 24px', margin: 0, backgroundColor: '#f1f1f1', color: '#333' }}>
                            <i className="fa-solid fa-share" style={{marginRight: '8px'}}></i> Forward
                        </button>
                    </div>
                ) : (
                    <div style={{ borderTop: '1px solid #eee', paddingTop: '25px' }}>
                        <div style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '50%', backgroundColor: '#555', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px', fontWeight: 'bold', flexShrink: 0 }}>
                                M
                            </div>
                            <div style={{ flex: 1 }}>
                                <div style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden' }}>
                                    
                                    {isForwarding && (
                                        <div style={{ padding: '10px 15px', borderBottom: '1px solid #eee', backgroundColor: '#fdfdfd' }}>
                                            <input 
                                                autoFocus
                                                value={forwardTo}
                                                onChange={(e) => setForwardTo(e.target.value)}
                                                type="text" 
                                                placeholder="To: (Enter email address)" 
                                                style={{ width: '100%', border: 'none', outline: 'none', fontSize: '15px', backgroundColor: 'transparent' }} 
                                            />
                                        </div>
                                    )}

                                    <textarea 
                                        autoFocus={isReplying}
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        placeholder={isForwarding ? "Add a message (optional)..." : `Reply to ${email.sender}...`}
                                        style={{ 
                                            width: '100%', 
                                            minHeight: '150px', 
                                            padding: '15px', 
                                            border: 'none', 
                                            outline: 'none', 
                                            resize: 'vertical',
                                            fontSize: '15px',
                                            fontFamily: 'inherit'
                                        }}
                                    />
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 15px', backgroundColor: '#f9f9f9', borderTop: '1px solid #eee' }}>
                                        <div style={{ display: 'flex', gap: '10px', color: '#666' }}>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#666' }}><i className="fa-solid fa-paperclip"></i></button>
                                            <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: '#666' }}><i className="fa-solid fa-image"></i></button>
                                        </div>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <button onClick={() => { setIsReplying(false); setIsForwarding(false); }} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px 15px', color: '#666', fontWeight: 'bold' }}>
                                                Cancel
                                            </button>
                                            <button onClick={isForwarding ? handleSendForward : handleSendReply} className="button_submit" style={{ width: 'auto', padding: '8px 24px', margin: 0 }}>
                                                Send <i className="fa-solid fa-paper-plane" style={{marginLeft: '5px'}}></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EmailRead;
