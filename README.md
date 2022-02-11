# Significant Other for Visual Studio Code

Provides a command to quickly switch between a source code file and its corresponding test file, and vice versa. Works with [most project structures](#supported-project-structures).

![demo](https://user-images.githubusercontent.com/2988/153523734-a90d1ab2-3e39-438f-8b25-be0eb36aa56a.gif)

## Supported Project Structures

Significant Other is intended to work automatically with popular project structures. It works with the project structure used in Rails projects, in Go modules, in Ruby gems, and it will hopefully work for your project as well. To provide its functionality, Significant Other makes a few assumptions (listed below) about your project's conventions.

Significant Other assumes that:

- You want to toggle between a source file and _the_ corresponding test file, or vice versa.
- The source file and the test file _start_ with the same name. The test file _may_ include a suffix of `_test`, `.test`, `_spec`, or `-spec`. For example, you can toggle between:
  - `lib/profile.js` and `spec/profile.js`
  - `app/models/profile.rb` and `test/models/profile_test.rb`
  - `src/profile.js` and `src/profile_spec.js`
  - `lib/profile.js` and `test/profile.test.js`
  - `profile.js` and `profile-spec.js`
  - `lib/kv.go` and `lib/kv_test.go`
- The source file and the test file have the same file extension. (I may consider removing this assumption at some point.)

If your project follows a well-defined, widely-used project structure that doesn't satisfy the assumptions above, please [let me know about it][open-an-issue] so that I can consider enhancing the extension to support that project structure.

## Bring your own keymap

You may want to use a keyboard shortcut for switching between source files and test files. This extension does not provide a keyboard shortcut by default, but you can easily define your own. Use the [official guide][vscode-keyboard-shortcuts] to locate the `Significant Other: Toggle` command and assign a shortcut that sparks joy in your life. 🎇

[open-an-issue]: https://github.com/jasonrudolph/significant-other-vscode/issues/new
[vscode-keyboard-shortcuts]: https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-editor
