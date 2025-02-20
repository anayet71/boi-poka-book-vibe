import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreReadList } from '../../utility/addToDb';
import Book from '../Book/Book';


const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('')

    const allBooks = useLoaderData()

    useEffect(() => {
        const storedReadList = getStoreReadList()
        const storedReadListInt = storedReadList.map(id => parseInt(id))
        //worst way
        console.log(storedReadList, storedReadListInt, allBooks, 'all')

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));

        setReadList(readBookList)
    }, [])


    const handleSort = sortType => {
        setSort(sortType)

        //
        if (sortType === 'No of pages') {
            const sortedReadList = [...readList].sort((a, b) => b.totalPages - a.totalPages)
            setReadList(sortedReadList)
        }
        if (sortType === 'Ratings'){
            const sortedReadList = [...readList].sort((a,b) => b.rating - a.rating);
            setReadList(sortedReadList)
        }
    }
    return (
        <div>
            <h3 className="text-5xl my-8 text-center"></h3>
            <details className="dropdown">
                <summary className="btn m-1 text-3xl">
                    {
                        sort ? `Sort by: ${sort}` : 'Sort by'
                    }
                </summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('Ratings')}><a> Rating</a></li>
                    <li onClick={() => handleSort('No of pages')}> <a>Sort by page</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read list</Tab>
                    <Tab>Wish list</Tab>
                </TabList>

                <TabPanel>
                    <h2>Books I read:{readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Books wish list </h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBooks;