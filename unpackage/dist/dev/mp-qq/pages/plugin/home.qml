<view><scroll-view class="page" scroll-y="{{true}}"><cu-custom vue-id="1c2ab51c-1" bgImage="https://image.weilanwl.com/color2.0/plugin/cjkz2329.jpg" bind:__l="__l" vue-slots="{{['content']}}"><view slot="content"><image style="width:240rpx;height:60rpx;" src="/static/cjkz.png" mode="aspectFill"></image></view></cu-custom><view class="cu-card"><block qq:for="{{list}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="cu-item bg-img shadow-blur" style="{{'background-image:'+('url('+item.img+')')+';'}}" data-url="{{item.url}}" data-event-opts="{{[['tap',[['toChild',['$event']]]]]}}" bindtap="__e"><view class="cardTitle">{{''+item.title+''}}</view></view></block></view><view class="cu-tabbar-height"></view></scroll-view></view>