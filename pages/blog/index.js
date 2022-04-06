import React from 'react';
import Link from 'next/link'

const Blog = () => {
    return <div>
        <Link href={'/blog/first'}>First</Link> &nbsp;
        <Link href={'/blog/second'}>Second</Link> &nbsp;
        <h2>Blog of file</h2>
    </div>;
};

export default Blog;
