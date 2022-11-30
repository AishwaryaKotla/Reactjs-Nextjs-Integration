import Link from 'next/link';

function Home() {
    return <div>
        <Link href='/blog'>
         
         Click to navigate to Blog Page
         
        </Link>
        <br></br>

        <Link href='/product'>
            Click to navigate to the product page
        </Link>
    </div>
}

export default Home;