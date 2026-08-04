# 配置说明

## 插件配置项

### 数据源配置

```php
// 数据源类型：baidu / amap / custom
'data_source' => 'baidu',

// 百度地图 API Key
'baidu_api_key' => 'your_baidu_api_key',

// 高德地图 API Key
'amap_api_key' => 'your_amap_api_key',
```

### 缓存配置

```php
// 是否启用查询缓存
'cache_enabled' => true,

// 缓存时间（秒），默认 3600
'cache_ttl' => 3600,
```

### 查询配置

```php
// 请求超时时间（秒）
'timeout' => 5,

// 是否记录查询日志
'log_enabled' => true,
```

## 配置示例

```php
return [
    'data_source' => 'baidu',
    'baidu_api_key' => env('BAIDU_API_KEY', ''),
    'amap_api_key' => env('AMAP_API_KEY', ''),
    'cache_enabled' => true,
    'cache_ttl' => 3600,
    'timeout' => 5,
    'log_enabled' => true,
];
```

::: warning
请妥善保管你的 API Key，不要将密钥硬编码在代码中或提交到版本库。建议使用环境变量管理。
:::
