
const Book = ({ book }) => {
    console.log(book, 'bbook')
    const { bookName, author, image, category, publisher, tags ,rating } = book
    return (
        <div className=" bg-white border border-gray-200 rounded-2xl text-black">
            <div className="flex justify-center bg-gray-200 rounded-2xl p-4">
                <img className="w-36" src={image} alt="" />
            </div>
            <div className="p-3">
                <div>
                    <p>{category}</p>
                </div>
                <h1 className="text-xl font-bold">{bookName}</h1>
                <p><small>By: {author}</small></p>
                <div className="flex justify-between">
                    <p>{tags}</p>
                    <div>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;