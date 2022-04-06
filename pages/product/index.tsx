import React, { FC } from 'react';
import Link from 'next/link';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Product: FC<any> = (props) => {
    const { getUsers }: any = props;
    return <div>
        <Link href='/'>Back</Link>
        <h2>Main Product</h2>
        <Card sx={{ width: 1000, marginLeft: 15 }}>
            {getUsers?.map((user: any, index: any): any => {
                return (
                    <>
                        <CardContent key={index}>
                            <Typography gutterBottom variant="h5" component="div">
                                <Link href={`product/${user?.id}`}>{user?.name}</Link>
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                                {user?.email}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {user?.address?.city}
                            </Typography>
                        </CardContent>
                    </>
                );
            })}

        </Card>
    </div >;
};

export default Product;

export const getStaticProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        props: {
            getUsers: response?.data
        }
    }
}