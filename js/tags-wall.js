<script>
  const query = window.location.search.substring(1)
    .split('&').map(e => e.split('='))
    .reduce((pre, cur) => {
        pre[cur[0]] = decodeURI(cur[1])
        return pre
    }, {})
  if (query.url) {
    document.title = query.title || document.title
    fetch(query.url)
      .then(res => res.text())
      .then(text => Tags({
        style: {
          fn: Style1,
          title: query.title,
          animation: query.animation === '1',
          scale: 1,
        },
        text,
        rootDOM: document.getElementById('test')
      }))
  }
  /* 这里还包含了一些使用说明和示例代码的注释 */
</script>
