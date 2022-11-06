import {useRouter} from 'next/router'

const Book = () => {

    const router = useRouter()
    const id = router.query.id
    let book;
    if (id == 1) {
        book = "http://160592857366.free.fr/joe/ebooks/ShareData/The%20Republic%20by%20Plato.pdf" // plato the republic
    } else if (id == 2) {
        book = "https://www.marcuswitcher.com/Euripides,%20Medea-1.pdf" // medea
    } else if (id == 3) {
        book = "https://www.boyle.kyschools.us/UserFiles/88/The%20Odyssey.pdf" // odyssey
    } else if (id == 4) {
        book = "https://www.gutenberg.org/files/6130/old/6130-pdf.pdf" // iliad
    } else if (id == 5) {
        book = "https://www.gutenberg.org/cache/epub/28/pg28-images.html" // aesop fable
    }
    return(
        <div>
        <h1 style={{
            color: 'black'
        }}>
            this is book{id}
        </h1>

        <iframe src= {book}></iframe>
         </div>
    )
}

export default Book;
