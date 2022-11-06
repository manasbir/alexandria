import {useRouter} from 'next/router'
import Pdf from '../pdftest'

const Book = () => {

    const router = useRouter()
    const id = router.query.id
    return(
        <h1 style={{
            color: 'black'
        }}>
            this is book{id}
        </h1>

        {Pdf}
    )

    
}

export default Book;