import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue2';

export default defineConfig({
    plugins: [createVuePlugin()],
    resolve: {
        alias:{
            '@' : '/src'
        }
    },
    // build 준비
    // 1. router의 index.js 파일에 base 옵셥
    // 개발할때는 아래코드를 주석처리하고, build 할때는 주석을 풀어줌
    publicPath : '/staeship1'
});