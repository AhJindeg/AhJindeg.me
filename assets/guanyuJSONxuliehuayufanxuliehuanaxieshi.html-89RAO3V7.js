import{_ as n,o as s,c as a,b as t}from"./app-DD9PwAor.js";const p={},e=t(`<h2 id="_1-json-stringify-格式化" tabindex="-1"><a class="header-anchor" href="#_1-json-stringify-格式化" aria-hidden="true">#</a> 1. JSON.stringify：<code>格式化</code></h2><ul><li><code>JSON.stringify</code> 内有 <code>格式化</code> 程序</li><li><code>JSON.stringify(user, null, 2)</code> JSON 格式为 2 个缩进空格 也可以通过 <code>第三个参数</code>定义缩进的 <code>内容</code></li></ul><h2 id="_2-json-stringify-隐藏-字符串化数据中的-属性" tabindex="-1"><a class="header-anchor" href="#_2-json-stringify-隐藏-字符串化数据中的-属性" aria-hidden="true">#</a> 2. JSON.stringify：<code>隐藏</code> 字符串化数据中的 <code>属性</code></h2><ul><li>JSON.stringify <code>第二个参数</code> 被称为 <code>replacer</code></li><li>它是一个 <code>函数(不保留)</code> 或 <code>数组(保留)</code>，用于决定数据 <code>保留</code> 或 <code>不保留</code> 在输出中</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code># 隐藏password用户
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
  <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

# 重构
<span class="token keyword">function</span> <span class="token function">stripKeys</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>keys</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>keys<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token function">stripKeys</span><span class="token punctuation">(</span><span class="token string">&#39;password&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gender&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

# 还可以传递一个数组来仅获取某些键
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-json-stringify-使用-tojson-创建自定义输出格式" tabindex="-1"><a class="header-anchor" href="#_3-json-stringify-使用-tojson-创建自定义输出格式" aria-hidden="true">#</a> 3. JSON.stringify：使用 <code>toJSON</code> 创建自定义输出格式</h2><ul><li>如果一个对象实现了该 toJSON 函数，JSON.stringify 将使用它来对数据进行字符串化</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Fraction</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>numerator <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>denominator <span class="token operator">=</span> d<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Fraction</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

# 如果我们想用一个字符串替换它<span class="token number">1</span><span class="token operator">/</span><span class="token number">2</span>
<span class="token keyword">class</span> <span class="token class-name">Fraction</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>numerator <span class="token operator">=</span> n<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>denominator <span class="token operator">=</span> d<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>numerator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>denominator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Fraction</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-json-parse-恢复数据" tabindex="-1"><a class="header-anchor" href="#_4-json-parse-恢复数据" aria-hidden="true">#</a> 4. JSON.parse： <code>恢复数据</code></h2><ul><li>通过传递 <code>第二个参数JSON.parse</code> 来指定 <code>reviver</code> 函数</li><li>恢复器的工作是将字符串化数据 <code>恢复回其原始形式</code></li><li>我们传递了一个 <code>reviver</code>，它是类的静态 fromJSON 属性 Fraction。</li><li>reviver 检查该值是否是一个有效的分数，如果是，它会创建一个新 Fraction 对象并返回它。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Fraction</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>numerator <span class="token operator">=</span> n
    <span class="token keyword">this</span><span class="token punctuation">.</span>denominator <span class="token operator">=</span> d
  <span class="token punctuation">}</span>
  <span class="token function">toJSON</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>numerator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>denominator<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
  <span class="token punctuation">}</span>
  <span class="token keyword">static</span> <span class="token function">fromJSON</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> parts <span class="token operator">=</span> value<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>parts<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Fraction</span><span class="token punctuation">(</span>parts<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fraction <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Fraction</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> stringified <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>fraction<span class="token punctuation">)</span>
<span class="token comment">// &quot;1/2&quot;</span>
<span class="token keyword">const</span> revived <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>stringified<span class="token punctuation">,</span> Fraction<span class="token punctuation">.</span>fromJSON<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>此功能用于内置的 <code>Date</code> 对象。尝试查找 <code>Date.prototype.toJSON</code></li><li><code>JSON.stringify(new Date())</code></li><li>恢复日期，我们可以使用 JSON.parse</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reviveDate</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d{1,}|)Z$</span><span class="token regex-delimiter">/</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> value <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span> <span class="token operator">&amp;&amp;</span> regex<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
  <span class="token keyword">return</span> value
<span class="token punctuation">}</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">&#39;&quot;2022-03-01T06:28:41.308Z&quot;&#39;</span><span class="token punctuation">,</span> reviveDate<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-json-parse-使用-revivers-隐藏-数据" tabindex="-1"><a class="header-anchor" href="#_5-json-parse-使用-revivers-隐藏-数据" aria-hidden="true">#</a> 5. JSON.parse：使用 <code>revivers</code> <code>隐藏</code> 数据</h2><ul><li>与解析器一样，恢复器也可用于隐藏数据。它以相同的方式工作。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span> <span class="token operator">...</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> <span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>key <span class="token operator">===</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","guanyuJSONxuliehuayufanxuliehuanaxieshi.html.vue"]]);export{r as default};
