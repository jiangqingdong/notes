import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as l,a as n}from"./app-CcJZcE5q.js";const i={},s=n('<h2 id="索引数据结构" tabindex="-1"><a class="header-anchor" href="#索引数据结构"><span>索引数据结构</span></a></h2><p>索引是帮助MySQL高效获取数据的排好序的数据结构</p><h3 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树"><span>二叉树</span></a></h3><p>极端情况下会变成一条直线</p><h3 id="红黑树" tabindex="-1"><a class="header-anchor" href="#红黑树"><span>红黑树</span></a></h3><p>相比于二叉树，数据平衡了，但是在数据比较多的情况下，树的高度会比较高，查询数据困难</p><h3 id="hash表" tabindex="-1"><a class="header-anchor" href="#hash表"><span>Hash表</span></a></h3><ul><li><p>对索引的key进行一次hash计算就可以定位出数据存储的位置</p></li><li><p>很多时候Hash索引要比B+ 树索引更高效</p></li><li><p>仅能满足 “=”，“IN”，不支持范围查询</p></li><li><p>hash冲突问题</p><p><img src="https://img.jssjqd.cn/202306302113889.png" alt="image-20230630211334131"></p></li></ul><h3 id="b-tree" tabindex="-1"><a class="header-anchor" href="#b-tree"><span>B-Tree</span></a></h3><ul><li>叶节点具有相同的深度，叶节点的指针为空</li><li>所有索引元素不重复</li><li>节点中的数据索引从左到右递增排列</li></ul><p><img src="https://img.jssjqd.cn/20221025015342.png" alt=""></p><h3 id="b-tree-b-tree变种" tabindex="-1"><a class="header-anchor" href="#b-tree-b-tree变种"><span>B+Tree(B-Tree变种)</span></a></h3><ul><li>非叶子节点不存储data，只存储索引(冗余)，可以放更多的索引</li><li>叶子节点包含所有索引字段</li><li>叶子节点用指针连接，提高区间访问的性能</li></ul><p><img src="https://img.jssjqd.cn/20221025015420.png" alt=""></p><p><em>B+Tree对比B-Tree的优点：</em></p><ul><li>B+Tree 解决的两大问题是（每个节点存储更多关键字；路数更多）</li><li>扫库、扫表能力更强（如果我们要对表进行全表扫描，只需要遍历叶子节点就可以了，不需要遍历整棵 B+Tree 拿到所有的数据）</li><li>B+Tree 的磁盘读写能力相对于 B Tree 来说更强，同数据量下磁盘I/0次数更少（根节点和枝节点不保存数据区，所以一个节点可以保存更多的关键字，一次磁盘加载的关键字更多）</li><li>范围查询和排序能力更强（因为叶子节点上有下一个数据区的指针，数据形成了链表）</li><li>效率更加稳定（B+Tree 永远是在叶子节点拿到数据，所以 IO 次数是稳定的）</li></ul><h2 id="存储引擎" tabindex="-1"><a class="header-anchor" href="#存储引擎"><span>存储引擎</span></a></h2><h3 id="myisam" tabindex="-1"><a class="header-anchor" href="#myisam"><span>MyISAM</span></a></h3><p>MyISAM索引文件和数据文件是分离的(非聚簇索引)</p><p><img src="https://img.jssjqd.cn/202307010043485.png" alt="image-20230701004320293"></p><h3 id="innodb" tabindex="-1"><a class="header-anchor" href="#innodb"><span>InnoDB</span></a></h3><p>InnoDB索引实现(聚簇索引)</p><ol><li><p><strong>表数据文件本身就是按B+Tree组织的一个索引结构文件</strong></p></li><li><p><strong>聚集索引-叶节点包含了完整的数据记录</strong></p></li><li><p><strong>为什么建议InnoDB表必须建主键？</strong></p><p>聚簇索引默认是主键，如果表中没有定义主键，InnoDB 会选择一个唯一的非空索引（确切说会选择一个唯一非空的列作为主键）代替。如果没有这样的索引，InnoDB 会隐式定义一个主键来作为聚簇索引。</p></li><li><p><strong>并且推荐使用整型的自增主键？</strong></p><p>数据插入数据库时会根据主键对数据进行排序，查询数据时也需要对主键进行对比，整型主键在插入排序和查询对比时都比使用普通字符串作为主键的效率更高，而主键自增可以有效的避免数据页分裂，整形主键能减少主键占用的空间。</p></li><li><p><strong>为什么非主键索引结构叶子节点存储的是主键值？</strong></p><p>数据一致性和节省存储空间</p></li></ol><p><img src="https://img.jssjqd.cn/202307010044300.png" alt="image-20230701004415970"></p><p><img src="https://img.jssjqd.cn/202307010044396.png" alt="image-20230701004426711"></p><h2 id="索引最左前缀原理" tabindex="-1"><a class="header-anchor" href="#索引最左前缀原理"><span>索引最左前缀原理</span></a></h2><h3 id="联合索引的底层存储结构" tabindex="-1"><a class="header-anchor" href="#联合索引的底层存储结构"><span>联合索引的底层存储结构</span></a></h3><p><img src="https://img.jssjqd.cn/202307010307955.png" alt="image-20230701030747964"></p><h2 id="千万级数据表如何用b-树索引快速查找" tabindex="-1"><a class="header-anchor" href="#千万级数据表如何用b-树索引快速查找"><span>千万级数据表如何用B+树索引快速查找</span></a></h2><h2 id="聚集索引-聚簇索引-稀疏索引是什么" tabindex="-1"><a class="header-anchor" href="#聚集索引-聚簇索引-稀疏索引是什么"><span>聚集索引&amp;聚簇索引&amp;稀疏索引是什么</span></a></h2><h2 id="为什么dba推荐用自增主键做索引" tabindex="-1"><a class="header-anchor" href="#为什么dba推荐用自增主键做索引"><span>为什么DBA推荐用自增主键做索引</span></a></h2><h2 id="联合索引底层数据结构是怎么样的" tabindex="-1"><a class="header-anchor" href="#联合索引底层数据结构是怎么样的"><span>联合索引底层数据结构是怎么样的</span></a></h2><h2 id="mysql最左前缀优化原则" tabindex="-1"><a class="header-anchor" href="#mysql最左前缀优化原则"><span>MySQL最左前缀优化原则</span></a></h2>',33),h=[s];function t(r,p){return a(),l("div",null,h)}const o=e(i,[["render",t],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/pages/1c9782/","title":"MySQL索引数据结构详解","lang":"zh-CN","frontmatter":{"title":"MySQL索引数据结构详解","date":"2022-08-31T01:56:40.000Z","permalink":"/pages/1c9782/","categories":["MySQL"],"author":{"name":"江"}},"headers":[{"level":2,"title":"索引数据结构","slug":"索引数据结构","link":"#索引数据结构","children":[{"level":3,"title":"二叉树","slug":"二叉树","link":"#二叉树","children":[]},{"level":3,"title":"红黑树","slug":"红黑树","link":"#红黑树","children":[]},{"level":3,"title":"Hash表","slug":"hash表","link":"#hash表","children":[]},{"level":3,"title":"B-Tree","slug":"b-tree","link":"#b-tree","children":[]},{"level":3,"title":"B+Tree(B-Tree变种)","slug":"b-tree-b-tree变种","link":"#b-tree-b-tree变种","children":[]}]},{"level":2,"title":"存储引擎","slug":"存储引擎","link":"#存储引擎","children":[{"level":3,"title":"MyISAM","slug":"myisam","link":"#myisam","children":[]},{"level":3,"title":"InnoDB","slug":"innodb","link":"#innodb","children":[]}]},{"level":2,"title":"索引最左前缀原理","slug":"索引最左前缀原理","link":"#索引最左前缀原理","children":[{"level":3,"title":"联合索引的底层存储结构","slug":"联合索引的底层存储结构","link":"#联合索引的底层存储结构","children":[]}]},{"level":2,"title":"千万级数据表如何用B+树索引快速查找","slug":"千万级数据表如何用b-树索引快速查找","link":"#千万级数据表如何用b-树索引快速查找","children":[]},{"level":2,"title":"聚集索引&聚簇索引&稀疏索引是什么","slug":"聚集索引-聚簇索引-稀疏索引是什么","link":"#聚集索引-聚簇索引-稀疏索引是什么","children":[]},{"level":2,"title":"为什么DBA推荐用自增主键做索引","slug":"为什么dba推荐用自增主键做索引","link":"#为什么dba推荐用自增主键做索引","children":[]},{"level":2,"title":"联合索引底层数据结构是怎么样的","slug":"联合索引底层数据结构是怎么样的","link":"#联合索引底层数据结构是怎么样的","children":[]},{"level":2,"title":"MySQL最左前缀优化原则","slug":"mysql最左前缀优化原则","link":"#mysql最左前缀优化原则","children":[]}],"git":{"createdTime":1709200080000,"updatedTime":1709200080000,"contributors":[{"name":"jiangqingdong","email":"thejqd@gmail.com","commits":1}]},"readingTime":{"minutes":3.06,"words":917},"filePathRelative":"性能调优/00.MySQL/01.MySQL索引数据结构详解.md","localizedDate":"2022年8月31日","excerpt":"<h2>索引数据结构</h2>\\n<p>索引是帮助MySQL高效获取数据的排好序的数据结构</p>\\n<h3>二叉树</h3>\\n<p>极端情况下会变成一条直线</p>\\n<h3>红黑树</h3>\\n<p>相比于二叉树，数据平衡了，但是在数据比较多的情况下，树的高度会比较高，查询数据困难</p>\\n<h3>Hash表</h3>\\n<ul>\\n<li>\\n<p>对索引的key进行一次hash计算就可以定位出数据存储的位置</p>\\n</li>\\n<li>\\n<p>很多时候Hash索引要比B+ 树索引更高效</p>\\n</li>\\n<li>\\n<p>仅能满足 “=”，“IN”，不支持范围查询</p>\\n</li>\\n<li>\\n<p>hash冲突问题</p>\\n<p><img src=\\"https://img.jssjqd.cn/202306302113889.png\\" alt=\\"image-20230630211334131\\"></p>\\n</li>\\n</ul>"}');export{o as comp,g as data};
