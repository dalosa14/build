(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[48],{1656:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(75),i=e(72),a=e(769),u=e(407),o=e(67),f=e(130),d=e(1),l=Object(c.lazy)((function(){return Promise.all([e.e(1),e.e(31)]).then(e.bind(null,1630))})),s=Object(c.lazy)((function(){return Promise.all([e.e(1),e.e(6),e.e(23)]).then(e.bind(null,1627))})),b=Object(c.lazy)((function(){return e.e(51).then(e.bind(null,1637))})),j=Object(c.lazy)((function(){return e.e(37).then(e.bind(null,1624))})),O=Object(c.lazy)((function(){return Promise.all([e.e(5),e.e(50)]).then(e.bind(null,1625))}));n.default=function(){var t=Object(i.c)().account,n=Object(a.g)();return Object(a.c)(),n!==o.c.INITIALIZED?Object(d.jsx)(u.a,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(r.b,{exact:!0,path:f.a,children:Object(d.jsx)(l,{})}),Object(d.jsx)(r.b,{exact:!0,path:"".concat(f.a,"/collections"),children:Object(d.jsx)(j,{})}),Object(d.jsx)(r.b,{path:"".concat(f.a,"/activity"),children:Object(d.jsx)(O,{})}),Object(d.jsx)(r.b,{path:"".concat(f.a,"/collections/:collectionAddress"),children:Object(d.jsx)(b,{})}),Object(d.jsx)(r.b,{path:"".concat(f.a,"/profile/:accountAddress?"),children:Object(d.jsx)(s,{})}),Object(d.jsx)(r.b,{exact:!0,path:"".concat(f.a,"/profile"),children:Object(d.jsx)(r.a,{to:"".concat(f.a,"/profile/").concat((null===t||void 0===t?void 0:t.toLowerCase())||"")})})]})}},769:function(t,n,e){"use strict";e.d(n,"c",(function(){return d})),e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return s})),e.d(n,"m",(function(){return b})),e.d(n,"f",(function(){return j})),e.d(n,"e",(function(){return O})),e.d(n,"n",(function(){return k})),e.d(n,"d",(function(){return h})),e.d(n,"g",(function(){return p})),e.d(n,"o",(function(){return x})),e.d(n,"j",(function(){return v})),e.d(n,"i",(function(){return g})),e.d(n,"k",(function(){return m})),e.d(n,"l",(function(){return M})),e.d(n,"h",(function(){return y}));var c=e(0),r=e(23),i=e(107),a=e(130),u=e(36),o=e(7),f=e(275),d=function(){var t=Object(i.b)();Object(c.useEffect)((function(){t(Object(f.f)())}),[t])},l=function(t){var n=Object(i.b)();Object(c.useEffect)((function(){n(Object(f.e)(t))}),[n,t])},s=function(t){var n=Object(i.b)(),e=Object(r.d)((function(t){return t.nftMarket.data.loadingState})),u=e.latestPancakeBunniesUpdateAt,o=e.isUpdatingPancakeBunnies,d=h(t),l=d?d.map((function(t){return t.tokenId})):[],s=k(a.b),b=s?s.map((function(t){return t.tokenId})):[],j=d.length>0?d[0]:null,O=Object(c.useMemo)((function(){return j?{name:j.name,description:j.description,collection:{name:j.collectionName},image:j.image}:null}),[j]);return{isUpdatingPancakeBunnies:o,latestPancakeBunniesUpdateAt:u,fetchMorePancakeBunnies:function(e){n(Object(f.g)({bunnyId:t,existingTokensWithBunnyId:l,allExistingPBTokenIds:b,existingMetadata:O,orderDirection:e}))}}},b=function(){return Object(r.d)((function(t){return t.nftMarket.data.loadingState}))},j=function(){return Object(r.d)((function(t){return t.nftMarket.data.collections}))},O=function(t){var n=Object(u.j)(t)||"";return j()[n]},k=function(t){var n=Object(u.j)(t)||"";return Object(r.d)((function(t){return t.nftMarket.data.nfts[n]}))},h=function(t){var n=Object(r.d)((function(t){return t.nftMarket.data.nfts[a.b]}));return n?n.filter((function(n){return n.attributes[0].value===t&&n.marketData.isTradable})):[]},p=function(){return Object(r.d)((function(t){return t.nftMarket.initializationState}))},x=function(){return Object(r.d)((function(t){return t.nftMarket.data.user}))},v=function(t){var n=Object(r.d)((function(n){return n.nftMarket.data.filters[t]}));return n?n.activeFilters:{}},g=function(t){var n=Object(r.d)((function(n){return n.nftMarket.data.filters[t]}));return n?n.loadingState:o.b.Idle},m=function(t){var n=Object(r.d)((function(n){return n.nftMarket.data.filters[t]}));return n?n.ordering:{field:"currentAskPrice",direction:"asc"}},M=function(t){var n=Object(r.d)((function(n){return n.nftMarket.data.filters[t]}));return!n||n.showOnlyOnSale},y=function(t){return Object(r.d)((function(n){return n.nftMarket.data.activityFilters[t]}))||{typeFilters:[],collectionFilters:[]}}}}]);
//# sourceMappingURL=48.7ac1735b.chunk.js.map