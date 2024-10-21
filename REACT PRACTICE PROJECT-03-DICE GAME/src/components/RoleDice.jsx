import React, { useState } from 'react'
import styled from 'styled-components'

const RoleDice = ({
    currentDice, roleDice
}) => {


    return (
        <DiceContainer>
            <div
                onClick={roleDice}
                className='dice'>
                <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice_1" />
            </div>
            <p>Click On Dice To Roll</p>
        </DiceContainer>
    )
}

export default RoleDice

const DiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 48px;
    align-items: center;

    p{
        font-size:24px;
    }
    .dice{
        cursor: pointer;
    }
`