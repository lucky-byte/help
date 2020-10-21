---
id: doc1
title: 风格指南
sidebar_label: 风格指南
slug: /
---

可以用 [GitHub-flavored Markdown 语法](https://github.github.com/gfm/) 来创作内容。

## Markdown 语法

To serve as an example page when styling markdown based Docusaurus sites.

## 标题

# H1 - 创作优秀的文档

## H2 - 创作优秀的文档

### H3 - 创作优秀的文档

#### H4 - 创作优秀的文档

##### H5 - 创作优秀的文档

###### H6 - 创作优秀的文档

---

## 强调

强调, 例如斜体, 用 *星号* 或者 _下划线_。

高度强调, 例如粗体, 用 **双星号** or __双下划线__。

组合强调用 **星号 和 _下划线_**。

删除用两个波浪号，~~删除文字~~

---

## 列表

1. 第一个有序列表项
1. 另一项
   - 无序子项
1. 实际的编号不用关心，只要是一个数字就行了
   1. 有序子项
1. 再加一项

* 无序列表可以用星号

- 或者减号

+ 或者加号

---

## 链接

[这是内联风格的链接](https://www.google.com/)

[这是内联风格的链接，带有标题](https://www.google.com/ "Google's Homepage")

[这是引用风格的链接][arbitrary case-insensitive reference text]

[可以用编号引用风格的链接定义][1]

Or leave it empty and use the [link text itself].
或者空起来，直接用 [link text itself]。

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## 图片

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 1')

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png 'Logo Title Text 2'

Images from any folder can be used by providing path to file. Path should be relative to markdown file.

![img](../static/img/lucky-byte.png)

---

## 代码

```javascript
var s = 'JavaScript syntax highlighting';
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log('This line can be highlighted!');
}
```

---

## 表格

冒号可以用来对其栏。

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

至少必须 3 个减号来分开表头单元，最外面的竖线(|)是可选的，你也不需要排版的非常整齐。
你可以用内联的 Markdown。

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## 引用块

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

引用断开

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## 内联 HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## 断行

这是开始的一行。

这行与上行之间用一个空行分开，所以成了一个 _分开的段落_。

这行也是分开的段落，但是...
这行与上行之间没有空行，所以它还是在 _同一段落_ 里。

---

## 告诫

:::note

这要注意

:::

:::tip

这是提示

:::

:::important

这很重要

:::

:::caution

这要小心了

:::

:::warning

这是警告

:::
