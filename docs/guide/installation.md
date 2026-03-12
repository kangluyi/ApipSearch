# 安装

本章节将指导你如何安装和配置 Apipseach 平台。

## 系统要求

- Node.js 14.0 或更高版本
- npm 6.0 或更高版本
- MongoDB 4.0 或更高版本
- Elasticsearch 7.0 或更高版本

## 从源码安装

### 1. 克隆仓库

```bash
git clone https://github.com/yourusername/apipseach.git
cd apipseach
```

### 2. 安装依赖

```bash
npm install
```

### 3. 配置环境变量

创建 `.env` 文件并添加以下配置：

```
# MongoDB 连接字符串
MONGODB_URI=mongodb://localhost:27017/apipseach

# Elasticsearch 连接字符串
ELASTICSEARCH_URI=http://localhost:9200

# 服务器配置
PORT=3000
HOST=0.0.0.0

# 用于 JWT 签名的密钥
JWT_SECRET=your-secret-key
```

### 4. 启动服务

```bash
# 开发模式
npm run dev

# 生产模式
npm run build
npm start
```

## 使用 Docker 安装

### 1. 拉取镜像

```bash
docker pull apipseach/apipseach:latest
```

### 2. 运行容器

```bash
docker run -d \
  --name apipseach \
  -p 3000:3000 \
  -e MONGODB_URI=mongodb://mongo:27017/apipseach \
  -e ELASTICSEARCH_URI=http://elasticsearch:9200 \
  --link mongo:mongo \
  --link elasticsearch:elasticsearch \
  apipseach/apipseach:latest
```

## 验证安装

打开浏览器访问 `http://localhost:3000`，如果看到 Apipseach 的欢迎页面，则说明安装成功。
