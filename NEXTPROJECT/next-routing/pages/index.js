import Link from 'next/link';
import { useRouter} from 'next/router'

function Home() {

    const router = useRouter();

    const handleClick = () => {
        router.replace('/product');
    }
    return <div>
        <Link href='/blog'>
         
         Click to navigate to Blog Page
         
        </Link>
        <br></br>

        <Link href='/product'>
            Click to navigate to the product page
        </Link>
        <button onClick={handleClick}>
            Place Order
        </button>
    </div>
}

export default Home;