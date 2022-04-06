import React from 'react';
import { useRouter } from 'next/router';


const ReviewDetailPage = () => {
    const router = useRouter();
    const { query: { productId, reviewId } } = router;
    return <div>
        <h1>Review detail page product id is {productId} and review id is {reviewId}</h1>
    </div>;
};

export default ReviewDetailPage;
