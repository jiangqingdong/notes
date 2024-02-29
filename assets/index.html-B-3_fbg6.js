import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as e}from"./app-CcJZcE5q.js";const p={},t=e(`<h4 id="mysql的内部组件结构" tabindex="-1"><a class="header-anchor" href="#mysql的内部组件结构"><span>MySQL的内部组件结构</span></a></h4><p><img src="http://img.jssjqd.cn/202110220536652.png" alt="img"></p><p>大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。</p><p><strong>Server层</strong></p><p>主要包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。</p><p><strong>Store层</strong></p><p>存储引擎层负责数据的存储和提取。其架构模式是插件式的，支持 InnoDB、MyISAM、Memory 等多个存储引擎。现在最常用的存储引擎是 InnoDB，它从 MySQL 5.5.5 版本开始成为了默认存储引擎。也就是说如果我们在create table时不指定表的存储引擎类型,默认会给你设置存储引擎为InnoDB。</p><p>本节课演示表的DDL：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> <span class="token identifier"><span class="token punctuation">\`</span>test<span class="token punctuation">\`</span></span> 
<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span> <span class="token keyword">int</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token punctuation">,</span> 
 <span class="token identifier"><span class="token punctuation">\`</span>name<span class="token punctuation">\`</span></span> <span class="token keyword">varchar</span><span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">)</span> <span class="token keyword">DEFAULT</span> <span class="token boolean">NULL</span><span class="token punctuation">,</span> <span class="token keyword">PRIMARY</span> <span class="token keyword">KEY</span> <span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>id<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token keyword">ENGINE</span><span class="token operator">=</span><span class="token keyword">InnoDB</span> <span class="token keyword">AUTO_INCREMENT</span><span class="token operator">=</span><span class="token number">9</span> <span class="token keyword">DEFAULT</span> <span class="token keyword">CHARSET</span><span class="token operator">=</span>utf8<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面我们重点来分析连接器、查询缓存、分析器、优化器、执行器分别主要干了哪些事情。</p><p><strong>连接器</strong></p><p>我们知道由于MySQL是开源的，他有非常多种类的客户端：navicat,mysql front,jdbc,SQLyog等非常丰富的客户端 , 这些客户端要向mysql发起通信都必须先跟Server端建立通信连接，而建立连接的工作就是有连接器完成的。</p><p>第一步，你会先连接到这个数据库上，这时候接待你的就是连接器。连接器负责跟客户端建立连接、获取权限、维持和管理连接。</p><p>连接命令一般是这么写的：</p><div class="language-powershell line-numbers-mode" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token namespace">[root@192 ~]</span><span class="token comment"># mysql -h host[数据库地址] -u root[用户] -p root[密码] -P 3306</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接命令中的 mysql 是客户端工具，用来跟服务端建立连接。在完成经典的 TCP 握手后，连接器就要开始认证你的身份，这个时候用的就是你输入的用户名和密码。</p><p>1、如果用户名或密码不对，你就会收到一个&quot;Access denied for user&quot;的错误，然后客户端程序结束执行。</p><p>2、如果用户名密码认证通过，连接器会到权限表里面查出你拥有的权限。之后，这个连接里面的权限判断逻辑，都将依赖于此时读到的权限。</p><p>这就意味着，一个用户成功建立连接后，即使你用管理员账号对这个用户的权限做了修改，也不会影响已经存在连接的权限。修改完成后，只有再新建的连接才会使用新的权限设置。用户的权限表在系统表空间的mysql的user表中。</p><p><img src="http://img.jssjqd.cn/202110220537649.png" alt="img"></p><p>修改user密码</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;host&#39;</span> IDENTIFIED <span class="token keyword">BY</span> <span class="token string">&#39;password&#39;</span><span class="token punctuation">;</span> <span class="token comment">//创建新用户 </span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">grant</span> <span class="token keyword">all</span> <span class="token keyword">privileges</span> <span class="token keyword">on</span> <span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">to</span> <span class="token string">&#39;username&#39;</span><span class="token variable">@&#39;%&#39;</span><span class="token punctuation">;</span> <span class="token comment">//赋权限,%表示所有(host) </span>
mysql<span class="token operator">&gt;</span> flush <span class="token keyword">privileges</span> <span class="token comment">//刷新数据库 </span>
mysql<span class="token operator">&gt;</span> <span class="token keyword">update</span> <span class="token keyword">user</span> <span class="token keyword">set</span> password<span class="token operator">=</span>password<span class="token punctuation">(</span>”<span class="token number">123456</span>″<span class="token punctuation">)</span> <span class="token keyword">where</span> <span class="token keyword">user</span><span class="token operator">=</span>’root’<span class="token punctuation">;</span><span class="token punctuation">(</span>设置用户名密码<span class="token punctuation">)</span> 
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> grants <span class="token keyword">for</span> root<span class="token variable">@&quot;%&quot;</span><span class="token punctuation">;</span> 查看当前用户的权限
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接完成后，如果你没有后续的动作，这个连接就处于空闲状态，你可以在 show processlist 命令中看到它。文本中这个图是 show processlist 的结果，其中的 Command 列显示为“Sleep”的这一行，就表示现在系统里面有一个空闲连接，关闭连接 kill &lt;id&gt;。</p><p><img src="http://img.jssjqd.cn/202110220537435.png" alt="img"></p><p>客户端如果长时间不发送command到Server端，连接器就会自动将它断开。这个时间是由参数 wait_timeout 控制的，默认值是 8 小时。</p><p>查看wait_timeout</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>mysql&gt; show global variables like &quot;wait_timeout&quot;; mysql&gt;set global wait_timeout=28800; 设置全局服务器关闭非交互连接之前等待活动的秒数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="http://img.jssjqd.cn/202110220537422.png" alt="img"></p><p>如果在连接被断开之后，客户端再次发送请求的话，就会收到一个错误提醒： Lost connection to MySQL server during query。这时候如果你要继续，就需要重连，然后再执行请求了。</p><p>数据库里面，长连接是指连接成功后，如果客户端持续有请求，则一直使用同一个连接。短连接则是指每次执行完很少的几次查询就断开连接，下次查询再重新建立一个。</p><p>开发当中我们大多数时候用的都是长连接,把连接放在Pool内进行管理，但是长连接有些时候会导致 MySQL 占用内存涨得特别快，这是因为 MySQL 在执行过程中临时使用的内存是管理在连接对象里面的。这些资源会在连接断开的时候才释放。所以如果长连接累积下来，可能导致内存占用太大，被系统强行杀掉（OOM），从现象看就是 MySQL 异常重启了。</p><p>怎么解决这类问题呢？</p><p>1、定期断开长连接。使用一段时间，或者程序里面判断执行过一个占用内存的大查询后，断开连接，之后要查询再重连。</p><p>2、如果你用的是 MySQL 5.7 或更新版本，可以在每次执行一个比较大的操作后，通过执行 mysql_reset_connection 来重新初始化连接资源。这个过程不需要重连和重新做权限验证，但是会将连接恢复到刚刚创建完时的状态。</p><p><strong>查询缓存</strong></p><p>常用的一些操作</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span><span class="token keyword">show</span> <span class="token keyword">databases</span><span class="token punctuation">;</span> 显示所有数据库 
mysql<span class="token operator">&gt;</span><span class="token keyword">use</span> dbname； 打开数据库： 
mysql<span class="token operator">&gt;</span><span class="token keyword">show</span> <span class="token keyword">tables</span><span class="token punctuation">;</span> 显示数据库mysql中所有的表； 
mysql<span class="token operator">&gt;</span><span class="token keyword">describe</span> <span class="token keyword">user</span><span class="token punctuation">;</span> 显示表mysql数据库中<span class="token keyword">user</span>表的列信息）；
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>连接建立完成后，你就可以执行 select 语句了。执行逻辑就会来到第二步：查询缓存。</p><p>MySQL 拿到一个查询请求后，会先到查询缓存看看，之前是不是执行过这条语句。之前执行过的语句及其结果可能会以 key-value 对的形式，被直接缓存在内存中。key 是查询的语句，value 是查询的结果。如果你的查询能够直接在这个缓存中找到 key，那么这个 value 就会被直接返回给客户端。</p><p>如果语句不在查询缓存中，就会继续后面的执行阶段。执行完成后，执行结果会被存入查询缓存中。你可以看到，如果查询命中缓存，MySQL 不需要执行后面的复杂操作，就可以直接返回结果，这个效率会很高。</p><p><strong>大多数情况查询缓存就是个鸡肋，为什么呢？</strong></p><p>因为查询缓存往往弊大于利。查询缓存的失效非常频繁，只要有对一个表的更新，这个表上所有的查询缓存都会被清空。因此很可能你费劲地把结果存起来，还没使用呢，就被一个更新全清空了。对于更新压力大的数据库来说，查询缓存的命中率会非常低。</p><p><em>mysql8.0已经移除了查询缓存功能</em></p><p><strong>分析器</strong></p><p>如果没有命中查询缓存，就要开始真正执行语句了。首先，MySQL 需要知道你要做什么，因此需要对 SQL 语句做解析。</p><p>分析器先会做“词法分析”。你输入的是由多个字符串和空格组成的一条 SQL 语句，MySQL 需要识别出里面的字符串分别是什么，代表什么。</p><p>MySQL 从你输入的&quot;select&quot;这个关键字识别出来，这是一个查询语句。它也要把字符串“T”识别成“表名 T”，把字符串“ID”识别成“列 ID”。</p><p>做完了这些识别以后，就要做“语法分析”。根据词法分析的结果，语法分析器会根据语法规则，判断你输入的这个 SQL 语句是否满足 MySQL 语法。</p><p>如果你的语句不对，就会收到“You have an error in your SQL syntax”的错误提醒，比如下面这个语句 from 写成了 &quot;rom&quot;。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> fro test <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span> 
ERROR <span class="token number">1064</span> <span class="token punctuation">(</span><span class="token number">42000</span><span class="token punctuation">)</span>: You have an error <span class="token operator">in</span> your <span class="token keyword">SQL</span> syntax<span class="token punctuation">;</span> <span class="token keyword">check</span> the manual that corresponds <span class="token keyword">to</span> your MySQL server version <span class="token keyword">for</span> the <span class="token keyword">right</span> syntax <span class="token keyword">to</span> <span class="token keyword">use</span> near <span class="token string">&#39;fro test where id=1&#39;</span> at line <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>词法分析器原理</strong></p><p>词法分析器分成6个主要步骤完成对sql语句的分析</p><p>1、词法分析</p><p>2、语法分析</p><p>3、语义分析</p><p>4、构造执行树</p><p>5、生成执行计划</p><p>6、计划的执行</p><p>下图是SQL词法分析的过程步骤：</p><p><img src="http://img.jssjqd.cn/202110220537597.png" alt="img"></p><p>SQL语句的分析分为词法分析与语法分析，mysql的词法分析由MySQLLex[MySQL自己实现的]完成，语法分析由Bison生成。关于语法树大家如果想要深入研究可以参考这篇wiki文章：https://en.wikipedia.org/wiki/LR_parser。那么除了Bison外，Java当中也有开源的词法结构分析工具例如Antlr4，ANTLR从语法生成一个解析器，可以构建和遍历解析树，可以在IDEA工具当中安装插件：<strong>antlr v4 grammar plugin。插件使用详见课程</strong></p><p>经过bison语法分析之后，会生成一个这样的语法树</p><p><img src="http://img.jssjqd.cn/202110220537307.png" alt="img"></p><p>至此我们分析器的工作任务也基本圆满了。接下来进入到优化器</p><p><strong>优化器</strong></p><p>经过了分析器，MySQL 就知道你要做什么了。在开始执行之前，还要先经过优化器的处理。</p><p>优化器是在表里面有多个索引的时候，决定使用哪个索引；或者在一个语句有多表关联（join）的时候，决定各个表的连接顺序。比如你执行下面这样的语句，这个语句是执行两个表的 join：</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test1 <span class="token keyword">join</span> test2 <span class="token keyword">using</span><span class="token punctuation">(</span>ID<span class="token punctuation">)</span> <span class="token keyword">where</span> test1<span class="token punctuation">.</span>name<span class="token operator">=</span>yangguo <span class="token operator">and</span> test2<span class="token punctuation">.</span>name<span class="token operator">=</span>xiaolongnv<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>既可以先从表 test1 里面取出 name=yangguo的记录的 ID 值，再根据 ID 值关联到表 test2，再判断 test2 里面 name的值是否等于 yangguo。</p><p>也可以先从表 test2 里面取出 name=xiaolongnv 的记录的 ID 值，再根据 ID 值关联到 test1，再判断 test1 里面 name 的值是否等于 yangguo。</p><p>这两种执行方法的逻辑结果是一样的，但是执行的效率会有不同，而优化器的作用就是决定选择使用哪一个方案。优化器阶段完成后，这个语句的执行方案就确定下来了，然后进入执行器阶段。如果你还有一些疑问，比如优化器是怎么选择索引的，有没有可能选择错等等。</p><p><strong>执行器</strong></p><p>开始执行的时候，要先判断一下你对这个表 T 有没有执行查询的权限，如果没有，就会返回没有权限的错误，如下所示 (在工程实现上，如果命中查询缓存，会在查询缓存返回结果的时候，做权限验证。查询也会在优化器之前 调用 precheck 验证权限)。</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> test <span class="token keyword">where</span> id<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果有权限，就打开表继续执行。打开表的时候，执行器就会根据表的引擎定义，去使用这个引擎提供的接口。</p><p>比如我们这个例子中的表 test 中，ID 字段没有索引，那么执行器的执行流程是这样的：</p><ol><li>调用 InnoDB 引擎接口取这个表的第一行，判断 ID 值是不是 10，如果不是则跳过，如果是则将这行存在结果集中；</li><li>调用引擎接口取“下一行”，重复相同的判断逻辑，直到取到这个表的最后一行。</li><li>执行器将上述遍历过程中所有满足条件的行组成的记录集作为结果集返回给客户端。</li></ol><p>至此，这个语句就执行完成了。对于有索引的表，执行的逻辑也差不多。第一次调用的是“取满足条件的第一行”这个接口，之后循环取“满足条件的下一行”这个接口，这些接口都是引擎中已经定义好的。你会在数据库的慢查询日志中看到一个 rows_examined 的字段，表示这个语句执行过程中扫描了多少行。这个值就是在执行器每次调用引擎获取数据行的时候累加的。在有些场景下，执行器调用一次，在引擎内部则扫描了多行，因此引擎扫描行数跟 rows_examined 并不是完全相同的。</p><p><strong>bin-log归档</strong></p><p>删库是不需要跑路的，因为我们的SQL执行时，会将sql语句的执行逻辑记录在我们的bin-log当中，什么是bin-log呢？</p><p>binlog是Server层实现的二进制日志,他会记录我们的cud操作。Binlog有以下几个特点：</p><p>1、Binlog在MySQL的Server层实现（引擎共用）</p><p>2、Binlog为逻辑日志,记录的是一条语句的原始逻辑</p><p>3、Binlog不限大小,追加写入,不会覆盖以前的日志</p><p>如果，我们误删了数据库,可以使用binlog进行归档!要使用binlog归档，首先我们得记录binlog，因此需要先开启MySQL的binlog功能。</p><p>配置my.cnf</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>配置开启binlog 
log-bin=/usr/local/mysql/data/binlog/mysql-bin 
注意5.7以及更高版本需要配置本项：server-id=123454（自定义,保证唯一性）;
#binlog格式，有3种statement,row,mixed 
binlog-format=ROW
#表示每1次执行写入就与硬盘同步，会影响性能，为0时表示，事务提交时mysql不做刷盘操作，由系统决定 sync-binlog=1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><strong>bin-log的三种格式</strong></p><p><strong>1.Statement：每一条会修改数据的sql都会记录在binlog中。</strong></p><p>**优点：**不需要记录每一行的变化，减少了binlog日志量，节约了IO，提高性能。(相比row能节约多少性能与日志量，这个取决于应用的SQL情况，正常同一条记录修改或者插入row格式所产生的日志量还小于Statement产生的日志量，但是考虑到如果带条件的update操作，以及整表删除，alter表等操作，ROW格式会产生大量日志，因此在考虑是否使用ROW格式日志时应该跟据应用的实际情况，其所产生的日志量会增加多少，以及带来的IO性能问题。)</p><p>**缺点：**由于记录的只是执行语句，为了这些语句能在slave上正确运行，因此还必须记录每条语句在执行的时候的一些相关信息，以保证所有语句能在slave得到和在master端执行时候相同的结果。另外mysql 的复制,像一些特定函数功能，slave可与master上要保持一致会有很多相关问题(如sleep()函数， last_insert_id()，以及user-defined functions(udf)会出现问题).</p><p><strong>2.Row:不记录sql语句上下文相关信息，仅保存哪条记录被修改。</strong></p><p><strong>优点：</strong> binlog中可以不记录执行的sql语句的上下文相关的信息，仅需要记录那一条记录被修改成什么了。所以rowlevel的日志内容会非常清楚的记录下每一行数据修改的细节。而且不会出现某些特定情况下的存储过程，或function，以及trigger的调用和触发无法被正确复制的问题</p><p><strong>缺点:</strong> 所有的执行的语句当记录到日志中的时候，都将以每行记录的修改来记录，这样可能会产生大量的日志内容,比如一条update语句，修改多条记录，则binlog中每一条修改都会有记录，这样造成binlog日志量会很大，特别是当执行alter table之类的语句的时候，由于表结构修改，每条记录都发生改变，那么该表每一条记录都会记录到日志中。</p><p><strong>3.Mixed level: 是以上两种level的混合使用</strong></p><p>一般的语句修改使用statment格式保存binlog，如一些函数，statement无法完成主从复制的操作，则采用row格式保存binlog,MySQL会根据执行的每一条具体的sql语句来区分对待记录的日志形式，也就是在Statement和Row之间选择一种.新版本的MySQL中队row level模式也被做了优化，并不是所有的修改都会以row level来记录，像遇到表结构变更的时候就会以statement模式来记录。至于update或者delete等修改数据的语句，还是会记录所有行的变更。</p></li></ul><p>binlog命令</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> variables <span class="token operator">like</span> <span class="token string">&#39;%log_bin%&#39;</span><span class="token punctuation">;</span> 查看bin<span class="token operator">-</span>log是否开启 
mysql<span class="token operator">&gt;</span> flush logs<span class="token punctuation">;</span> 会多一个最新的bin<span class="token operator">-</span>log日志 
mysql<span class="token operator">&gt;</span> <span class="token keyword">show</span> master <span class="token keyword">status</span><span class="token punctuation">;</span> 查看最后一个bin<span class="token operator">-</span>log日志的相关信息 
mysql<span class="token operator">&gt;</span> reset master<span class="token punctuation">;</span> 清空所有的bin<span class="token operator">-</span>log日志
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看binlog内容</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysqlbinlog <span class="token comment">--no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 查看binlog内容</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>binlog里的内容不具备可读性，所以需要我们自己去判断恢复的逻辑点位，怎么观察呢？看重点信息，比如begin,commit这种关键词信息，只要在binlog当中看到了，你就可以理解为begin-commit之间的信息是一个完整的事务逻辑,然后再根据位置position判断恢复即可。binlog内容如下：</p><p><img src="http://img.jssjqd.cn/202110220537571.png" alt="img"></p><p>数据归档操作</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>从bin-log恢复数据 
恢复全部数据 
/usr/local/mysql/bin/mysqlbinlog --no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 |mysql -uroot -p tuling(数据库名) 
恢复指定位置数据 
/usr/local/mysql/bin/mysqlbinlog --no-defaults --start-position=&quot;408&quot; --stop-position=&quot;731&quot;  /usr/local/mysql/data/binlog/mysql-bin.000001 |mysql -uroot -p tuling(数据库) 
恢复指定时间段数据 
/usr/local/mysql/bin/mysqlbinlog --no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 --stop-date= &quot;2018-03-02 12:00:00&quot; --start-date= &quot;2019-03-02 11:55:00&quot;|mysql -uroot -p test(数据库)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>归档测试准</strong></p><p>1、定义一个存储过程，写入数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code><span class="token keyword">drop</span> <span class="token keyword">procedure</span> <span class="token keyword">if</span> <span class="token keyword">exists</span> tproc<span class="token punctuation">;</span> <span class="token keyword">delimiter</span> $$ 
<span class="token keyword">create</span> <span class="token keyword">procedure</span> tproc<span class="token punctuation">(</span>i <span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token keyword">begin</span> 
<span class="token keyword">declare</span> s <span class="token keyword">int</span> <span class="token keyword">default</span> <span class="token number">1</span><span class="token punctuation">;</span>   
<span class="token keyword">declare</span> c <span class="token keyword">char</span><span class="token punctuation">(</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token keyword">repeat</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">while</span> s<span class="token operator">&lt;=</span>i <span class="token keyword">do</span>  <span class="token keyword">start</span> <span class="token keyword">transaction</span><span class="token punctuation">;</span>     
<span class="token keyword">insert</span> <span class="token keyword">into</span> test <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token boolean">null</span><span class="token punctuation">,</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token keyword">commit</span><span class="token punctuation">;</span> <span class="token keyword">set</span> s<span class="token operator">=</span>s<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>  
<span class="token keyword">end</span> <span class="token keyword">while</span><span class="token punctuation">;</span> <span class="token keyword">end</span>$$ <span class="token keyword">delimiter</span> <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、删除数据</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token keyword">truncate</span> test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>3、利用binlog归档</p><div class="language-sql line-numbers-mode" data-ext="sql" data-title="sql"><pre class="language-sql"><code>mysql<span class="token operator">&gt;</span> <span class="token operator">/</span>usr<span class="token operator">/</span><span class="token keyword">local</span><span class="token operator">/</span>mysql<span class="token operator">/</span>bin<span class="token operator">/</span>mysqlbinlog <span class="token comment">--no-defaults /usr/local/mysql/data/binlog/mysql-bin.000001 |mysql -uroot -p tuling(数据库名)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4、归档完毕，数据恢复</p>`,104),o=[t];function l(r,i){return n(),a("div",null,o)}const u=s(p,[["render",l],["__file","index.html.vue"]]),k=JSON.parse('{"path":"/pages/cf3104/","title":"SQL是如何执行的","lang":"zh-CN","frontmatter":{"title":"SQL是如何执行的","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/cf3104/","categories":["MySQL"],"tags":[null],"author":{"name":"江"}},"headers":[],"git":{"createdTime":1709200080000,"updatedTime":1709200080000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":15.25,"words":4574},"filePathRelative":"性能调优/00.MySQL/03.SQL是如何执行的.md","localizedDate":"2022年8月31日","excerpt":"<h4>MySQL的内部组件结构</h4>\\n<p><img src=\\"http://img.jssjqd.cn/202110220536652.png\\" alt=\\"img\\"></p>\\n<p>大体来说，MySQL 可以分为 Server 层和存储引擎层两部分。</p>\\n<p><strong>Server层</strong></p>\\n<p>主要包括连接器、查询缓存、分析器、优化器、执行器等，涵盖 MySQL 的大多数核心服务功能，以及所有的内置函数（如日期、时间、数学和加密函数等），所有跨存储引擎的功能都在这一层实现，比如存储过程、触发器、视图等。</p>\\n<p><strong>Store层</strong></p>"}');export{u as comp,k as data};
