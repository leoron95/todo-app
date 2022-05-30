import React from 'react'

export const Header = ({toggleDark}) => {
    return (
        <>
            <header>
                <div className={` ${toggleDark ? ' bg-[url("../../images/bg-mobile-dark.jpg")] sm:bg-[url("../../images/bg-desktop-dark.jpg")]' : 'bg-[url("../../images/bg-mobile-light.jpg")] sm:bg-[url("../../images/bg-desktop-light.jpg")]'} h-[300px] w-full bg-no-repeat bg-contain sm:bg-cover mx-auto `}>
                </div>
            </header>
        </>
    )
}
