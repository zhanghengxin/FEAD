### 公认的技术规范
#### [RFC 规范](http://www.rfc-editor.org/)
- 所有互联网基础设施的规范可以在这里找到
- 比如[RFC 2616 HTTP规范](https://tools.ietf.org/html/rfc2616), [RFC 2818 HTTPS规范](https://tools.ietf.org/html/rfc2818) [RFC 3548 Base 16,Base32,Base 64规范](https://tools.ietf.org/html/rfc3548)
- 看起来都是一个个的小文档，但每一个规范都会依赖许多其他相关的规范
- 这里的文档做到了很好的模块化、高内聚低耦合，同时避免重复（DRY Do not Repeat Yourself）
 
#### [W3C 规范](https://www.w3.org/standards/)
- 所有跟Web相关的规范可以在这里找到
- 比如页面展现的[HTML CSS](https://www.w3.org/standards/webdesign/htmlcss), 页面交互相关的[JS API，DOM](https://www.w3.org/standards/webdesign/script),页面图形相关的[PNG SVG](https://www.w3.org/standards/webdesign/graphics)
 
#### [whatwg规范](https://html.spec.whatwg.org/)
- W3C的会员是付费的（这是W3C主要经费来源），成员大多是浏览器厂商和Web相关的企业
- W3C规范进度相对较慢，一部分成员不满足与现状，闹掰了出来单干
- 规范内容还是基于W3C规范，只是更新频率更高，变化更快，所以叫Living Standard
 
#### ECMAScript规范
- 这就是我们说的JavaScript规范，或者ESx的来源，相关的历史和过程可以参考 [阮一峰的ECMASCript 6入门](http://es6.ruanyifeng.com/#docs/intro)
- [最新的规范可以在这里找到](http://www.ecma-international.org/publications/standards/Ecma-262.htm),当前最新的也就是ES2017 或者叫ES8
- [所有的规范可以在这里找到](http://www.ecma-international.org/publications/standards/Ecma-262-arch.htm)
 
#### 兼容性
- [关于兼容性支持的知识库和解决案例](http://w3help.org/zh-cn/home/compatibility.html)
- [浏览器怪异模式及其兼容性](https://www.quirksmode.org/)
- [browserhacks](http://browserhacks.com/)
- [caniuse网站](http://caniuse.com/), 浏览器兼容性查询
- 比如[查询Array.foreach](http://caniuse.com/#search=Array.foreach),可以看到在IE8及以下都不支持，甚至IE9也不完全支持
- 比如[查询getElementsByClassName](http://caniuse.com/#search=getElementsByClassName),可以看到IE8及其以下都不支持
