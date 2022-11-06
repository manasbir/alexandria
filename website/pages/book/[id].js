import {useRouter} from 'next/router'
import { Document, Page } from 'react-pdf/renderer';
import React, { useState } from 'react';

const Book = () => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    const router = useRouter()
    const id = router.query.id
    return(
        <div>
            <Document file="./The Republic by Plato.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    )

    
}

export default Book;