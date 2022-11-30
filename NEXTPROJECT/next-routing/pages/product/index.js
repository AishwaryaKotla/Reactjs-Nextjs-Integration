import Link from 'next/link'

function ProductList({productId = 100}) {
    return <>
    <h2>Product 1</h2>
    <h2>Product 2</h2>
    <h2>Product 3</h2>

    <br>
    </br>

    <Link href={`/product/${productId}`}>
        This is product prop
    </Link>
    <br/>

    <Link href='/'>
        Click to navigate back to Home page
    </Link>
    </>
}

export default ProductList;