docker build -t registry.cn-shanghai.aliyuncs.com/first_ry/fblog:v8 .
docker run -d -p 3000:3000 --name blog registry.cn-shanghai.aliyuncs.com/first_ry/fblog:v8
docker push registry.cn-shanghai.aliyuncs.com/first_ry/fblog:v8
