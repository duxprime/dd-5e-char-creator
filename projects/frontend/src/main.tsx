import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { router } from './routes';
import './index.css';

const root = document.getElementById('root');

if (!root) {
    throw new Error('Could not boostrap. Could not find root element');
}

createRoot(root).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
