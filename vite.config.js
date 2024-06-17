import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
//set NODE_OPTIONS=""  
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import fs from "fs";
import path from "path";
export default defineConfig({
    plugins: [vue(), 
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }), Components({
            resolvers: [ElementPlusResolver()],
        })
	
		]
})