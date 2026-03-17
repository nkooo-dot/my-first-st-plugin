// 这是你的插件入口
import { extension_settings } from "../../../extensions.js";

const extensionName = "my-first-st-plugin";

// 插件加载时会执行这里
jQuery(async () => {
    console.log("🎉 我的第一个插件加载成功啦！");

    // 在酒馆界面加一个小按钮试试
    const buttonHtml = `
        <div id="my_plugin_button" class="list-group-item flex-container flexGap5">
            <div class="fa-solid fa-star extensionsMenuExtensionButton"></div>
            我的小插件
        </div>
    `;

    // 把按钮加到扩展菜单里
    $("#extensions_settings").append(buttonHtml);

    // 点击按钮弹出提示
    $("#my_plugin_button").on("click", function () {
        toastr.success("插件运行成功！你太棒了！🎊");
    });
});
