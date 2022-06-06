export const Item = (items) => {
    return(
        <div  key={Item.id}>
        <hr/>
        <h2>{Item.nombre}</h2>
        <img src= {Item.img} />
        <p>{Item.desc}</p>
        <h4>{Item.precio}</h4>
      </div>
      )

        
    
}