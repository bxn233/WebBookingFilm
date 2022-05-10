
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {

    const { isLoading } = useSelector(state => state.LoadingReducer)

    return (
        <Fragment>
            {
                isLoading === true ?
                    <div className='fixed w-full h-full top-0 left-0 bottom-0 flex justify-center items-center' style={{ backgroundColor: 'rgb(250, 250, 250)', zIndex: 1000 }}>
                        <img src='https://img.pikbest.com/png-images/20190918/cartoon-snail-loading-loading-gif-animation_2734139.png!bw340' alt='loading' />
                    </div> : ''
            }
        </Fragment>

    )
}
