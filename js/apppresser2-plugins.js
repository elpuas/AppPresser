/*! Compiled 02-10-2016 */

function geoEvent(a){console.log(a)}function fileDownload(a){var b=document.getElementById("myApp"),c=b.contentWindow.document.getElementById("iframeDownload");c?c.addEventListener("click",function(){fileSystem()}):a&&console.debug("iframeDownload element not found")}function fileSystem(){window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.requestFileSystem(LocalFileSystem.PERSISTENT,0,gotFS,fsFail)}function gotFS(a){console.log("got filesystem",a);var b=document.getElementById("myApp"),c=b.contentWindow.document.getElementById("iframeDownload").getAttribute("data-download"),d=encodeURI(c),e=d.split("/"),f=e.length-1,g=e[f];console.log("uri: "+d),console.log("fileName: "+g),console.log(a.root),window.rootFS=a.root;var h=new FileTransfer;h.download(d,window.rootFS.nativeURL+g,function(a){localStorage.setItem(g,a.toURL()),alert("download complete: "+a.toURL())},function(a){console.log("download error source "+a.source),console.log("download error target "+a.target),console.log("upload error code"+a.code)},!0)}function fsFail(a){console.log("fs fail",a)}window.appTop="undefined"!=typeof window.appTop?window.appTop:{},appTop.util={hasClass:function(a,b){return!!a.className.match(new RegExp("(\\s|^)"+b+"(\\s|$)"))},addClass:function(a,b){appTop.util.hasClass(a,b)||(a.className+=" "+b)},removeClass:function(a,b){if(appTop.util.hasClass(a,b)){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ")}}},appTop.remote=function(a,b,c){var d={debug:!1,initialized:!1,init:function(a){a&&(appTop.apppCore.debug=!0,appTop.apppCore.log("remote init"));var c=b.getElementById("myApp").contentWindow.window;appp_settings.app_offline_toggle=c.apppCore.app_offline_toggle,localStorage.app_offline_toggle=appp_settings.app_offline_toggle,appTop.SocialSharing.init(a),appTop.camera.init(a),appTop.AppGeolocation.init(),appTop.AppContacts.init(a),appTop.AppFindContacts.init(a);try{appTop.AppFBConnect.init(a)}catch(d){console.log(d)}appTop.AppWoo.init(a),appTop.AppBuddy.init(a),appTop.conn.init(a),appp_push.ready(),appTop.apppCore.init(a)},hooks:{receiveMessage:function(){}}};return d}(window,document),appTop.apppCore=function(a,b,c){var d={};return d.noGoBackFlag="",d.init=function(a){var c=b.getElementById("myApp").contentWindow.window;d._isApp="undefined"!=typeof c.apppCore.mobile_browser_theme_switch&&"on"===c.apppCore.mobile_browser_theme_switch?!0:"not set",d.queryVars=!1,d.is_appp_true=c.apppCore.is_appp_true,d.iabLinkListener(),d.log("apppCore",d),d.is_appp_true||d.QueryVars("appp")||d._isApp||!d.isApp()||!d.isMobile()?d.QueryVars("appp")&&(d.log("apppCore.is_appp_true",!!d.is_appp_true),d.log("apppCore.QueryVars('appp')",!!d.QueryVars("appp")),d.log("apppCore.isApp()",!!d.isApp()),d.log("apppCore.isMobile()",!!d.isMobile())):c.location.href=d.AddQueryVar(c.location.href,"appp",1),b.addEventListener("deviceready",d.onDeviceReady2,!1),b.addEventListener("onload",d.onDeviceReady_no_ajax_app,!1)},d.iabLinkListener=function(){for(var a=b.getElementById("myApp").contentWindow.document,c=a.querySelectorAll(".single-post .entry-content p a, .external"),e=0;e<c.length;e++)c[e].addEventListener("click",d.iabClick,!1)},d.iabClick=function(b){console.log("iabclick",b),b.preventDefault();var c=this.getAttribute("href");a.open(c,"_blank")},d.ReadCookie=function(a){for(var c=b.getElementById("myApp").contentWindow.document,d=a+"=",e=c.cookie.split(";"),f=0;f<e.length;f++){for(var g=e[f];" "==g.charAt(0);)g=g.substring(1,g.length);if(0===g.indexOf(d))return g.substring(d.length,g.length)}return null},d.EraseCookie=function(a){var c=b.getElementById("myApp").contentWindow.document;d.ReadCookie(a)&&(c.cookie=a+"="),d.log(a+" erased.")},d.DeleteCookie=function(a){var c=b.getElementById("myApp").contentWindow.document;c.cookie=a+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT;",d.log(a+" deleted.")},d.SetCookie=function(a,c,e){var f=b.getElementById("myApp").contentWindow.document,g=[[a,"=",encodeURIComponent(c)].join("")],h="";e&&(h=new Date,h.setTime(h.getTime()+e),h=h.toGMTString(),g.push(["expires=",h].join(""))),g=g.join(";")+";",f.cookie=g,d.log("SetCookie: "+a+' set to "'+c+'"',"Expires?",h)},d.QueryVars=function(a){if(d.queryVars)return a?d.queryVars.hasOwnProperty(a):d.queryVars;var c=b.getElementById("myApp").contentWindow.window;string=c.location.href;var e,f=[],g=string.search(/\?/i);if(-1===g)return!1;for(var h=string.slice(string.indexOf("?")+1).split("&"),i=0;i<h.length;i++)e=h[i].split("="),f.push(e[0]),f[e[0]]=e[1];return d.queryVars=f,a?d.queryVars.hasOwnProperty(a):d.queryVars},d.AddQueryVar=function(a,b,c){var d=new RegExp("(\\?|\\&)"+b+"=.*?(?=(&|$))"),e=/\?.+$/;return d.test(a)?a.replace(d,"$1"+b+"="+c):e.test(a)?a+"&"+b+"="+c:a+"?"+b+"="+c},d.log=function(){"use strict";(d.debug||d.QueryVars("appp-debug"))&&console&&"function"==typeof console.log&&(console.log.apply(console,arguments),d.filelog("",arguments))},d.filelog=function(a,b,c,e){var f={action:"appp_log",title:a,"var":JSON&&"function"==typeof JSON.stringify?JSON.stringify(b):String(b),file:"undefined"!=typeof c?c:"","function":"undefined"!=typeof e?e:""};jQuery.post(d.ajaxurl,f,function(a){})},d.isMobile=function(){var a=b.getElementById("myApp").contentWindow.window,c=!1;return function(a,b){(/(android|bb\d+|meego|android|ipad|playbook|silk).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))&&(c=!0)}(navigator.userAgent||navigator.vendor||a.opera),c},d.isApp=function(a){if("not set"===d._isApp){d.cookieName=a?a:"AppPresser_Appp",d.QueryVars("appp")&&d.SetCookie(d.cookieName,!0,2592e3),d.QueryVars("erase-AppPresser_Appp")&&d.EraseCookie(d.cookieName);var b=d.ReadCookie(d.cookieName);d.log("isApp: "+d.cookieName,b),d._isApp=b===!0}return d._isApp},d.onDevicePause=function(){"Android"===device.platform&&setTimeout(function(){var a,c=b.getElementsByTagName("iframe");if(c.length){console.log("Killing youtube vids");for(var e in c)/youtube/.test(c[e].src)&&(a=c[e].src,c[e].src="",c[e].src=a)}d.maybeGoBack()},0)},d.noGoBackFlags=[],d.checkForNoGoBackFlags=function(){for(var a=0;a<d.noGoBackFlags.length;a++)if("function"==typeof d.noGoBackFlags[a]&&d.noGoBackFlags[a].call(),d.noGoBackFlag)return},d.maybeGoBack=function(){if(d.noGoBackFlag||d.checkForNoGoBackFlags()||d.noGoBackFlag)return d.log("skip maybeGoBack",d.noGoBackFlag),void(d.noGoBackFlag=!1);var c=b.getElementById("myApp").contentWindow.window,e={can_ajax:c.appp.can_ajax},f=e.can_ajax&&"undefined"!=typeof c.sessionStorage.urlHistory?JSON.parse(c.sessionStorage.urlHistory):[],g=jQuery("body").hasClass("home");g?navigator.app.exitApp():e.can_ajax&&f.length>=1?(f.length>1&&f[f.length-1].url==c.location.href&&navigator.app.exitApp(),f.length>1?(c.apppresser.loadAjaxContent(f[1].url,!1,event),f.shift()):navigator.app.exitApp(),c.sessionStorage.urlHistory=JSON.stringify(f)):"undefined"===a.history.back()&&navigator.app.exitApp()},d.onDeviceReady_no_ajax_app=function(){var a=b.getElementById("myApp").contentWindow.window;d.is_appp_true||a.appp.can_ajax||d.onDeviceReady2()},d.onDeviceReady2=function(){b.addEventListener("pause",d.onDevicePause,!1),b.addEventListener("backbutton",d.onDevicePause,!1)},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.AppContacts=function(a,b,c){var d={debug:!1};return d.init=function(a){a&&(d.debug=!0);var c=b.getElementById("myApp").contentWindow.document,e=c.getElementById("appp-add-contact-btn");e?e.addEventListener("click",function(a){d.addContact(a,e)},!1):console.debug("missing contact button")},d.log=function(a){d.debug&&console.debug(a)},d.validPhoneNumber=function(a){var b=/^\d{10}$/;return a.match(b)?!0:(b=/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/,a.match(b)?!0:!1)},d.addContact=function(a,c){a.preventDefault();var e,f,g;b.getElementById("myApp").contentWindow.document;e=navigator.contacts.create(),e.displayName=c.getAttribute("data-appp-displayname"),e.nickname=c.getAttribute("data-appp-nickname"),f=new ContactName,f.givenName=c.getAttribute("data-appp-first-name"),f.familyName=c.getAttribute("data-appp-last-name"),e.name=f,mobile_phone=c.getAttribute("data-appp-mobile"),home_phone=c.getAttribute("data-appp-home"),work_phone=c.getAttribute("data-appp-work"),g=[],mobile_phone&&d.validPhoneNumber(mobile_phone)&&g.push(new ContactField("mobile",mobile_phone,!1)),home_phone&&d.validPhoneNumber(home_phone)&&g.push(new ContactField("home",home_phone,!1)),work_phone&&d.validPhoneNumber(work_phone)&&g.push(new ContactField("work",work_phone,!1)),g.length&&(e.phoneNumbers=g),e.note=c.getAttribute("data-appp-note"),e.save(d.onSuccessCallBack,d.onErrorCallBack)},d.onSuccessCallBack=function(a){alert("Save Success")},d.onErrorCallBack=function(a){alert("Error = "+a.code)},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.AppFindContacts=function(a,b,c){var d={};return d.verbose=!1,d.button_text="",d.emails=[],d.WPUsers=[],d.matched_emails=[],d.callBackStatus={phone:0,wp:0},jQuery(a).bind("appFindContactsCallBack",function(){d.log("event: appFindContactsCallBack"),d.callBackStatus.phone&&d.callBackStatus.wp&&(d.callBackStatus.phone=0,d.callBackStatus.wp=0,d.compareEmailLists())}),d.init=function(a){a&&(d.verbose=!0);for(var c=b.getElementById("myApp").contentWindow.document,e=c.getElementsByClassName("appp-find-contacts-btn"),f=0;f<e.length;f++)e[f].addEventListener("click",d.queryTwoEmailSources,!1)},d.queryTwoEmailSources=function(a){a.preventDefault(),d.getWordPressUsersEmails(),d.findContacts()},d.log=function(a){d.verbose&&console.log(a)},d.findContacts=function(){var a=new ContactFindOptions;a.filter="@",a.multiple=!0;var b=["email"];navigator.contacts.find(b,d.onSuccessCallBack,d.onErrorCallBack,a)},d.getWordPressUsersEmails=function(){console.debug("getWordPressUsersEmails");var c=b.getElementById("myApp").contentWindow.document,e=b.getElementById("myApp").contentWindow.window,f="";return c.getElementsByClassName("appp-find-contacts-btn").length?(f=c.getElementsByClassName("appp-find-contacts-btn")[0].getAttribute("data-appp-nonce"),void e.jQuery.ajax({type:"post",dataType:"json",url:e.apppCore.ajaxurl,data:{action:"apppwordpressuseremails",nonce:f},success:function(b){b&&"object"==typeof b?(d.WPUsers=b,d.callBackStatus.wp=1,jQuery(a).trigger("appFindContactsCallBack")):d.log("response was not an object")},error:function(a,b,c){d.log([a,b,c])},complete:function(a){d.log("AJAX request complete")}})):void d.log("missing nonce from .appp-find-contacts-btn")},d.onSuccessCallBack=function(b){var c,e,f,g;for(f=0;f<b.length;f++)if(b[f].emails)for(g=0;g<b[f].emails.length;g++)b[f].emails[g].value&&d.emails.push(b[f].emails[g].value);d.callBackStatus.phone=1,jQuery(a).trigger("appFindContacts_matched_emails"),c="Total found: "+d.emails.length+"\n";var h=e[Math.floor(Math.random()*e.length)];c="Random email from your phone: "+h,d.log(c)},d.onErrorCallBack=function(a){alert("Error = "+a.code)},d.compareEmailLists=function(){d.log("comparing email arrays"),d.matched_emails=[],jQuery.each(d.WPUsers,function(a,b){jQuery.inArray(b.user_email,d.emails)&&d.matched_emails.push(b)}),d.matched_emails.length&&jQuery(a).trigger("appFindContacts_matched_emails");var c=b.getElementById("myApp").contentWindow.window;c.apppCore||(c.apppCore={}),c.apppCore.matched_emails=d.matched_emails,c.jQuery(c).trigger("appFindContacts_matched_emails")},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.camera=function(a,b,c){"use strict";var d={debug:!1};return d.isGallery=!1,d.init=function(a){var c=jQuery;d.debug=a,console.log("appTop.camera.init()"),appTop.iframe="undefined"!=typeof appTop.iframe?appTop.iframe:b.getElementById("myApp"),appTop.iframedoc="undefined"!=typeof appTop.iframedoc?appTop.iframedoc:b.getElementById("myApp").contentWindow.document,appTop.camera.el={$body:appTop.iframedoc.getElementsByTagName("body")[0],$title:b.getElementById("myApp").contentWindow.document.getElementById("appp_cam_post_title"),$file:b.getElementById("myApp").contentWindow.document.getElementById("appp_cam_file"),$status:b.getElementById("myApp").contentWindow.document.getElementById("cam_status"),$capturePhotoBtn:b.getElementById("myApp").contentWindow.document.getElementById("capture-photo-btn"),$photoLibraryBtn:b.getElementById("myApp").contentWindow.document.getElementById("photo-library-btn")},appTop.camera.el.$file&&appTop.camera.el.$file.addEventListener("change",function(a){a.preventDefault();var b=c(this),d=appTop.camera.el.$title.val();if(!d||!d.trim()){var e=b.val(),f=e?e.split("."):!1;f[0]&&(f=f[0].split("\\"),e=f[f.length-1],appTop.camera.el.$title.val(e))}}),appTop.camera.el.$capturePhotoBtn&&(appTop.util.hasClass(appTop.camera.el.$capturePhotoBtn,"btn-camera")?appTop.camera.el.$capturePhotoBtn.addEventListener("click",appTop.camera.capturePhoto):appTop.camera.el.$capturePhotoBtn.addEventListener("click",appTop.camera.attachPhoto)),appTop.camera.el.$photoLibraryBtn&&(appTop.util.hasClass(appTop.camera.el.$photoLibraryBtn,"btn-camera")?appTop.camera.el.$photoLibraryBtn.addEventListener("click",appTop.camera.photoLibrary):appTop.camera.el.$photoLibraryBtn.addEventListener("click",appTop.camera.attachLibrary))},d.capturePhoto=function(){console.debug("click capturePhone button"),appTop.camera.isGallery=!1,appTop.apppCore.noGoBackFlag=!0,a.navigator.camera.getPicture(appTop.camera.uploadPhoto,function(a){console.log(["No photo was taken from the camera.","apppcamera.js, line 83"])},{quality:30,destinationType:a.navigator.camera.DestinationType.FILE_URI,correctOrientation:!0,targetWidth:1204,targetHeight:1204})},d.photoLibrary=function(){console.debug("click photoLibrary button"),appTop.apppCore.noGoBackFlag=!0,appTop.camera.isGallery=!0,a.navigator.camera.getPicture(appTop.camera.uploadPhoto,function(a){console.log(["No photo was added from the library.","appp-camera.js, line 53"])},{quality:30,destinationType:a.navigator.camera.DestinationType.FILE_URI,sourceType:a.navigator.camera.PictureSourceType.PHOTOLIBRARY,correctOrientation:!0,targetWidth:1204,targetHeight:1204})},d.statusDom=function(){var a=b.getElementById("myApp").contentWindow.document;return appTop.camera.statusDomEl=appTop.camera.statusDomEl?appTop.camera.statusDomEl:a.getElementById("cam-status"),appTop.camera.statusDomEl},d.uploadPhoto=function(a){var c=b.getElementById("myApp").contentWindow.document,e=b.getElementById("myApp").contentWindow.window;console.log("imageURI",a);var f=a.substr(a.lastIndexOf("/")+1),g=(f.split("?")[0],f.split("?")[1]);"Android"===device.platform&&appTop.camera.isGallery&&(f=g+".jpg"),console.log(f);var h=new FileUploadOptions;h.fileKey="appp_cam_file",h.fileName=a?f:"",h.mimeType="image/jpeg",console.log(h);var i,j={},k=[],l=[],m=c.getElementById("appp_camera_form").elements;for(console.log(m),i=0;i<m.length;i++)k[i]=m[i].name,l[i]=m[i].value,console.log(m[i].name,m[i].value);j.form_fields=JSON.stringify(k),j.form_values=JSON.stringify(l),j.appp_action="attach",c.getElementById("appp_cam_post_title").value="",h.params=j;var n=new FileTransfer,o=e.apppCore.ajaxurl;n.upload(a,o,d.win,d.fail,h),n.onprogress=function(a){var c=b.getElementById("myApp").contentWindow.window,d=b.getElementById("myApp").contentWindow.document;if(a.lengthComputable){d.getElementById("cam-progress").style.visibility="visible";var e=Math.floor(a.loaded/a.total*100);d.getElementById("progress").value=e}else""===appTop.camera.statusDom().innerHTML?appTop.camera.statusDom().innerHTML=c.appcamera.msg.loading:appTop.camera.statusDom().innerHTML+="."}},d.win=function(a){var c=b.getElementById("myApp").contentWindow.window,d=b.getElementById("myApp").contentWindow.document,e=e=c.appcamera.msg.moderation;d.getElementById("appp_action").value;c.appcamera.moderation_on||(e=c.appcamera.msg.success),d.getElementById("cam-status").innerHTML="<p>"+e+"</p>",d.getElementById("cam-progress").style.visibility="hidden"},d.fail=function(a){console.log("upload error source "+a.source),console.log("upload error target "+a.target);var c=b.getElementById("myApp").contentWindow.window,d=b.getElementById("myApp").contentWindow.document;d.getElementById("cam-status").innerHTML="<p>"+c.appcamera.msg.error+"= "+a.code+"</p>",d.getElementById("cam-progress").style.visibility="hidden"},d.attachPhoto=function(){appTop.apppCore.noGoBackFlag=!0,a.navigator.camera.getPicture(appTop.camera.uploadAttachPhoto,function(a){console.log(["No photo was added from the library.","apppcamera.js, line 230"])},{quality:30,destinationType:a.navigator.camera.DestinationType.FILE_URI,correctOrientation:!0,targetWidth:1204,targetHeight:1204})},d.attachLibrary=function(){appTop.apppCore.noGoBackFlag=!0,a.navigator.camera.getPicture(appTop.camera.uploadAttachPhoto,function(a){console.log(["No photo was added from the library.","apppcamera.js, line 248"])},{quality:30,destinationType:a.navigator.camera.DestinationType.FILE_URI,sourceType:a.navigator.camera.PictureSourceType.PHOTOLIBRARY,correctOrientation:!0,targetWidth:1204,targetHeight:1204})},d.uploadAttachPhoto=function(a){console.log(a);var c="",d=a.substr(a.lastIndexOf("/")+1),e=d.split("?")[0],f=d.split("?")[1],g=Math.floor(Date.now()/1e3);f="undefined"==typeof f?g-1:f;var h=b.getElementById("myApp").contentWindow.window,i=b.getElementById("myApp").contentWindow.document,j=h.ajaxurl;c=g+"-"+e,"Android"===device.platform&&(c=f+g+".jpg"),console.log(c);var k=new FileUploadOptions;k.fileKey="appp_cam_file",k.fileName=a?c:"",k.mimeType="image/jpeg",k.appp_action="attach";var l={};l.action="upload_image",i.getElementById("apppcamera-upload-image")?l.nonce=i.getElementById("apppcamera-upload-image").value:i.getElementById("attach-photo")&&(l.nonce=i.getElementById("attach-photo").getAttribute("data-nonce")),k.params=l;var m=new FileTransfer;m.upload(a,j,appTop.camera.attachWin,appTop.camera.fail,k),m.onprogress=function(a){var c=b.getElementById("myApp").contentWindow.window,d=b.getElementById("myApp").contentWindow.document;if(a.lengthComputable){d.getElementById("cam-progress").style.visibility="visible";var e=Math.floor(a.loaded/a.total*100);d.getElementById("progress").value=e}else""===appTop.camera.statusDom().innerHTML?appTop.camera.statusDom().innerHTML=c.appcamera.msg.loading:appTop.camera.statusDom().innerHTML+="."}},d.attachWin=function(a){console.log("Code = "+a.responseCode),console.log("Response = "+a.response),console.log("Sent = "+a.bytesSent);var c,e,f=b.getElementById("myApp").contentWindow.document.getElementById("appp_action").value,g="";"appbuddy"==f&&(g="Image attached"),d.uploadresponse=a.response,c=d.util.extractImageUrl(a.response),e=c?'<img src="'+c+'">':"",b.getElementById("myApp").contentWindow.document.getElementById("cam-status").innerHTML="<p>"+g+"</p>",b.getElementById("myApp").contentWindow.document.getElementById("attach-image").value=c,appTop.util.removeClass(b.getElementById("myApp").contentWindow.document.getElementById("attach-image-sheet"),"active"),appTop.util.addClass(b.getElementById("myApp").contentWindow.document.getElementById("attach-image-sheet"),"hide"),b.getElementById("myApp").contentWindow.document.getElementById("image-status").innerHTML=e,b.getElementById("myApp").contentWindow.document.getElementById("cam-progress").style.visibility="hidden",b.getElementById("myApp").contentWindow.document.getElementById("cam-status").innerHTML=""},d.util={extractImageUrl:function(a){if(a&&a.indexOf("http")>0){var b=new RegExp('("http(.*)/upload(.*).(jpg|png)")',"gm"),c=a.match(b);if(d.debug&&c&&c.length&&(a!=c[0]&&console.log("attach img raw response",a,c),console.log("attach img",c)),c[0])return JSON.parse(c[0])}return""}},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.AppWoo=function(a,b,c){var d={debug:!1,paypal:{}};return d.init=function(b){b&&(d.debug=!0),d.log("appwoo init"),a.addEventListener("message",d.receiveMessages,!1)},d.receiveMessages=function(a){"paypal_place_order"===a.data&&d.paypal.openPaymentWindow()},d.paypal.openPaymentWindow=function(){var c=b.getElementById("myApp").contentWindow.window,d=c.apppresser.paypal.redirect,e=a.open(d,"_blank");e&&appTop.AppWoo.paypal.inAppBrowser(e)},d.paypal.inAppBrowser=function(a){var c=b.getElementById("myApp").contentWindow.window,d=c.location.host,e=c.apppwoo.cart_url,f=(c.apppCore.is_appp_true?c.apppCore.is_appp_true:"1","");c.apppresser.log("cart_url",e);var g=function(b){c.apppresser.log("checkout_place_order loadstopEvent",{url:b.url}),d&&b.url.indexOf(d)>=0&&(f=b.url,a.close())},h=function(b){c.apppresser.log("checkout_place_order exit",b),c.location.href=f?f:e,a.removeEventListener("loadstop",g),a.removeEventListener("exit",h)};a.addEventListener("loadstop",g),a.addEventListener("exit",h)},d.log=function(a){d.debug&&console.debug(a)},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.AppBuddy=function(a,b,c){var d={debug:!1};return d.init=function(a){a&&(d.debug=!0),d.log("appbuddy init"),d.avatarUI()},d.avatarUI=function(){appTop.apppCore.noGoBackFlags.push(function(){var a=b.getElementById("myApp").contentWindow.window;a.location.href.indexOf("/profile/change-avatar/")>1&&(appTop.apppCore.noGoBackFlag="changing-avatar")})},d.log=function(a){d.debug&&console.debug(a)},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.AppFBConnect=function(a,b,c,d){var e={debug:!1};return e.init=function(a){e.debug=a;var c=b.getElementById("myApp").contentWindow.window;c.jQuery(".appfbconnectlogin").on("click",function(a){a.preventDefault(),e.login()}),openFB.init({appId:c.apppfb.app_id,oauthRedirectURL:c.apppfb.oauthRedirectURL})},e.fbMe=function(){console.log("Welcome!  Fetching your information.... ");var a={path:"/me",params:{fields:"email,name"},success:e.fetchUser_Callback,error:e.fetchUser_CallbackError};openFB.api(a)},e.fetchUser_Callback=function(a){var c=b.getElementById("myApp").contentWindow.document;console.log("Successful login for: "+a.name),c.getElementById("status")&&(c.getElementById("status").innerHTML="Thanks for logging in, "+a.name+"!"),"undefined"!=typeof a.name&&"undefined"!=typeof a.email?e.wplogin(a.name,a.email):console.log(a)},e.fetchUser_CallbackError=function(a){apppCore.log(a),iframedoc.getElementById("status").innerHTML="Sorry, login failed"},e.checkLoginState=function(){FB.getLoginStatus(function(a){return e.statusChangeCallback(a),!1})},e.statusChangeCallback=function(a){var c=b.getElementById("myApp").contentWindow.document;console.log("statusChangeCallback"),console.log(a),"connected"===a.status?e.fbMe():"not_authorized"===a.status?c.getElementById("status").innerHTML="Please log into this app.":c.getElementById("status").innerHTML="Please log into Facebook."},e.login=function(a){return openFB.login(e.statusChangeCallback,{scope:"email,public_profile,user_friends"}),!1},e.wplogin=function(a,c){var d=(b.getElementById("myApp").contentWindow.document,b.getElementById("myApp").contentWindow.window);jQuery.ajax({url:d.apppCore.ajaxurl,data:{action:"appp_wp_fblogin",user_email:c,security:d.apppfb.security,full_name:a},error:function(a){alert("WordPress login error "+a),loginResult.html("Login error, please try again.")},success:function(a){console.log("Ajax data sent to WordPress"),d.location.reload(!0)}})},e}(window,document,jQuery);var openFB=function(){function a(a){if(!a.appId)throw"appId parameter not set in init()";j=a.appId,a.tokenStore&&(p=a.tokenStore),a.accessToken&&(p.fbAccessToken=a.accessToken),n=a.loginURL||n,o=a.logoutURL||o,s=a.oauthRedirectURL||s,t=a.cordovaOAuthRedirectURL||t,u=a.logoutRedirectURL||u}function b(a){var b=p.fbAccessToken,c={};b?(c.status="connected",c.authResponse={accessToken:b}):c.status="unknown",a&&a(c)}function c(a,b){function c(a){var b=a.url;if(b.indexOf("access_token=")>0||b.indexOf("error=")>0){var c=600-((new Date).getTime()-g);setTimeout(function(){f.close()},c>0?c:0),d(b)}}function e(){console.log("exit and remove listeners"),k&&!m&&k({status:"user_cancelled"}),f.removeEventListener("loadstop",c),f.removeEventListener("exit",e),f=null,console.log("done removing listeners")}var f,g,h="",i=l?t:s;return j?(b&&b.scope&&(h=b.scope),k=a,m=!1,g=(new Date).getTime(),f=window.open(n+"?client_id="+j+"&redirect_uri="+i+"&response_type=token&scope="+h,"_blank","location=no,clearcache=yes"),void(l&&(f.addEventListener("loadstart",c),f.addEventListener("exit",e)))):a({status:"unknown",error:"Facebook App Id not set."})}function d(a){var b,c;m=!0,a.indexOf("access_token=")>0?(b=a.substr(a.indexOf("#")+1),c=h(b),p.fbAccessToken=c.access_token,k&&k({status:"connected",authResponse:{accessToken:c.access_token}})):a.indexOf("error=")>0?(b=a.substring(a.indexOf("?")+1,a.indexOf("#")),c=h(b),k&&k({status:"not_authorized",error:c.error})):k&&k({status:"not_authorized"})}function e(a){var b,c=p.fbAccessToken;p.removeItem("fbtoken"),c&&(b=window.open(o+"?access_token="+c+"&next="+u,"_blank","location=no,clearcache=yes"),l&&setTimeout(function(){b.close()},700)),a&&a()}function f(a){var b,c=a.method||"GET",d=a.params||{},e=new XMLHttpRequest;d.access_token=p.fbAccessToken,b="https://graph.facebook.com"+a.path+"?"+i(d),e.onreadystatechange=function(){if(4===e.readyState)if(200===e.status)a.success&&a.success(JSON.parse(e.responseText));else{var b=e.responseText?JSON.parse(e.responseText).error:{message:"An error has occurred"};a.error&&a.error(b)}},e.open(c,b,!0),e.send()}function g(a,b){return f({method:"DELETE",path:"/me/permissions",success:function(){a()},error:b})}function h(a){var b=decodeURIComponent(a),c={},d=b.split("&");return d.forEach(function(a){var b=a.split("=");c[b[0]]=b[1]}),c}function i(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return b.join("&")}var j,k,l,m,n="https://www.facebook.com/dialog/oauth",o="https://www.facebook.com/logout.php",p=window.sessionStorage,q=window.location.pathname.substring(0,window.location.pathname.lastIndexOf("/")),r=location.protocol+"//"+location.hostname+(location.port?":"+location.port:"")+q,s=r+"/oauthcallback.html",t="https://www.facebook.com/connect/login_success.html",u=r+"/logoutcallback.html";return document.addEventListener("deviceready",function(){l=!0},!1),{init:a,login:c,logout:e,revokePermissions:g,api:f,oauthCallback:d,getLoginStatus:b}}(),appTop="undefined"!=typeof window.appTop?appTop:{};appTop.AppGeolocation=function(a,b,c){var d={debug:!1};return d.shortcode_fired=!1,d.ajaxloaded=!1,d.getUserInvterval=0,d.getLocationInvterval=0,d.geo_form=!1,d.geoLocate_post=function(){(d.geo_form||d.shortcode_fired!==!0)&&(d.get.getCurrentPosition(d.onSuccessGeoPost,d.onErrorGeo),d.getLocationInvterval=d.getCurrentPositionInterval(),d.shortcode_fired=!0,d.ajaxloaded=!1)},d.onSuccessGeoPost=function(a){var c=b.getElementById("myApp").contentWindow.document,e=b.getElementById("myApp").contentWindow.window;null!==c.getElementById("appp_longitude")&&a||(d.geo_form=!0),d.position=a,e.latitude=a.coords.latitude,e.longitude=a.coords.longitude;for(var f=null,g=["longitude","latitude","altitude","accuracy","altitudeAccuracy","heading","speed","timestamp"],h=g.length-1;h>=0;)f=c.getElementById("appp_"+g[h].toLowerCase()),f&&("timestamp"==g[h]?f.value=a.timestamp:f.value=a.coords[g[h]]),h--;var i=c.getElementById("appp_map_preview_img");a&&null!==i&&i.setAttribute("src","http://maps.googleapis.com/maps/api/staticmap?zoom=17&size=600x300&maptype=roadmap&markers=color:red%7Ccolor:red%7Clabel:%7C"+a.coords.latitude+","+a.coords.longitude+"&sensor=false")},d.onErrorGeo=function(a){var c=b.getElementById("myApp").contentWindow.window;"function"==typeof c.apppCore.log&&c.apppCore.log("code: "+a.code+"\nmessage: "+a.message+"\n")},d.geoLocate_user=function(){navigator.geolocation.getCurrentPosition(d.onSuccessGeoUser,d.onErrorGeo)},d.onSuccessGeoUser=function(a){var c=b.getElementById("myApp").contentWindow.window;if(d.geo_form||d.shortcode_fired!==!0){var e=c.apppCore.ajaxurl,f=!0;(e||f)&&jQuery.ajax({type:"POST",dataType:"json",url:e,data:{action:"appp_geo_user",longitude:a.coords.longitude,latitude:a.coords.latitude},success:function(a){appTop.AppGeolocation.log(a.data)},error:function(){appTop.AppGeolocation.log("geo location error")}})}},d.receiveMessage=function(a){if(d.log("appgeo receiveMessage: "+a.data),"get_current_position"===a.data)setTimeout(function(){console.log("appgeo",d),navigator.geolocation.getCurrentPosition(d.onSuccessGeoPost_userpin,d.onErrorGeo)},500);else if("checkin_success"===a.data){var c=b.getElementById("myApp").contentWindow.appgeo.checkin_success,e=b.getElementById("myApp").contentWindow.appgeo.alert_pop_title;navigator.notification.alert(c,null,e)}},d.onSuccessGeoPost_userpin=function(a){var c=b.getElementById("myApp").contentWindow.window;d.log(a),latitude=a.coords.latitude,longitude=a.coords.longitude,c.AppGeo_initialize(latitude,longitude),c.jQuery(".ajax-spinner").hide()},d.init=function(c){a.addEventListener("message",d.receiveMessage,!1),c&&(d.debug=!0,d.log("appTop.AppGeolocation.init")),a.clearInterval(d.getUserInvterval),a.clearInterval(d.getLocationInvterval),d.ajaxloaded=!0,d.get=navigator.geolocation;var e=b.getElementById("myApp").contentWindow.document;e.getElementById("appp_longitude")&&(d.geo_form=!0),e.getElementById("app-geolocation-geolocate-post-trigger")&&d.geoLocate_post(),e.getElementById("app-geolocation-geolocate-user-trigger")&&(d.geoLocate_user(),d.getUserInvterval=d.geoLocate_userInterval());for(var f=e.getElementsByClassName("onclick-appgeo-getloc"),g=0;g<f.length;g++)f[g].addEventListener("click",d.openCheckinModal.bind(this),!1)},d.geoLocate_userInterval=function(){return a.setInterval(function(){d.geoLocate_user()},6e4)},d.getCurrentPositionInterval=function(){return a.setInterval(function(){d.get.getCurrentPosition(d.onSuccessGeoPost,d.onErrorGeo),d.log("geo")},15e3)},d.openCheckinModal=function(){var a=b.getElementById("myApp").contentWindow.document,c=b.getElementById("myApp").contentWindow.window,e=a.getElementById("checkin-here-btn"),f=null,g=null,h=null;e&&(f=e.getAttribute("data-title"),g=e.getAttribute("data-place"),h=e.getAttribute("data-address")),
c.$title=f,c.$place=g,c.$address=h,c.$pin=null,c.$place_id=null,c.toggleCheckinForm("block"),""===h||null===h?d.AppGeo_findPlace(g):(c.$pin=!0,c.AppGeo_findAddress(h))},d.AppGeo_findPlace=function(){var a=b.getElementById("myApp").contentWindow.document,c=b.getElementById("myApp").contentWindow.window;a.getElementById("map-canvas").innerHTML="",c.toggleAjaxSpinner("show"),navigator.geolocation.getCurrentPosition(d.AppGeo_setPlaceLat)},d.AppGeo_setPlaceLat=function(a){var c=b.getElementById("myApp").contentWindow.window;c.AppGeo_setPlaceLat(a)},d.log=function(a){d.debug&&console.log(a)},d}(window,document);var appTop="undefined"!=typeof window.appTop?appTop:{};appTop.SocialSharing=function(a,b,c){var d={debug:!1};return d.init=function(a){a&&(d.debug=!0);for(var c=b.getElementById("myApp").contentWindow.document,e=c.getElementsByClassName("appshare"),f=0;f<e.length;f++)e[f].addEventListener("click",d.socialSharingClick,!1)},d.log=function(a,b){d.debug&&console.log(a,b)},d.socialSharingClick=function(){d.log("Share Click Event Added",this);var b=this.getAttribute("data-msg"),c=this.getAttribute("data-link");a.plugins.socialsharing.share(b,null,null,c)},d}(window,document),window.appp_push=function(a,b,c){"use strict";var d={};return d.iframe=b.getElementById("myApp"),d.initialize=function(){b.addEventListener("push-notification",function(a){"android"==device.platform||"Android"==device.platform?d.onNotificationGCM(a):d.onNotificationAPN(a)}),a.addEventListener("message",d.receiveMessage,!1)},d.receiveMessage=function(a){console.log("Push: "+a.data),"site_loaded"===a.data&&d.ready()},d.ready=function(){d.registerDevice()},d.errorHandler=function(a){console.log("Error Handler  "+a)},d.successHandler=function(a){console.log("Success! Result = "+a)},d.registerDevice=function(){var b=a.plugins.pushNotification,c=d.iframe.contentWindow.window.apppPushVars;"android"==device.platform||"Android"==device.platform?c&&c.gcm_id?(b.onDeviceReady({projectid:c.gcm_id,pw_appid:c.app_code}),b.registerDevice(function(a){var b=a;console.log("push token: "+b)},function(a){console.warn(JSON.stringify(["failed to register ",a]))})):console.log("window.apppPushVars.gcm_id not set"):(b.onDeviceReady({pw_appid:c.app_code}),b.registerDevice(function(a){var b=a.deviceToken;console.warn("registerDevice: "+b)},function(a){console.warn("failed to register : "+JSON.stringify(a))}))},d.onNotificationAPN=function(b){var c=a.plugins.pushNotification,e="Notification";if(d.iframe.contentWindow.window.apppPushVars.notifications_title&&(e=d.iframe.contentWindow.window.apppPushVars.notifications_title),b.notification&&navigator.notification.alert(b.notification.aps.alert,null,e,"Done"),b.badge&&c.setApplicationIconBadgeNumber(b.badge),b.sound){var f=new Media(b.sound);f.play()}},d.onNotificationGCM=function(a){var b=a.notification.header;d.iframe.contentWindow.window.apppPushVars.notifications_title&&(b=d.iframe.contentWindow.window.apppPushVars.notifications_title),navigator.notification.alert(a.notification.title,null,b,"Done")},d.initialize(),d}(window,document),console.log("appp phonegap files loaded"),window.postMessage("remote_pg_loaded","*");
//# sourceMappingURL=apppresser2-plugins.js.map