import styled from "styled-components"

export const Button = styled.button`
    background-color: black;
    padding: 10px 18px;
    color: white;
    border-radius: 5px;
    min-width: 220px;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;



&:hover{
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.4s background ease-in-out;
    cursor: pointer;
}
`
export const OutlineButton = styled(Button)`
background-color: white;
border: 1px solid black;
color: black;
&:hover{
    background-color: red;
    border: 1px solid white;
    color: White;
    cursor: pointer;
}
`
