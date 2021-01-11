<view><cu-custom vue-id="6be30b08-1" bgColor="bg-gradual-pink" isBack="{{true}}" bind:__l="__l" vue-slots="{{['backText','content']}}"><view slot="backText">返回</view><view slot="content">模态窗口</view></cu-custom><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>普通窗口</view><view class="action"><button class="cu-btn bg-green shadow" data-target="Modal" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Modal</button></view></view><view class="{{['cu-modal',modalName=='Modal'?'show':'']}}"><view class="cu-dialog"><view class="cu-bar bg-white justify-end"><view class="content">Modal标题</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-close text-red"></text></view></view><view class="padding-xl">Modal 内容。</view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>底部窗口</view><view class="action"><button class="cu-btn bg-green shadow" data-target="bottomModal" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Bottom</button></view></view><view class="{{['cu-modal bottom-modal',modalName=='bottomModal'?'show':'']}}"><view class="cu-dialog"><view class="cu-bar bg-white"><view class="action text-green">确定</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action text-blue" bindtap="__e">取消</view></view><view class="padding-xl">Modal 内容。</view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>对话窗口</view><view class="action"><button class="cu-btn bg-green shadow" data-target="DialogModal1" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Dialog</button><button class="cu-btn bg-blue shadow margin-left" data-target="DialogModal2" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Dialog</button></view></view><view class="{{['cu-modal',modalName=='DialogModal1'?'show':'']}}"><view class="cu-dialog"><view class="cu-bar bg-white justify-end"><view class="content">Modal标题</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-close text-red"></text></view></view><view class="padding-xl">Modal 内容。</view><view class="cu-bar bg-white justify-end"><view class="action"><button data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="cu-btn line-green text-green" bindtap="__e">取消</button><button data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="cu-btn bg-green margin-left" bindtap="__e">确定</button></view></view></view></view><view class="{{['cu-modal',modalName=='DialogModal2'?'show':'']}}"><view class="cu-dialog"><view class="cu-bar bg-white justify-end"><view class="content">Modal标题</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-close text-red"></text></view></view><view class="padding-xl">Modal 内容。</view><view class="cu-bar bg-white"><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action margin-0 flex-sub text-green " bindtap="__e"><text class="cuIcon-moneybag"></text>微信支付</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action margin-0 flex-sub text-green solid-left" bindtap="__e">取消</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action margin-0 flex-sub  solid-left" bindtap="__e">确定</view></view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>图片窗口</view><view class="action"><button class="cu-btn bg-green shadow" data-target="Image" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Image</button></view></view><view class="{{['cu-modal',modalName=='Image'?'show':'']}}"><view class="cu-dialog"><view class="bg-img" style="background-image:url('https://ossweb-img.qq.com/images/lol/web201310/skin/big91012.jpg');height:200px;"><view class="cu-bar justify-end text-white"><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action" bindtap="__e"><text class="cuIcon-close "></text></view></view></view><view class="cu-bar bg-white"><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action margin-0 flex-sub  solid-left" bindtap="__e">我知道了</view></view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>单选窗口</view><view class="action"><button class="cu-btn bg-green shadow" data-target="RadioModal" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Radio</button></view></view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="{{['cu-modal',modalName=='RadioModal'?'show':'']}}" bindtap="__e"><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="cu-dialog" catchtap="__e"><radio-group data-event-opts="{{[['change',[['RadioChange',['$event']]]]]}}" class="block" bindchange="__e"><view class="cu-list menu text-left"><block qq:for="{{5}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="cu-item"><label class="flex justify-between align-center flex-sub"><view class="flex-sub">{{"Item "+(index+1)}}</view><radio class="{{['round',radio=='radio'+index?'checked':'']}}" checked="{{radio=='radio'+index?true:false}}" value="{{'radio'+index}}"></radio></label></view></block></view></radio-group></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>多选窗口</view><view class="action"><button class="cu-btn bg-green shadow" data-target="ChooseModal" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Choose</button></view></view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="{{['cu-modal bottom-modal',modalName=='ChooseModal'?'show':'']}}" bindtap="__e"><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="cu-dialog" catchtap="__e"><view class="cu-bar bg-white"><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action text-blue" bindtap="__e">取消</view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="action text-green" bindtap="__e">确定</view></view><view class="grid col-3 padding-sm"><block qq:for="{{checkbox}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="padding-xs"><button class="{{['cu-btn orange lg block',item.checked?'bg-orange':'line-orange']}}" data-value="{{item.value}}" data-event-opts="{{[['tap',[['ChooseCheckbox',['$event']]]]]}}" bindtap="__e">{{''+item.name+''}}<block qq:if="{{item.hot}}"><view class="{{['cu-tag sm round',item.checked?'bg-white text-orange':'bg-orange']}}">HOT</view></block></button></view></block></view></view></view><view class="cu-bar bg-white margin-top"><view class="action"><text class="cuIcon-title text-orange "></text>侧边抽屉</view><view class="action"><button class="cu-btn bg-green shadow" data-target="DrawerModalL" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Left</button><button class="cu-btn bg-blue shadow margin-left" data-target="DrawerModalR" data-event-opts="{{[['tap',[['showModal',['$event']]]]]}}" bindtap="__e">Right</button></view></view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="{{['cu-modal drawer-modal justify-start',modalName=='DrawerModalL'?'show':'']}}" bindtap="__e"><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="cu-dialog basis-lg" style="{{'top:'+(CustomBar+'px')+';'+('height:'+('calc(100vh - '+CustomBar+'px)')+';')}}" catchtap="__e"><view class="cu-list menu text-left"><block qq:for="{{5}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="cu-item arrow"><view class="content"><view>{{"Item "+(index+1)}}</view></view></view></block></view></view></view><view data-event-opts="{{[['tap',[['hideModal',['$event']]]]]}}" class="{{['cu-modal drawer-modal justify-end',modalName=='DrawerModalR'?'show':'']}}" bindtap="__e"><view data-event-opts="{{[['tap',[['',['$event']]]]]}}" class="cu-dialog basis-lg" style="{{'top:'+(CustomBar+'px')+';'+('height:'+('calc(100vh - '+CustomBar+'px)')+';')}}" catchtap="__e"><view class="cu-list menu text-left"><block qq:for="{{5}}" qq:for-item="item" qq:for-index="index" qq:key="index"><view class="cu-item arrow"><view class="content"><view>{{"Item "+(index+1)}}</view></view></view></block></view></view></view></view>