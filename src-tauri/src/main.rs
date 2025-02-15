// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    // Necessary due to bug in webkit2gtk on fedora
    std::env::set_var("WEBKIT_DISABLE_DMABUF_RENDERER", "1"); // alternatively `WEBKIT_DISABLE_COMPOSITING_MODE` if this one is not enough
    breezy_lib::run();
}
