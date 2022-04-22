import React from 'react';
import Item from '../Item/Item';
import './ItemListContainer.css'

function ItemListContainer({ greeting }) {
  const itemList = [
    {
      id: 1,
      title: 'Batman',
      price: '$450',
      imageUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/184/069/products/batman80anivol191-5a4d6411b2ef55dd1315908772450482-480-0.jpg'
    },
    {
      id: 2,
      title: 'Superman',
      price: '$600',
      imageUrl: 'https://www.ecccomics.com/content/productos/10036/Superman_109_30_1a_cubierta_CORR.jpg'
    },
    {
      id: 3,
      title: 'Flash',
      price: '$350',
      imageUrl: 'https://www.ecccomics.com/content/productos/5447/Flash_28.jpg'
    }
  ]

  return (
    <div className='list-item-container'>
        {itemList.map((item, i) => <Item item={item} key={item.id} />)}
    </div>
  )
}

export default ItemListContainer