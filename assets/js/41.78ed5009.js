(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{320:function(t,e,s){"use strict";s.r(e);var a=s(14),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("Before the introduction of functions, it is important to know the basic structure of the project.")]),t._v(" "),e("h2",{attrs:{id:"project-configuration-file-generation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#project-configuration-file-generation"}},[t._v("#")]),t._v(" Project Configuration File Generation")]),t._v(" "),e("p",[t._v("Use * TOOL: generate property file * to generate the initial "),e("code",[t._v("property. json")]),t._v(" template file. The generated file will be placed directly in the .vscode folder.\nIf you have your own template, you can customize the template file using * TOOL: Overwrite the InitPropertyParam *.")]),t._v(" "),e("blockquote",[e("p",[t._v("After version 0.3.0, the plugin will automatically ask users whether to create property.json every time it starts.")])]),t._v(" "),e("center",[e("video",{attrs:{width:"90%",controls:""}},[e("source",{attrs:{src:"/videos/project.mp4",type:"video/mp4"}}),t._v("  \n  您的浏览器不支持视频标签。  \n")])]),t._v(" "),e("h2",{attrs:{id:"description-of-the-project-configuration-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description-of-the-project-configuration-file"}},[t._v("#")]),t._v(" Description Of the Project Configuration File")]),t._v(" "),e("blockquote",[e("p",[t._v("New configuration properties will be used after version 0.3.0")])]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// porperty.json  All attributes explained")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Third-party tool chains currently in use")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"toolChain"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xilinx"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Project naming ")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PL : Programming logic design part is FPGA before")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// PL : Processing system design part is the previous SOC")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prjName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PL"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"template"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"PS"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"template"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Custom project structure, without this attribute it is considered as a standard file structure (see below for details)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Project path, hardware and software design path")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// All properties support ${workspace}, ${plname}, ${psname}, relative paths")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ${workspace} ： path to the current workspace")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ${plname}、${psname} ：the name of the PL or PS project")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"arch"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prjPath"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hardware"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Place the design source file, note: src is one level below IP&bd")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sim"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Place the simulation file, which will be directly reflected in the tree structure")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Place constraints and data files, constraints will be automatically added to the vivado project")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"software"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"src"')]),t._v("  "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Code library management, support for remote and local two kinds of call (see the following library management for details)")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use UI to configure, not recommended for users to change directly")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"library"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// local | remote")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"hardware"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"common"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Common libraries provided by the plugin")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"custom"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// User's own design library")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Xilinx IP repository can be add directly to the IP repo of vivado")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only IP repositories of ADI and ARM are supported currently（adi | arm）")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"IP_REPO"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// When the design uses PL + PS that is SOC development")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Mixed development when the core is not none")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"soc"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"core"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"bd"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"os"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"app"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Whether the information is output at the terminal when the project is realized synthetically")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"enableShowLog"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设备类型 可以是如下几种：")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "none",')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "xc7z020clg400-2",')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "xc7a35tftg256-1",')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "xc7a35tcsg324-1",')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "xc7z035ffg676-2",')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// "xc7z020clg484-1"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"device"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("One of the most important attributes is the "),e("code",[t._v("arch")]),t._v(" attribute, which is considered a user-defined project structure when configured. For user-defined structures, all file changes are managed by the user. When the "),e("code",[t._v("arch")]),t._v(" attribute is not configured, it is considered to use the standard file structure recommended by the plugin. The description of the standard file structure is as follows.")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".vscode\n  └── property.json   -- Project configuration file  user-defined (or stored in the root of the workspace)\nprj                   -- Store project files\n  ├── simulation      -- Store intermediate files for third-party simulation tool runtime\n  ├── intel           -- Store intel project files\n  └── xilinx          -- Store xilinx project files\nuser                  -- Store user-designed source files which are user-defined\n  ├── ip              -- Store project ip code (managed by vendor tools, but moved to the same level of src by the plugin)\n  ├── bd              -- Store the source code of project block designer(managed by vendor tools, but moved to the same level of src by the plugin)\n  ├── data            -- mainly for data files and constraint files\n  ├── sim             -- Store user's simulation code\n  └── src             -- Store user's design source code   \n       └─ lib         -- Store user's hardware library source code  \n")])])]),e("p",[t._v("When the "),e("code",[t._v("SOC.core")]),t._v(" in the "),e("code",[t._v("property.json")]),t._v(' file is not set to "none" and the configuration file is saved, the file structure will be automatically changed to a hybrid PS+PL design structure. Under this structure the user folder will change to the following structure:')]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("user               -- Store user-designed source files, user-defined\n  Hardware         -- mainly for hardware logic design\n     ├── ip        -- Store project ip code (managed by vendor tools, but moved by the plugin to the same level directory as src)\n     ├── bd        --  Store project block designer source code (managed by vendor tools, but moved to src sibling directory by plugins) \n     ├── data      -- mainly for data files and constraint files\n     ├── sim       -- Store user's simulation code\n     └── src       -- Store user's design source code  \n          └─ lib   --  Store user's hardware library source code   \n  Software         -- Store software-driven designs\n     ├── data      -- mainly for data files and constraint files\n     └── src       -- Store user's project source code    \n")])])]),e("p",[e("code",[t._v("[Note]")]),t._v(": When the value of "),e("code",[t._v("SOC.core")]),t._v(" is changed from non-none to none, the Software folder is not needed by default and will be deleted (the plugin will also give a prompt accordingly), so please make a backup. Also, "),e("em",[t._v("IP and bd design will be placed to the directory above src, so it is better not to set src as the root path of the workspace")]),t._v(".")]),t._v(" "),e("p",[t._v("In addition, if the path configured by the user under arch is wrong or invalid, the plugin will directly change to the structure path under standard. "),e("em",[t._v("When the user does not configure the "),e("code",[t._v("property.json")]),t._v(" file, the file structure will default to the path of the workspace, and this behavior may cause a lot of performance consumption, please pay attention to it")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);