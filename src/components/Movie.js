import React, { useEffect, useState } from 'react'
import { FaStar } from "react-icons/fa";

const Movie = ({ posterUrl, movieName, rating }) => {
    let [ratingArr, setRatingArr] = useState([])
    useEffect(() => {
        let tempRatingArr = []

        for (var i = 0; i < rating; i++) {
            tempRatingArr.push(1)
        }

        for (var i = 0; i < (5 - rating); i++) {
            tempRatingArr.push(0)
        }

        setRatingArr(tempRatingArr)
    }, [])

    return (
        <div>
            <div className='relative h-0 pb-3/2'>
                <img className='absolute inset-0 w-full h-full' src={posterUrl} />
            </div>
            <div className='bg-slate-700 pb-4 pt-2 px-4 rounded-b'>
                <p className='text-xl font-semibold text-gray-200 mb-1'>{movieName}</p>
                <div className='flex mb-4'>
                    {
                        ratingArr.map((star, index) => {
                            if (star === 1) {
                                return (
                                    <FaStar
                                        color="orange" size={20} />
                                )
                            } else {
                                return (
                                    <FaStar
                                        color="lightgray" size={20} />
                                )
                            }
                        })
                    }
                </div>
                <div className='border border-gray-200 text-center text-blue-400 text-semibold rounded mt-2 cursor-pointer py-2 hover:bg-gray-200 hover:text-slate-700'>
                    <p>{}</p>
                </div>
                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={() => { }}>test</button>
            </div>
        </div>
    )
}

export default Movie