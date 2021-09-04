import styled from 'styled-components';

const Div=styled.div`
   .topButton{
     background: #F0EFF4;
     text-align: center;
     margin-bottom: 5px;
   }
  .buttons {
    display: grid;
    grid-template-columns: repeat(4,25%);
    grid-template-rows: repeat(4, 56px);
    background: #F0EFF4;
    padding: 6px 10px;
    button {
      font-size: 22px;
      background: #F3F3F3;
      margin: 3px;
      border: 1px solid #CACACA;
      &.ok{
        color: white;
        font-size: 20px;
        font-weight: lighter;
        background: #1671CE;
        grid-row-start: 3;
        grid-row-end: 5;
        grid-column-start: 4;
        grid-column-end:5;
      }
      &.zero {
        grid-column-start: 2;
        grid-column-end: 4;
      }
    }
  }
`
export {Div}