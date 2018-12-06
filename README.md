[![Build Status](https://www.travis-ci.org/yanjian2323/VUE-UI.svg?branch=master)](https://www.travis-ci.org/yanjian2323/VUE-UI)

## 介绍
熟悉vue的各个特性，用vue来造一个vue-ui的轮子



## 开始使用
1. 安装 yanjian-vue-ui
```
npm i -D yanjian-vue-ui
```
2. 引入css(后续会改成用sass变量引入)
```css {
       --button-height: 32px;
       --font-size: 14px;
       --button-bg: white;
       --button-active-bg: #eee;
       --border-radius: 4px;
       --color: #333;
       --border-color: #999;
       --border-color-hover: #666;
     }

```
3. 引入组件
```
import { Button, ButtonGroup } from 'yanjian-vue-ui'
```