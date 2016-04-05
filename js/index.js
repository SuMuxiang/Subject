/**
 * Created by SuMux on 2016/4/3 0003.
 */
function id( x ) {
    if( typeof x == "string" ) {
        return document.getElementById(x);
    }
    return x;
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

function toggleClass(obj,cls){
    if(hasClass(obj,cls)){
        removeClass(obj, cls);
    }else{
        addClass(obj, cls);
    }
}

window.onload = function() {
    var headerBarBack = id('headerBarBack');
    var arrowBack = id('arrowBack');
    var welcome = id('welcome');
    var welcomeDescription = id('welcomeDescription');

    arrowBack.onclick = function() {
        welcome.innerHTML = 'Welcome';
        welcomeDescription.innerHTML = 'Welcome to here to visit our website.';
        headerBarBack.style.backgroundColor = 'cornflowerblue';
    };

    var headerMenuLi = document.getElementsByClassName('headerMenuLi');

    for(var i = 0; i < headerMenuLi.length; i++) {
        headerMenuLi[i].onclick = (function(i) {
            return function() {
                welcome.innerHTML = headerMenuLi[i].innerHTML;
                welcomeDescription.innerHTML = 'This is the ' + headerMenuLi[i].innerHTML +  ' page.';
                headerBarBack.style.backgroundColor = 'green';
            }
        })(i); // 闭包函数
    }

    var searchInput = id('searchInput');

    id('searchInputLabel').onclick = function() {
        if (hasClass(searchInput, 'searchInputHide')) {
            removeClass(searchInput, 'searchInputHide');
            addClass(searchInput, 'searchInputShow');
            var searchInterval = setInterval(function(){
                if(searchInput.value === ''){
                    removeClass(searchInput, 'searchInputShow');
                    addClass(searchInput, 'searchInputHide');
                    window.clearInterval(searchInterval);
                }
            },10000);
        }
        /*else {
            removeClass(searchInput, 'searchInputShow');
            addClass(searchInput, 'searchInputHide');
        }*/
    }
};