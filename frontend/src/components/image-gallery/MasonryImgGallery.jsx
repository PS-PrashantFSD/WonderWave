import React from 'react'
import galleryImgages from './galleryImage'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'



const MasonryImgGallery = () => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
        <Masonry gutter= '1rem'>
            {
                galleryImgages.map((item, index) => (
                    <img className='masonry__img'
                    src={item} 
                    key={index} 
                    alt='' 
                    style={{'width':'100%', 'display': 'block', 'borderRadius': '10px'}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
  )
}

export default MasonryImgGallery