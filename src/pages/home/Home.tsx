import hero from '../../assets/images/hero.jpg';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../navigation/config/RouteConfig';

const Home = () => {
    const navigate = useNavigate()

    return (
        <div
            className="hero h-screen justify-start"
            style={{
                backgroundImage: `url(${hero})`,
            }}
        >
            <div className="hero-content text-neutral-content">
                <div className="max-w-md md:max-w-lg text-black">
                    <code className="mb-5 font-bold uppercase">Kapoy caption</code>
                    <p className="mb-5 text-5xl">
                        Ysa & Danes' collection of memories
                    </p>
                    <a 
                        className='btn btn-outline btn-primary'
                        onClick={() => navigate(RoutePath.Memories)}
                    >
                        Go to memory lane
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home