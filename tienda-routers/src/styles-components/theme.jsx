import styled from "styled-components";

export const color ={
    primary : 'blue',
    secondary: 'darkgray',
    danger :'red',
    warning :'yelow',
    rosado : '#c71550',
    gris : '#333',
    logth: '#dfff5ff'
    
};

export const theme = {
    fg: '#BF4f74',
    bg : 'white0'

};

export const invertTheme = ({fg,bg}) => ({

    fg:bg,
    bg:fg
});

export const ButtonVM = styled.button`
    color: ${props => props.theme.fg};
    border : 2px solid ${props => props.theme.fg};
    backgraund : ${props => props.theme.bg};

    font-size: 1em;
    margin: 0;
    paddin: 0.25em 1em;
    border-radius: 3px;
    cursor: Pointer;
    `;