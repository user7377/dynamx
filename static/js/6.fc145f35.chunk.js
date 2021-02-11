(this.webpackJsonpdynamx=this.webpackJsonpdynamx||[]).push([[6],{633:function(e,t,s){},635:function(e,t,s){},637:function(e,t,s){},638:function(e,t,s){},639:function(e,t,s){},665:function(e,t,s){"use strict";s.r(t);var n=s(6),i=s.n(n),a=s(11),r=s(0),o=s.n(r),c=s(18),l=s.n(c),h=s(61),d=s(188),p=s.n(d),u=s(172),m=s(407),k=s(369),f=s(445),S=s(640),w=s(107);s(446);class v extends o.a.Component{render(){const e=this.props.animation;return e?o.a.createElement("div",{className:"sticker-preview"},o.a.createElement(w.a,{type:"preview",stretch:!0,animation:e,style:{borderRadius:0}})):null}}var b=v,g=s(437),E=s(34),C=s(634),P=s.n(C),M=s(156),y=s(5);s(633);class R extends o.a.Component{shouldComponentUpdate(e,t,s){return this.props.info!==e.info}render(){const e=this.props,t=e.info,s=e.onSelect,n=e.onMouseDown,i=e.onMouseEnter,a=e.onDeleteClick;if(!t)return null;const r=t.title,c=t.stickers.map((e,t)=>o.a.createElement("div",{className:"sticker-set-item",key:e.sticker.id,"data-sticker-id":e.sticker.id,onClick:()=>s(e),onMouseEnter:i,onMouseDown:n,style:{width:y.Eb,height:y.Eb}},o.a.createElement(M.b,{key:e.sticker.id,sticker:e,autoplay:!1,blur:!1,displaySize:y.Eb,preview:!0,source:M.a.PICKER})));return o.a.createElement("div",{className:"sticker-set"},o.a.createElement("div",{className:"sticker-set-title"},o.a.createElement("div",{className:"sticker-set-title-wrapper"},o.a.createElement("span",null,r)),a&&o.a.createElement(k.a,{"aria-label":"delete",classes:{root:"sticker-set-icon-root"},size:"small",onClick:a},o.a.createElement(P.a,{fontSize:"inherit"}))),o.a.createElement("div",{className:"sticker-set-content"},c))}}var j=R,O=s(636),T=s.n(O),x=s(436),I=s(97);s(635);class D extends o.a.Component{constructor(e){super(e),this.onClientUpdateStickerSetPosition=e=>{const t=e.position;this.setState({position:t})},this.scrollToPosition=()=>{const e=this.state.position,t=this.animator,s=this.anchorRef,n=this.scrollRef.current,i=s.current,a=E.findDOMNode(i),r=n.scrollLeft,o=48*e-147,c=Number(a.style.left.replace("px","")),l=48*e;t&&t.stop(),this.animator=new x.a(0,[{from:r,to:o,func:e=>n.scrollLeft=e},{from:Math.abs(l-c)>338?l-338*Math.sign(l-c):c,to:l,func:e=>a.style.left=e+"px"}]),setTimeout(()=>{this.animator&&this.animator.start()},0)},this.handleWheel=e=>{const t=this.scrollRef;if(0===e.deltaX){t.current.scrollLeft+=e.deltaY}},this.handleSelect=e=>{const t=this.props,s=t.stickers;(0,t.onSelect)(s.indexOf(e))},this.scrollRef=o.a.createRef(),this.anchorRef=o.a.createRef(),this.state={position:0}}componentDidMount(){I.a.on("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}componentWillUnmount(){I.a.off("clientUpdateStickerSetPosition",this.onClientUpdateStickerSetPosition)}componentDidUpdate(e,t,s){t.position!==this.state.position&&this.scrollToPosition()}render(){const e=this.props,t=e.recent,s=e.stickers,n=t?o.a.createElement("div",{className:"stickers-picker-header-recent",onClick:()=>this.handleSelect("recent")},o.a.createElement(T.a,null)):null,i=s.map(e=>o.a.createElement(M.b,{key:e.sticker.id,className:"stickers-picker-header-sticker",sticker:e,play:!1,autoplay:!1,blur:!1,displaySize:36,preview:!0,source:M.a.PICKER_HEADER,openMedia:()=>this.handleSelect(e)}));return o.a.createElement("div",{className:"stickers-picker-header"},o.a.createElement("div",{ref:this.scrollRef,className:l()("stickers-picker-header-scroll","scrollbars-hidden"),onWheel:this.handleWheel},o.a.createElement("div",{className:"stickers-picker-header-items"},n,i),o.a.createElement("div",{ref:this.anchorRef,className:"stickers-picker-header-anchor"})))}}var U=D,N=s(12),V=s(10),A=s(38),L=s(2),_=s(1);s(637);class H extends o.a.Component{constructor(e){var t;super(e),t=this,this.onUpdateInstalledStickerSets=e=>{const t=e.is_masks;e.sticker_set_ids;t&&this.filterSets()},this.onUpdateRecentStickers=e=>{this.reloadRecentContent()},this.scrollTop=()=>{this.scrollRef.current.scrollTop=0},this.loadContent=function(){var e=Object(a.a)(i.a.mark((function e(s,n,a){var r,o,c,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s){e.next=4;break}return e.next=3,_.a.send({"@type":"getRecentStickers",is_attached:!1});case 3:s=e.sent;case 4:if(a){e.next=13;break}return e.next=7,_.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return r=e.sent,o=[],r.sets.forEach(e=>{o.push(_.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(o);case 12:a=e.sent;case 13:c=a.slice(0,5),l=a.reduce((e,t)=>(t.stickers.length>0&&e.push(t.stickers[0]),e),[]),t.setState({recent:s,stickerSets:n,sets:c,fullSets:a,headerStickers:l}),t.setsLength=c.length;case 17:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}(),this.loadInViewContentOnScroll=()=>{this.loadInViewContent()},this.loadInViewContentOnScrollEnd=()=>{this.loadInViewContent(400)},this.loadInViewContent=(e=0)=>{const t=this.scrollRef.current,s=this.state.sets,n=[];s.forEach(s=>{const i=this.itemsMap.get(s.id),a=E.findDOMNode(i);if(a){const i=t.scrollTop-e,r=t.scrollTop+t.offsetHeight+e,o=a.offsetTop,c=a.offsetTop+a.clientHeight;(o>=i&&a.offsetTop<=r||c>=i&&c<=r||o<=i&&c>=r)&&n.push(s)}}),n.forEach(e=>{const t=L.a.getStore();this.loadedSets.has(e.id)||(this.loadedSets.set(e.id,e.id),Object(V.G)(t,e))})},this.updatePosition=()=>{const e=this.scrollRef.current,t=this.state,s=t.recent,n=t.sets;let i=e.scrollHeight,a=0,r=0;if(s&&s.stickers.length>0){r=1;const t=this.itemsMap.get("recent");if(t){const s=E.findDOMNode(t);if(s&&s.offsetTop<=e.scrollTop){const t=s.offsetTop;if(s&&t<=e.scrollTop){const s=Math.abs(e.scrollTop-t);s<=i&&(i=s,a=0)}}}}n.forEach((t,s)=>{const n=this.itemsMap.get(t.id);if(n){const t=E.findDOMNode(n);if(t&&t.offsetTop<=e.scrollTop){const n=t.offsetTop;if(t){const t=Math.abs(e.scrollTop-n);t<=i&&(i=t,a=r+s)}}}}),_.a.clientUpdate({"@type":"clientUpdateStickerSetPosition",position:a})},this.handleScroll=Object(a.a)(i.a.mark((function e(){var s,n,a,r,o,c,l,h;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.scrolling=!0,s=new Date,t.lastScrollTime=s,t.scrollTimer&&clearTimeout(t.scrollTimer),t.scrollTimer=setTimeout(()=>{s===t.lastScrollTime&&(t.scrolling=!1)},250),t.loadInViewContentOnScrollEnd(),t.updatePosition(),n=t.scrollRef.current,!t.loadingChunk){e.next=10;break}return e.abrupt("return");case 10:if(a=!1,n.scrollTop+n.offsetHeight>=n.scrollHeight-400&&(a=!0),a){e.next=14;break}return e.abrupt("return",!1);case 14:if(r=t.state,o=r.sets,(c=r.stickerSets).sets.length!==o.length){e.next=17;break}return e.abrupt("return");case 17:return t.loadingChunk=!0,l=[],c.sets.slice(t.setsLength,t.setsLength+5).forEach(e=>{l.push(_.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=22,Promise.all(l).finally(()=>{t.loadingChunk=!1});case 22:h=e.sent,t.setsLength+=h.length,t.setState({sets:o.concat(h)});case 25:case"end":return e.stop()}}),e)}))),this.loadPreviewContent=e=>{const t=this.state,s=t.recent,n=t.sets,i=Object(A.j)([s].concat(n)).find(t=>t.sticker.id===e);if(!i)return;const a=L.a.getStore();Object(V.F)(a,i,null);Object(A.h)(i,n,5).forEach(e=>{Object(V.F)(a,e,null)})},this.handleMouseEnter=e=>{const t=Number(e.currentTarget.dataset.stickerId);if(!t)return;if(!this.mouseDown)return;this.mouseDownStickerId!==t&&(this.mouseDownStickerId=null),this.setState({previewStickerId:t}),this.loadPreviewContent(t);const s=this.props.onPreview,n=this.state,i=n.recent,a=n.sets;s(Object(A.j)([i].concat(a)).find(e=>e.sticker.id===t))},this.handleMouseDown=e=>{const t=Number(e.currentTarget.dataset.stickerId);if(!t)return;this.mouseDownStickerId=t;const s=Date.now();return this.setState({previewStickerId:t,timestamp:s,showPreview:!1,cancelSend:!1}),setTimeout(()=>{this.state.timestamp===s&&this.setState({showPreview:!0,cancelSend:!0},()=>{const e=this.props.onPreview,s=this.state,n=s.recent,i=s.sets;e(Object(A.j)([n].concat(i)).find(e=>e.sticker.id===t))})},500),this.loadPreviewContent(t),this.mouseDown=!0,document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1},this.handleMouseUp=()=>{this.setState({previewStickerId:0,timestamp:0,showPreview:!1});(0,this.props.onPreview)(null),this.mouseDown=!1,document.removeEventListener("mouseup",this.handleMouseUp)},this.handleStickerSelect=e=>{const t=this.props.onSelect;this.state.cancelSend||t(e)},this.handleSelectSet=function(){var e=Object(a.a)(i.a.mark((function e(s){var n,a,r,o,c,l,h,d,p;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.state,a=n.sets,r=n.stickerSets,o=t.scrollRef,-1!==s){e.next=7;break}o.current.scrollTop=0,e.next=26;break;case 7:if(!(s<a.length)){e.next=12;break}(c=t.itemsMap.get(a[s].id))&&(l=E.findDOMNode(c))&&(o.current.scrollTop=l.offsetTop),e.next=26;break;case 12:if(!(s<r.sets.length)){e.next=26;break}if(!t.loadingChunk){e.next=15;break}return e.abrupt("return");case 15:if(r.sets.length!==a.length){e.next=17;break}return e.abrupt("return");case 17:return t.loadingChunk=!0,h=[],r.sets.slice(t.setsLength,s+1).forEach(e=>{h.push(_.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=22,Promise.all(h).finally(()=>t.loadingChunk=!1);case 22:d=e.sent,t.setsLength+=d.length,p=a.concat(d),t.setState({sets:p},()=>{s<p.length&&t.handleSelectSet(s)});case 26:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.handleDeleteRecent=()=>{_.a.send({"@type":"clearRecentStickers",is_attached:!1})},this.handleDeleteStickerSet=e=>{_.a.send({"@type":"changeStickerSet",set_id:e,is_installed:!1})},this.scrollRef=o.a.createRef(),this.itemsMap=new Map,this.loadedSets=new Map,this.state={recent:null,stickerSets:null,sets:[],headerStickers:[],position:0},this.loadInViewContentOnScrollEnd=Object(N.e)(this.loadInViewContentOnScrollEnd,100),this.loadInViewContentOnScroll=Object(N.C)(this.loadInViewContentOnScroll,2e3),this.updatePosition=Object(N.C)(this.updatePosition,250)}shouldComponentUpdate(e,t,s){const n=this.state,i=n.position,a=n.recent,r=n.stickerSets,o=n.sets,c=n.showPreview;return t.recent!==a||(t.stickerSets!==r||(t.sets!==o||(t.showPreview!==c||t.position!==i)))}componentDidMount(){I.a.on("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),I.a.on("updateRecentStickers",this.onUpdateRecentStickers)}componentWillUnmount(){I.a.off("updateInstalledStickerSets",this.onUpdateInstalledStickerSets),I.a.off("updateRecentStickers",this.onUpdateRecentStickers)}stop(){}filterSets(e){const t=this.state;t.sets,t.stickerSets}reloadRecentContent(){var e=this;return Object(a.a)(i.a.mark((function t(){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.send({"@type":"getRecentStickers",is_attached:!1});case 2:s=t.sent,e.setState({recent:s});case 4:case"end":return t.stop()}}),t)})))()}render(){const e=this.props,t=e.t,s=e.style,n=this.state,i=n.recent,a=(n.stickerSets,n.sets),r=n.headerStickers;this.itemsMap.clear();const c=a.map(e=>o.a.createElement(j,{key:e.id,ref:t=>this.itemsMap.set(e.id,t),info:e,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter})),h=i&&i.stickers.length>0?{stickers:i.stickers,title:t("RecentStickers")}:null;return o.a.createElement("div",{className:"stickers-picker",style:s},o.a.createElement(U,{recent:h,stickers:r,onSelect:this.handleSelectSet}),o.a.createElement("div",{ref:this.scrollRef,className:l()("stickers-picker-scroll","scrollbars-hidden"),onScroll:this.handleScroll},Boolean(h)&&o.a.createElement(j,{ref:e=>this.itemsMap.set("recent",e),info:h,onSelect:this.handleStickerSelect,onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter,onDeleteClick:this.handleDeleteRecent}),c))}}var G=Object(h.a)(Object(h.d)(),Object(u.a)(),Object(h.c)())(H),B=s(158);s(638);class F extends o.a.Component{constructor(e){super(e),this.handleScroll=e=>{const t=this.scrollRef.current,s=t.scrollTop,n=t.scrollHeight,i=t.offsetHeight;this.loadInViewContentOnScrollEnd();const a=s<=10,r=n-(s+i)<=10,o=Math.abs(s-this.prevScrollTop)>50&&!a&&!r;this.prevScrollTop=s,o||this.loadInViewContent()},this.scrollTop=()=>{this.scrollRef.current.scrollTop=0},this.loadInViewContentOnScroll=()=>{this.loadInViewContent()},this.loadInViewContentOnScrollEnd=()=>{this.loadInViewContent()},this.loadInViewContent=(e=0)=>{const t=this.scrollRef.current,s=B.a.savedAnimations;if(!s)return;const n=s.animations,i=new Map,a=[];n.forEach((s,n)=>{const r=this.itemsMap.get("".concat(n,"_").concat(s.animation.id)),o=E.findDOMNode(r);if(o){const r=t.scrollTop-e,c=t.scrollTop+t.offsetHeight+e,l=o.offsetTop,h=o.offsetTop+o.clientHeight;(l>=r&&o.offsetTop<=c||h>=r&&h<=c||l<=r&&h>=c)&&(i.set(s,s),a.push(n))}});const r=B.a.animationsInView;Object(N.y)(r,i)||_.a.clientUpdate({"@type":"clientUpdateAnimationsInView",animations:i})},this.handleMouseDown=e=>{const t=Number(e.currentTarget.dataset.animationIndex);this.mouseDownStickerId=t;const s=Date.now();return this.setState({previewStickerId:t,timestamp:s,showPreview:!1,cancelSend:!1}),setTimeout(()=>{this.state.timestamp===s&&this.setState({showPreview:!0,cancelSend:!0},()=>{const e=this.props.onPreview,s=this.state;s.recent,s.sets;e(B.a.savedAnimations.animations[t])})},500),this.mouseDown=!0,document.addEventListener("mouseup",this.handleMouseUp),e.preventDefault(),e.stopPropagation(),!1},this.handleMouseEnter=e=>{const t=Number(e.currentTarget.dataset.animationIndex);if(!this.mouseDown)return;this.mouseDownStickerId!==t&&(this.mouseDownStickerId=null),this.setState({previewStickerId:t});(0,this.props.onPreview)(B.a.savedAnimations.animations[t])},this.handleMouseUp=()=>{this.setState({previewStickerId:0,timestamp:0,showPreview:!1});(0,this.props.onPreview)(null),this.mouseDown=!1,document.removeEventListener("mouseup",this.handleMouseUp)},this.openAnimation=e=>{const t=this.props.onSelect;this.state.cancelSend||t(e)},this.scrollRef=o.a.createRef(),this.itemsMap=new Map,this.loadInViewContentOnScroll=Object(N.C)(this.loadInViewContentOnScroll,250),this.loadInViewContentOnScrollEnd=Object(N.e)(this.loadInViewContentOnScrollEnd,250)}start(){this.loadInViewContent()}stop(){_.a.clientUpdate({"@type":"clientUpdateAnimationsInView",animations:new Map})}loadContent(){var e=this;return Object(a.a)(i.a.mark((function t(){var s,n,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s=B.a.savedAnimations){t.next=8;break}return t.next=4,_.a.send({"@type":"getSavedAnimations"});case 4:n=t.sent,B.a.savedAnimations=n,s=n,e.forceUpdate(()=>{e.start()});case 8:a=L.a.getStore(),s.animations.slice(0,1e3).forEach(e=>{Object(V.t)(a,e,null),Object(V.s)(a,e,null,!1)});case 11:case"end":return t.stop()}}),t)})))()}render(){const e=this.props,t=(e.t,e.style),s=B.a.savedAnimations;if(!s)return null;this.itemsMap.clear();const n=s.animations.map((e,t)=>o.a.createElement("div",{"data-animation-index":t,key:"".concat(t,"_").concat(e.animation.id),ref:s=>this.itemsMap.set("".concat(t,"_").concat(e.animation.id),s),onMouseDown:this.handleMouseDown,onMouseEnter:this.handleMouseEnter},o.a.createElement(w.a,{type:"picker",animation:e,openMedia:()=>this.openAnimation(e),style:{width:104,height:104,margin:2,borderRadius:0}})));return o.a.createElement("div",{className:"gifs-picker",style:t},o.a.createElement("div",{ref:this.scrollRef,className:l()("gifs-picker-scroll","scrollbars-hidden"),onScroll:this.handleScroll},n))}}var W=Object(h.a)(Object(h.d)(),Object(u.a)(),Object(h.c)())(F),z=s(13),X=s(4);s(639);class J extends o.a.Component{constructor(e){var t;super(e),t=this,this.onClientUpdateChange=e=>{this.state.open?this.removePicker=!0:this.picker=null},this.handleButtonMouseEnter=e=>{this.buttonEnter=!0,setTimeout(()=>{if(this.buttonEnter&&(this.updatePicker(!0),this.loadStickerSets(),this.loadSavedAnimations(),2===this.state.tab)){const e=this.gifsPickerRef.current;e&&e.start()}},y.g)},this.loadSavedAnimations=Object(a.a)(i.a.mark((function e(){var t,s,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=B.a.savedAnimations){e.next=7;break}return e.next=4,_.a.send({"@type":"getSavedAnimations"});case 4:s=e.sent,B.a.savedAnimations=s,t=s;case 7:n=L.a.getStore(),t.animations.slice(0,1e3).forEach(e=>{Object(V.t)(n,e)});case 10:case"end":return e.stop()}}),e)}))),this.loadStickerSets=Object(a.a)(i.a.mark((function e(){var s,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.sets){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,_.a.send({"@type":"getRecentStickers",is_attached:!1});case 4:return t.recent=e.sent,e.next=7,_.a.send({"@type":"getInstalledStickerSets",is_masks:!1});case 7:return t.stickerSets=e.sent,s=[],t.stickerSets.sets.forEach(e=>{s.push(_.a.send({"@type":"getStickerSet",set_id:e.id}))}),e.next=12,Promise.all(s);case 12:t.sets=e.sent,n=t.stickersPickerRef.current,a=L.a.getStore(),Object(V.D)(a,t.recent),t.sets.slice(0,5).reverse().forEach(e=>{Object(V.G)(a,e),n.loadedSets.set(e.id,e.id)}),t.sets.reduce((e,t)=>(t.stickers.length>0&&e.push(t.stickers[0]),e),[]).forEach(e=>{Object(V.H)(a,e)});case 20:case"end":return e.stop()}}),e)}))),this.handleButtonMouseLeave=()=>{this.buttonEnter=!1,setTimeout(()=>{this.tryClosePicker()},y.g)},this.tryClosePicker=()=>{const e=this.state,t=e.animation,s=e.sticker;this.paperEnter||this.buttonEnter||s||t||this.updatePicker(!1)},this.handlePaperMouseEnter=()=>{this.paperEnter=!0},this.handlePaperMouseLeave=()=>{this.paperEnter=!1,setTimeout(()=>{this.tryClosePicker()},y.g)},this.updatePicker=e=>{this.setState({open:e},()=>{if(!this.state.open){this.removePicker&&(this.picker=null,this.removePicker=!1);const e=this.gifsPickerRef.current;e&&e.stop()}})},this.handleEmojiClick=()=>{this.setState({tab:0});const e=this.gifsPickerRef.current;e&&e.stop();const t=this.stickersPickerRef.current;t&&t.stop()},this.handleStickersClick=()=>{const e=this.stickersPickerRef.current;1===this.state.tab?e&&e.scrollTop():(setTimeout(()=>{e.loadContent(this.recent,this.stickerSets,this.sets)},150),this.setState({tab:1}));const t=this.gifsPickerRef.current;t&&t.stop()},this.handleGifsClick=()=>{const e=this.gifsPickerRef.current;if(2===this.state.tab)e&&e.scrollTop();else{const t=B.a.savedAnimations;setTimeout(()=>{e.loadContent(t),e.start()},150),this.setState({tab:2})}const t=this.stickersPickerRef.current;t&&t.stop()},this.handleStickerSend=e=>{e&&(_.a.clientUpdate({"@type":"clientUpdateStickerSend",sticker:e}),this.updatePicker(!1))},this.handleStickerPreview=e=>{this.setState({sticker:e}),_.a.clientUpdate({"@type":"clientUpdateStickerPreview",sticker:e}),e||this.tryClosePicker()},this.handleGifSend=e=>{e&&(_.a.clientUpdate({"@type":"clientUpdateAnimationSend",animation:e}),this.updatePicker(!1))},this.handleGifPreview=e=>{this.setState({animation:e}),_.a.clientUpdate({"@type":"clientUpdateAnimationPreview",animation:e}),e||this.tryClosePicker()},this.state={open:!1,tab:0},this.emojiPickerRef=o.a.createRef(),this.stickersPickerRef=o.a.createRef(),this.gifsPickerRef=o.a.createRef()}componentDidMount(){z.a.on("clientUpdateThemeChange",this.onClientUpdateChange),X.a.on("clientUpdateLanguageChange",this.onClientUpdateChange)}componentWillUnmount(){z.a.off("clientUpdateThemeChange",this.onClientUpdateChange),X.a.off("clientUpdateLanguageChange",this.onClientUpdateChange)}render(){const e=this.props,t=e.theme,s=e.t,n=this.state,i=n.open,a=n.tab,r=n.animation,c=n.sticker;if(i&&!this.picker){const e={search:s("Search"),notfound:s("NotEmojiFound"),skintext:s("ChooseDefaultSkinTone"),categories:{search:s("SearchResults"),recent:s("Recent"),people:s("SmileysPeople"),nature:s("AnimalsNature"),foods:s("FoodDrink"),activity:s("Activity"),places:s("TravelPlaces"),objects:s("Objects"),symbols:s("Symbols"),flags:s("Flags"),custom:s("Custom")}};this.picker=o.a.createElement(S.a,{ref:this.emojiPickerRef,set:"apple",showPreview:!1,showSkinTones:!1,onSelect:this.props.onSelect,color:t.palette.primary.dark,i18n:e,native:Object(N.s)(),style:{width:338,overflowX:"hidden",position:"absolute",left:0,top:0}}),this.stickersPicker=o.a.createElement(G,{ref:this.stickersPickerRef,onSelect:this.handleStickerSend,onPreview:this.handleStickerPreview,style:{position:"absolute",left:338,top:0}}),this.gifsPicker=o.a.createElement(W,{ref:this.gifsPickerRef,onSelect:this.handleGifSend,onPreview:this.handleGifPreview,style:{width:338,overflowX:"hidden",position:"absolute",left:676,top:0}})}return o.a.createElement(o.a.Fragment,null,o.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"dark"===t.palette.type?"emoji-mart.dark.css":"emoji-mart.light.css"}),o.a.createElement(k.a,{className:"inputbox-icon-button","aria-label":"Emoticon",onMouseEnter:this.handleButtonMouseEnter,onMouseLeave:this.handleButtonMouseLeave},o.a.createElement(f.a,null)),o.a.createElement("div",{className:l()("emoji-picker-root",{"emoji-picker-root-opened":i}),onMouseEnter:this.handlePaperMouseEnter,onMouseLeave:this.handlePaperMouseLeave},o.a.createElement("div",{className:l()("emoji-picker-content",{"emoji-picker-content-stickers":1===a},{"emoji-picker-content-gifs":2===a})},this.picker,this.stickersPicker,this.gifsPicker),o.a.createElement("div",{className:"emoji-picker-header"},o.a.createElement(m.a,{color:0===a?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleEmojiClick},s("Emoji")),o.a.createElement(m.a,{color:1===a?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleStickersClick},s("AccDescrStickers")),o.a.createElement(m.a,{color:2===a?"primary":"default",className:"emoji-picker-header-button",onClick:this.handleGifsClick},s("AttachGif")))),Boolean(c)&&o.a.createElement(g.a,{sticker:c}),Boolean(r)&&o.a.createElement(b,{animation:r}))}}const K=Object(h.a)(Object(u.a)(),p.a);t.default=K(J)}}]);
//# sourceMappingURL=6.fc145f35.chunk.js.map