window.onload = function(){
    var h_menu = document.getElementById('h-menu');
    var close_h_menu = document.getElementById('close');

    h_menu.onclick = function(){
        var shadow = document.getElementById('h-menu-shadow');
        var side_menu = document.getElementById('side-menu');
        shadow.style.display = 'block';
        setTimeout(function(){side_menu.style.transform = 'translateX(0)';},100);
    }

    close_h_menu.onclick = function(){
        var shadow = document.getElementById('h-menu-shadow');
        var side_menu = document.getElementById('side-menu');
        side_menu.style.transform = 'translateX(250px)';
        setTimeout(function(){shadow.style.display = 'none';},500); 
    }
    
    window.onscroll = function(){
        var nav = document.getElementById('nav');
        if( window.scrollY != 0 ){
            nav.style.background = 'white';
            nav.style.color = 'black';
            nav.style.boxShadow = '1px 1px 1px lightgrey';
            for( var i = 0; i < h_menu.children.length; i++ )h_menu.children[i].style.background = 'black';
        }
        else{
            nav.style.background = 'transparent';
            nav.style.color = 'white';
            nav.style.boxShadow = 'unset';
            for( var i = 0; i < h_menu.children.length; i++ )h_menu.children[i].style.background = 'white';
        }
    }

    return 0;
}