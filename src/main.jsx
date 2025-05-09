import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import PhoneWrapper from '@/PhoneWrapper.jsx';
import ScrollToTop from '@hooks/ScrollToTop';
import * as C from '@styles/CommonStyle.js';
import { register } from '@utils/serviceWorkerRegistration';

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <C.Page>
        <PhoneWrapper />
      </C.Page>
    </BrowserRouter>
  </StrictMode>,
);

register();
