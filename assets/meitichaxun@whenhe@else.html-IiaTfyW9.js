import{_ as n,o as s,c as a,a as e}from"./app-ojJIz5WI.js";const p="/assets/1655969542812-C_vhd_mo.png",t={},c=e('<h1 id="未来的-css-将引入新的媒体查询方式-when-和-else" tabindex="-1"><a class="header-anchor" href="#未来的-css-将引入新的媒体查询方式-when-和-else" aria-hidden="true">#</a> 未来的 CSS 将引入新的媒体查询方式@when 和@else</h1><p>[<code>web 前端开发](&lt;javascript:void(0);&gt;) _2022-05-12 16:00_ _发表于上海</code>_</p><p><code>英文 | https://levelup.gitconnected.com/future-css-a-first-look-at-when-and-else-statements-44e33deeb032</code> --<code>翻译 | 杨小爱</code></p><p>在 CSS 中，我们使用媒体查询来选择不同的设备。媒体查询为我们提供了一种基于多种条件选择设备的简单方法，例如屏幕尺寸、像素，格式：即打印或屏幕。</p><p>随着时间的推移，这逐渐变得更加复杂，现在，我们经常平衡许多有时相互冲突的条件。</p><p>因此，在新的 CSS 条件规则 5 规范试图通过引入两种新的媒体查询方式来解决这个问题——@when 和 @else。这些最终将允许我们直接在 vanilla CSS 中创建条件语句。让我们来看看它是如何工作的！</p><h1 id="_1、浏览器目前对-when-else-的支持情况" tabindex="-1"><a class="header-anchor" href="#_1、浏览器目前对-when-else-的支持情况" aria-hidden="true">#</a> <strong>1、浏览器目前对@when/@else 的支持情况</strong></h1><p>目前，没有浏览器原生支持@when/@else，但是，这可能很快就会改变。对@when/@else 的完全支持如下所示。</p><p><img src="'+p+`" alt="1655969542812"></p><h1 id="_2、在-css-中使用-when-else" tabindex="-1"><a class="header-anchor" href="#_2、在-css-中使用-when-else" aria-hidden="true">#</a> <strong>2、在 CSS 中使用 @when/@else</strong></h1><p>假设我们有一组规则要应用于宽度小于 780 像素的屏幕尺寸，它支持 display: flex，而另一组规则应该适用于除此之外的任何东西。</p><p>以前，我们必须使用@media 查询来分别选择这两个东西。在选择多种不同的东西时，这变得有点混乱。</p><p>使用 @when 和 @else ，它看起来像这样：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@when</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 780px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.my-element</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.my-element</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以链接多个条件。</p><p>例如，假设我们有三个场景：最大宽度为 780px 的屏幕支持显示：flex，更大的屏幕支持显示：flex，以及其他所有内容。</p><p>在这种情况下，我们可以有多个条件：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@when</span> screen <span class="token keyword">and</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 780px<span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.my-element</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span> screen <span class="token keyword">and</span> <span class="token function">supports</span><span class="token punctuation">(</span><span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.my-element</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token atrule"><span class="token rule">@else</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.my-element</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>正如你所期望的，我们可以有更多的@else 语句，但是，上面的内容让你知道@when 和@else 在 CSS 中实现时会有多有用。</p><p><strong>结论</strong></p><p>条件语句从未出现在 vanilla CSS 中，所以，很高兴终于看到它们即将推出。它还将大大简化我们进行媒体查询的方式。</p><p>如果我们使用像 SASS 这样的第三方包，我们在 CSS 中已经有了逻辑，但是当它原生到 CSS 时，我们可以避免使用预处理器或使用此添加构建的需要。</p><p>写下你的留言</p>`,23),l=[c];function o(i,u){return s(),a("div",null,l)}const d=n(t,[["render",o],["__file","meitichaxun@whenhe@else.html.vue"]]);export{d as default};