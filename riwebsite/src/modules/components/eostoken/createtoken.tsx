import React from 'react'
import FreeToken from './freetoken'
import PremiumToken from './premiumtoken'

export default function CreateToken(){

    return (
        <div>
            <FreeToken/>
            <PremiumToken/>
        </div>
    )
}