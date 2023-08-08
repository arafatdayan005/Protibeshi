import React, { useEffect, useState } from 'react'
import magnify from './../../Images/search.svg'
import img from './../../Images/homepage.svg'
import ItemsCards from './ItemCads'
import { getAllItems } from '../../API/Item'

function Home() {
    const [data, setData] = useState([])
    const [seeAll, setSeeAll] = useState(false)
    const [search, setSearch] = useState('')

    useEffect(() => {
        getAllItems()
            .then(data => setData(data))
    }, [])
    return (
        <>
            <section>
                <div className='flex justify-between items-center max-w-[85%] mx-auto'>
                    <div>
                        <p className='text-6xl font-medium text-black'> <span>Why buy when <br></br> you can</span> <span className='text-[#2cb6a9]'>borrow</span>?</p>
                        <div className='relative border border-[#e1e2e4] rounded-full mt-8 flex items-center justify-around overflow-hidden'>
                            <img className='object-cover' src={magnify} alt='search'></img>
                            <input onChange={(e) => setSearch(e.target.value)} className='outline-none text-xl -ml-4 mr-8' type='textbox' placeholder='Bikes, Drones, Cameras'></input>
                            <button className='bg-[#4E3CB8] rounded-full text-white font-semibold py-3 px-6'>
                                Search
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={img} alt='none'></img>
                    </div>
                </div>
            </section>
            <section className='bg-[#F4F5F6] pt-12'>
                <div className='max-w-[85%] mx-auto'>
                    <div>
                        <p className='font-bold text-[48px] mb-12 text-center'>Recently Added</p>
                    </div>
                    <div className='grid w-full grid-cols-4 gap-8 justify-center items-center bg-[#F4F5F6]'>
                        {
                            data.filter((item) => {
                                return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search)
                            }).slice(0, seeAll ? 20 : 8).map(item =>
                                <ItemsCards key={item._id} item={item}></ItemsCards>
                            )
                        }
                    </div>
                    <div className='w-full flex justify-center'>
                        <button onClick={() => setSeeAll(true)} className='my-16 mx-auto bg-[#4E3CB8] rounded-xl px-6 py-3 text-white font-semibold'>
                            More
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;