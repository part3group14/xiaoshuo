import styled from 'styled-components'
export const StatistWrap = styled.div `
.site-demo-title {
  position: reltive;
  left: 200px;
  right: 0;
  top: 50px;
  height: 100%;
  border-left: 0px;
}
.layui-tab-card {
  border: 1px solid #e2e2e2;
  border-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.1);
}
.layui-tab {
  margin: 10px 0;
  text-align: left!important;
}
.layui-tab-card>.layui-tab-title {
  background-color: #f2f2f2;
}
.layui-tab-title {
  position: relative;
  left: 0;
  height: 40px;
  white-space: nowrap;
  font-size: 0;
  border-bottom: 1px solid #e2e2e2;
  transition: all .2s;
  -webkit-transition: all .2s;
}
.layui-tab-card>.layui-tab-title li {
  margin-right: -1px;
  margin-left: -1px;
}
.layui-tab-title li {
  float:left;
  font-size: 14px;
  transition: all .3s;
  -webkit-transition: all .3s;
  position: relative;
  line-height: 40px;
  height:40px;
  min-width: 65px;
  padding: 0 10px;
}
.layui-tab-title li .layui-tab-close {
  position: relative;
  margin-left: 8px;
  top: 1px;
  color: #c2c2c2;
}
.layui-tab-title .layui-icon {
  font-size: 20px;
}
.layui-tab-card>.layui-tab-title .layui-this {
  background-color: #fff;
}
body .layui-layout-admin .site-demo {
  bottom: 82px;
  padding: 0;
  height: 100%;
}
.layui-layout-admin .site-demo-body {
  top: 117px;
}
.layui-tab-content.site-demo.site-demo-body{
  display:flex;
  flex-direction:colum;
  flex-wrap:wrap;
}
.layui-tab-item {
  height: 100%;
}
.x-nav {
  padding: 0 20px;
  position: relative;
  z-index: 99;
  border-bottom: 1px solid #e5e5e5;
  line-height: 39px;
  height: 39px;
  overflow: hidden;
}
.layui-btn-small {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  font-size: 12px;
}
.layui-btn {
  display: inline-block;
  width:36px;
  height: 30px;
  padding: 0 18px;
  background-color: #2fb9d4;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  opacity: .9;
  text-align:center;
}
.layui-icon.icon-shuaxin.iconfont{
  margin:-7px
}
`

export const EchartsWrap = styled.div `
flex:1;
padding:0 15px;
width:625px;
.panel {
  border: 1px solid #EEE;
  margin-bottom: 20px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
  background: #fff;
  position:relative;
}
.panel-heading {
  font-family: "Microsoft YaHei","Helvetica Neue";
  border-bottom: 1px solid #EEE;
  padding: 1em;
  font-size: 16px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-color: #eff2f7;
  font-weight: 300;
  border-left: 5px solid #2fb9d4;
}
.panel-body {
  padding: 15px;
}
#main{
  height: 350px;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    position: relative;
    background: transparent;
}
`