<view><cu-custom vue-id="72ed8499-1" bgColor="bg-gradual-blue" isBack="{{true}}" bind:__l="__l" vue-slots="{{['backText','content']}}"><view slot="backText">返回</view><view slot="content">背景</view></cu-custom><view class="cu-bar bg-white solid-bottom"><view class="action"><text class="cuIcon-title text-blue"></text>深色背景</view></view><view class="grid col-3 padding-sm"><block qq:for="{{ColorList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="padding-sm"><view class="{{['padding radius text-center shadow-blur','bg-'+item.name]}}"><view class="text-lg">{{item.title}}</view><view class="margin-top-sm text-Abc">{{item.name}}</view></view></view></block></view><view class="cu-bar bg-white solid-bottom"><view class="action"><text class="cuIcon-title text-blue"></text>淡色背景</view></view><view class="grid col-3 bg-white padding-sm"><block qq:for="{{ColorList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block qq:if="{{index<12}}"><view class="padding-sm"><view class="{{['padding radius text-center light','bg-'+item.name]}}"><view class="text-lg">{{item.title}}</view><view class="margin-top-sm text-Abc">{{item.name}}</view></view></view></block></block></view><view class="cu-bar bg-white solid-bottom margin-top"><view class="action"><text class="cuIcon-title text-blue"></text>渐变背景</view></view><view class="grid col-2 padding-sm"><view class="padding-sm"><view class="bg-gradual-red padding radius text-center shadow-blur"><view class="text-lg">魅红</view><view class="margin-top-sm text-Abc">#f43f3b - #ec008c</view></view></view><view class="padding-sm"><view class="bg-gradual-orange padding radius text-center shadow-blur"><view class="text-lg">鎏金</view><view class="margin-top-sm text-Abc">#ff9700 - #ed1c24</view></view></view><view class="padding-sm"><view class="bg-gradual-green padding radius text-center shadow-blur"><view class="text-lg">翠柳</view><view class="margin-top-sm text-Abc">#39b54a - #8dc63f</view></view></view><view class="padding-sm"><view class="bg-gradual-blue padding radius text-center shadow-blur"><view class="text-lg">靛青</view><view class="margin-top-sm text-Abc">#0081ff - #1cbbb4</view></view></view><view class="padding-sm"><view class="bg-gradual-purple padding radius text-center shadow-blur"><view class="text-lg">惑紫</view><view class="margin-top-sm text-Abc">#9000ff - #5e00ff</view></view></view><view class="padding-sm"><view class="bg-gradual-pink padding radius text-center shadow-blur"><view class="text-lg">霞彩</view><view class="margin-top-sm text-Abc">#ec008c - #6739b6</view></view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-blue"></text>图片背景</view></view><view class="bg-img bg-mask flex align-center" style="background-image:url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg');height:414rpx;"><view class="padding-xl text-white"><view class="padding-xs text-xxl text-bold">钢铁之翼</view><view class="padding-xs text-lg">Only the guilty need fear me.</view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-blue"></text>透明背景(文字层)</view></view><view class="grid col-2"><view class="bg-img padding-bottom-xl" style="background-image:url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10007.jpg');height:207rpx;"><view class="bg-shadeTop padding padding-bottom-xl">上面开始</view></view><view class="bg-img padding-top-xl flex align-end" style="background-image:url('https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg');height:207rpx;"><view class="bg-shadeBottom padding padding-top-xl flex-sub">下面开始</view></view></view></view>