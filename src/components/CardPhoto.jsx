import { Card, Chip } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoMdHeart } from 'react-icons/io';
import { MdFileDownload } from 'react-icons/md';

const CardPhoto = ({ photo }) => {
    const photos = photo;
    console.log(photos, "photos");

    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image src={photos.imageUrl}
                    fill
                    alt={photos.title}
                    className='rounded-xl object-cover'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"

                />
                <Chip className='absolute top-3 right-3'>{photos.category}</Chip>
            </div>

            <div>
                <h2>{photos.title}</h2>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <IoMdHeart />
                    {photos.likes}
                </div>
                <div className='flex items-center gap-2'>
                    <MdFileDownload />
                    {photos.downloads}
                </div>

            </div>
            <button className='w-full border cursor-pointer'>View</button>
        </Card>
    );
};

export default CardPhoto;