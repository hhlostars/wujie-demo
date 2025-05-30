# wujie-demo
wujie-demo

### 运行步骤
主应用为vite构建的vue3项目
子应用为vite构建vue3与webpack构建的vue2

wujie为本人仓库fork更改的版本

预览地址: http://101.37.30.117/main/

nginx相关配置：
location /main {
  alias /home/front/wujie-demo/main/;
  index index.html;
  try_files $uri $uri/ /main/index.html;
}

location /vue2 {
  alias /home/front/wujie-demo/vue2-sub/;
  index index.html;
  try_files $uri $uri/ /vue2/index.html;
}

location /vue3 {
  alias /home/front/wujie-demo/vue3-sub/;
  index index.html;
  try_files $uri $uri/ /vue3/index.html;
}