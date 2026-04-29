import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PhotoDetailesPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "Params id");
    const res = await fetch("https://pixgen-khaki.vercel.app/data.json");
    const photos = await res.json();
    const resPectedPhoto = photos.find(photo => photo.id == id);
    console.log(resPectedPhoto);

    return (
        <div>
            <Card className="w-[400px] mx-auto" variant="transparent">
                <div className='relative w-full aspect-square'>
                    <Image
                        src={resPectedPhoto.imageUrl}
                        alt={resPectedPhoto.title}
                        fill
                        className='object-cover rounded-xl'
                    />
                </div>
                <Card.Header>
                    <Card.Title className='text-2xl font-bold'>{resPectedPhoto.title}</Card.Title>
                    <Card.Description>{resPectedPhoto.prompt}</Card.Description>
                </Card.Header>
                <Card.Content>
                    <p>{resPectedPhoto.model}</p>
                </Card.Content>
                <Link href={`/all-photos`}>
                    <Button className='w-full' variant='primary'>All Photos</Button>
                </Link>

            </Card>
        </div>
    );
};

export default PhotoDetailesPage;