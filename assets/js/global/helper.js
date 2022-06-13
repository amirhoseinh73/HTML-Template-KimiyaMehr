function doc_ready(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

function alert_html_ltr( type = "danger", message = "", id = "" ) {
    return `<div id="${id}" class="alert alert-${type} dir-ltr text-start transition-alert">
    ${message}
    </div>`;
}

function alert_html_rtl( type = "danger", message = "", id = "" ) {
    return `<div id="${id}" class="alert alert-${type} dir-rtl text-end transition-alert">
    ${message}
    </div>`;
}

function sweet_alert_confirm( data, callback = () => {} ) {
    Swal.fire({
        title: data.title,
        text: data.message,
        // type: $type === "error" ? "info" : $type ,
        type: data.type_2,
        confirmButtonText: "بله!",
        cancelButtonText: 'انصراف',
        showCancelButton: true,
        allowOutsideClick: false,   
        allowEscapeKey: false,
        confirmButtonColor: "var(--color-1)",
        cancelButtonColor: "var(--color-3)",
    }).then(function (result) {
        if ( result.value ) {
            callback();
        }
    });
}

function sweet_alert_message( data, callback = () => {} ) {
    Swal.fire({
        title: data.title,
        text: data.message,
        // type: $type === "error" ? "info" : $type ,
        type: data.type_2,
        confirmButtonText: 'باشه',
        showCancelButton: false,
        allowOutsideClick: false,   
        allowEscapeKey: false,
    }).then(function (result) {
        if ( result.value ) {
            callback();
        }
    });
}

function toggleNavbar() {
    const btn_navbar_selector = document.querySelector( ".nav-btn-collapse" );

    if ( ! btn_navbar_selector ) return;

    btn_navbar_selector.addEventListener( "click", function() {
        const nav_list = document.querySelector( "ul.nav-list-ul" ).cloneNode( true );
        const parent = document.createElement( "div" );
        const close_btn = document.createElement( "button" );

        close_btn.type = "button";
        close_btn.innerHTML = "&times;"
        close_btn.classList.add( "nav-mobile-close-btn" );

        nav_list.classList.add( "mobile" );

        parent.classList.add( "nav-mobile" );
        parent.insertAdjacentElement( "afterbegin", close_btn );
        parent.insertAdjacentElement( "beforeend", nav_list );
        parent.querySelector( ".btn-toggle-navbar" ).remove();

        const login_button = parent.querySelector( ".btn-outline-6" );
        const register_button = parent.querySelector( ".btn-color-6" );
        if ( login_button ) login_button.remove();
        if ( register_button ) register_button.remove();

        let side_nav = document.querySelector( "ul.side-nav-ul" );
        if ( side_nav ) {
            side_nav = side_nav.cloneNode( true );
            side_nav.classList.add( "mobile" );
            parent.insertAdjacentHTML( "beforeend", `<h5 class="title text-color-1">منوی داشبورد</h5>` );
            parent.insertAdjacentElement( "beforeend", side_nav );
        }

        const back_div = document.createElement( "div" );
        back_div.classList.add( "nav-back" );
        
        document.body.insertAdjacentElement( "beforeend", back_div );

        document.body.insertAdjacentElement( "beforeend", parent );
        
        parent.offsetWidth;

        parent.classList.add( "show" );
        back_div.classList.add( "show" );

        close_btn.addEventListener( "click", close_nav_menu );
        back_div.addEventListener( "click", close_nav_menu );

        function close_nav_menu() {
            const nav_mobile = document.querySelector( ".nav-mobile" );
            const nav_nack  = document.querySelector( ".nav-back" );

            nav_mobile.classList.remove( "show" );
            nav_nack.classList.remove( "show" );

            setTimeout( () => {
                nav_mobile.remove();
                nav_nack.remove();
            }, 200 );
        }
    } );
}

doc_ready( function() {
    toggleNavbar();
} );