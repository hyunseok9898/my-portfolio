// src/index.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter  } from 'react-router-dom';
import { RecoilRoot } from "recoil";
import App from './App';

const container = document.getElementById('root'); // public/index.html 안에 있는 div#root
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
       <RecoilRoot>
          <HashRouter>
            <App />
          </HashRouter>
       </RecoilRoot>
    </React.StrictMode>
  );
}