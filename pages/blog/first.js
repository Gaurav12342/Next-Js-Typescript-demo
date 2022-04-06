import React from 'react';
import { useRouter } from 'next/router';

const First = () => {
    const router = useRouter();
    return <div>
        <button onClick={() => router.push('/blog')}>Back button</button>
        <h1>First Blog of File</h1>
    </div>;
};

export default First;
