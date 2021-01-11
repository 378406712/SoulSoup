<view><cu-custom vue-id="6059e11d-1" bgColor="bg-gradual-blue" isBack="{{true}}" bind:__l="__l" vue-slots="{{['backText','content']}}"><view slot="backText">返回</view><view slot="content">按钮</view></cu-custom><view class="cu-bar bg-white solid-bottom"><view class="action"><text class="cuIcon-title text-blue"></text>按钮形状</view><view class="action"><navigator class="action" url="design" hover-class="none"><text class="cuIcon-skinfill"></text><text class="text-df">设计</text></navigator></view></view><view class="padding flex flex-wrap justify-between align-center bg-white"><button class="cu-btn">默认</button><button class="cu-btn round">圆角</button><button class="cu-btn cuIcon"><text class="cuIcon-emojifill"></text></button></view><view class="cu-bar margin-top bg-white solid-bottom"><view class="action"><text class="cuIcon-title text-blue"></text>按钮尺寸</view></view><view class="padding flex flex-wrap justify-between align-center bg-white"><button class="cu-btn round sm">小尺寸</button><button class="cu-btn round">默认</button><button class="cu-btn round lg">大尺寸</button></view><view class="cu-bar margin-top bg-white"><view class="action"><text class="cuIcon-title text-blue"></text>按钮颜色</view><view class="action"><text class="text-df margin-right-sm">阴影</text><switch class="{{[shadow?'checked':'']}}" color="#39B54A" data-event-opts="{{[['change',[['SetShadow',['$event']]]]]}}" bindchange="__e"></switch></view></view><view class="grid col-5 padding-sm"><block qq:for="{{ColorList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="margin-tb-sm text-center"><button class="{{['cu-btn round','bg-'+item.name,shadow?'shadow':'']}}">{{item.title}}</button></view></block></view><view class="cu-bar margin-top bg-white"><view class="action"><text class="cuIcon-title text-blue"></text>镂空按钮</view><view class="action"><radio-group data-event-opts="{{[['change',[['SetBorderSize',['$event']]]]]}}" bindchange="__e"><label class="margin-left-sm"><radio class="blue radio" value="" checked="{{true}}"></radio><text class="margin-left-sm">小</text></label><label class="margin-left-sm"><radio class="blue radio" value="s"></radio><text class="margin-left-sm">大</text></label></radio-group></view></view><view class="grid col-5 padding-sm"><block qq:for="{{ColorList}}" qq:for-item="item" qq:for-index="index" qq:key="index"><block qq:if="{{item.name!='white'}}"><view class="margin-tb-sm text-center"><button class="{{['cu-btn round',bordersize?'lines-'+item.name:'line-'+item.name,shadow?'shadow':'']}}">{{item.title}}</button></view></block></block></view><view class="cu-bar margin-top bg-white"><view class="action"><text class="cuIcon-title text-blue"></text>块状按钮</view></view><view class="padding flex flex-direction"><button class="cu-btn bg-grey lg">玄灰</button><button class="cu-btn bg-red margin-tb-sm lg">嫣红</button></view><view class="cu-bar margin-top bg-white"><view class="action"><text class="cuIcon-title text-blue"></text>无效状态</view></view><view class="padding"><button class="cu-btn block bg-blue margin-tb-sm lg" disabled="{{true}}" type>无效状态</button><button class="cu-btn block line-blue margin-tb-sm lg" disabled="{{true}}">无效状态</button></view><view class="cu-bar margin-top bg-white"><view class="action"><text class="cuIcon-title text-blue"></text>按钮加图标</view></view><view class="padding-xl"><button class="cu-btn block line-orange lg"><text class="cuIcon-upload"></text>图标</button><button class="cu-btn block bg-blue margin-tb-sm lg"><text class="cuIcon-loading2 cuIconfont-spin"></text>加载</button><button class="cu-btn block bg-black margin-tb-sm lg" loading="{{true}}">原生加载</button></view></view>