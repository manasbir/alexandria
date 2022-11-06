import {useRouter} from 'next/router'

const Book = () => {

    const router = useRouter()
    const id = router.query.id
    return(
        <div>
        <h1 style={{
            color: 'black'
        }}>
            this is book{id}
        </h1>

        <iframe src="https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf" ></iframe>
         </div>
    )
}

export default Book;
