import React from 'react';
import prisma from "@/lib/prisma";

const Page = async ({params}: {params: Promise<{id: string}>}) => {
    const {id} = await params
    const post = await prisma.post.findFirst({
        where: {
            id: Number(id)
        }
    })
    return (
        <div>
            <p>{post?.id}</p>
        </div>
    );
};

export default Page;
