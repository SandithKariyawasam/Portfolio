import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Inbox = () => {
    const navigate = useNavigate();
    // Mock emails
    const [emails, setEmails] = useState([
        { id: 1, sender: "Ingredia Nutrisha", subject: "A collection of textile samples lay spread out on the table...", time: "11:49 am", unread: false, selected: false },
        { id: 2, sender: "John Doe", subject: "Meeting scheduled for next week regarding the new project.", time: "10:30 am", unread: true, selected: false },
        { id: 3, sender: "Alice Smith", subject: "Invoice #12345 is ready for review.", time: "Yesterday", unread: true, selected: false },
        { id: 4, sender: "David Lee", subject: "Quick update on the marketing campaign performance.", time: "Yesterday", unread: false, selected: false },
        { id: 5, sender: "Emma Watson", subject: "Don't forget the team building event this Friday!", time: "Oct 12", unread: false, selected: false },
    ]);

    const handleSelect = (id) => {
        setEmails(emails.map(email => email.id === id ? { ...email, selected: !email.selected } : email));
    };

    const handleSelectAll = (e) => {
        const isChecked = e.target.checked;
        setEmails(emails.map(email => ({ ...email, selected: isChecked })));
    };

    return (
        <div className="dashboard-container" style={{ display: 'block' }}>
            
            {/* HEADER AREA */}
            <div className="dashboard-main" style={{ marginBottom: '30px' }}>
                <div className="promo-card-account" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '30px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                    <div>
                        <h3 className="section-title" style={{ marginBottom: '10px' }}>Inbox</h3>
                        <p style={{ color: '#666', margin: 0 }}>
                            Manage your emails and messages.
                        </p>
                    </div>
                    <div style={{display: 'flex', gap: '15px'}}>
                      <button className="button_submit" style={{ width: 'auto', padding: '12px 24px', margin: 0, backgroundColor: '#f1f1f1', color: '#333' }}>
                          <i className="fa-solid fa-arrows-rotate"></i> Refresh
                      </button>
                      <button className="button_submit" style={{ width: 'auto', padding: '12px 24px', margin: 0 }}>
                          + Compose Message
                      </button>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
                {/* SIDEBAR FOR INBOX */}
                <div style={{ flex: '1 1 250px', maxWidth: '300px' }}>
                    <div className="transaction-card" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ padding: '12px 15px', backgroundColor: '#f9f9f9', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontWeight: 'bold' }}>
                                <span><i className="fa fa-inbox" style={{ marginRight: '10px', color: '#555' }}></i> Inbox</span>
                                <span style={{ backgroundColor: '#2f8cb6', color: '#fff', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>198</span>
                            </li>
                            <li style={{ padding: '12px 15px', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                                <span><i className="fa fa-paper-plane" style={{ marginRight: '10px' }}></i> Sent</span>
                            </li>
                            <li style={{ padding: '12px 15px', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                                <span><i className="fa fa-star" style={{ marginRight: '10px' }}></i> Important</span>
                                <span style={{ backgroundColor: '#fd6161', color: '#fff', padding: '2px 8px', borderRadius: '5px', fontSize: '12px' }}>47</span>
                            </li>
                            <li style={{ padding: '12px 15px', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                                <span><i className="fa-solid fa-pen" style={{ marginRight: '10px' }}></i> Draft</span>
                            </li>
                            <li style={{ padding: '12px 15px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                                <span><i className="fa fa-trash" style={{ marginRight: '10px' }}></i> Trash</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* EMAIL LIST */}
                <div style={{ flex: '3 1 500px' }}>
                    <div className="transaction-card" style={{ padding: '20px', backgroundColor: '#fff', borderRadius: '18px', boxShadow: '0 10px 25px rgba(0,0,0,0.02)' }}>
                        {/* Toolbar */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', paddingBottom: '15px', borderBottom: '1px solid #eee', flexWrap: 'wrap', gap: '15px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <input type="checkbox" style={{ width: '18px', height: '18px', cursor: 'pointer' }} onChange={handleSelectAll} checked={emails.length > 0 && emails.every(e => e.selected)} />
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <button style={{ border: '1px solid #ddd', background: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', color: '#555' }}><i className="fa fa-trash"></i></button>
                                    <button style={{ border: '1px solid #ddd', background: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', color: '#555' }}><i className="fa fa-folder"></i> Move</button>
                                    <button style={{ border: '1px solid #ddd', background: '#fff', padding: '6px 12px', borderRadius: '6px', cursor: 'pointer', color: '#555' }}>More <i className="fa fa-caret-down"></i></button>
                                </div>
                            </div>
                            <div className="group" style={{ width: '100%', maxWidth: '250px', margin: 0 }}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="icon" style={{ left: '10px' }}>
                                    <g>
                                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                </svg>
                                <input className="input" type="search" placeholder="Search emails" style={{ paddingLeft: '35px', height: '35px' }} />
                            </div>
                        </div>

                        {/* List */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            {emails.map((email) => (
                                <div key={email.id} style={{ 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    padding: '15px', 
                                    backgroundColor: email.unread ? '#f4f8fa' : '#fff',
                                    border: '1px solid',
                                    borderColor: email.unread ? '#dcecf5' : '#eee',
                                    borderRadius: '10px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    fontWeight: email.unread ? 'bold' : 'normal'
                                }}
                                onClick={(e) => { if(e.target.tagName !== 'INPUT') navigate('/dashboard/email/' + email.id) }}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                                >
                                    <input type="checkbox" style={{ width: '18px', height: '18px', marginRight: '15px', cursor: 'pointer' }} checked={email.selected} onChange={() => handleSelect(email.id)} />
                                    <div style={{ flex: '1', minWidth: '150px', color: email.unread ? '#000' : '#444' }}>{email.sender}</div>
                                    <div style={{ flex: '3', color: '#666', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', paddingRight: '20px' }}>
                                        {email.subject}
                                    </div>
                                    <div style={{ width: '80px', textAlign: 'right', fontSize: '13px', color: '#888' }}>{email.time}</div>
                                </div>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Inbox;
