# ***前端开发练手50个demo ~~***
## 开发经验记录
## day 1 卡片切换
    <!doctype html>是个什么？
    告知浏览器使用HTML规范，有4.01和5版本
    HTML4.01有三种规范Strict、 Transitional 和 Frameset
    HTML5简单化只有一种<!DOCTYPE HTML>

    demo可以练习到flex布局、transition过度、背景图片设置使用

    flex属性使用在子项中，是flex-grow、flex-shrikn、 flex-basis三个属性的简写；使其自适应容器中可以用的空间
    transition：元素在不同状态之间切换的时候可以设置css的某些属性进行动画过度

## day 2 进度条
    此项目练习了css自定变量、通过flex布局和transform+top类型属性实现居中、transition、z-index图层、伪类（：）、伪元素（：：）
    dom获取单个元素最好byid，可以直接返回一个对象，querySelectorAll通过css选择器来获取元素list

## day 3 导航旋转页面动画
    学习了通过positon来实现绝对定位的使用
    transform来实现角度和x轴上的偏转以及transform-origin属性来实现对旋转原点的选择
    <img> 标签来进行图片的引用
    div层级使用，比如项目中导航旋转开关需要用absolute定位来固定整体位置，但又需要设置为relative来实现icon的浮动式布局进行偏移，所以设置了一个外层的div控制开关在页面中的整体位置，设置了一个圆div来开启子项icon的absolute定位
    预设活动的class，在希望活动的时候添加class属性来实现活动效果
    fontawesome开源图标库的使用

## day 4 隐藏式搜索框
    此demo比较简单，使用css伪类即可实现

## day 5 模糊背景加载
    1. css filter属性blur实现图片的模糊虚化，filter还可以实现亮度、对比度阴影、灰度、色相旋转、图片反转、透明度、饱和度的调整
    2. setInterval方法的使用： 方法会重复执行一个函数，第一个参数为函数，第二个参数是时间间隔，取消执行需要使用clearInterval方法，传递要取消的setInterval
    3. 图片全屏背景的展示css设置

## day 6 监控滚动显示盒子动画
    1. window.innerHeight接口获取浏览器视窗的高度，给滚动条添加监听函数，通过getBoundingClientRect.top来获取box关于视窗的top值，根据top值小于浏览器视窗的高度来判断展示
    2. box的top值不能直接和浏览器视窗的高度进行判读，要留出适当的空间来进行过度动画的展示
    3. nth-of-type(even)代表偶数的子项
    4. 展示和隐藏通过transition transform的x轴上偏移实现

## day 7 首页分割显示动画
    1. 练习了页面一分为二的布局模式，使用::before伪元素来在有背景图的情况下加一个颜色滤镜，加深了绝对定位的使用效果
    2. mouseenter的鼠标移动上动作监听和mouseleave鼠标移开动作的监听
    3. 通给a,b的父级添加一个class来实现在a悬停时同时改变a和b的css属性
    4. 存在问题，在频繁触发事件的时候会明显的有cpu和gpu不正常的高性能运行的情况，不知道是什么问题目前...

## day 8 登录表单文字波浪
    1. 练习了form表单的简单使用，input和label标签+margin偏移实现文字提示输出栏的实现
    2. innerHTML获取元素文本内容，map循环遍历且map会返回一个数组，join把数组中的所有元素转换一个字符串
    3. 通分别添加transition-delay的值来实现波浪效果，cubic-bezier可以改变动画运动的速度变化

## day 9 声音按钮
    1. 练习audio标签的使用，给按钮绑定点击事件，点击触发指定声音的.play()方法播放
    2. 存在多个按钮声音在点击下一个时先通过.pause()方法暂停所有声音并修改currentTime时间轴到0

## day 10 随机情话
    1. 练习了fetch的使用，是用来Javascript中发送HTTP请求，采用了Promise对象，使用起来更加简洁，模块化设计API分散在Response、Request、Headers对象上
    详细教程参考https://www.ruanyifeng.com/blog/2020/12/fetch-tutorial.html

## day 11 键盘按键监听
    1. 练习监听keydown,  按键按下后回调函数可以接收一个KeyboardEvent，对象中有key（按键值）、keyCode（按键ASCII值）、code（物理按键代码）等其他关于按下事件的属性。

## day 12 折叠面板
    1. 练习折叠面板的实现，通过添加active Class，在acitve下对展开部分进行dispaly属性设置为非none；在折叠情况下对需要折叠的部分dispaly设置为none进行隐藏
    2. 练习了对页面的布局，经验增加~

## day 13 随机事件选择
    1. 使用了textarea， 多行文本框，默认可以进行拖拽放大缩小，不能设置最大字符数量，不可使用自闭合标签，可以使用rows、cols
    2. 练习了setInterval和setTimeout的使用，通过setInterval循环煤100ms随机选中一个事件进行高亮显示，给定一个循环次数，再设置一个次数*100的定时器，在循环次数结束后关闭setInterval，实现选中来回跳动的效果
    3. 实现随机选中数组中每一个元素：通过Math.random方法生成一个0-1之间的随机小数 * 数组的长度后取整即可