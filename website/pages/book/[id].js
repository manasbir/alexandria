import {useRouter} from 'next/router'
import { Document, Page } from 'react-pdf';

const Book = () => {

    const router = useRouter()
    const id = router.query.id
    return(
        <>
        <h1 style={{
            color: 'black'
        }}>
            this is book{id}
        </h1>

        <Document file="http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf">
            <Page/>
        </Document>
        </>
    )

    
}

export default Book;