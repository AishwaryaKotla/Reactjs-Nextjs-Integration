function ArticleListByCategory({articles, category}) {

    return (<>
        <h1>List of Articles for the respective category {category}</h1>
        {
            articles.map(article => {
                return (
                    <div key={article.id}>
                        <h2>
                            {article.id} {article.title} | {article.description}
                        </h2>
                    </div>
                )
            })
        }
    </>)

}

export default ArticleListByCategory

export async function getServerSideProps(context) {

    const { params, req, res, query } = context
    console.log(query);
    console.log(req.headers.cookie);
    res.setHeader('Set-Cookie', ['name=Aishwarya'])
    
    const { category } = params
    const response = await fetch(`http://localhost:4000/news?category=${category}`)
    const data = await response.json()

    return {
        props: {
            articles: data,
            category
        }
    }
}

