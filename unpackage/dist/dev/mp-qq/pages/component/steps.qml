<view><cu-custom vue-id="cc1ef414-1" bgColor="bg-gradual-pink" isBack="{{true}}" bind:__l="__l" vue-slots="{{['backText','content']}}"><view slot="backText">返回</view><view slot="content">步骤条</view></cu-custom><view class="cu-bar bg-white solid-bottom"><view class="action"><text class="cuIcon-title text-orange"></text>基本用法</view><view class="action"><button data-event-opts="{{[['tap',[['BasicsSteps',['$event']]]]]}}" class="cu-btn bg-green shadow" bindtap="__e">下一步</button></view></view><view class="bg-white padding"><view class="cu-steps"><block qq:for="{{basicsList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item',index>basics?'':'text-red']}}"><text class="{{['cuIcon-'+item.cuIcon]}}"></text>{{''+item.name+''}}</view></block></view></view><view class="bg-white padding margin-top-xs"><view class="cu-steps"><block qq:for="{{basicsList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item',index>basics?'':'text-orange']}}"><text class="{{[index>basics?'cuIcon-title':'cuIcon-'+item.cuIcon]}}"></text>{{''+item.name+''}}</view></block></view></view><view class="bg-white padding  margin-top-xs"><view class="cu-steps steps-arrow"><block qq:for="{{basicsList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item',index>basics?'':'text-blue']}}"><text class="{{['cuIcon-'+item.cuIcon]}}"></text>{{''+item.name+''}}</view></block></view></view><view class="cu-bar bg-white solid-bottom margin-top"><view class="action"><text class="cuIcon-title text-orange"></text>数字完成</view><view class="action"><button data-event-opts="{{[['tap',[['NumSteps',['$event']]]]]}}" class="cu-btn bg-green shadow" bindtap="__e">下一步</button></view></view><view class="bg-white padding"><view class="cu-steps"><block qq:for="{{numList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item',index>num?'':'text-blue']}}"><text class="{{['num',index==2?'err':'']}}" data-index="{{index+1}}"></text>{{''+item.name+''}}</view></block></view></view><view class="cu-bar bg-white solid-bottom margin-top"><view class="action"><text class="cuIcon-title text-orange"></text>多级显示</view><view class="action"><button data-event-opts="{{[['tap',[['ScrollSteps',['$event']]]]]}}" class="cu-btn bg-green shadow" bindtap="__e">下一步</button></view></view><scroll-view class="bg-white padding response cu-steps steps-bottom" scroll-x="{{true}}" scroll-into-view="{{'scroll-'+scroll}}" scroll-with-animation="{{true}}"><block qq:for="{{10}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="{{['cu-item padding-lr-xl',index>scroll?'':'text-blue']}}" id="{{'scroll-'+index}}">{{'Level '+(index+1)+''}}<text class="num" data-index="{{index+1}}"></text></view></block></scroll-view></view>