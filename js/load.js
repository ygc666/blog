function load(){
    var data = [
        {
            h3:"烟火中的尘埃",
            time:"2018/7/8",
            comment:6,
            like:20,
            img:'./img/essayList/1.jpg',
            url:'javascript:;'
        },
        {
            h3:"烟火",
            time:"2018/7/8",
            comment:6,
            like:20,
            img:'./img/essayList/2.jpg',
            url:'javascript:;'
        },
        {
            h3:"看海",
            time:"2018/7/8",
            comment:6,
            like:20,
            img:'./img/essayList/3.jpg',
            url:'javascript:;'
        },
        {
            h3:"一个人",
            time:"2018/7/8",
            comment:6,
            like:20,
            img:'./img/essayList/4.jpg',
            url:'javascript:;'
        },
        {
            h3:"目送城市",
            time:"2018/7/8",
            comment:6,
            like:20,
            img:'./img/essayList/5.jpg',
            url:'javascript:;'
        },
    ];
    var articles = [
        {
            img:'./img/essayList/1.jpg',
            h3:'七楼',
            text:'让我尝一口叫遐想的毒酒，让我迷恋徒有其表的干吼，让我一声不吭，在无言里担忧，被诅咒，太内疚 让我喝一杯叫空想的毒酒',
            time:"2018/7/8",
            comment:6,
            like:20,
            url:'javascript:;'
        },
    ]
    createElemA(data,document.querySelector('.bigBg .mainMax .left'),0); 
    document.querySelectorAll('.bigBg .mainMax .right>div').forEach(function(item,index){
        createElemA(data,item,index+1);
    });

    // 每次渲染 9 条数据
    var len = 9;
    for(let i=0;i<len;i++){
        createElemArticle(articles,document.querySelector('#body .article .main'),i); 
    }

    function createElemArticle(data,obj,index){
        var article = document.createElement('article');
        article.innerHTML = `
            <div class="image">
                <a href="${data[index].url}">
                    <img src="./img/essayList/1.jpg">
                </a>
            </div>
            <div class="content">
                <h3><a href="${data[index].url}">${data[index].h3}</a></h3>
                <p class="hide"><a href="${data[index].url}">${data[index].text}</a></p>
                <p class="p">发布时间：<span>${data[index].time}</span> · 评论: <span>${data[index].comment}</span> · 喜欢: <span>${data[index].like}</span></p>
            </div>
        `;
        obj.insertBefore(article,obj.querySelector('.load'));
    }

    function createElemA(data,obj,index){
        var a = document.createElement('a');
        a.href = '${data[index].url}';
        a.innerHTML = `
            <h3>${data[index].h3}</h3>
            <br>
            <p>发布时间：<span>${data[index].time}</span> · 评论: <span>${data[index].comment}</span> · 喜欢: <span>${data[index].like}</span></p>
        `;
        obj.appendChild(a);
    }
}