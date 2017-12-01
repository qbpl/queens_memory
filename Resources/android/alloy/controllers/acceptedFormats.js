function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function backButton(e) {
        $.formatsWin.close();
    }
    function doAnimation() {}
    require("/alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "acceptedFormats";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        __processArg(arguments[0], "__parentSymbol");
        __processArg(arguments[0], "$model");
        __processArg(arguments[0], "__itemTemplate");
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.formatsWin = Ti.UI.createWindow({
        orientationModes: [ Ti.UI.PORTRAIT ],
        backgroundColor: "rgb(0,0,0,0.9)",
        width: "100%",
        id: "formatsWin"
    });
    $.__views.formatsWin && $.addTopLevelView($.__views.formatsWin);
    $.__views.banner2 = Ti.UI.createView({
        backgroundColor: "black",
        top: "1%",
        width: "100%",
        height: "4%",
        zIndex: 1,
        font: {
            fontSize: 14
        },
        id: "banner2"
    });
    $.__views.formatsWin.add($.__views.banner2);
    $.__views.back = Ti.UI.createButton({
        font: {
            fontFamily: "Entypo",
            fontSize: 30
        },
        left: "5%",
        color: "white",
        top: "3%",
        title: "e",
        id: "back"
    });
    $.__views.banner2.add($.__views.back);
    backButton ? $.addListener($.__views.back, "click", backButton) : __defers["$.__views.back!click!backButton"] = true;
    $.__views.qpl = Ti.UI.createImageView({
        width: "33%",
        top: "11%",
        id: "qpl",
        image: "/images/QL300.png"
    });
    $.__views.banner2.add($.__views.qpl);
    $.__views.TnC = Ti.UI.createButton({
        font: {
            fontFamily: "Entypo",
            fontSize: 30
        },
        right: "5%",
        color: "white",
        top: "3%",
        title: "i",
        id: "TnC"
    });
    $.__views.banner2.add($.__views.TnC);
    doAnimation ? $.addListener($.__views.TnC, "click", doAnimation) : __defers["$.__views.TnC!click!doAnimation"] = true;
    $.__views.__alloyId0 = Ti.UI.createSearchBar({
        id: "__alloyId0"
    });
    var __alloyId3 = [];
    $.__views.__alloyId4 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "aif, aiff    Apple Audio File",
            id: "__alloyId4"
        }
    };
    __alloyId3.push($.__views.__alloyId4);
    $.__views.__alloyId5 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "mp3     MP3 Audio File (Tagged)",
            id: "__alloyId5"
        }
    };
    __alloyId3.push($.__views.__alloyId5);
    $.__views.__alloyId6 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "ogg     Ogg Vorbis Audio File",
            id: "__alloyId6"
        }
    };
    __alloyId3.push($.__views.__alloyId6);
    $.__views.__alloyId7 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "ram,rm     Real Audio File",
            id: "__alloyId7"
        }
    };
    __alloyId3.push($.__views.__alloyId7);
    $.__views.__alloyId8 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "wav     WAV Audio File",
            id: "__alloyId8"
        }
    };
    __alloyId3.push($.__views.__alloyId8);
    $.__views.__alloyId1 = Ti.UI.createListSection({
        headerTitle: "Audio Files",
        id: "__alloyId1"
    });
    $.__views.__alloyId1.items = __alloyId3;
    var __alloyId9 = [];
    __alloyId9.push($.__views.__alloyId1);
    var __alloyId12 = [];
    $.__views.__alloyId13 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "3gp    3GP Video",
            id: "__alloyId13"
        }
    };
    __alloyId12.push($.__views.__alloyId13);
    $.__views.__alloyId14 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "asf    ASF Video",
            id: "__alloyId14"
        }
    };
    __alloyId12.push($.__views.__alloyId14);
    $.__views.__alloyId15 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "avi    AVI Video",
            id: "__alloyId15"
        }
    };
    __alloyId12.push($.__views.__alloyId15);
    $.__views.__alloyId16 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "divx    DivX Video",
            id: "__alloyId16"
        }
    };
    __alloyId12.push($.__views.__alloyId16);
    $.__views.__alloyId17 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "flv     Flash Video",
            id: "__alloyId17"
        }
    };
    __alloyId12.push($.__views.__alloyId17);
    $.__views.__alloyId18 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "mov     Quicktime Video",
            id: "__alloyId18"
        }
    };
    __alloyId12.push($.__views.__alloyId18);
    $.__views.__alloyId19 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "mp4     MPEG-4 Video",
            id: "__alloyId19"
        }
    };
    __alloyId12.push($.__views.__alloyId19);
    $.__views.__alloyId20 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "swf     Macromedia Shockwave/Flash Object",
            id: "__alloyId20"
        }
    };
    __alloyId12.push($.__views.__alloyId20);
    $.__views.__alloyId21 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "vob     DVD Video",
            id: "__alloyId21"
        }
    };
    __alloyId12.push($.__views.__alloyId21);
    $.__views.__alloyId22 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "wmv     Windows Media Video",
            id: "__alloyId22"
        }
    };
    __alloyId12.push($.__views.__alloyId22);
    $.__views.__alloyId10 = Ti.UI.createListSection({
        headerTitle: "Video Files",
        id: "__alloyId10"
    });
    $.__views.__alloyId10.items = __alloyId12;
    __alloyId9.push($.__views.__alloyId10);
    var __alloyId25 = [];
    $.__views.__alloyId26 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "ai, ps, eps     Adobe Postscript ",
            id: "__alloyId26"
        }
    };
    __alloyId25.push($.__views.__alloyId26);
    $.__views.__alloyId27 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "bmp     Windows Bitmap Image",
            id: "__alloyId27"
        }
    };
    __alloyId25.push($.__views.__alloyId27);
    $.__views.__alloyId28 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "djvu    DjVu Multi-Resolution Image",
            id: "__alloyId28"
        }
    };
    __alloyId25.push($.__views.__alloyId28);
    $.__views.__alloyId29 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "gif     GIF Image",
            id: "__alloyId29"
        }
    };
    __alloyId25.push($.__views.__alloyId29);
    $.__views.__alloyId30 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "ndd    Adobe InDesign 2.0",
            id: "__alloyId30"
        }
    };
    __alloyId25.push($.__views.__alloyId30);
    $.__views.__alloyId31 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "j2f, jp2   JPEG 2000 Image  ",
            id: "__alloyId31"
        }
    };
    __alloyId25.push($.__views.__alloyId31);
    $.__views.__alloyId32 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "jpeg, jpg  JPEG Image",
            id: "__alloyId32"
        }
    };
    __alloyId25.push($.__views.__alloyId32);
    $.__views.__alloyId33 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "png     PNG Image",
            id: "__alloyId33"
        }
    };
    __alloyId25.push($.__views.__alloyId33);
    $.__views.__alloyId34 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "psd     Adobe Photoshop Image",
            id: "__alloyId34"
        }
    };
    __alloyId25.push($.__views.__alloyId34);
    $.__views.__alloyId35 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "sid     MrSID Multi-Resolution Image",
            id: "__alloyId35"
        }
    };
    __alloyId25.push($.__views.__alloyId35);
    $.__views.__alloyId36 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "tif, tiff     TIFF Image",
            id: "__alloyId36"
        }
    };
    __alloyId25.push($.__views.__alloyId36);
    $.__views.__alloyId23 = Ti.UI.createListSection({
        headerTitle: "Image Files",
        id: "__alloyId23"
    });
    $.__views.__alloyId23.items = __alloyId25;
    __alloyId9.push($.__views.__alloyId23);
    var __alloyId39 = [];
    $.__views.__alloyId40 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "dnd-xml DocumentNavigator Document",
            id: "__alloyId40"
        }
    };
    __alloyId39.push($.__views.__alloyId40);
    $.__views.__alloyId41 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "doc     Microsoft Word Document",
            id: "__alloyId41"
        }
    };
    __alloyId39.push($.__views.__alloyId41);
    $.__views.__alloyId42 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "docx    Word Microsoft Office Open XML Format document",
            id: "__alloyId42"
        }
    };
    __alloyId39.push($.__views.__alloyId42);
    $.__views.__alloyId43 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "exe     Windows Executable",
            id: "__alloyId43"
        }
    };
    __alloyId39.push($.__views.__alloyId43);
    $.__views.__alloyId44 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "gz      Gnu ZIP Archive",
            id: "__alloyId44"
        }
    };
    __alloyId39.push($.__views.__alloyId44);
    $.__views.__alloyId45 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "htm, html, shtml     HTML Document",
            id: "__alloyId45"
        }
    };
    __alloyId39.push($.__views.__alloyId45);
    $.__views.__alloyId46 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "mkv     Matroska Multimedia Container",
            id: "__alloyId46"
        }
    };
    __alloyId39.push($.__views.__alloyId46);
    $.__views.__alloyId47 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "pdf     Adobe Acrobat PDF",
            id: "__alloyId47"
        }
    };
    __alloyId39.push($.__views.__alloyId47);
    $.__views.__alloyId48 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "ppt     Microsoft Powerpoint Presentation",
            id: "__alloyId48"
        }
    };
    __alloyId39.push($.__views.__alloyId48);
    $.__views.__alloyId49 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "pptx    PowerPoint Microsoft Office Open XML Format document",
            id: "__alloyId49"
        }
    };
    __alloyId39.push($.__views.__alloyId49);
    $.__views.__alloyId50 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "rar     RAR Compressed File",
            id: "__alloyId50"
        }
    };
    __alloyId39.push($.__views.__alloyId50);
    $.__views.__alloyId51 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "rdf     Relationship Metadata",
            id: "__alloyId51"
        }
    };
    __alloyId39.push($.__views.__alloyId51);
    $.__views.__alloyId52 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "rtf     Rich Text Format",
            id: "__alloyId52"
        }
    };
    __alloyId39.push($.__views.__alloyId52);
    $.__views.__alloyId53 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "sb      Superbook",
            id: "__alloyId53"
        }
    };
    __alloyId39.push($.__views.__alloyId53);
    $.__views.__alloyId54 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "tar     Tape Archive",
            id: "__alloyId54"
        }
    };
    __alloyId39.push($.__views.__alloyId54);
    $.__views.__alloyId55 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "taz     Unix Compress Archive",
            id: "__alloyId55"
        }
    };
    __alloyId39.push($.__views.__alloyId55);
    $.__views.__alloyId56 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "tgz     Gnu ZIP Archive",
            id: "__alloyId56"
        }
    };
    __alloyId39.push($.__views.__alloyId56);
    $.__views.__alloyId57 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "txt     Text Document",
            id: "__alloyId57"
        }
    };
    __alloyId39.push($.__views.__alloyId57);
    $.__views.__alloyId58 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "wpd     WordPerfect Document",
            id: "__alloyId58"
        }
    };
    __alloyId39.push($.__views.__alloyId58);
    $.__views.__alloyId59 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "xls     Microsoft Excel Document",
            id: "__alloyId59"
        }
    };
    __alloyId39.push($.__views.__alloyId59);
    $.__views.__alloyId60 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "xlsx    Excel Microsoft Office Open XML Format document",
            id: "__alloyId60"
        }
    };
    __alloyId39.push($.__views.__alloyId60);
    $.__views.__alloyId61 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "xml     XML Document",
            id: "__alloyId61"
        }
    };
    __alloyId39.push($.__views.__alloyId61);
    $.__views.__alloyId62 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "Z       Unix Compress Archive",
            id: "__alloyId62"
        }
    };
    __alloyId39.push($.__views.__alloyId62);
    $.__views.__alloyId63 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "zip     Zip Compressed File",
            id: "__alloyId63"
        }
    };
    __alloyId39.push($.__views.__alloyId63);
    $.__views.__alloyId37 = Ti.UI.createListSection({
        headerTitle: "Document Files",
        id: "__alloyId37"
    });
    $.__views.__alloyId37.items = __alloyId39;
    __alloyId9.push($.__views.__alloyId37);
    var __alloyId66 = [];
    $.__views.__alloyId67 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "bin",
            id: "__alloyId67"
        }
    };
    __alloyId66.push($.__views.__alloyId67);
    $.__views.__alloyId68 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "mpeg",
            id: "__alloyId68"
        }
    };
    __alloyId66.push($.__views.__alloyId68);
    $.__views.__alloyId69 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "mpg",
            id: "__alloyId69"
        }
    };
    __alloyId66.push($.__views.__alloyId69);
    $.__views.__alloyId70 = {
        properties: {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
            borderWidth: 5,
            font: {
                fontSize: 12
            },
            height: "10%",
            title: "tar.gz",
            id: "__alloyId70"
        }
    };
    __alloyId66.push($.__views.__alloyId70);
    $.__views.__alloyId64 = Ti.UI.createListSection({
        headerTitle: "Files",
        id: "__alloyId64"
    });
    $.__views.__alloyId64.items = __alloyId66;
    __alloyId9.push($.__views.__alloyId64);
    $.__views.formatContainer = Ti.UI.createListView({
        top: "5%",
        backgroundColor: "gray",
        borderColor: "gray",
        borderWidth: .5,
        sections: __alloyId9,
        searchView: $.__views.__alloyId0,
        id: "formatContainer"
    });
    $.__views.formatsWin.add($.__views.formatContainer);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.args;
    __defers["$.__views.back!click!backButton"] && $.addListener($.__views.back, "click", backButton);
    __defers["$.__views.TnC!click!doAnimation"] && $.addListener($.__views.TnC, "click", doAnimation);
    _.extend($, exports);
}

var Alloy = require("/alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;