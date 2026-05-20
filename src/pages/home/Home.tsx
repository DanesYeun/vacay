import hero from '../../assets/images/hero.jpg';

const Home = () => {

    return (
        <div
            className="hero h-screen justify-start"
            style={{
                backgroundImage: `url(${hero})`,
            }}>
            <div className="hero-content text-neutral-content">
                <div className="max-w-md md:max-w-lg text-black">
                    <code className="mb-5 font-bold uppercase">Kapoy caption</code>
                    <p className="mb-5 text-5xl">
                        Ysa & Danes' collection of memories
                    </p>
                    <button className='btn btn-outline btn-primary'>Go to memory lane</button>
                </div>
            </div>
        </div>
    )
}

export default Home