import React, {Fragment}from 'react'; 
export default (props)=>(
    <Fragment>
        <h2 className="text-3xl font-bold text-center mt-12">{props.title}</h2>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 overflow-y-scroll h-48 ">
            {
                props.data.map(
                    el => (
                        <props.card element={el}/>
                    )
                )
            }
        </div>
    </Fragment>
)