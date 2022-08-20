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
    css filter属性blur实现图片的模糊虚化，filter还可以实现亮度、对比度阴影、灰度、色相旋转、图片反转、透明度、饱和度的调整
    setInterval方法的使用： 方法会重复执行一个函数，第一个参数为函数，第二个参数是时间间隔，取消执行需要使用clearInterval方法，传递要取消的setInterval
    图片全屏背景的展示css设置