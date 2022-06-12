class Dashboard {

    sideNavProfileHTML = () => {
        return `
        <div class="side-nav-profile">
            <ul>
                <li>
                    <button type="button" id="btn_side_nav_edit_profile">
                        <i class="fas fa-user"></i>
                        <abbr>ویرایش پروفایل</abbr>
                    </button>
                </li>
                <li>
                    <button type="button" id="btn_side_nav_logout">
                        <i class="fas fa-sign-out"></i>
                        <abbr>خروج</abbr>
                    </button>
                </li>
            </ul>
        </div>
        `;
    }

    get sideNavProfileMenuSelector() {
        return document.querySelector( ".side-nav-profile" );
    }

    sideNavProfileHandler = ( event ) => {
        event.stopPropagation();

        const body = document.body;

        const html = this.sideNavProfileHTML();
        body.insertAdjacentHTML( "beforeend", html );
        
        body.offsetWidth;
        this.sideNavProfileMenuSelector.style.left = 0;

        //load events
        this.profileShow();
        this.logoutEvent();
        this.closeSideNav();
    }

    get sideNavProfileSelector() {
        return document.querySelector( ".nav-profile" );
    }

    sideNavProfileClick = () => {
        this.sideNavProfileSelector.addEventListener( "click", this.sideNavProfileHandler );
    }

    get btnSideNavEditProfileSelector() {
        return document.getElementById( "btn_side_nav_edit_profile" );
    }

    get btnSideNavLogoutSelector() {
        return document.getElementById( "btn_side_nav_logout" );
    }

    logoutEvent = () => {
        this.btnSideNavLogoutSelector.addEventListener( "click", this.logoutEventHandler );
    }

    logoutEventHandler = () => {
        window.location.href = "../index.html";
    }

    closeSideNavHandler = ( event ) => {
        if ( event.target.closest( ".side-nav-profile" ) ) return;
        if ( event.target.closest( ".cs-modal-inside" ) ) return;
        if ( ! this.sideNavProfileMenuSelector ) return;

        this.sideNavProfileMenuSelector.style.left = - this.sideNavProfileMenuSelector.offsetWidth + "px";
        setTimeout( () => {
            this.sideNavProfileMenuSelector.remove();
        }, 300);
    }

    closeSideNav = () => {
        const body = document.body;

        body.addEventListener( "click", this.closeSideNavHandler );
    }

    get profileModalSelector() {
        return document.getElementById( "profile_change_modal" );
    }

    get modalBtnCloseSelector() {
        return this.profileModalSelector.querySelector( ".cs-close-modal" );
    }

    get modalBackSelector() {
        return document.querySelector( ".cs-modal-back" );
    }

    get modalSelector() {
        return document.querySelector( ".cs-modal" );
    }

    profileCloseHandler = ( event ) => {
        if ( event.target.closest( ".cs-modal-inside" ) && ! event.target.closest( ".cs-close-modal" ) ) return;

        this.modalBackSelector.classList.remove( "active" );
        this.modalSelector.classList.remove( "active" );
    }

    profileClose = () => {
        this.modalSelector.addEventListener( "click", this.profileCloseHandler );
        this.modalBtnCloseSelector.addEventListener( "click", this.profileCloseHandler );
    }

    profileShowHandler = () => {
        this.profileModalSelector.classList.add( "active" );
        this.modalBackSelector.classList.add( "active" );
    }

    profileShow = () => {
        this.btnSideNavEditProfileSelector.addEventListener( "click", this.profileShowHandler );
        this.profileClose();
    }

    init = () => {
        this.sideNavProfileClick();
    }

    static run = () => {
        const dashboard = new Dashboard;
        dashboard.init();
    }
}

init = () => {
    Dashboard.run();
}

doc_ready( init );