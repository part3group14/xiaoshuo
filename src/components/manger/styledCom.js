import styled from 'styled-components'

export const NewsBar = styled.div`
  display: block;
  margin-top:20px;
  margin-bottom: 10px;
  padding: 5px;
  line-height: 22px;
  border-radius: 0 2px 2px 0;
  background-color: #f2f2f2;
  .layui-btn.layui-btn-danger {
    background-color: #FF5722;
  }
  .layui-btn {
    display: inline-block;
    height: 38px;
    line-height: 38px;
    padding: 0 18px;
    background-color: #2fb9d4;
    color: #fff;
    white-space: nowrap;
    text-align: center;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    opacity: .9;
  }
  .layui-btn+.layui-btn {
    margin-left: 10px;
  }
  .x-right {
    float: right;
    height: 42px;
    line-height: 42px;
  }
`