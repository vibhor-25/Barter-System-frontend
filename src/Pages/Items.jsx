import React, { useEffect } from 'react'
import Menu from '../components/Menu'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import MyItemsData from '../../public/data/myitems';
import { Plus } from 'lucide-react';
import AddItem from '../components/AddItem';


const Items = () => {
    const [ShowAddItem, setShowAddItem] = useState(false)
    const [CurrentProduct, setCurrentProduct] = useState({})
    const [ShowProductInfo, setShowProductInfo] = useState(false)
    
    // Transform hardcoded data to match Cards component format
    const transformedItems = MyItemsData.map(item => ({
        itemId: item.id,
        name: item.title,
        desc: item.desc,
        description: item.desc,
        images: [item.img],
        img: item.img,
        loc: {
            city: item.loc?.city || 'Mumbai',
            lat: item.loc?.lat || 19.0760,
            lng: item.loc?.long || 72.8777
        },
        condition: 'Used',
        statusi: false,
        price: 0
    }));
    
    console.log('Transformed items:', transformedItems);

return (
    <div>
        <img src = 'public/images/MenuBg.png' alt='Background Image' className='fixed top-0 left-0 w-full h-full -z-10 object-cover'/>
        <div className='flex '>
        <Menu />
        <div>
            <div className='flex mx-20 ' >
            <h1 className='text-3xl font-bold text-center mt-10 mb-5'>My Items</h1>
            <button className='bg-[#FF4C4C] rounded-2xl translate-y-10 font-Inter text-white px-4 py-2 hover:bg-[#E04343] absolute right-20' onClick={() => setShowAddItem(true)}>
                <Plus size={20} className='inline-block mr-2 -translate-y-1/4'/>
                <span className='font-Inter font-semibold text-2xl'>Add Item</span>
            </button>
            </div>
            <Cards showMakeOffer={false} products={transformedItems} selectedLoc={'All Locations'} showDistance={false} showWishlist={false} setCurrentProduct={setCurrentProduct} setShowProductInfo={setShowProductInfo} />
        </div>
        </div>

    {ShowAddItem && <AddItem setShowAddItem={setShowAddItem} ShowAddItem={ShowAddItem}/>}
    
    </div>
)
}

export default Items