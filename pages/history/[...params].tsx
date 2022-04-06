import React, { FC } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const History: FC = () => {
    const router = useRouter();
    const { params } = router.query;

    console.log("router", params);

    return <div>
        <Link href='/'>Back</Link>
        <h2>History</h2>
    </div>;
};

export default History;
