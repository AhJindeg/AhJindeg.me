import{_ as e,o as r,c as t,a as o}from"./app-yIsnbKMY.js";const s={},c=o('<h1 id="nest-装饰器入门" tabindex="-1"><a class="header-anchor" href="#nest-装饰器入门" aria-hidden="true">#</a> Nest 装饰器入门</h1><p>Nest.js 是一个基于 Node.js 构建的 Web 应用程序框架，它采用了许多 TypeScript 和 ES6+ 的新特性，包括装饰器。装饰器是一种特殊类型的声明，可以为类、属性、方法和参数等添加元数据。</p><h2 id="装饰器的基本语法" tabindex="-1"><a class="header-anchor" href="#装饰器的基本语法" aria-hidden="true">#</a> 装饰器的基本语法</h2><p>在 Nest.js 中，您可以使用 <code>@</code> 符号将装饰器应用于类、方法和属性等。例如，您可以使用 <code>@Controller()</code> 装饰器来指定一个控制器类，使用 <code>@Get()</code> 或 <code>@Post()</code> 装饰器来指定路由方法，并使用 <code>@Injectable()</code> 装饰器来标识可注入的服务类。</p><p>typescript</p><p>复制代码</p><p><code>@Controller(&#39;users&#39;) export class UsersController { constructor(private readonly usersService: UsersService) {} @Get() findAll(): User[] { return this.usersService.findAll(); } @Get(&#39;:id&#39;) findOne(@Param(&#39;id&#39;) id: string): User { return this.usersService.findOne(id); } @Post() create(@Body() user: CreateUserDto): void { this.usersService.create(user); } } @Injectable() export class UsersService { private readonly users: User[] = []; findAll(): User[] { return this.users; } findOne(id: string): User { return this.users.find(user =&gt; user.id === id); } create(user: CreateUserDto): void { this.users.push(user); } }</code></p><p>上述示例演示了如何使用装饰器创建一个带有路由的控制器和一个可注入的服务类。在这个例子中，我们使用 <code>@Controller(&#39;users&#39;)</code> 装饰器来指定控制器路径，使用 <code>@Get()</code> 和 <code>@Post()</code> 装饰器来指定路由方法，以及使用 <code>@Injectable()</code> 装饰器来标识可注入的服务类。</p><h2 id="定义自定义装饰器" tabindex="-1"><a class="header-anchor" href="#定义自定义装饰器" aria-hidden="true">#</a> 定义自定义装饰器</h2><p>您还可以定义自己的装饰器，并将其应用于类、属性、方法和参数等。例如，您可以定义一个 <code>@Log()</code> 装饰器，用于记录方法调用。</p><p>typescript</p><p>复制代码</p><p><code>function Log(target: any, propertyKey: string, descriptor: PropertyDescriptor) { const originalMethod = descriptor.value; descriptor.value = function(...args: any[]) { console.log(`(${new Date().toISOString()}) Calling ${propertyKey} with arguments: `, args); const result = originalMethod.apply(this, args); console.log(`(${new Date().toISOString()}) ${propertyKey} returned: `, result); return result; }; return descriptor; } class MyService { @Log() myMethod(param1: string, param2: number): boolean { // ... return true; } }</code></p><p>在上面的示例中，我们定义了一个 <code>@Log()</code> 装饰器，它将在方法调用前后记录日志。我们可以将其应用于 <code>MyService</code> 类中的任何方法上，例如 <code>myMethod()</code>。</p><h2 id="使用-nest-装饰器进行元数据注入" tabindex="-1"><a class="header-anchor" href="#使用-nest-装饰器进行元数据注入" aria-hidden="true">#</a> 使用 Nest 装饰器进行元数据注入</h2><p>Nest.js 还提供了一些内置的装饰器，用于元数据注入和依赖注入。其中最常用的是 <code>@Inject()</code> 装饰器，它用于依赖注入一个服务。</p><p>typescript</p><p>复制代码</p><p><code>@Injectable() class MyService { getData() { // ... } } @Controller(&#39;my&#39;) class MyController { constructor(private readonly myService: MyService) {} @Get() getMyData(): any { return this.myService.getData(); } }</code></p><p>在上面的示例中，我们使用 <code>@Injectable()</code> 装饰器指定了一个可注入的服务类 <code>MyService</code>。在 <code>MyController</code> 类中，我们使用 <code>@Controller(&#39;my&#39;)</code> 装饰器指定控制器路径，并在构造函数中使用 <code>private readonly myService: MyService</code> 参数注入 <code>MyService</code> 的实例。这样，我们可以在控制器中轻松地调用 <code>MyService</code> 中的方法。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>装饰器是 TypeScript 和 ES6+ 中非常有用的特性，可以向类、属性、方法和参数等添加元数据。在 Nest.js 中，您可以使用内置的装饰器来简化元数据注入和依赖注入，还可以定义自己的装饰器来扩展框架的功能。希望这篇文章对于您理解 Nest 装饰器有所帮助。</p>',22),d=[c];function a(i,n){return r(),t("div",null,d)}const l=e(s,[["render",a],["__file","Nest zhuangshiqirumen.html.vue"]]);export{l as default};