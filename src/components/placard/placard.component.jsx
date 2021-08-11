import React from 'react'
import './placard.styles.scss'

const Placard = ({title,link, description, price}) => (
    <div className='placard'>
    <h3>
        {title}
    </h3>
    <p>
        {price} Algo at <span><a href={link}>AB2 Gallery</a></span>
    </p>
    <p>
        {description}
    </p>
</div>
)

export default Placard