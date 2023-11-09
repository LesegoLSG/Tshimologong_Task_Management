import React from 'react';
import '../Stylesheet/Pagination.css';
import { PageChangeProps, TaskProps } from '../Components/Reusable/Properties';


const Pagination = ({ totalPosts, postsPerPage, setCurrentPage, currentPage, lastPostIndex, firstPostIndex }: PageChangeProps) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i);
    }

    const PreviousPage = () => {
        if (currentPage !== firstPostIndex) {
            setCurrentPage(currentPage - 1);
        }
    }

    const NextPage = () => {
        if (currentPage !== lastPostIndex) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className="bg-green-500 flex justify-center">

            <button onClick={PreviousPage}>Prev</button>
            {

                pages.map((page, index) => {
                    return (
                        <div>

                            <button
                                className={`bg-white w-[1.5rem] h-[1.5rem] mx-1 ${page === currentPage ? "active" : ""}`}
                                key={index} onClick={() => setCurrentPage(page)}>{page}</button>


                        </div>
                    )
                })

            }
            <button onClick={NextPage}>Next</button>
        </div>
    )
}

export default Pagination