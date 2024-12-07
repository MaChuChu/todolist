// pages/_app.tsx
import React from 'react';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div className="main-container">
            <main>
                <Component {...pageProps} />
            </main>

            <footer>
                <p>© 2024 Ranjeth Ravichandran</p>
            </footer>
        </div>
    );
}
