<template>
    <div>
        <div>
            <el-input v-model="doc.title" placeholder="无标题"></el-input>
        </div>
        <div :id="id" />
        <button type="button" @click="submit">保存文档</button>
    </div>
</template>

<script>
import "codemirror/lib/codemirror.css"; // codemirror
import "tui-editor/dist/tui-editor.css"; // editor ui
import "tui-editor/dist/tui-editor-contents.css"; // editor content

import axios from "axios";
import Editor from "tui-editor";
import defaultOptions from "./default-options";

export default {
    name: "DocEdit",
    props: {
        value: {
            type: String,
            default: ""
        },
        id: {
            type: String,
            required: false,
            default () {
                return (
                    "markdown-editor-" +
                    +new Date() +
                    ((Math.random() * 1000).toFixed(0) + "")
                );
            }
        },
        options: {
            type: Object,
            default () {
                return defaultOptions;
            }
        },
        mode: {
            type: String,
            default: "markdown"
        },
        height: {
            type: String,
            required: false,
            default: "768px"
        },
        language: {
            type: String,
            required: false,
            default: "en_US" // https://github.com/nhnent/tui.editor/tree/master/src/js/langs
        },
    },
    data () {
        return {
            editor: null,
            doc: {}
        };
    },
    computed: {
        editorOptions () {
            const options = Object.assign({}, defaultOptions, this.options);
            options.initialEditType = this.mode;
            options.height = this.height;
            options.language = this.language;
            return options;
        }
    },
    watch: {
        value (newValue, preValue) {
            if (newValue !== preValue && newValue !== this.editor.getValue()) {
                this.editor.setValue(newValue);
            }
        },
        language (val) {
            this.destroyEditor();
            this.initEditor();
        },
        height (newValue) {
            this.editor.height(newValue);
        },
        mode (newValue) {
            this.editor.changeMode(newValue);
        }
    },
    destroyed () {
        this.destroyEditor();
    },
    methods: {
        initEditor () {
            this.editor = new Editor({
                el: document.getElementById(this.id),
                ...this.editorOptions
            });
            if (this.value) {
                this.editor.setValue(this.value);
            }
            this.editor.on("change", () => {
                this.$emit("input", this.editor.getValue());
            });
        },
        destroyEditor () {
            if (!this.editor) return;
            this.editor.off("change");
            this.editor.remove();
        },
        setValue (value) {
            this.editor.setValue(value);
        },
        getValue () {
            return this.editor.getValue();
        },
        setHtml (value) {
            this.editor.setHtml(value);
        },
        getHtml () {
            return this.editor.getHtml();
        },
        getFile (data) {
            axios({
                method: "GET",
                url: "/api/client/file/get",
                responseType: "json",
                params: data
            }).then(res => {
                if (res.data.success) {
                    this.doc = res.data.data;
                    this.setHtml(this.doc.content)
                } else {
                    this.$message.error('请求错误！')
                }

            });
        },
        updateFile (data) {
            axios({
                method: "POST",
                url: "/api/client/file/update",
                responseType: "json",
                data: data
            }).then(res => {
                // this.doc = res.data.data.data;
                this.$message.success("保存成功");
            });
        },
        submit () {
            this.doc.content = this.getHtml();
            this.updateFile(this.doc);
        },
    },
    mounted () {
        this.initEditor();
    },
    created () {
        this.getFile({ fileId: this.$store.state.fileId })
    }
};
</script>
