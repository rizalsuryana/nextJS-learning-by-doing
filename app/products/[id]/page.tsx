type ProductPageProps = {
    params: Promise<{id: string}>
}

export default async function ProductPage({ params }: ProductPageProps){
    const {id} = await params;
    console.log(id);
    return(
        <div>
            Product Detail Page
        </div>
    )
}