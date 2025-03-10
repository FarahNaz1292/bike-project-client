import ShopServices from '@/Components /ShopServices/ShopServices'
import React from 'react'

const shopServices =  async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {

  const { id } = await params
  console.log(id);
  return (
   <ShopServices/>
  )
}

export default shopServices