import CardPhoto from '@/components/CardPhoto';
import React from 'react';

const AllPhotPage = async () => {
    const res = await fetch("https://pixgen-khaki.vercel.app/data.json");
    const photos = await res.json();
    console.log(photos, 'All photos');
    return (
        <div>
            <h1 className='text-2xl font-bold my-3'>All Photos</h1>
            <div className='grid grid-cols-4 gap-3'>
                {photos.map(photo => <CardPhoto key={photo.id} photo={photo}></CardPhoto>)}
            </div>
        </div>
    );
};

export default AllPhotPage;