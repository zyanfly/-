//用原生代码写事件监听
var ul = document.getElementById('list');
ul.addEventListener('click', function(e) {
    //如果点击对象是a标签，需要e.preventDefault();阻止默认跳转行为
    var ele = e.target;
    if(ele.className === 'active') {
        ele.className = '';
    }else if(!ele.className) {
        ele.className = 'active';
    }
})
