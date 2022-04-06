import React, { FC } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image from 'next/image'


const ProductDetailPage: FC<any> = (props) => {
    const router: any = useRouter();
    const { query: { productId } } = router;
    const { getUserDetail }: any = props;

    const myLoader = ({ src, width, quality }: any) => {
        return `${src}?w=${width}&q=${quality || 25}`
    }
    return <div>
        <button onClick={() => router.push('/product')}>Back</button>
        <h1>Product detail page {productId}</h1>

        {router?.isFallback ?
            <Image
                loader={myLoader}
                src="/images/loading.gif"
                alt="Picture of the author"
                width={100}
                height={100}
                priority={true}
            /> :
            <CardContent key={getUserDetail?.id}>
                <Typography gutterBottom variant="h5" component="div">
                    {getUserDetail?.name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    {getUserDetail?.email}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {getUserDetail?.address?.city}
                </Typography>
            </CardContent>
        }

    </div>;
};

export default ProductDetailPage;

export const getStaticPaths = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    const getProduct = response?.data?.map((data: any) => {
        return {
            params: {
                productId: data?.id.toString()
            }
        }
    })
    return {
        paths: getProduct,
        fallback: true
    }
}

export const getStaticProps = async (props: any) => {
    const { params } = props;
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params?.productId}`);

    return {
        props: {
            getUserDetail: response?.data
        }
    }
}