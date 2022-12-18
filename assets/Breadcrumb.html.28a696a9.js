import{_ as b,f as g,g as v,o as h,c as f,d as a,w as n,a as t,b as s,e as u,r as o}from"./app.5f440a3f.js";const _=t("h1",{id:"breadcrumb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#breadcrumb","aria-hidden":"true"},"#"),s(" Breadcrumb")],-1),y=t("blockquote",null,[t("p",null,[s("Indicate the current page's location within a navigational hierarchy. Separators are automatically added in CSS through "),t("code",null,"::before"),s(" and "),t("code",null,"content")])],-1),q=t("h2",{id:"overview",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),s(" Overview")],-1),x=u(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>breadcrumbItems<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> Ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
  <span class="token keyword">import</span> type <span class="token punctuation">{</span>BreadcrumbItem<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;bootstrap-vue-3&#39;</span>

  <span class="token keyword">const</span> <span class="token literal-property property">breadcrumbItems</span><span class="token operator">:</span> Ref<span class="token operator">&lt;</span>BreadcrumbItem<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;https://google.com&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Manage&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">href</span><span class="token operator">:</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span><span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;Library&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breadcrumb-items" tabindex="-1"><a class="header-anchor" href="#breadcrumb-items" aria-hidden="true">#</a> Breadcrumb items</h2><p>Items are rendered using <code>:items</code> prop. It can be an array of objects to provide link and active state or an array of strings. Links can be <code>href</code>&#39;s for anchor tags, or <code>to</code>&#39;s for router-links. Active state of last element is automatically set if it is <code>undefined</code>.</p><h3 id="breadcrumb-items-as-array-of-strings" tabindex="-1"><a class="header-anchor" href="#breadcrumb-items-as-array-of-strings" aria-hidden="true">#</a> Breadcrumb items as array of strings</h3>`,4),B=u(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb</span> <span class="token attr-name">:items</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>breadcrumbStringArray<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">,</span> Ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

  <span class="token keyword">const</span> breadcrumbStringArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;Admin&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Manage&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Library&#39;</span><span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="manually-placed-items" tabindex="-1"><a class="header-anchor" href="#manually-placed-items" aria-hidden="true">#</a> Manually placed items</h2><p>You may also manually place individual <code>&lt;b-breadcrumb-item&gt;</code> child components in the default slot of the <code>&lt;b-breadcrumb&gt;</code> component, as an alternative to using the <code>items</code> prop, for greater control over the content of each item:</p>`,3),w=u(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Home <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#bar<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>alertEvent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Baz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">const</span> <span class="token function-variable function">alertEvent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">event</span><span class="token operator">:</span> PointerEvent</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Event </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>event<span class="token punctuation">.</span>target<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Remember to set the <code>active</code> prop on the last item.</p><p><code>&lt;b-breadcrumb-item&gt;</code> also supports the various <code>&lt;router-link&gt;</code> props such as <code>to</code>, etc.</p><h2 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h2><p>Two slots are provided to put additional content before and after the breadcrumb. Use slot <code>prepend</code> to put content before the breadcrumb. Use slot <code>append</code> to put content after the breadcrumb.</p>`,5),C=t("span",{class:"mx-2"},"prepend text",-1),A=t("span",{class:"mx-2"},"append text",-1),I=u(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#home<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> Home <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#foo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Foo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#bar<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Bar<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-breadcrumb-item</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Baz<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>prepend</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>prepend text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>append</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mx-2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>append text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-breadcrumb</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),S=g({__name:"Breadcrumb.html",setup(E){const i=v([{text:"Admin",href:"https://google.com"},{text:"Manage",href:"#"},{text:"Library"}]),k=["Admin","Manage","Library"],d=r=>{alert(`Event ${r.target}`)};return(r,R)=>{const c=o("b-breadcrumb"),l=o("b-card"),p=o("ClientOnly"),e=o("b-breadcrumb-item"),m=o("ComponentReference");return h(),f("div",null,[_,y,q,a(p,null,{default:n(()=>[a(l,null,{default:n(()=>[a(c,{items:i.value},null,8,["items"])]),_:1})]),_:1}),x,a(p,null,{default:n(()=>[a(l,null,{default:n(()=>[a(c,{items:k})]),_:1})]),_:1}),B,a(p,null,{default:n(()=>[a(l,null,{default:n(()=>[a(c,null,{default:n(()=>[a(e,{href:"#home"},{default:n(()=>[s(" Home ")]),_:1}),a(e,{href:"#foo"},{default:n(()=>[s("Foo")]),_:1}),a(e,{href:"#bar",onClick:d},{default:n(()=>[s("Bar")]),_:1}),a(e,{active:""},{default:n(()=>[s("Baz")]),_:1})]),_:1})]),_:1})]),_:1}),w,a(p,null,{default:n(()=>[a(l,null,{default:n(()=>[a(c,null,{prepend:n(()=>[C]),append:n(()=>[A]),default:n(()=>[a(e,{href:"#home"},{default:n(()=>[s(" Home ")]),_:1}),a(e,{href:"#foo"},{default:n(()=>[s("Foo")]),_:1}),a(e,{href:"#bar"},{default:n(()=>[s("Bar")]),_:1}),a(e,{active:""},{default:n(()=>[s("Baz")]),_:1})]),_:1})]),_:1})]),_:1}),I,a(p,null,{default:n(()=>[a(m)]),_:1})])}}});var M=b(S,[["__file","Breadcrumb.html.vue"]]);export{M as default};
