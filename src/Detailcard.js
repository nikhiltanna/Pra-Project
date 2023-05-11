export const Detailcard=({name,image})=>
{console.log(name,image);
    return (
        <div className='Detailcard'>
        <img src={image}></img>
         <h1>{name}</h1>
        </div>
    )
}