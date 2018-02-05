var NetworkManager = require('NetworkManager');
var BaseScene = require('BaseScene');
var CommonPopup = require('CommonPopup');

cc.Class({
    extends: BaseScene,

    properties: {
        edt_username: cc.EditBox,
        edt_password: cc.EditBox,
        toastPrefab: cc.Prefab,
        messagePopup: cc.Prefab
    },
    // use this for initialization
    onLoad: function () {
        Common.setFingerprint();
        if(this.edt_username != null && this.edt_password != null){
            var user_name_text = cc.sys.localStorage.getItem("user_name");
            var user_pass_text = cc.sys.localStorage.getItem("user_password");
            if(user_name_text != null && user_pass_text != null){
                this.edt_username.string = user_name_text;
                this.edt_password.string = user_pass_text;
            }
        }

        //NetworkManager.connectNetwork();
        window.ws.onmessage = this.ongamestatus.bind(this);
        //cc.log("scene:", cc.director.getScene());


    },

    ongamestatus: function(event) {
        if(event.data!==null || typeof(event.data) !== 'undefined') {
            var lstMessage = NetworkManager.parseFrom(event.data, event.data.byteLength);
            if(lstMessage.length > 0) {
                var buffer = lstMessage.shift();
                this.handleMessage(buffer);
            }
        }
    },
    handleMessage: function(e) {
        const buffer = e;
        cc.log("response:", buffer);
        this._super(buffer);
        switch (buffer.message_id) {
            case NetworkManager.MESSAGE_ID.LOGIN:
                var msg = buffer.response;
                this.handleLoginResponseHandler(msg);
                break;
        }
    },

    handleLoginResponseHandler: function(res) {
        cc.log("login response handler:", res);
        if(res.getResponsecode()) {
            var session_id = res.getSessionid();
            cc.log("session id:", session_id);
            Common.setSessionId(session_id);
            Common.setUserInfo(res.getUserinfo().toObject());
            cc.log("get user info:", res.getUserinfo().toObject());
            cc.sys.localStorage.setItem("session_id", session_id);

            cc.sys.localStorage.setItem("user_name",this.edt_username.string);
            cc.sys.localStorage.setItem("user_password",this.edt_password.string);

            if (res.hasUserinfo()) {
                this.saveUserInfo(res.getUserinfo());
            }
            if (res.hasUsersetting()) {
                this.saveUserSetting(res.getUsersetting());
            }
            if (res.hasEnableevent()) {
                Common.setEnableEvent(res.getEnableevent());
            }
            if (res.hasEnablenotification()) {
                Common.setEnableNotification(res.getEnablenotification());
            }
            if(res.hasEnabletx()){
                Common.setEnableTaixiu(res.getEnabletx());
            }
            if (res.hasNoticetext()){
                Common.setNoticeText(res.getNoticetext());
            }

            cc.director.loadScene('Lobby');
        }

        if(res.hasMessage() && res.getMessage() !== "") {
            var messagebox = cc.instantiate(this.messagePopup).getComponent("CommonPopup");
            messagebox.init(res.getMessage(), 0, function() {
                cc.log("on callback");
                //
            });
            cc.log("message box:", messagebox);
            // messagebox.setAnchorPoint(cc.p(0.5, 0.5));
            messagebox.node.setPosition(cc.p(cc.winSize.width / 2, cc.winSize.height / 2));
            this.node.addChild(messagebox.node);
        }

    },
    handlePingResponseHandler: function(res) {
        cc.log("ping response handler:", res);
        if(res.getResponsecode()) {
            if(res.getDisconnect()) {
                Common.setSessionId("-1");
                if(res.hasMessage() && res.getMessage() != "") {
                    cc.alert(res.getMessage());
                }
                NetworkManager.closeConnection();
                this.scheduleOnce(this.goIntroScene, 2.0);
            }
        }
    },
    goIntroScene: function(e) {
        cc.director.loadScene('Intro');
    },

    login: function() {
        cc.log("login normal");
        var username = this.edt_username.string;
        var password = this.edt_password.string;
        // var username = "tu_atula";
        // var password = "123456789";
        // if(this.edt_username.string === "" || this.edt_password.string === "") {
        //     // cc.log("edt_username", this.node);
        //     // cc.alert("Tài khoản và mật khẩu không được để trống!");
        //     // var item = cc.instantiate(this.toastPrefab).getComponent("ToastScripts");
        //     var strMess = "Tài khoản và mật khẩu không được để trống!";
        //     // item.showToast(strMess);
        //     // this.node.addChild(item.node);
        //
        //     this.showToast(strMess, this, 2);
        //     return;
        // }
        NetworkManager.requestLoginMessage(username, password);
    },
    register: function() {
        cc.director.loadScene('Register');
    },
    loginFacebook: function() {
        // var loginStt = FB.getLoginStatus(response);
        // var response = window.loginFB();
        // if(response.authResponse){
        //     cc.director.loadScene('Lobby');
        // }

        this.loginFb(["public_profile"], function(code, response){
            cc.log("code:", code);
            if(code === 0){
                cc.log("login succeeded");
                cc.director.loadScene('Lobby');

            } else {
                cc.log("Login failed, error #" + code + ": " + response);
            }
        });

    },
    loginGoogle: function() {
        cc.log("login google");
        // var packageName = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getPackageNameJNI", "()Ljava/lang/String;");
        // cc.log("package Name:", packageName);
    },
    close: function(){
        // cc.log("close");
    },
    loginFb: function (permissions, callback) {
        var self = this;
        if (typeof permissions == 'function') {
            callback = permissions;
            permissions = [];
        }
        if (permissions.every(function (item) {
                if (item != 'public_profile')
                    return true;
            })) {
            permissions.push("public_profile");
        }
        var permissionsStr = permissions.join(',');
        FB.login(function (response) {
            if (response['authResponse']) {
                //save user info
                self._isLoggedIn = true;
                self._userInfo = response['authResponse'];
                var permissList = response['authResponse']['grantedScopes'].split(",");
                typeof callback === 'function' && callback(0, {
                    accessToken: response['authResponse']['accessToken'],
                    permissions: permissList
                });
            } else {
                self._isLoggedIn = false;
                self._userInfo = {};
                typeof callback === 'function' && callback(response['error_code'] || 1, {
                    error_message: response['error_message'] || "Unknown error"
                });
            }
        }, {
            scope: permissionsStr,
            return_scopes: true
        });
    },
    saveUserInfo: function(userInfo) {
        Common.setUserName(userInfo.getUsername());
        if (userInfo.hasDisplayname()) {
            Common.setDisplayName(userInfo.getDisplayname());
        }

        if (userInfo.hasLevel()) {
            Common.setLevel(userInfo.getLevel().getLevel());
        }

        if (userInfo.hasCash()) {
            Common.setCash(userInfo.getCash());
        }

        if (userInfo.hasAvatarid()) {
            Common.setAvatarId(userInfo.getAvatarid());
        }

        if (userInfo.hasMobile()){
            Common.setPhoneNunber(userInfo.getMobile());
        }

        if (userInfo.hasAccountverified()){
            Common.setAccountVerify(userInfo.getAccountverified());
        }

        if (userInfo.hasDisablecashtransaction()){
            Common.setDisableCashTransaction(userInfo.getDisablecashtransaction());
        }

        if (userInfo.hasSecuritykeyset()){
            Common.setSecurityKeySeted(userInfo.getSecuritykeyset());
        }
    },
    saveUserSetting: function(userSetting) {
        if (userSetting.hasAutoready()) {
            Common.setAutoReady(userSetting.getAutoready());
            cc.sys.localStorage.setItem("AUTOREADY", userSetting.getAutoready());
        }

        if (userSetting.hasAutodenyinvitation()) {
            Common.setAutoDenyInvitation(userSetting.getAutodenyinvitation());
            cc.sys.localStorage.setItem("DENY_INVITES", userSetting.getAutodenyinvitation());
        }
    },
    showToast: function (strMess, target) {
        this._super(strMess, target);
    }
});
