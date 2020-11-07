import { Component } from "./VueAce";

export default {
	install (Vue, options) {
		Vue.component("ace-editor", Component);
	}
}