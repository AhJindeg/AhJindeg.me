import{_ as p,r as o,o as l,c,b as e,d as a,e as i,a as d}from"./app-a8d-X_GH.js";const r={},n=e("blockquote",null,[e("p",null,"记录、分享IT相关知识和见闻！"),e("p",null,"想要了解更多软件相关知识的朋友！"),e("p",null,"记得右上角添加【关注】，支持一下！")],-1),u=e("hr",null,null,-1),s={href:"https://www.toutiao.com/article/7219684570890011140/?log_from=f6fef2fed5acf8_1682672364012",title:"https://www.toutiao.com/article/7219684570890011140/?log_from=f6fef2fed5acf8_1682672364012",target:"_blank",rel:"noopener noreferrer"},h=d('<p>HTML 属性非常多，除了基本的一些属性外，还有很多很有用的功能性特别强大的属性；</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0cb2b554ef9a44d58fe296294fb3045b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>本文将介绍24个强大的HTML属性，这些属性可以让你的网站更加动态和交互，让用户感到更加舒适和愉悦。</p><p>让我们一起来探索这24个强大的HTML属性吧！</p><h1 id="_1-accept" tabindex="-1"><a class="header-anchor" href="#_1-accept" aria-hidden="true">#</a> 1. Accept</h1><p>Accept属性是用于指定浏览器可以处理的MIME类型的列表。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fea4203dbeef44819da43fc6b3d7c246~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><p>MIME类型是一种标识文档类型的标准，</p><p>例如text/html表示HTML文档，image/jpeg表示JPEG图像等等。</p></blockquote><p>通过在HTTP请求头中包含Accept属性，浏览器可以告诉服务器它可以接受哪些MIME类型的响应。服务器可以根据这个信息来选择最合适的响应类型并返回给浏览器。Accept属性的值是一个逗号分隔的MIME类型列表，可以使用通配符来表示一类MIME类型，例如text/*表示所有文本类型。</p><h1 id="_2-autofocus" tabindex="-1"><a class="header-anchor" href="#_2-autofocus" aria-hidden="true">#</a> 2. Autofocus</h1><p>Autofocus属性是用于在页面加载时自动将焦点设置到指定的元素上。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e896a486b05e4650aa8af5f387ffb52a~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><p>Autofocus属性可以应用于多种HTML元素，例如文本框、按钮、下拉列表等等。</p><p>在HTML5中，Autofocus属性可以省略属性值，表示将焦点设置到第一个具有Autofocus属性的元素上。</p></blockquote><p>当页面加载完成后，如果存在Autofocus属性的元素，浏览器会自动将光标聚焦在该元素上，使用户可以直接与该元素进行交互，而无需手动点击或使用Tab键切换焦点。</p><h1 id="_3-inputmode" tabindex="-1"><a class="header-anchor" href="#_3-inputmode" aria-hidden="true">#</a> 3. Inputmode</h1><p>Inputmode属性是用于指定文本框中输入的内容类型的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/56d89f6d0e91450c8637f000a434c908~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>它可以帮助浏览器更好地优化输入体验，例如在移动设备上自动弹出合适的虚拟键盘。</p><blockquote><p>Tips：</p><p>Inputmode属性的值可以是以下几种类型：</p><ul><li><p>text：默认值，表示输入任意文本。</p></li><li><p>none：表示不需要输入任何内容。</p></li><li><p>tel：表示输入电话号码。</p></li><li><p>url：表示输入URL地址。</p></li><li><p>email：表示输入电子邮件地址。</p></li><li><p>numeric：表示输入数字。</p></li><li><p>decimal：表示输入带小数点的数字。</p></li><li><p>search：表示输入搜索关键字。</p></li></ul></blockquote><p>在不同的浏览器中，Inputmode属性的支持程度可能会有所不同。</p><p>因此，在使用Inputmode属性时，需要进行兼容性测试。</p><h1 id="_4-pattern" tabindex="-1"><a class="header-anchor" href="#_4-pattern" aria-hidden="true">#</a> 4. Pattern</h1><p>Pattern属性是用于指定文本框中输入内容的正则表达式模式。它可以帮助浏览器验证用户输入的内容是否符合指定的格式要求。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/28a1caffe86e462a8f1e47d875573a0b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果用户输入的内容不符合Pattern属性指定的正则表达式模式，浏览器会显示一个默认的错误提示信息。</p><blockquote><p>Tips：</p><ul><li><p>Pattern属性的值必须是一个有效的正则表达式。</p></li><li><p>Pattern属性只能应用于文本框、文本域和密码框等可输入文本的元素。</p></li><li><p>Pattern属性不会阻止用户输入非法字符，但会在提交表单时验证输入内容是否符合指定的格式要求。</p></li><li><p>Pattern属性的错误提示信息可以使用title属性自定义。</p></li></ul></blockquote><p>Pattern属性通常与required属性一起使用，以确保用户输入的内容符合指定的格式要求且不为空。例如，可以使用Pattern属性来验证用户输入的邮政编码、电话号码、电子邮件地址等等。</p><h1 id="_5-required" tabindex="-1"><a class="header-anchor" href="#_5-required" aria-hidden="true">#</a> 5. Required</h1><p>Required属性是用于指定表单元素是否必填的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9c5bba01f4304ed7bda019fbba5dd354~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果一个表单元素设置了Required属性，那么在提交表单时，如果该元素的值为空，浏览器会阻止表单的提交，并提示用户必须填写该字段。</p><blockquote><p>Tips：</p><ul><li><p>Required属性只能应用于表单元素，不能应用于其他HTML元素。</p></li><li><p>Required属性不会验证用户输入的内容是否符合指定的格式要求，只会验证该元素是否为空。</p></li><li><p>Required属性不会阻止用户提交空格或空白字符，因此需要使用其他方式来验证用户输入的内容是否有效。</p></li><li><p>Required属性可以与Pattern属性一起使用，以验证用户输入的内容是否符合指定的格式要求。</p></li><li><p>Required属性可以与Autofocus属性一起使用，以确保用户在进入表单页面时，焦点自动聚焦在必填字段上。</p></li></ul></blockquote><p>Required属性通常与表单元素的type属性一起使用，例如文本框、下拉列表、单选框、复选框等等。</p><h1 id="_6-autocomplete" tabindex="-1"><a class="header-anchor" href="#_6-autocomplete" aria-hidden="true">#</a> 6. Autocomplete</h1><p>Autocomplete属性是用于指定表单元素是否启用自动完成功能的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c5beedb32bec4e3a91bc9102887e0455~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>自动完成功能可以帮助用户更快地填写表单，减少输入错误的可能性。</p><blockquote><p>Tips：</p><ul><li><p>on：默认值，表示启用自动完成功能。</p></li><li><p>off：表示禁用自动完成功能。</p></li><li><p>name：表示使用表单元素的name属性作为自动完成的关键字。</p></li><li><p>email：表示使用用户最近输入的电子邮件地址作为自动完成的关键字。</p></li><li><p>username：表示使用用户最近输入的用户名作为自动完成的关键字。</p></li><li><p>current-password：表示使用用户最近输入的密码作为自动完成的关键字。</p></li><li><p>new-password：表示使用用户最近输入的新密码作为自动完成的关键字。</p></li><li><p>tel：表示使用用户最近输入的电话号码作为自动完成的关键字。</p></li><li><p>address-level1：表示使用用户最近输入的国家或地区名称作为自动完成的关键字。</p></li><li><p>address-level2：表示使用用户最近输入的省份或州名称作为自动完成的关键字。</p></li><li><p>address-level3：表示使用用户最近输入的城市或地区名称作为自动完成的关键字。</p></li><li><p>address-level4：表示使用用户最近输入的街道名称作为自动完成的关键字。</p></li><li><p>country：表示使用用户最近输入的国家名称作为自动完成的关键字。</p></li></ul></blockquote><p>在不同的浏览器中，Autocomplete属性的支持程度可能会有所不同。因此，在使用Autocomplete属性时，需要进行兼容性测试。</p><h1 id="_7-multiple" tabindex="-1"><a class="header-anchor" href="#_7-multiple" aria-hidden="true">#</a> 7. Multiple</h1><p>Multiple属性是用于指定表单元素是否允许多选的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/69e12d5d44ec498fa2555602363d4b29~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>Multiple属性通常应用于下拉列表、文件上传和复选框等表单元素。</p><blockquote><p>Tips：</p><ul><li><p>Multiple属性只能应用于下拉列表、文件上传和复选框等表单元素，不能应用于单选框和文本框等表单元素。</p></li><li><p>Multiple属性的值必须是布尔值，即true或false。</p></li><li><p>Multiple属性的默认值为false，表示不允许多选。</p></li><li><p>Multiple属性的值为true时，下拉列表会显示为可多选的列表框，复选框会显示为可多选的复选框列表，文件上传会允许用户选择多个文件。</p></li><li><p>在使用Multiple属性时，需要在后台程序中对多选的值进行处理，例如使用数组来存储多选的值。</p></li></ul></blockquote><p>如果一个表单元素设置了Multiple属性，那么用户可以选择多个选项，而不仅仅是单选。</p><h1 id="_8-download" tabindex="-1"><a class="header-anchor" href="#_8-download" aria-hidden="true">#</a> 8. Download</h1><p>Download属性是用于指定链接下载文件时的文件名的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f5bf26da60664c1ca053990087c47010~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果一个链接设置了Download属性，那么当用户点击该链接下载文件时，浏览器会将文件保存到本地，并使用Download属性指定的文件名来命名文件。</p><blockquote><p>Tips：</p><ul><li><p>Download属性的值可以是任意字符串，表示下载文件时使用的文件名。</p></li><li><p>Download属性只能应用于标签中，不能应用于其他HTML元素。</p></li><li><p>Download属性不会改变文件的实际名称，只会在下载时使用指定的文件名。</p></li><li><p>Download属性的值可以是动态生成的，例如使用JavaScript来生成文件名。</p></li><li><p>在使用Download属性时，需要确保下载的文件是合法的，不侵犯他人的版权和隐私。</p></li></ul></blockquote><p>Download属性通常应用于标签中，用于下载PDF、图片、音频、视频等文件。</p><h1 id="_9-contenteditable" tabindex="-1"><a class="header-anchor" href="#_9-contenteditable" aria-hidden="true">#</a> 9. Contenteditable</h1><p>HTML中的Contenteditable属性是用于指定元素是否可编辑的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4dbb9a51b72645929c07e1cc8a687beb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><ul><li><p>Contenteditable属性的值可以是true、false或inherit。</p></li><li><p>Contenteditable属性的默认值为false，表示元素不可编辑。</p></li><li><p>Contenteditable属性的值为true时，元素可编辑。</p></li><li><p>Contenteditable属性的值为inherit时，元素的可编辑性继承自父元素。</p></li><li><p>Contenteditable属性不会改变元素的默认行为，例如标签仍然可以跳转到其他页面。</p></li><li><p>在使用Contenteditable属性时，需要注意安全性问题，避免XSS攻击和恶意脚本注入。</p></li></ul></blockquote><p>如果一个元素设置了Contenteditable属性，那么用户可以在该元素中输入文本、插入图片、修改样式等等。Contenteditable属性通常应用于</p><p>、</p><p>、等元素，用于实现富文本编辑器、可编辑的表格等功能。</p><h1 id="_10-readonly" tabindex="-1"><a class="header-anchor" href="#_10-readonly" aria-hidden="true">#</a> 10. Readonly</h1><p>HTML中的Readonly属性是用于指定表单元素是否只读的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b26a986410704c2ebbfd1b25518a8531~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><ul><li><p>Readonly属性的值必须是布尔值，即true或false。</p></li><li><p>Readonly属性的默认值为false，表示表单元素可编辑。</p></li><li><p>Readonly属性的值为true时，表单元素只读。</p></li><li><p>Readonly属性不会阻止用户通过JavaScript修改表单元素的值。</p></li><li><p>Readonly属性不同于Disabled属性，Disabled属性会禁用表单元素，使其无法提交数据。</p></li><li><p>在使用Readonly属性时，需要在后台程序中对只读的值进行处理，例如使用隐藏域来存储只读的值。</p></li></ul></blockquote><p>如果一个表单元素设置了Readonly属性，那么用户可以看到该元素的值，但无法修改该元素的值。Readonly属性通常应用于文本框、下拉列表、日期选择器等表单元素，用于展示数据或防止用户修改数据。</p><h1 id="_11-hidden" tabindex="-1"><a class="header-anchor" href="#_11-hidden" aria-hidden="true">#</a> 11. Hidden</h1><p>Hidden属性是用于指定元素是否隐藏的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/619e4f2215224fd492d8315cb8f516a2~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><ul><li><p>Hidden属性的值必须是布尔值，即true或false。</p></li><li><p>Hidden属性的默认值为false，表示元素不隐藏。</p></li><li><p>Hidden属性的值为true时，元素隐藏。</p></li><li><p>Hidden属性不同于CSS的display:none属性，display:none属性会将元素从页面中完全移除，无法通过JavaScript等方式访问该元素。</p></li><li><p>在使用Hidden属性时，需要在后台程序中对隐藏的值进行处理，例如使用隐藏域来存储隐藏的值。</p></li></ul></blockquote><p>如果一个元素设置了Hidden属性，那么该元素将不会在页面中显示，但仍然存在于页面中，可以通过JavaScript等方式访问该元素。Hidden属性通常应用于表单元素、按钮、图像等元素，用于在不影响页面布局的情况下，传递数据或控制页面行为。</p><h1 id="_12-spellcheck" tabindex="-1"><a class="header-anchor" href="#_12-spellcheck" aria-hidden="true">#</a> 12. Spellcheck</h1><p>HTML中的Spellcheck属性是用于指定元素是否启用拼写检查的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb0ad744beec4c4e8960089da3d3dbcb~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><ul><li><p>Spellcheck属性的值必须是布尔值，即true或false。</p></li><li><p>Spellcheck属性的默认值为false，表示元素不启用拼写检查。</p></li><li><p>Spellcheck属性的值为true时，元素启用拼写检查。</p></li><li><p>Spellcheck属性的支持程度因浏览器而异，不同浏览器可能会有不同的拼写检查算法和字典。</p></li><li><p>在使用Spellcheck属性时，需要注意安全性问题，避免XSS攻击和恶意脚本注入。</p></li></ul></blockquote><p>如果一个元素设置了Spellcheck属性，那么用户在该元素中输入文本时，浏览器会自动检查拼写错误，并在错误单词下方显示红色波浪线。Spellcheck属性通常应用于文本框、文本域等元素，用于提高用户输入的准确性。</p><h1 id="_13-translate" tabindex="-1"><a class="header-anchor" href="#_13-translate" aria-hidden="true">#</a> 13. Translate</h1><p>HTML中的Translate属性是用于指定元素是否应该被翻译的属性。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/91d252cca0e94c8ca52d25d24f366f8b~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><ul><li><p>Translate属性的值必须是布尔值，即yes或no。</p></li><li><p>Translate属性的默认值为yes，表示元素需要翻译。</p></li><li><p>Translate属性的值为no时，元素不需要翻译。</p></li><li><p>Translate属性的支持程度因浏览器而异，不同浏览器可能会有不同的翻译算法和字典。</p></li><li><p>在使用Translate属性时，需要注意安全性问题，避免XSS攻击和恶意脚本注入。</p></li></ul></blockquote><p>如果一个元素设置了Translate属性，那么浏览器会根据该属性的值来决定是否翻译该元素的内容。Translate属性通常应用于网站的多语言版本中，用于控制哪些元素需要翻译，哪些元素不需要翻译。</p><h1 id="_14-loading" tabindex="-1"><a class="header-anchor" href="#_14-loading" aria-hidden="true">#</a> 14. Loading</h1><p>HTML中的<code>loading</code>属性是一个新的属性，它可以用于指定浏览器在加载资源时的优先级。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fae2a03021a54812b74a57ad39f0f0a3~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>该属性可以应用于<code>&lt;img&gt;</code>、<code>&lt;iframe&gt;</code>、<code>&lt;script&gt;</code>、<code>&lt;link&gt;</code>和<code>&lt;audio&gt;</code>等标签上。</p><blockquote><p>Tips：</p><ul><li><p><code>lazy</code>：表示资源应该在页面加载后延迟加载。这是默认值。</p></li><li><p><code>eager</code>：表示资源应该在页面加载时立即加载。</p></li><li><p><code>auto</code>：表示浏览器应该自行决定何时加载资源。</p></li></ul></blockquote><p><code>loading</code>属性并不是所有浏览器都支持的，因此在使用时需要进行兼容性检查。</p><h1 id="_15-onerror" tabindex="-1"><a class="header-anchor" href="#_15-onerror" aria-hidden="true">#</a> 15. Onerror</h1><p><code>onerror</code>是一个JavaScript事件处理程序， JavaScript错误时触发。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/debe540ed1ba4b8b8cedd871374646a9~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>可以将<code>onerror</code>事件处理程序添加到<code>window</code>对象上，以便在全局范围内捕获JavaScript错误。</p><blockquote><p>Tips：</p><ul><li><p><code>message</code>：错误消息。</p></li><li><p><code>source</code>：发生错误的脚本URL。</p></li><li><p><code>lineno</code>：发生错误的行号。</p></li><li><p><code>colno</code>：发生错误的列号。</p></li><li><p><code>error</code>：包含有关错误的详细信息的Error对象。</p></li></ul></blockquote><p><code>onerror</code>事件处理程序只能捕获未被其他错误处理程序捕获的JavaScript错误。</p><p>最好在代码中使用try-catch语句来捕获和处理JavaScript错误。</p><h1 id="_16-poster" tabindex="-1"><a class="header-anchor" href="#_16-poster" aria-hidden="true">#</a> 16. Poster</h1><p><code>poster</code>是HTML5中<code>&lt;video&gt;</code>标签的一个属性，用于指定在视频加载之前和播放之前显示的图像。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3abaffe9761f4a1b936a48568876c58c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><blockquote><p>Tips：</p><p><code>poster</code>属性只适用于<code>&lt;video&gt;</code>标签，而不适用于<code>&lt;audio&gt;</code>标签。</p></blockquote><p>它通常用于提供视频的预览图像或缩略图。</p><h1 id="_17-controls" tabindex="-1"><a class="header-anchor" href="#_17-controls" aria-hidden="true">#</a> 17. Controls</h1><p><code>controls</code>是HTML5中<code>&lt;video&gt;</code>和<code>&lt;audio&gt;</code>标签的一个属性，用于指定是否显示媒体播放器的控件。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c35b556560fd49a2896124d4d79afa6c~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果将<code>controls</code>属性设置为<code>controls</code>，则会在媒体播放器上显示控件，例如播放/暂停按钮、音量控制、进度条等。</p><p>xml</p><p>复制代码</p><p><code>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Controls Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;video width=&quot;320&quot; height=&quot;240&quot; controls&gt; &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot;&gt; &lt;source src=&quot;video.ogg&quot; type=&quot;video/ogg&quot;&gt; Your browser does not support the video tag. &lt;/video&gt; &lt;/body&gt; &lt;/html&gt;`</code></p><p><code>controls</code>属性只适用于支持HTML5的浏览器。如果浏览器不支持HTML5，则不会显示控件。</p><h1 id="_18-autoplay" tabindex="-1"><a class="header-anchor" href="#_18-autoplay" aria-hidden="true">#</a> 18. Autoplay</h1><p><code>autoplay</code>是HTML5中<code>&lt;video&gt;</code>和<code>&lt;audio&gt;</code>标签的一个属性，用于指定媒体是否应在页面加载时自动播放。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee49571dc7454f7a85c640b119929eca~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果将<code>autoplay</code>属性设置为<code>autoplay</code>，则媒体将在页面加载时自动播放。</p><p>xml</p><p>复制代码</p><p><code>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Autoplay Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;video width=&quot;320&quot; height=&quot;240&quot; autoplay&gt; &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot;&gt; &lt;source src=&quot;video.ogg&quot; type=&quot;video/ogg&quot;&gt; Your browser does not support the video tag. &lt;/video&gt; &lt;/body&gt; &lt;/html&gt;`</code></p><p>自动播放可能会对用户体验产生负面影响，因此在使用<code>autoplay</code>属性时需要慎重考虑。在某些情况下，浏览器可能会阻止自动播放，例如在移动设备上，用户必须首先与页面进行交互，才能允许自动播放。</p><h1 id="_19-loop" tabindex="-1"><a class="header-anchor" href="#_19-loop" aria-hidden="true">#</a> 19. Loop</h1><p><code>loop</code>是HTML5中<code>&lt;video&gt;</code>和<code>&lt;audio&gt;</code>标签的一个属性，用于指定媒体是否应在播放结束后循环播放。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/68f31ad7fd9541fe95268038b23c5e28~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果将<code>loop</code>属性设置为<code>loop</code>，则媒体将在播放结束后循环播放。</p><p>xml</p><p>复制代码</p><p><code>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Loop Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;video width=&quot;320&quot; height=&quot;240&quot; loop&gt; &lt;source src=&quot;video.mp4&quot; type=&quot;video/mp4&quot;&gt; &lt;source src=&quot;video.ogg&quot; type=&quot;video/ogg&quot;&gt; Your browser does not support the video tag. &lt;/video&gt; &lt;/body&gt; &lt;/html&gt;`</code></p><p>循环播放可能会对用户体验产生负面影响，因此在使用<code>loop</code>属性时需要慎重考虑。</p><h1 id="_20-cite" tabindex="-1"><a class="header-anchor" href="#_20-cite" aria-hidden="true">#</a> 20. Cite</h1><p><code>cite</code>是HTML中的一个全局属性，可以用于指定引用的来源。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c8c01413c5d45de97e4d8bd2f8a32ec~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p><code>cite</code>属性的值应该是一个URL，指向引用的来源。</p><blockquote><p>Tips：</p><p><code>cite</code>属性可以应用于<code>&lt;blockquote&gt;</code>、<code>&lt;q&gt;</code>、<code>&lt;del&gt;</code>、<code>&lt;ins&gt;</code>等标签上。</p></blockquote><p>如果引用的来源不是一个URL，可以将<code>cite</code>属性的值设置为一个描述引用的字符串。</p><p>xml</p><p>复制代码</p><p><code>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Cite Example&lt;/title&gt; &lt;/head&gt; &lt;body&gt; &lt;blockquote cite=&quot;https://www.example.com/quote&quot;&gt; This is a quote from an external source. &lt;/blockquote&gt; &lt;q cite=&quot;https://www.example.com/quote&quot;&gt; This is a short quote from an external source. &lt;/q&gt; &lt;del cite=&quot;https://www.example.com/deleted&quot;&gt; This text has been deleted from an external source. &lt;/del&gt; &lt;ins cite=&quot;https://www.example.com/inserted&quot;&gt; This text has been inserted from an external source. &lt;/ins&gt; &lt;/body&gt; &lt;/html&gt;</code></p><p><code>cite</code>属性并不会自动创建链接，因此如果需要创建链接，需要使用<code>&lt;a&gt;</code>标签，并将<code>href</code>属性设置为<code>cite</code>属性的值。</p><h1 id="_21-datetime" tabindex="-1"><a class="header-anchor" href="#_21-datetime" aria-hidden="true">#</a> 21. Datetime</h1><p><code>datetime</code>是HTML中<code>&lt;time&gt;</code>标签的一个属性，用于指定日期和时间。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d0a0993bcf0e4d18bfa0c886bae7d4bf~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p><code>datetime</code>属性的值应该是一个有效的日期和时间格式，例如<code>YYYY-MM-DDThh:mm:ss</code>。</p><p><code>datetime</code>属性并不会自动格式化日期和时间，因此需要使用JavaScript或其他工具来格式化日期和时间。</p><h1 id="_22-async" tabindex="-1"><a class="header-anchor" href="#_22-async" aria-hidden="true">#</a> 22. Async</h1><p><code>async</code>是HTML中<code>&lt;script&gt;</code>标签的一个属性，用于指定脚本是否应该异步加载。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8601c74e280e4f0fa971b8c9aac89c58~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果将<code>async</code>属性设置为<code>async</code>，则脚本将异步加载，不会阻止页面的解析和渲染。</p><p>异步加载的脚本可能会在页面的其他部分加载之前执行，因此需要谨慎使用。如果脚本依赖于页面的其他部分，可能会导致错误。</p><h1 id="_23-defer" tabindex="-1"><a class="header-anchor" href="#_23-defer" aria-hidden="true">#</a> 23. Defer</h1><p><code>defer</code>是HTML中<code>&lt;script&gt;</code>标签的一个属性，用于指定脚本是否应该延迟加载。</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c4567803b9164b79ad6a73283ec83724~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p>如果将<code>defer</code>属性设置为<code>defer</code>，则脚本将延迟加载，直到页面解析完成后再执行。</p><p>xml</p><p>复制代码</p><p><code>&lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;title&gt;Defer Example&lt;/title&gt; &lt;script defer src=&quot;script.js&quot;&gt;&lt;/script&gt; &lt;/head&gt; &lt;body&gt; &lt;p&gt;This is a paragraph.&lt;/p&gt; &lt;/body&gt; &lt;/html&gt;</code></p><p>在上面的示例中，我们将<code>defer</code>属性设置为<code>defer</code>，这将使脚本延迟加载。在这种情况下，脚本将在页面解析完成后执行，不会阻止页面的加载。</p><h1 id="_24-draggable" tabindex="-1"><a class="header-anchor" href="#_24-draggable" aria-hidden="true">#</a> 24. Draggable</h1><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/32fd9436dbbc45a7887fb505da0f74ce~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp" alt=""></p><p><code>Draggable</code> 是 HTML5 中的一个属性，它允许用户通过拖动元素来移动它们。当一个元素被设置为 <code>draggable</code> 时，用户可以通过鼠标或触摸屏幕来拖动该元素。在拖动元素时，会触发一系列事件，如 <code>dragstart</code>、<code>drag</code> 和 <code>dragend</code>，这些事件可以用来实现拖放功能。</p><p>如果你是一位专业的前端工程师，想必很多属性你都用过！</p><p>以上分享的24个强大的属性，你是否都在项目中使用过呢？</p><hr><p>⛱ <strong>以上就是今天为大家带来的分享！</strong></p><p>⛱ <strong>如果文章对你有益；</strong></p><p>⛱ <strong>请记得【评论、收藏、转发、点赞】！</strong></p><p>⛱ <strong>创作不易，且读且珍惜，喜欢我的文章；</strong></p><p>⛱ <strong>喜欢我的文章，记得添加【关注】哦！</strong></p><p>⛱ <strong>再次感谢您的阅读。</strong></p><h4 id="软件技术交流群-可以添加我的v-erya-1024" tabindex="-1"><a class="header-anchor" href="#软件技术交流群-可以添加我的v-erya-1024" aria-hidden="true">#</a> 软件技术交流群，可以添加我的V：erya_1024</h4><hr><p><strong>❀ 长按【点赞】会有惊喜哦！❀</strong></p><p>~End~</p>',164);function b(f,g){const t=o("ExternalLinkIcon");return l(),c("div",null,[n,u,e("p",null,[e("a",s,[a("原文链接：24个强大的HTML属性，每个资深Web工程师都应该掌握！"),i(t)])]),h])}const k=p(r,[["render",b],["__file","24geqiangdadeHTMLshuxing，meigezishenWebgongchengshiduyinggaizhangwo！.html.vue"]]);export{k as default};
