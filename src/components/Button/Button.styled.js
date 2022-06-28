import styled from 'styled-components'
export const ButtonMain = styled.button`
background-color: ${({ type }) => type === 'filed' ? 'var(--accent-color)' : 'transparent'};
color: ${({ type }) => type === 'filed' ? '#fff' : '#2F2F37'};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap:10px;
padding: 8px 16px;
min-height: 40px;
border: transparent;

font-style: normal;
text-transform: uppercase;
font-weight: 700;
font-size: 14px;
line-height: 24px;
:hover{
    background-color: ${({ type }) => type === 'filed' && '#fff'};
    color: var(--accent-color) 
}
`
export const ButtonDisabled = styled(ButtonMain)`
background-color: var(--disabled-color);
color: #fff;
:hover{
  background-color: var(--disabled-color);
color: #fff;  
}
`
