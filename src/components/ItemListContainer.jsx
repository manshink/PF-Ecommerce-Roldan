function ItemListContainer (props){

    const greeting = props.ItemListContainer

    return(
        <div className="flex flex-row w-full  h-[30vh]">
            <div className="flex flex-row ustify-center items-center basis-[70%] pt-10 pb-10 ml-20 bg-gray-100">
                <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Store.</h1>
                <h1 className="text-5xl font-bold text-gray-600">Gift magic this holiday.</h1>
            </div>
            <div className="basis-[30%]">

            </div>
            
        </div>    
    )

}



export default ItemListContainer;