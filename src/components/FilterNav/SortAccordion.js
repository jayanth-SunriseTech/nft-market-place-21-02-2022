import React from 'react';
import './SortAccordion.css'

function SortAccordion({id,heading,dataBsTarget,collapseId,SortOption1,SortOption2,SortOption3,SortOption4,SortOption5}) {
  return (
    <div>
        <div class="accordion SortAccordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item SortAccordion-item">
    <h2 class="accordion-header" id={id}>
      <button class="accordion-button collapsed first " type="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="false" aria-controls="flush-collapseOne">
        <div className='row'>
        
          <div className="col-8 Sorttext">
              {heading}
          </div>
          {/* <div className="col-2 icon">
          
          </div>  */}
        </div>
      </button> 
    </h2>
    <div id={collapseId} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body SortAccordion_body">
          <ul>
          <li>{SortOption1}</li>
          <li>{SortOption2}</li>
          <li>{SortOption3}</li>
          <li>{SortOption4}</li>
          <li>{SortOption5}</li>
          </ul>
          </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default SortAccordion