import React from 'react';
import { useRouter } from 'next/router';

const Second = () => {
    const router = useRouter();
    return <div>
        <button onClick={() => router.push('/blog')}>Back button</button>
        <h1>Second Blog of File</h1>
    </div>;
};

export default Second;
