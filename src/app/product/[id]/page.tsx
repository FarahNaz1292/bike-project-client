

import SingleProductPage from '@/Components /Products/SingleProductPage'
import React from 'react'

const product = async({
  params,
}: {
  params: Promise<{ id: string }>
}) => {

  const { id } = await params
  console.log(id);
  
  return (
  <SingleProductPage />
  )
}

export default product