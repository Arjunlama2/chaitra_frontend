import React from 'react'

function Card(props) {
 
 const { data } = props;
  return (
    <div>
      {data ? (
        <div className="w-[20vw]">
          <div>
            <img src={`${data.imageLink}`} alt="" />
          </div>
          <div className="w-[20vw]">
            <p>title:{data.title}</p>
            <p>Descrition:{data.discription}</p>
          </div>
        </div>
      ) : (
        <div> no data</div>
      )}
    </div>
  );
  
}

export default Card


