import React from 'react'
import './Export.css'
import export_1 from '../../assets/hi.jpg'
import export_2 from '../../assets/2.jpg'
import export_3 from '../../assets/33.jpg'

const Export = () => {
  return (
    <div className='exports'>
<div className="export">
<img src={export_1} alt="" />
<div className="caption">
<p>Specialty Coffee</p>
</div>
    

</div>
<div className="export">
<img src={export_2} alt="" />
<div className="caption">
<p>Micro-Lot Coffee </p>
</div>

</div>
<div className="export">
<img src={export_3} alt="" />
<div className="caption">
<p>Organic Coffee</p>
</div>

</div>
    </div>
  )
}

export default Export