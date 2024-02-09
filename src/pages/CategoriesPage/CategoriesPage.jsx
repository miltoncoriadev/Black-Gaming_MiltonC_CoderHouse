import React from 'react'

import ListCategories from '../../components/ListCategories/ListCategories'

const CategoriesPage = () => {
  return (
    <div>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '30px', marginTop: '2rem' }}>CATEGORIAS</h1>
      <ListCategories />
    </div>
  )
}

export default CategoriesPage