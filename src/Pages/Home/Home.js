import React from 'react'
import search from './../../Images/search.svg'
import img from './../../Images/homepage.svg'

function Home() {
    return (
        <>
            <section>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='text-6xl font-medium text-black'> <span>Why buy when <br></br> you can</span> <span className='text-[#2cb6a9]'>borrow</span>?</p>
                        <div className='relative border border-[#e1e2e4] rounded-full mt-8 flex items-center justify-around'>
                            <img src={search} alt='search'></img>
                            <input className='outline-none text-xl -ml-4 mr-8' type='textbox' placeholder='Bikes, Drones, Cameras'></input>
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
        </>
    )
}

export default Home;