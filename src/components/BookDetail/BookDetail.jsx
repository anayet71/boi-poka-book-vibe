import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
    const {bookId} = useParams()
    const id = parseInt(bookId)
    
    const data = useLoaderData()

    
    const book = data.find(book => book.bookId === id)
    const {bookId: currentBookId, image} = book

    const handleMarkAsRead =(id) =>{
        addToStoredReadList(id)
    }

    return (
        <div className="my-5">
            <h2>Book Details: {currentBookId}</h2>
            <img className="w-1/5" src={image} alt="" />
            <br />
            <button onClick={ ()=> handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-5">Mark as Read</button>
            <button className="btn btn-accent">Add to Wishlist</button>

        </div>
    );
};

export default BookDetail;