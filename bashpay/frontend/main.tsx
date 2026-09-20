import React from 'react';import{createRoot}from'react-dom/client';import{ClerkProvider}from'@clerk/react';import App from'./App';import'./styles.css';
const key=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string|undefined;const root=document.getElementById('root');
if(!root)throw new Error('BashPay root missing');
if(!key){root.innerHTML='<div class="config">BashPay needs VITE_CLERK_PUBLISHABLE_KEY.</div>'}else{createRoot(root).render(<React.StrictMode><ClerkProvider publishableKey={key}><App/></ClerkProvider></React.StrictMode>)}
