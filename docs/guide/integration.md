# API 集成

## 接口概览

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/ip` | GET | 查询当前访客 IP 的定位信息 |
| `/api/ip/lookup` | GET | 查询指定 IP 的定位信息 |

## 查询当前访客 IP

### 请求

```http
GET /api/ip
```

### 响应示例

```json
{
  "code": 0,
  "data": {
    "ip": "8.8.8.8",
    "type": "IPv4",
    "country": "美国",
    "province": "加利福尼亚州",
    "city": "山景城",
    "isp": "Google LLC"
  }
}
```

## 查询指定 IP

### 请求

```http
GET /api/ip/lookup?ip=8.8.8.8
```

### 参数说明

| 参数 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `ip` | string | 是 | 要查询的 IP 地址（支持 IPv4 / IPv6） |

### 响应示例

```json
{
  "code": 0,
  "data": {
    "ip": "2001:4860:4860::8888",
    "type": "IPv6",
    "country": "美国",
    "province": "加利福尼亚州",
    "city": "山景城",
    "isp": "Google LLC"
  }
}
```

## 错误码

| code | 说明 |
|------|------|
| 0 | 成功 |
| 1001 | IP 地址格式不合法 |
| 1002 | 数据源 API Key 未配置 |
| 1003 | 数据源请求超时 |
| 2001 | 未知错误 |
