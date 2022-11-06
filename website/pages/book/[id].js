import {useRouter} from 'next/router'
import Pdf from '../pdftest'
import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

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
        <h1 style={{
            color: 'black'
        }}>
            this is book{id}
        </h1>
{/* 
<Document src="https://www.gutenberg.org/files/6130/old/6130-pdf.pdf"></Document> */}

<Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
        </div>
    )

    
}


export default Book;