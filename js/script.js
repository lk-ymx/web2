// JavaScript函数，根据词条名显示对应的介绍内容
function showContent(词条名) {
    var contentDiv = document.getElementById('content');
    switch (词条名) {
        case '词条1':
            contentDiv.innerHTML = '词条1的介绍内容。';
            break;
        case '词条2':
            contentDiv.innerHTML = '词条2的介绍内容。';
            break;
        case '词条3':
            contentDiv.innerHTML = '词条3的介绍内容。';
            break;
        // 添加更多的词条介绍内容
        default:
            contentDiv.innerHTML = '暂无介绍内容。';
    }
}

// 将点击事件监听绑定到词条列表上
var wordList = document.getElementById('wordList');
wordList.addEventListener('click', function (event) {
    event.preventDefault();
    if (event.target.tagName === 'A') {
        var word = event.target.getAttribute('data-word');
        showContent(word);
    }
});
