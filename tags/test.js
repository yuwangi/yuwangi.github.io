function jsonp({ url, params, cb }) {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    window[cb] = function(data) {
      resolve(data);
      document.body.removeChild(script);
    };
    params = {
      ...params,
      cb
    };
    let arrs = [];
    for (let key in params) {
      arrs.push(`${key}=${params[key]}`);
    }
    script.src = `${url}?${arrs.join("&")}`;
    document.body.appendChild(script);
  });
}

jsonp({
  url: "https://sp1.baidu.com/5b11fzupBgM18t7jm9iCKT-xh_/sensearch", //此处链接为百度搜索随便找的
  params: {
    wd: "",
    callback: "bd_cb_dict3_1571021928728",
    _: 1571021917648
  },
  cb: "bd_cb_dict3_1571021928728"
}).then(data => {
  console.log(data);
});
