(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{407:function(a,t,s){"use strict";s.r(t);var r=s(4),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("（面试大厂的面试题）https://juejin.im/post/5ec0ff4a6fb9a043271c76e9?utm_source=gold_browser_extension")]),a._v(" "),t("h2",{attrs:{id:"java基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java基础"}},[a._v("#")]),a._v(" Java基础")]),a._v(" "),t("h3",{attrs:{id:"_1-string和stringbuffer和stringbuilder区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-string和stringbuffer和stringbuilder区别"}},[a._v("#")]),a._v(" 1. String和StringBuffer和StringBuilder区别")]),a._v(" "),t("p",[t("strong",[a._v("可变性")]),a._v("\n简单的来说：String 类中使用 final 关键字修饰字符数组来保存字符串，"),t("code",[a._v("private final char value[]")]),a._v("，所以 String 对象是不可变的。")]),a._v(" "),t("blockquote",[t("p",[a._v("补充（来自"),t("a",{attrs:{href:"https://github.com/Snailclimb/JavaGuide/issues/675",target:"_blank",rel:"noopener noreferrer"}},[a._v("issue 675"),t("OutboundLink")],1),a._v("）：在 Java 9 之后，String 类的实现改用 byte 数组存储字符串 "),t("code",[a._v("private final byte[] value")])])]),a._v(" "),t("p",[a._v("而 StringBuilder 与 StringBuffer 都继承自 AbstractStringBuilder 类，在 AbstractStringBuilder 中也是使用字符数组保存字符串"),t("code",[a._v("char[]value")]),a._v(" 但是没有用 final 关键字修饰，所以这两种对象都是可变的。")]),a._v(" "),t("p",[a._v("StringBuilder 与 StringBuffer 的构造方法都是调用父类构造方法也就是 AbstractStringBuilder 实现的，大家可以自行查阅源码。")]),a._v(" "),t("p",[t("code",[a._v("AbstractStringBuilder.java")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("abstract")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractStringBuilder")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("implements")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Appendable")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("CharSequence")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * The value is used for character storage.\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" value"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/**\n     * The count is the number of characters used.\n     */")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" count"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AbstractStringBuilder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        value "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("char")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("capacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("strong",[a._v("线程安全性")])]),a._v(" "),t("p",[a._v("String 中的对象是不可变的，也就可以理解为常量，线程安全。AbstractStringBuilder 是 StringBuilder 与 StringBuffer 的公共父类，定义了一些字符串的基本操作，如 expandCapacity、append、insert、indexOf 等公共方法。StringBuffer 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。StringBuilder 并没有对方法进行加同步锁，所以是非线程安全的。")]),a._v(" "),t("p",[t("strong",[a._v("性能")])]),a._v(" "),t("p",[a._v("每次对 String 类型进行改变的时候，都会生成一个新的 String 对象，然后将指针指向新的 String 对象。StringBuffer 每次都会对 StringBuffer 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 StringBuilder 相比使用 StringBuffer 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。")]),a._v(" "),t("p",[t("strong",[a._v("对于三者使用的总结：")])]),a._v(" "),t("ol",[t("li",[a._v("操作少量的数据: 适用 String")]),a._v(" "),t("li",[a._v("单线程操作字符串缓冲区下操作大量数据: 适用 StringBuilder")]),a._v(" "),t("li",[a._v("多线程操作字符串缓冲区下操作大量数据: 适用 StringBuffer")])]),a._v(" "),t("h3",{attrs:{id:"_2-string为啥默认用final"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-string为啥默认用final"}},[a._v("#")]),a._v(" 2. String为啥默认用final")]),a._v(" "),t("h3",{attrs:{id:"_3-和equals区别-详细比如相同对象比较、以及相同integer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-和equals区别-详细比如相同对象比较、以及相同integer"}},[a._v("#")]),a._v(" 3. ==和equals区别（详细比如相同对象比较、以及相同integer）")]),a._v(" "),t("p",[t("strong",[a._v("==")]),a._v(" : 它的作用是判断两个对象的地址是不是相等。即，判断两个对象是不是同一个对象(基本数据类型==比较的是值，引用数据类型==比较的是内存地址)。")]),a._v(" "),t("p",[t("strong",[a._v("equals()")]),a._v(" : 它的作用也是判断两个对象是否相等。但它一般有两种使用情况：")]),a._v(" "),t("ul",[t("li",[a._v("情况 1：类没有覆盖 equals() 方法。则通过 equals() 比较该类的两个对象时，等价于通过“==”比较这两个对象。")]),a._v(" "),t("li",[a._v("情况 2：类覆盖了 equals() 方法。一般，我们都覆盖 equals() 方法来比较两个对象的内容是否相等；若它们的内容相等，则返回 true (即，认为这两个对象相等)。")])]),a._v(" "),t("p",[t("strong",[a._v("举个例子：")])]),a._v(" "),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" test1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// a 为一个引用")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" b "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// b为另一个引用,对象的内容一样")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" aa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 放在常量池中")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),a._v(" bb "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 从常量池中查找")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("aa "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" bb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"aa==bb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// false，非同一对象")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"a==b"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("equals")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"aEQb"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("42")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("42.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// true")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"true"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),t("p",[t("strong",[a._v("说明：")])]),a._v(" "),t("ul",[t("li",[a._v("String 中的 equals 方法是被重写过的，因为 object 的 equals 方法是比较的对象的内存地址，而 String 的 equals 方法比较的是对象的值。")]),a._v(" "),t("li",[a._v("当创建 String 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 String 对象。")])]),a._v(" "),t("h3",{attrs:{id:"_4-hashmap和hashset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-hashmap和hashset"}},[a._v("#")]),a._v(" 4. hashMap和hashSet")]),a._v(" "),t("h3",{attrs:{id:"_5-集合类-比如arraylist底层有什么的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-集合类-比如arraylist底层有什么的"}},[a._v("#")]),a._v(" 5. 集合类（比如ArrayList底层有什么的）")]),a._v(" "),t("p",[a._v("底层为数组")]),a._v(" "),t("h3",{attrs:{id:"_6-多线程sleep和wait-以及-notify和notifyall"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-多线程sleep和wait-以及-notify和notifyall"}},[a._v("#")]),a._v(" 6. 多线程sleep和wait  以及  notify和notifyAll")]),a._v(" "),t("h3",{attrs:{id:"_7-如何创建线程-几种方式-再往深处扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-如何创建线程-几种方式-再往深处扩展"}},[a._v("#")]),a._v(" 7. 如何创建线程，几种方式，再往深处扩展")]),a._v(" "),t("h3",{attrs:{id:"_8-还有就是抽象类和接口的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-还有就是抽象类和接口的区别"}},[a._v("#")]),a._v(" 8. 还有就是抽象类和接口的区别")]),a._v(" "),t("h3",{attrs:{id:"_9-动态代理有哪些-有什么场景-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-动态代理有哪些-有什么场景-区别"}},[a._v("#")]),a._v(" 9. 动态代理有哪些，有什么场景，区别")]),a._v(" "),t("h3",{attrs:{id:"_10-int-和integer的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-int-和integer的区别"}},[a._v("#")]),a._v(" 10. int 和Integer的区别")]),a._v(" "),t("h3",{attrs:{id:"_11-jdbc和mybatis的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-jdbc和mybatis的区别"}},[a._v("#")]),a._v(" 11. jdbc和mybatis的区别")]),a._v(" "),t("h3",{attrs:{id:"_12-和-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-和-区别"}},[a._v("#")]),a._v(" 12. #{} 和 ${}区别")]),a._v(" "),t("h3",{attrs:{id:"_13-分页查询除了使用limit-还能有哪种方式实现-pagehelper插件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-分页查询除了使用limit-还能有哪种方式实现-pagehelper插件"}},[a._v("#")]),a._v(" 13. 分页查询除了使用limit，还能有哪种方式实现   pagehelper插件")]),a._v(" "),t("h3",{attrs:{id:"_14-jvm的模型有什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-jvm的模型有什么"}},[a._v("#")]),a._v(" 14. jvm的模型有什么")]),a._v(" "),t("h3",{attrs:{id:"_15-jvm了解吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-jvm了解吗"}},[a._v("#")]),a._v(" 15. jvm了解吗")]),a._v(" "),t("h3",{attrs:{id:"_16-包括gc什么的-以及内部的一些东西"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_16-包括gc什么的-以及内部的一些东西"}},[a._v("#")]),a._v(" 16. 包括gc什么的，以及内部的一些东西")]),a._v(" "),t("h3",{attrs:{id:"_17-http和https以及tcp-ip-以及socket"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_17-http和https以及tcp-ip-以及socket"}},[a._v("#")]),a._v(" 17. http和https以及tcp/ip  以及socket")]),a._v(" "),t("h3",{attrs:{id:"_18-runable和callable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_18-runable和callable"}},[a._v("#")]),a._v(" 18. runable和callable")]),a._v(" "),t("h3",{attrs:{id:"_19-sychornized-和lock的区别-lock底层用的reentrantlock、readwritelock"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_19-sychornized-和lock的区别-lock底层用的reentrantlock、readwritelock"}},[a._v("#")]),a._v(" 19. Sychornized 和lock的区别，lock底层用的ReentrantLock、ReadWriteLock")]),a._v(" "),t("h3",{attrs:{id:"_20-threadlocal-以及-volatile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_20-threadlocal-以及-volatile"}},[a._v("#")]),a._v(" 20. Threadlocal   以及  volatile")]),a._v(" "),t("h3",{attrs:{id:"_21-aqs-是原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_21-aqs-是原理"}},[a._v("#")]),a._v(" 21. AQS 是原理")]),a._v(" "),t("h3",{attrs:{id:"_22-线程池了解吗-有哪几种线程池-使用场景有哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_22-线程池了解吗-有哪几种线程池-使用场景有哪些"}},[a._v("#")]),a._v(" 22. 线程池了解吗 ，有哪几种线程池，使用场景有哪些，")]),a._v(" "),t("h3",{attrs:{id:"_23-比如有4个线程执行-合并结果集"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_23-比如有4个线程执行-合并结果集"}},[a._v("#")]),a._v(" 23. 比如有4个线程执行，合并结果集")]),a._v(" "),t("h3",{attrs:{id:"_24-锁细分-读写锁-偏向锁-自旋锁-轻量级锁-重量级锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_24-锁细分-读写锁-偏向锁-自旋锁-轻量级锁-重量级锁"}},[a._v("#")]),a._v(" 24. 锁细分，读写锁，偏向锁，自旋锁，轻量级锁，重量级锁")]),a._v(" "),t("h3",{attrs:{id:"_25-阻塞队列和非阻塞队列-包括一些常用的队列的说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_25-阻塞队列和非阻塞队列-包括一些常用的队列的说明"}},[a._v("#")]),a._v(" 25. 阻塞队列和非阻塞队列（包括一些常用的队列的说明，）")]),a._v(" "),t("h3",{attrs:{id:"_26-有界队列和无界队列-区别-为啥分有界和无界"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_26-有界队列和无界队列-区别-为啥分有界和无界"}},[a._v("#")]),a._v(" 26. 有界队列和无界队列（区别，为啥分有界和无界）")]),a._v(" "),t("h3",{attrs:{id:"_27-反射和jvm的执行引擎有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_27-反射和jvm的执行引擎有什么区别"}},[a._v("#")]),a._v(" 27. 反射和jvm的执行引擎有什么区别")]),a._v(" "),t("h3",{attrs:{id:"_28-tcp和udp的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_28-tcp和udp的区别"}},[a._v("#")]),a._v(" 28. tcp和udp的区别")]),a._v(" "),t("h3",{attrs:{id:"_29-什么是面向连接-什么是面向无连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_29-什么是面向连接-什么是面向无连接"}},[a._v("#")]),a._v(" 29. 什么是面向连接，什么是面向无连接")]),a._v(" "),t("h3",{attrs:{id:"_30-tcp的为什么是可靠连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_30-tcp的为什么是可靠连接"}},[a._v("#")]),a._v(" 30. tcp的为什么是可靠连接")]),a._v(" "),t("h3",{attrs:{id:"_31-拆包和装包是什么-连接这方面的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_31-拆包和装包是什么-连接这方面的"}},[a._v("#")]),a._v(" 31. 拆包和装包是什么，连接这方面的")]),a._v(" "),t("h3",{attrs:{id:"_32-spring和springmvc的常用注解"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_32-spring和springmvc的常用注解"}},[a._v("#")]),a._v(" 32. spring和springmvc的常用注解")]),a._v(" "),t("h3",{attrs:{id:"_33-spring的ioc和aop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_33-spring的ioc和aop"}},[a._v("#")]),a._v(" 33. spring的ioc和aop")]),a._v(" "),t("h3",{attrs:{id:"_34-spring的bean是怎么管理-beanfactory以及applicationcontext"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_34-spring的bean是怎么管理-beanfactory以及applicationcontext"}},[a._v("#")]),a._v(" 34. spring的bean是怎么管理，beanfactory以及applicationcontext")]),a._v(" "),t("h3",{attrs:{id:"_35-springboot的注解-三大注解有什么作用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_35-springboot的注解-三大注解有什么作用"}},[a._v("#")]),a._v(" 35. springboot的注解，三大注解有什么作用，")]),a._v(" "),t("h3",{attrs:{id:"_36-springboot的compantscan扫描范围是所有的包还是到哪一层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_36-springboot的compantscan扫描范围是所有的包还是到哪一层"}},[a._v("#")]),a._v(" 36. springboot的compantScan扫描范围是所有的包还是到哪一层；")]),a._v(" "),t("h3",{attrs:{id:"_37-springcloud用过什么-削峰-限流-其他一些实战-看你用没用过"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_37-springcloud用过什么-削峰-限流-其他一些实战-看你用没用过"}},[a._v("#")]),a._v(" 37. Springcloud用过什么，削峰，限流，其他一些实战（看你用没用过）")]),a._v(" "),t("h3",{attrs:{id:"_38-future相关的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_38-future相关的"}},[a._v("#")]),a._v(" 38. future相关的")]),a._v(" "),t("h3",{attrs:{id:"_39-servlet-的生命周期是"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_39-servlet-的生命周期是"}},[a._v("#")]),a._v(" 39. servlet 的生命周期是")]),a._v(" "),t("h3",{attrs:{id:"_40-session-和-application-的区别-已经cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_40-session-和-application-的区别-已经cookie"}},[a._v("#")]),a._v(" 40. session 和 application 的区别  已经cookie")]),a._v(" "),t("h3",{attrs:{id:"_41-动态代理-jdk代理和cglib代理区别啥的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_41-动态代理-jdk代理和cglib代理区别啥的"}},[a._v("#")]),a._v(" 41. 动态代理 jdk代理和cglib代理区别啥的")]),a._v(" "),t("h3",{attrs:{id:"_42-run和start区别-整个过程还有什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_42-run和start区别-整个过程还有什么"}},[a._v("#")]),a._v(" 42. run和start区别  ，整个过程还有什么")]),a._v(" "),t("h3",{attrs:{id:"_43-spring执行机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_43-spring执行机制"}},[a._v("#")]),a._v(" 43. spring执行机制")]),a._v(" "),t("h3",{attrs:{id:"_44-spring事务-以及事务会问你事务除了acid外-还有脏读-不可重复读-幻读可详细说-事务的传播机制7种-事务的隔离级别-可能会出题-比如a方法使用事务-b方法没有使用-那么a调用b会有几种情况-你使用事务哪种级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_44-spring事务-以及事务会问你事务除了acid外-还有脏读-不可重复读-幻读可详细说-事务的传播机制7种-事务的隔离级别-可能会出题-比如a方法使用事务-b方法没有使用-那么a调用b会有几种情况-你使用事务哪种级别"}},[a._v("#")]),a._v(" 44. spring事务，以及事务会问你事务除了ACID外，还有脏读，不可重复读，幻读可详细说，事务的传播机制7种，事务的隔离级别，可能会出题，比如A方法使用事务，B方法没有使用，那么A调用B会有几种情况，你使用事务哪种级别")]),a._v(" "),t("h3",{attrs:{id:"_45-mybatis的事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_45-mybatis的事务"}},[a._v("#")]),a._v(" 45. mybatis的事务，")]),a._v(" "),t("h3",{attrs:{id:"_46-springmvc的执行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_46-springmvc的执行流程"}},[a._v("#")]),a._v(" 46. springmvc的执行流程")]),a._v(" "),t("h3",{attrs:{id:"_47-线上的修改配置文件的环境比如数据库配置-怎么修改-是不是同一个目录下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_47-线上的修改配置文件的环境比如数据库配置-怎么修改-是不是同一个目录下"}},[a._v("#")]),a._v(" 47. 线上的修改配置文件的环境比如数据库配置，怎么修改，是不是同一个目录下")]),a._v(" "),t("h3",{attrs:{id:"_48-过滤器和拦截器区别-实战用到没有-怎么用的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_48-过滤器和拦截器区别-实战用到没有-怎么用的"}},[a._v("#")]),a._v(" 48. 过滤器和拦截器区别，实战用到没有，怎么用的")]),a._v(" "),t("h3",{attrs:{id:"_49-设计模式用过哪些-项目中用到的设计模式有哪些-说几个熟悉-可能再往深处扩展-比如你怎么实现-怎么写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_49-设计模式用过哪些-项目中用到的设计模式有哪些-说几个熟悉-可能再往深处扩展-比如你怎么实现-怎么写"}},[a._v("#")]),a._v(" 49. 设计模式用过哪些，项目中用到的设计模式有哪些，说几个熟悉，可能再往深处扩展，比如你怎么实现，怎么写")]),a._v(" "),t("h3",{attrs:{id:"_50-观察者模式和redis的订阅和消费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_50-观察者模式和redis的订阅和消费"}},[a._v("#")]),a._v(" 50. 观察者模式和redis的订阅和消费")]),a._v(" "),t("h3",{attrs:{id:"_51-netty有没有用过-netty的优势是啥-你为啥用-项目中怎么用的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_51-netty有没有用过-netty的优势是啥-你为啥用-项目中怎么用的"}},[a._v("#")]),a._v(" 51. netty有没有用过，netty的优势是啥， 你为啥用，项目中怎么用的")]),a._v(" "),t("h3",{attrs:{id:"_52-微服务和分布式区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_52-微服务和分布式区别"}},[a._v("#")]),a._v(" 52. 微服务和分布式区别")]),a._v(" "),t("h3",{attrs:{id:"_53-微服务再细一点-我这边没怎么问-没用到"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_53-微服务再细一点-我这边没怎么问-没用到"}},[a._v("#")]),a._v(" 53. 微服务再细一点，我这边没怎么问，没用到")]),a._v(" "),t("h3",{attrs:{id:"_54-dubbo和springcloud的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_54-dubbo和springcloud的区别"}},[a._v("#")]),a._v(" 54. dubbo和springcloud的区别")]),a._v(" "),t("h3",{attrs:{id:"_55-dubbo和zk连接流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_55-dubbo和zk连接流程"}},[a._v("#")]),a._v(" 55. dubbo和zk连接流程")]),a._v(" "),t("h3",{attrs:{id:"_56-dubbo再往深处-比如负载均衡以及容错机制-再往深处"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_56-dubbo再往深处-比如负载均衡以及容错机制-再往深处"}},[a._v("#")]),a._v(" 56. dubbo再往深处，比如负载均衡以及容错机制，再往深处")]),a._v(" "),t("h3",{attrs:{id:"_57-zk了解吗-没怎么问我"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_57-zk了解吗-没怎么问我"}},[a._v("#")]),a._v(" 57. zk了解吗，没怎么问我")]),a._v(" "),t("h2",{attrs:{id:"数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库"}},[a._v("#")]),a._v(" 数据库")]),a._v(" "),t("h3",{attrs:{id:"_1-数据库优化方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-数据库优化方式"}},[a._v("#")]),a._v(" 1.数据库优化方式")]),a._v(" "),t("h3",{attrs:{id:"_2-sql优化方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-sql优化方式"}},[a._v("#")]),a._v(" 2.sql优化方式")]),a._v(" "),t("h3",{attrs:{id:"_3-索引-通过执行explain-优化索引-比如覆盖索引-最左原则-组合索引遇到的几种方式不同"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-索引-通过执行explain-优化索引-比如覆盖索引-最左原则-组合索引遇到的几种方式不同"}},[a._v("#")]),a._v(" 3.索引，通过执行explain,优化索引， 比如覆盖索引，最左原则，组合索引遇到的几种方式不同")]),a._v(" "),t("h3",{attrs:{id:"_4-b-tree和b-tree区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-b-tree和b-tree区别"}},[a._v("#")]),a._v(" 4.B tree和B+Tree区别")]),a._v(" "),t("h3",{attrs:{id:"_5-innodb和myisam的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-innodb和myisam的区别"}},[a._v("#")]),a._v(" 5.innodb和myisam的区别")]),a._v(" "),t("h3",{attrs:{id:"_6-数据库表设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-数据库表设计"}},[a._v("#")]),a._v(" 6.数据库表设计")]),a._v(" "),t("h3",{attrs:{id:"_7-三大范式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-三大范式"}},[a._v("#")]),a._v(" 7.三大范式")]),a._v(" "),t("h3",{attrs:{id:"_8-数据库查询leftjoin以及其他join-出题考你-还有就是写sql-比如俩个表-只取a表中与b表不共用的那部分-怎么实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-数据库查询leftjoin以及其他join-出题考你-还有就是写sql-比如俩个表-只取a表中与b表不共用的那部分-怎么实现"}},[a._v("#")]),a._v(" 8.数据库查询Leftjoin以及其他join  出题考你，还有就是写sql，比如俩个表，只取A表中与B表不共用的那部分，怎么实现")]),a._v(" "),t("h2",{attrs:{id:"中间件-rabbitmq、kafka、rocketmq"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中间件-rabbitmq、kafka、rocketmq"}},[a._v("#")]),a._v(" 中间件(rabbitmq、kafka、rocketMq)")]),a._v(" "),t("h3",{attrs:{id:"_1-使用的队列常见问题-如何保证消息一致性、保证消息不丢失、重复数据怎么处理-、生产者宕机-或者消费者宕机你怎么处理-、不消费怎么处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用的队列常见问题-如何保证消息一致性、保证消息不丢失、重复数据怎么处理-、生产者宕机-或者消费者宕机你怎么处理-、不消费怎么处理"}},[a._v("#")]),a._v(" 1.使用的队列常见问题 ( 如何保证消息一致性、保证消息不丢失、重复数据怎么处理 、生产者宕机  或者消费者宕机你怎么处理 、不消费怎么处理 )")]),a._v(" "),t("h3",{attrs:{id:"_2-如果整个链路通的-但是数据不消费怎么处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-如果整个链路通的-但是数据不消费怎么处理"}},[a._v("#")]),a._v(" 2.如果整个链路通的，但是数据不消费怎么处理")]),a._v(" "),t("h3",{attrs:{id:"_3-rabbitmq的死信队列-原因-之后怎么处理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-rabbitmq的死信队列-原因-之后怎么处理"}},[a._v("#")]),a._v(" 3.rabbitmq的死信队列 ，原因，之后怎么处理")]),a._v(" "),t("h3",{attrs:{id:"_4-会问rabbitmq和kakfa区别或者-和rockedmq区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-会问rabbitmq和kakfa区别或者-和rockedmq区别"}},[a._v("#")]),a._v(" 4.会问rabbitMq和kakfa区别或者  和rockedMq区别")]),a._v(" "),t("h3",{attrs:{id:"_5-如何保证消息不会被重复消费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-如何保证消息不会被重复消费"}},[a._v("#")]),a._v(" 5.如何保证消息不会被重复消费")]),a._v(" "),t("h2",{attrs:{id:"redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" redis")]),a._v(" "),t("h3",{attrs:{id:"_1-redis的5种数据类型-使用场景-你项目中用到没有"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis的5种数据类型-使用场景-你项目中用到没有"}},[a._v("#")]),a._v(" 1.redis的5种数据类型（使用场景，你项目中用到没有）")]),a._v(" "),t("h4",{attrs:{id:"string"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string"}},[a._v("#")]),a._v(" String")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("常用命令:")]),a._v("  set,get,decr,incr,mget 等。")])]),a._v(" "),t("p",[a._v("String数据结构是简单的key-value类型，value其实不仅可以是String，也可以是数字。\n常规key-value缓存应用；\n常规计数：微博数，粉丝数等。")]),a._v(" "),t("h4",{attrs:{id:"hash"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash"}},[a._v("#")]),a._v(" Hash")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("常用命令：")]),a._v(" hget,hset,hgetall 等。")])]),a._v(" "),t("p",[a._v("hash 是一个 string 类型的 field 和 value 的映射表，hash 特别适合用于存储对象，后续操作的时候，你可以直接仅仅修改这个对象中的某个字段的值。 比如我们可以 hash 数据结构来存储用户信息，商品信息等等。比如下面我就用 hash 类型存放了我本人的一些信息：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("key=JavaUser293847\nvalue={\n  “id”: 1,\n  “name”: “SnailClimb”,\n  “age”: 22,\n  “location”: “Wuhan, Hubei”\n}\n\n")])])]),t("h4",{attrs:{id:"list"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" List")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("常用命令:")]),a._v(" lpush,rpush,lpop,rpop,lrange等")])]),a._v(" "),t("p",[a._v("list 就是链表，Redis list 的应用场景非常多，也是Redis最重要的数据结构之一，比如微博的关注列表，粉丝列表，消息列表等功能都可以用Redis的 list 结构来实现。")]),a._v(" "),t("p",[a._v("Redis list 的实现为一个双向链表，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销。")]),a._v(" "),t("p",[a._v("另外可以通过 lrange 命令，就是从某个元素开始读取多少个元素，可以基于 list 实现分页查询，这个很棒的一个功能，基于 redis 实现简单的高性能分页，可以做类似微博那种下拉不断分页的东西（一页一页的往下走），性能高。")]),a._v(" "),t("h4",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[a._v("#")]),a._v(" Set")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("常用命令：")]),a._v("\nsadd,spop,smembers,sunion 等")])]),a._v(" "),t("p",[a._v("set 对外提供的功能与list类似是一个列表的功能，特殊之处在于 set 是可以自动排重的。")]),a._v(" "),t("p",[a._v("当你需要存储一个列表数据，又不希望出现重复数据时，set是一个很好的选择，并且set提供了判断某个成员是否在一个set集合内的重要接口，这个也是list所不能提供的。可以基于 set 轻易实现交集、并集、差集的操作。")]),a._v(" "),t("p",[a._v("比如：在微博应用中，可以将一个用户所有的关注人存在一个集合中，将其所有粉丝存在一个集合。Redis可以非常方便的实现如共同关注、共同粉丝、共同喜好等功能。这个过程也就是求交集的过程，具体命令如下：")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sinterstore key1 key2 key3     将交集存在key1内\n")])])]),t("h4",{attrs:{id:"sorted-set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-set"}},[a._v("#")]),a._v(" Sorted Set")]),a._v(" "),t("blockquote",[t("p",[t("strong",[a._v("常用命令：")]),a._v(" zadd,zrange,zrem,zcard等")])]),a._v(" "),t("p",[a._v("和set相比，sorted set增加了一个权重参数score，使得集合中的元素能够按score进行有序排列。")]),a._v(" "),t("p",[t("strong",[a._v("举例：")]),a._v(" 在直播系统中，实时排行信息包含直播间在线用户列表，各种礼物排行榜，弹幕消息（可以理解为按消息维度的消息排行榜）等信息，适合使用 Redis 中的 Sorted Set 结构进行存储。")]),a._v(" "),t("h4",{attrs:{id:"_2-redis的持久化-俩种方式-rdb和aof"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis的持久化-俩种方式-rdb和aof"}},[a._v("#")]),a._v(" 2.redis的持久化，俩种方式，rdb和aof，")]),a._v(" "),t("h4",{attrs:{id:"_3-redis的订阅机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-redis的订阅机制"}},[a._v("#")]),a._v(" 3.redis的订阅机制")]),a._v(" "),t("h2",{attrs:{id:"jvm总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm总结"}},[a._v("#")]),a._v(" JVM总结")]),a._v(" "),t("h3",{attrs:{id:"_1-jvm调优实战说一下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-jvm调优实战说一下"}},[a._v("#")]),a._v(" 1.JVM调优实战说一下")]),a._v(" "),t("h3",{attrs:{id:"_2-cms-gc的流程-cms-表示基于-标记清理的垃圾回收器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-cms-gc的流程-cms-表示基于-标记清理的垃圾回收器"}},[a._v("#")]),a._v(" 2.cms gc的流程  cms 表示基于 标记清理的垃圾回收器")]),a._v(" "),t("h3",{attrs:{id:"_3-新生代和老年代标记算法优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-新生代和老年代标记算法优缺点"}},[a._v("#")]),a._v(" 3.新生代和老年代标记算法优缺点")]),a._v(" "),t("h3",{attrs:{id:"_4-oom的排查思路"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-oom的排查思路"}},[a._v("#")]),a._v(" 4.oom的排查思路")]),a._v(" "),t("h3",{attrs:{id:"_5-cms优缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-cms优缺点"}},[a._v("#")]),a._v(" 5.cms优缺点")]),a._v(" "),t("h3",{attrs:{id:"_6-对象什么时候进入老年代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-对象什么时候进入老年代"}},[a._v("#")]),a._v(" 6.对象什么时候进入老年代")]),a._v(" "),t("h3",{attrs:{id:"_7-什么时候触发fullgc"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-什么时候触发fullgc"}},[a._v("#")]),a._v(" 7.什么时候触发fullgc")]),a._v(" "),t("h3",{attrs:{id:"_8-模拟oom和stack-overflow场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-模拟oom和stack-overflow场景"}},[a._v("#")]),a._v(" 8.模拟oom和Stack Overflow场景")]),a._v(" "),t("h3",{attrs:{id:"_9-栈什么时候oom"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-栈什么时候oom"}},[a._v("#")]),a._v(" 9.栈什么时候oom")]),a._v(" "),t("h3",{attrs:{id:"_10-怎么jvm中内存的使用情况"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-怎么jvm中内存的使用情况"}},[a._v("#")]),a._v(" 10.怎么jvm中内存的使用情况")]),a._v(" "),t("h3",{attrs:{id:"_11-jmap是怎么做到的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-jmap是怎么做到的"}},[a._v("#")]),a._v(" 11.jmap是怎么做到的")]),a._v(" "),t("h3",{attrs:{id:"_12-java代码从编译到执行有哪些步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-java代码从编译到执行有哪些步骤"}},[a._v("#")]),a._v(" 12.java代码从编译到执行有哪些步骤")]),a._v(" "),t("h3",{attrs:{id:"_13-类加载过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-类加载过程"}},[a._v("#")]),a._v(" 13.类加载过程")]),a._v(" "),t("h3",{attrs:{id:"_14-jar包冲突遇到过吗-jar包冲突时在类加载过程中哪一步报的错"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-jar包冲突遇到过吗-jar包冲突时在类加载过程中哪一步报的错"}},[a._v("#")]),a._v(" 14.jar包冲突遇到过吗？jar包冲突时在类加载过程中哪一步报的错")]),a._v(" "),t("h3",{attrs:{id:"_15-让你实现一个jvm-标记垃圾的具体步骤你怎么做-怎么扫描垃圾-这些信息维护在哪"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_15-让你实现一个jvm-标记垃圾的具体步骤你怎么做-怎么扫描垃圾-这些信息维护在哪"}},[a._v("#")]),a._v(" 15.让你实现一个jvm,标记垃圾的具体步骤你怎么做，怎么扫描垃圾，这些信息维护在哪")]),a._v(" "),t("h2",{attrs:{id:"实战总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实战总结"}},[a._v("#")]),a._v(" 实战总结")]),a._v(" "),t("h3",{attrs:{id:"_1-分库分表的场景题-淘宝场景-买家卖家数据怎么存-怎么分库分表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分库分表的场景题-淘宝场景-买家卖家数据怎么存-怎么分库分表"}},[a._v("#")]),a._v(" 1. 分库分表的场景题，淘宝场景，买家卖家数据怎么存，怎么分库分表")]),a._v(" "),t("h3",{attrs:{id:"_2-说说你在重构拆分中遇到的问题-你负责了哪些"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-说说你在重构拆分中遇到的问题-你负责了哪些"}},[a._v("#")]),a._v(" 2. 说说你在重构拆分中遇到的问题，你负责了哪些")]),a._v(" "),t("h3",{attrs:{id:"_3-拆分你是怎么保证数据完整性的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-拆分你是怎么保证数据完整性的"}},[a._v("#")]),a._v(" 3. 拆分你是怎么保证数据完整性的")]),a._v(" "),t("h3",{attrs:{id:"_4-如果你当前系统压力-100倍你怎么设计"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-如果你当前系统压力-100倍你怎么设计"}},[a._v("#")]),a._v(" 4. 如果你当前系统压力*100倍你怎么设计")]),a._v(" "),t("h3",{attrs:{id:"_5-如果根据压测流量路由到影子库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-如果根据压测流量路由到影子库"}},[a._v("#")]),a._v(" 5. 如果根据压测流量路由到影子库")]),a._v(" "),t("h3",{attrs:{id:"_6-https-tech-meituan-com-2018-09-27-quake-introduction-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-https-tech-meituan-com-2018-09-27-quake-introduction-html"}},[a._v("#")]),a._v(" 6. https://tech.meituan.com/2018/09/27/quake-introduction.html")]),a._v(" "),t("h3",{attrs:{id:"_7-分布式事务有没有了解过目前业内比较成熟的解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-分布式事务有没有了解过目前业内比较成熟的解决方案"}},[a._v("#")]),a._v(" 7. 分布式事务有没有了解过目前业内比较成熟的解决方案")]),a._v(" "),t("h3",{attrs:{id:"_8-场景题-大量请求访问一份数据怎么设计-只说应用层面的-借用读写锁的思想"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-场景题-大量请求访问一份数据怎么设计-只说应用层面的-借用读写锁的思想"}},[a._v("#")]),a._v(" 8. 场景题，大量请求访问一份数据怎么设计，只说应用层面的（借用读写锁的思想）")]),a._v(" "),t("h3",{attrs:{id:"_9-分布式锁你们用什么实现的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-分布式锁你们用什么实现的"}},[a._v("#")]),a._v(" 9. 分布式锁你们用什么实现的")]),a._v(" "),t("h3",{attrs:{id:"_10-你怎么理解幂等"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-你怎么理解幂等"}},[a._v("#")]),a._v(" 10. 你怎么理解幂等？")]),a._v(" "),t("h3",{attrs:{id:"_11-你是怎么实现幂等的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-你是怎么实现幂等的"}},[a._v("#")]),a._v(" 11. 你是怎么实现幂等的？")]),a._v(" "),t("h3",{attrs:{id:"_12-链路追踪你们怎么做的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-链路追踪你们怎么做的"}},[a._v("#")]),a._v(" 12. 链路追踪你们怎么做的")]),a._v(" "),t("h3",{attrs:{id:"_13-cpu负载很高一般是什么原因-排查思路是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-cpu负载很高一般是什么原因-排查思路是什么"}},[a._v("#")]),a._v(" 13. CPU负载很高一般是什么原因，排查思路是什么？")]),a._v(" "),t("h2",{attrs:{id:"linux总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux总结"}},[a._v("#")]),a._v(" linux总结")]),a._v(" "),t("h3",{attrs:{id:"_1-top命令cpu利用率和load-average的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-top命令cpu利用率和load-average的区别"}},[a._v("#")]),a._v(" 1. top命令CPU利用率和Load?Average的区别")]),a._v(" "),t("h3",{attrs:{id:"_2-load-average高但是cpu使用率不高是什么原因"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-load-average高但是cpu使用率不高是什么原因"}},[a._v("#")]),a._v(" 2. Load?Average高但是CPU使用率不高是什么原因")]),a._v(" "),t("h2",{attrs:{id:"数据结构-算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构-算法"}},[a._v("#")]),a._v(" 数据结构&算法")]),a._v(" "),t("h3",{attrs:{id:"_1-求链表长度-可能有环"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-求链表长度-可能有环"}},[a._v("#")]),a._v(" 1. 求链表长度，可能有环")]),a._v(" "),t("h3",{attrs:{id:"_2-经典的上台阶问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-经典的上台阶问题"}},[a._v("#")]),a._v(" 2. 经典的上台阶问题")]),a._v(" "),t("h3",{attrs:{id:"_3-多线程顺序打印"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-多线程顺序打印"}},[a._v("#")]),a._v(" 3. 多线程顺序打印")]),a._v(" "),t("h3",{attrs:{id:"_4-括号匹配问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-括号匹配问题"}},[a._v("#")]),a._v(" 4. 括号匹配问题")]),a._v(" "),t("h3",{attrs:{id:"_5-遍历树-写2种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-遍历树-写2种"}},[a._v("#")]),a._v(" 5. 遍历树，写2种")]),a._v(" "),t("h3",{attrs:{id:"_6-求树最大深度-用队列求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-求树最大深度-用队列求"}},[a._v("#")]),a._v(" 6. 求树最大深度，用队列求")])])}),[],!1,null,null,null);t.default=e.exports}}]);