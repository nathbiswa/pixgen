import CardPhoto from "./CardPhoto";


const GlobalFetch = async () => {
    const res = await fetch("https://pixgen-khaki.vercel.app/data.json");
    const photos = await res.json();
    const allProduct = photos.slice(0, 10);

    return (
        <div>
            <h2>Top Generations </h2>
            <div className="grid grid-cols-4 gap-3">
                {
                    allProduct.map((photo) => <CardPhoto key={photo.id} photo={photo}></CardPhoto>)
                }
            </div>
        </div>
    );
};

export default GlobalFetch;