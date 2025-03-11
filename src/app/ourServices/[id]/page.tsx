import SingleShopServicePage from '@/Components /ShopServices/SingleShopServicePage';
import React from 'react'

const singleServicePage
  =  async({
    params,
  }: {
    params: Promise<{ id: string }>
  }) => {
  
    const { id } = await params
    console.log(id);
    return (
     <>
     <SingleShopServicePage/>
     </>
    )
  }

export default singleServicePage
