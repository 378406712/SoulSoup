<view><cu-custom vue-id="0e258c0b-1" bgColor="bg-gradual-blue" isBack="{{true}}" bind:__l="__l" vue-slots="{{['backText','content']}}"><view slot="backText">返回</view><view slot="content">边框阴影</view></cu-custom><view class="cu-bar bg-white solid-bottom"><view class="action"><text class="cuIcon-title text-blue"></text>边框</view><view class="action"><switch data-event-opts="{{[['change',[['SetSize',['$event']]]]]}}" class="{{['sm',size?'checked':'']}}" bindchange="__e"></switch></view></view><view class="padding bg-white text-center"><view class="{{['padding',size?'solids':'solid']}}">四周</view><view class="{{['padding margin-top',size?'solids-top':'solid-top']}}">上</view><view class="{{['padding margin-top',size?'solids-right':'solid-right']}}">右</view><view class="{{['padding margin-top',size?'solids-bottom':'solid-bottom']}}">下</view><view class="{{['padding margin-top',size?'solids-left':'solid-left']}}">左</view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-blue"></text>阴影</view></view><view class="padding text-center"><view class="padding-xl radius shadow bg-white">默认阴影</view><view class="padding-xl radius shadow bg-blue margin-top">根据背景颜色而改变的阴影</view><view class="padding-xl radius shadow shadow-lg bg-white margin-top">长阴影</view><view class="padding-xl radius shadow shadow-lg bg-blue margin-top">长阴影</view><view class="padding-xl radius shadow-warp bg-white margin-top">翘边阴影</view><view class="padding-xl radius shadow-blur bg-red margin-top bg-img" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big91005.jpg);"><view>根据背景图而改变的阴影</view></view></view></view>