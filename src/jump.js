var redirectUrl = document.getElementsByClassName('userpageRedirectUrl');

if(redirectUrl.length)
{
    var userpageRedirectTitle = document.getElementsByClassName('userpageRedirectTitle');
    setInterval(function () {
        if(userpageRedirectTitle){
            userpageRedirectTitle[0].textContent = '移転先へ自動へ飛びます！';
        }
        setInterval(function () {
            var url = redirectUrl[0].textContent;
            // URL書き換える
            location.replace(url);
        },1000);
    },1000);
} else {

    var errorTtlTxt = document.getElementsByClassName('errorTtlTxt');
    if (errorTtlTxt.length) {
        setInterval(function () {
            var url = "https://web.archive.org/web"+location.href;

            errorTtlTxt[0].textContent = 'Web Archiveに自動で飛ぶぜ！！';
            var errorInfoTxt = document.getElementsByClassName('errorInfoTxt');
            if (errorInfoTxt) {
                errorInfoTxt[0].textContent = url;
            }

            setInterval(function () {    
                // URL書き換える
                location.replace(url);
            },1000);
        },1000);
    }
}
