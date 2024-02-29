import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as l,c as e,b as n,e as i,d as o,a}from"./app-CcJZcE5q.js";const c={},u=a('<h2 id="单体架构vs微服务架构" tabindex="-1"><a class="header-anchor" href="#单体架构vs微服务架构"><span>单体架构vs微服务架构</span></a></h2><h3 id="单机架构" tabindex="-1"><a class="header-anchor" href="#单机架构"><span>单机架构</span></a></h3><h4 id="什么是单体架构" tabindex="-1"><a class="header-anchor" href="#什么是单体架构"><span>什么是单体架构</span></a></h4><p>一个归档包（例如war格式）包含了应用所有功能的应用程序，我们通常称之为单体应用。架构单体应用的方法论，我们称之为单体应用架构。（就是一个war包打天下）</p><h4 id="单体架构示意图" tabindex="-1"><a class="header-anchor" href="#单体架构示意图"><span>单体架构示意图</span></a></h4><p>​ <img src="https://img.jssjqd.cn/202211141912190.png" alt="image-20221114191243385"></p><h4 id="单体架构的优缺点" tabindex="-1"><a class="header-anchor" href="#单体架构的优缺点"><span>单体架构的优缺点</span></a></h4><p><strong>优点</strong>:</p><ul><li><p>架构简单明了，没有花里胡哨的问题需要解决。</p></li><li><p>开发，测试，部署简单，运维简单</p></li><li><p>随着业务扩展，代码越来越复杂，代码质量参差不齐(开发人员的水平不一),会让你每次提交代码 ，修改每一个小bug都是心惊胆战的。</p></li><li><p>部署慢(由于单体架构，功能复杂) 能想像下一个来自200W+代码部署的速度(15分钟)</p></li><li><p>扩展成本高，根据单体架构图 假设用户模块是一个CPU密集型的模块(涉及到大量的运算)，那么我们需要替换更加牛逼的CPU，而我们的订单模块是一个IO密集模块（涉及大量的读写磁盘）,那我们需要替换更加牛逼的内存以及高效的磁盘。但是我们的单体架构上 无法针对单个功能模块进行扩展，那么就需要替换更牛逼的CPU，更牛逼的内存，更牛逼的磁盘，价格蹭蹭的往上涨。</p></li><li><p>阻碍了新技术的发展。。。。。。比如我们的web架构模块 从struts2迁移到springboot，那么就会成为灾难</p></li></ul><h3 id="微服务以及微服务架构" tabindex="-1"><a class="header-anchor" href="#微服务以及微服务架构"><span>微服务以及微服务架构</span></a></h3><h4 id="微服务的定义" tabindex="-1"><a class="header-anchor" href="#微服务的定义"><span>微服务的定义</span></a></h4><ul><li><p>英文:https://martinfowler.com/articles/microservices.html</p></li><li><p>中文:http://blog.cuicc.com/blog/2015/07/22/microservices</p></li></ul><p>微服务核心就是把传统的单机应用，根据业务将单机应用拆分为一个一个的服务，彻底的解耦，每一个服务都是提供特定的功能，一个服务只做一件事,类似进程，每个服务都能够单独部署，甚至可以拥有自己的数据库。这样的一个一个的小服务就是微服务。</p><ul><li><p>比如传统的单机电商应用,有<strong>订单/支付/库存/物流/积分</strong>等模块(理解为service)</p></li><li><p>我们根据业务模型来拆分,可以拆分为<strong>订单服务，支付服务，库存服务，物流服务，积分服务</strong></p></li><li><p>若不拆分的时候，我的非核心业务积分模块 出现了重大bug 导致系统内存溢出，导致整个服务宕机,若拆分之后，只是说我的积分微服务不可用，我的整个系统核心功能还是能使用</p></li></ul><h4 id="微服务的特点" tabindex="-1"><a class="header-anchor" href="#微服务的特点"><span>微服务的特点</span></a></h4><p><strong>1）独立部署，灵活扩展</strong></p><p>传统的单体架构是以整个系统为单位进行部署，而微服务则是以每一个独立组件（例如用户服务，商品服务）为单位进行部署。</p><p><img src="https://img.jssjqd.cn/202211141913000.png" alt="image-20221114191316803"></p><p><strong>2）资源的有效隔离</strong></p><p>微服务设计的原则之一，就是每一个微服务拥有独立的数据源，假如微服务A想要读写微服务B的数据库，只能调用微服务B对外暴露的接口来完成。这样有效避免了服务之间争用数据库和缓存资源所带来的问题。</p><p>​ <img src="https://img.jssjqd.cn/202211141913637.png" alt="image-20221114191327616"></p><p><strong>3）团队组织架构的调整</strong></p><p>微服务设计的思想也改变了原有的企业研发团队组织架构。传统的研发组织架构是水平架构，前端有前端的团队，后端有后端的团队，DBA有DBA的团队，测试有测试的团队。而微服务的设计思想对团队的划分有着一定的影响，使得团队组织架构的划分更倾向于垂直架构，比如用户业务是一个团队来负责，支付业务是一个团队来负责。</p><p><img src="https://img.jssjqd.cn/202211141913769.png" alt="image-20221114191336571"></p><h4 id="微服务架构是什么" tabindex="-1"><a class="header-anchor" href="#微服务架构是什么"><span>微服务架构是什么？</span></a></h4><p>微服务架构风格是一种将单个应用程序作为一套小型服务开发的方法，每种应用程序都在自己的进程中运行，并与轻量级机制（通常是HTTP资源API）进行通信。 这些服务是围绕业务功能构建的，可以通过全自动部署机制独立部署。 这些服务的集中管理最少，可以用不同的编程语言编写，并使用不同的数据存储技术。</p><p>SOA架构强调的是异构系统之间的通信和解耦合，而微服务架构强调的是系统按业务边界做细粒度的拆分和部署</p><p>微服务架构是一个架构风格, 提倡:</p><ul><li><p>将一个单一应用程序开发为一组小型服务.</p></li><li><p>每个服务运行在自己的进程中</p></li><li><p>服务之间通过轻量级的通信机制(http rest api)</p></li><li><p>每个服务都能够独立的部署</p></li><li><p>每个服务甚至可以拥有自己的数据库</p></li></ul><p>微服务以及微服务架构的是二个完全不同的概念。微服务强调的是服务的大小和对外提供的单一功能，而微服务架构是指把 一个一个的微服务组合管理起来，对外提供一套完整的服务。</p><h4 id="微服务的优缺点" tabindex="-1"><a class="header-anchor" href="#微服务的优缺点"><span>微服务的优缺点</span></a></h4><p><strong>优点</strong>:</p><ul><li><p>每个服务足够小,足够内聚，代码更加容易理解,专注一个业务功能点(对比传统应用，可能改几行代码 需要了解整个系统)</p></li><li><p>开发简单，一个服务只干一个事情。（加入你做支付服务，你只要了解支付相关代码就可以了）</p></li><li><p>微服务能够被2-5个人的小团队开发，提高效率</p></li><li><p>按需伸缩，服务松耦合，每个服务都能够开发部署</p></li><li><p>前后端分离, 开发人员只需要关注后端接口的安全性以及性能，不要去关注页面的人机交互(H5工程师)根据前后端接口协议，根据入参，返回json的回参。</p></li><li><p>一个服务可用拥有自己的数据库，也可以多个服务连接同一个数据库。</p></li></ul><p><strong>缺点</strong>:</p><ul><li><p>增加了运维人员的工作量，以前只要部署一个war包，现在可能需要部署成百上千个war包 (k8s+docker+jenkins )</p></li><li><p>服务之间相互调用，增加通信成本</p></li><li><p>数据一致性问题(分布式事务问题)</p></li><li><p>性能监控等,问题定位..........................</p></li></ul><h4 id="微服务的适用场景" tabindex="-1"><a class="header-anchor" href="#微服务的适用场景"><span>微服务的适用场景</span></a></h4><p><strong>合适</strong></p><ul><li><p>大型复杂的项目............(来自单体架构200W行代码的恐惧)</p></li><li><p>快速迭代的项目............(来自一天一版的恐惧)</p></li><li><p>并发高的项目................(考虑弹性伸缩扩容的恐惧)</p></li></ul><p><strong>不合适</strong></p><ul><li><p>业务稳定，就是修修bug ，改改数据</p></li><li><p>迭代周期长 发版频率 一二个月一次.</p></li></ul><h2 id="spring-cloud-微服务技术栈" tabindex="-1"><a class="header-anchor" href="#spring-cloud-微服务技术栈"><span>Spring Cloud 微服务技术栈</span></a></h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍"><span>介绍</span></a></h3><p>Spring Cloud是分布式微服务架构的一站式解决方案，是多种微服务架构落地技术的集合体，俗称微服务全家桶。</p><p>Spring Cloud为开发人员提供了快速构建分布式系统中的一些常见模式的工具(例如配置管理、服务发现、断路器、智能路由、微代理、控制总线、一次性令牌、全局锁、领导选举、分布式会话、集群状态)。</p><p>​ <img src="https://img.jssjqd.cn/202304082145918.png" alt="image-20230408214542007"></p><p>​ <img src="https://img.jssjqd.cn/202211141913012.png" alt="image-20221114191344720"></p><p>官网： https://spring.io/projects/spring-cloud</p><p>中文文档： https://www.springcloud.cc/</p><p>Spring Cloud中国社区：http://springcloud.cn/</p><h3 id="springcloud微服务架构生态圈" tabindex="-1"><a class="header-anchor" href="#springcloud微服务架构生态圈"><span>SpringCloud微服务架构生态圈</span></a></h3><p>​ <img src="https://img.jssjqd.cn/202211141913534.png" alt="image-20221114191350492"></p><h3 id="spring-cloud-netflix包含的组件" tabindex="-1"><a class="header-anchor" href="#spring-cloud-netflix包含的组件"><span>Spring Cloud Netflix包含的组件</span></a></h3><ul><li>Eureka，服务注册和发现，它提供了一个服务注册中心、服务发现的客户端，还有一个方便的查看所有注册的服务的界面。 所有的服务使用Eureka的服务发现客户端来将自己注册到Eureka的服务器上。</li><li>Zuul，网关，所有的客户端请求通过这个网关访问后台的服务。他可以使用一定的路由配置来判断某一个URL由哪个服务来处理。并从Eureka获取注册的服务来转发请求。</li><li>Ribbon，即负载均衡，Zuul网关将一个请求发送给某一个服务的应用的时候，如果一个服务启动了多个实例，就会通过Ribbon来通过一定的负载均衡策略来发送给某一个服务实例。</li><li>Feign，服务客户端，服务之间如果需要相互访问，可以使用RestTemplate，也可以使用Feign客户端访问。它默认会使用Ribbon来实现负载均衡。</li><li>Hystrix，监控和断路器。我们只需要在服务接口上添加Hystrix标签，就可以实现对这个接口的监控和断路器功能。</li><li>Hystrix Dashboard，监控面板，他提供了一个界面，可以监控各个服务上的服务调用所消耗的时间等。</li><li>Turbine，监控聚合，使用Hystrix监控，我们需要打开每一个服务实例的监控信息来查看。而Turbine可以帮助我们把所有的服务实例的监控信息聚合到一个地方统一查看。这样就不需要挨个打开一个个的页面一个个查看。</li></ul><p>​ <img src="https://img.jssjqd.cn/202211141913095.png" alt="image-20221114191356744"></p><h2 id="spring-cloud-alibaba技术栈" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba技术栈"><span>Spring Cloud Alibaba技术栈</span></a></h2><p>同 Spring Cloud 一样，Spring Cloud Alibaba 也是一套微服务解决方案，包含开发分布式应用微服务的必需组件，方便开发者通过 Spring Cloud 编程模型轻松使用这些组件来开发分布式应用服务。</p><p>依托 Spring Cloud Alibaba，您只需要添加一些注解和少量配置，就可以将 Spring Cloud 应用接入阿里微服务解决方案，通过阿里中间件来迅速搭建分布式应用系统。</p><p>作为 Spring Cloud 体系下的新实现，Spring Cloud Alibaba 跟官方的组件或其它的第三方实现如 Netflix, Consul，Zookeeper 等对比，具备了更多的功能:</p><p>​ <img src="https://img.jssjqd.cn/202211141914145.png" alt="image-20221114191401893"></p><h3 id="spring-cloud-alibaba-包含组件" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba-包含组件"><span>Spring Cloud Alibaba 包含组件</span></a></h3><h4 id="阿里开源组件" tabindex="-1"><a class="header-anchor" href="#阿里开源组件"><span>阿里开源组件</span></a></h4><p>Nacos：一个更易于构建云原生应用的动态服务发现、配置管理和服务管理平台。</p><p>Sentinel：把流量作为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。</p><p>RocketMQ：开源的分布式消息系统，基于高可用分布式集群技术，提供低延时的、高可靠的消息发布与订阅服务。</p><p>Dubbo：在国内应用非常广泛的一款高性能 Java RPC 框架。</p><p>Seata：阿里巴巴开源产品，一个易于使用的高性能微服务分布式事务解决方案。</p><p>Arthas：开源的Java动态追踪工具，基于字节码增强技术，功能非常强大。</p><h4 id="阿里商业化组件" tabindex="-1"><a class="header-anchor" href="#阿里商业化组件"><span>阿里商业化组件</span></a></h4><p>作为一家商业公司，阿里巴巴推出 Spring Cloud Alibaba，很大程度上市希望通过抢占开发者生态，来帮助推广自家的云产品。</p><p>Alibaba Cloud ACM：一款在分布式架构环境中对应用配置进行集中管理和推送的应用配置中心产品。</p><p>Alibaba Cloud OSS：阿里云对象存储服务（Object Storage Service，简称 OSS），是阿里云提供的云存储服务。</p><p>Alibaba Cloud SchedulerX：阿里中间件团队开发的一款分布式任务调度产品，提供秒级、精准的定时（基于 Cron 表达式）任务调度服务。</p><p>​ <img src="https://img.jssjqd.cn/202211141914574.png" alt="image-20221114191407085"></p><h3 id="spring-cloud-alibaba版本选择" tabindex="-1"><a class="header-anchor" href="#spring-cloud-alibaba版本选择"><span>Spring Cloud Alibaba版本选择</span></a></h3>',74),g={href:"https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E",target:"_blank",rel:"noopener noreferrer"},r=a(`<p>版本选择： Spring Cloud Alibaba 2.2.8.RELEASE</p><p>父pom如下：</p><div class="language-xml line-numbers-mode" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0<span class="token punctuation">&quot;</span></span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>modelVersion</span><span class="token punctuation">&gt;</span></span>4.0.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>modelVersion</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>parent</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.3.12.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>relativePath</span><span class="token punctuation">/&gt;</span></span> <span class="token comment">&lt;!-- lookup parent from repository --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>parent</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.tuling.mall<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>vip-spring-cloud-alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>0.0.1-SNAPSHOT<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">&gt;</span></span>vip-spring-cloud-alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>packaging</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>packaging</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">&gt;</span></span>Demo project for Spring Cloud Alibaba<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>properties</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>java.version</span><span class="token punctuation">&gt;</span></span>1.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>java.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-cloud.version</span><span class="token punctuation">&gt;</span></span>Hoxton.SR12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-cloud.version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>spring-cloud-alibaba.version</span><span class="token punctuation">&gt;</span></span>2.2.8.RELEASE<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>spring-cloud-alibaba.version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>properties</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring-cloud.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.alibaba.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-alibaba-dependencies<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${spring-cloud-alibaba.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>type</span><span class="token punctuation">&gt;</span></span>pom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>type</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>import<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencyManagement</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>​</p>`,4);function d(k,b){const s=p("ExternalLinkIcon");return l(),e("div",null,[u,n("p",null,[n("a",g,[i("https://github.com/alibaba/spring-cloud-alibaba/wiki/%E7%89%88%E6%9C%AC%E8%AF%B4%E6%98%8E"),o(s)])]),r])}const v=t(c,[["render",d],["__file","index.html.vue"]]),f=JSON.parse('{"path":"/pages/f7b862/","title":"微服务架构","lang":"zh-CN","frontmatter":{"title":"微服务架构","date":"2023-03-19T17:17:42.000Z","permalink":"/pages/f7b862/","categories":["微服务","Spring Cloud Alibaba"],"tags":[null],"author":{"name":"江"}},"headers":[{"level":2,"title":"单体架构vs微服务架构","slug":"单体架构vs微服务架构","link":"#单体架构vs微服务架构","children":[{"level":3,"title":"单机架构","slug":"单机架构","link":"#单机架构","children":[]},{"level":3,"title":"微服务以及微服务架构","slug":"微服务以及微服务架构","link":"#微服务以及微服务架构","children":[]}]},{"level":2,"title":"Spring Cloud 微服务技术栈","slug":"spring-cloud-微服务技术栈","link":"#spring-cloud-微服务技术栈","children":[{"level":3,"title":"介绍","slug":"介绍","link":"#介绍","children":[]},{"level":3,"title":"SpringCloud微服务架构生态圈","slug":"springcloud微服务架构生态圈","link":"#springcloud微服务架构生态圈","children":[]},{"level":3,"title":"Spring Cloud Netflix包含的组件","slug":"spring-cloud-netflix包含的组件","link":"#spring-cloud-netflix包含的组件","children":[]}]},{"level":2,"title":"Spring Cloud Alibaba技术栈","slug":"spring-cloud-alibaba技术栈","link":"#spring-cloud-alibaba技术栈","children":[{"level":3,"title":"Spring Cloud Alibaba 包含组件","slug":"spring-cloud-alibaba-包含组件","link":"#spring-cloud-alibaba-包含组件","children":[]},{"level":3,"title":"Spring Cloud Alibaba版本选择","slug":"spring-cloud-alibaba版本选择","link":"#spring-cloud-alibaba版本选择","children":[]}]}],"git":{"createdTime":1709200080000,"updatedTime":1709200080000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":10.36,"words":3109},"filePathRelative":"微服务/10.Spring Cloud Alibaba/00.微服务架构.md","localizedDate":"2023年3月19日","excerpt":"<h2>单体架构vs微服务架构</h2>\\n<h3>单机架构</h3>\\n<h4>什么是单体架构</h4>\\n<p>一个归档包（例如war格式）包含了应用所有功能的应用程序，我们通常称之为单体应用。架构单体应用的方法论，我们称之为单体应用架构。（就是一个war包打天下）</p>\\n<h4>单体架构示意图</h4>\\n<p>​    <img src=\\"https://img.jssjqd.cn/202211141912190.png\\" alt=\\"image-20221114191243385\\"></p>\\n<h4>单体架构的优缺点</h4>\\n<p><strong>优点</strong>:</p>\\n<ul>\\n<li>\\n<p>架构简单明了，没有花里胡哨的问题需要解决。</p>\\n</li>\\n<li>\\n<p>开发，测试，部署简单，运维简单</p>\\n</li>\\n<li>\\n<p>随着业务扩展，代码越来越复杂，代码质量参差不齐(开发人员的水平不一),会让你每次提交代码 ，修改每一个小bug都是心惊胆战的。</p>\\n</li>\\n<li>\\n<p>部署慢(由于单体架构，功能复杂) 能想像下一个来自200W+代码部署的速度(15分钟)</p>\\n</li>\\n<li>\\n<p>扩展成本高，根据单体架构图 假设用户模块是一个CPU密集型的模块(涉及到大量的运算)，那么我们需要替换更加牛逼的CPU，而我们的订单模块是一个IO密集模块（涉及大量的读写磁盘）,那我们需要替换更加牛逼的内存以及高效的磁盘。但是我们的单体架构上 无法针对单个功能模块进行扩展，那么就需要替换更牛逼的CPU，更牛逼的内存，更牛逼的磁盘，价格蹭蹭的往上涨。</p>\\n</li>\\n<li>\\n<p>阻碍了新技术的发展。。。。。。比如我们的web架构模块 从struts2迁移到springboot，那么就会成为灾难</p>\\n</li>\\n</ul>"}');export{v as comp,f as data};
