import { Link } from "react-router-dom";

const Book = ({ book }) => {
  
    const { bookId, bookName, author, image, category, publisher, tags, rating, totalPages } = book
    return (

        /* There are two card style first one made by me second one is from daisyUi */


        // <div className=" bg-white border border-gray-200 rounded-2xl text-black">
        //     <div className="flex justify-center bg-gray-200 rounded-2xl p-4">
        //         <img className="h-46" src={image} alt="" />
        //     </div>
        //     <div className="p-3">
        //         <div>
        //             <p>{category}</p>
        //         </div>
        //         <h1 className="text-xl font-bold">{bookName}</h1>
        //         <p><small>By: {author}</small></p>
        //         <div className="flex justify-between">
        //             <p>{tags}</p>
        //             <div>
        //                 <p>{rating}</p>
        //             </div>
        //         </div>
        //     </div>


        <Link to={`books/${bookId}`}>
            <div className="card bg-slate-600 w-96 shadow-xl p-5 ">
                <figure className="bg-blue-200 py-8 rounded-2xl">
                    <img className="h-[166px] "
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className=" flex justify-center gap-5">
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-soft btn-success">{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                    </h2>
                    <p className="pb-4">By: {author}</p>
                    <div className="card-actions justify-between border-dotted border-t-1 pt-3">
                        <div>
                            {category}
                        </div>
                        <div className="flex gap-6">
                            <div>{rating}</div>
                            <div>Total Pages: {totalPages}</div>
                            <div className="rating">
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />
                                <input type="radio" name="rating-4" className="mask mask-star-2 bg-green-500" />

                            </div>
                            <div>{rating} </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>

    );
};

export default Book;