import React, { FC } from 'react';
import { useRouter } from 'next/router';

const First: FC = () => {
    const router = useRouter();
    return <div>
        <button onClick={() => router.push('/blog')}>Back button</button>
        <h1>First Blog of File</h1>
    </div>;
};

export default First;
