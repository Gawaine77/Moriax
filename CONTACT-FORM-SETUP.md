# Contact Form Setup Guide

## 表单功能设置说明

### 1. 社交链接设置

在 `index.html` 文件中，找到以下链接并替换为你的实际链接：

```html
<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/your-profile" target="_blank" class="social-link" title="LinkedIn">
    <i class="fab fa-linkedin-in"></i>
</a>

<!-- GitHub -->
<a href="https://github.com/your-username" target="_blank" class="social-link" title="GitHub">
    <i class="fab fa-github"></i>
</a>
```

**替换内容：**
- `your-profile` → 你的LinkedIn用户名
- `your-username` → 你的GitHub用户名

### 2. 表单发送功能设置

#### 方法一：使用 Formspree（推荐，免费）

1. 访问 [Formspree.io](https://formspree.io/)
2. 注册账号并登录
3. 创建新表单
4. 复制表单ID（格式：`xrgjqkqk`）
5. 在 `index.html` 中替换：

```html
<form id="contactForm" action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

**替换内容：**
- `YOUR-FORM-ID` → 你的Formspree表单ID

#### 方法二：使用 Netlify Forms（如果部署在Netlify）

1. 将表单改为：

```html
<form id="contactForm" name="contact" netlify>
```

2. 添加隐藏字段：

```html
<input type="hidden" name="form-name" value="contact">
```

#### 方法三：使用 EmailJS（需要JavaScript知识）

1. 注册 [EmailJS](https://www.emailjs.com/)
2. 配置邮件模板
3. 更新JavaScript代码

### 3. 当前实现的功能

✅ **表单验证**：必填字段检查
✅ **状态显示**：发送中、成功、失败状态
✅ **自动重置**：发送成功后清空表单
✅ **错误处理**：网络错误时显示备用联系方式
✅ **社交链接**：LinkedIn、GitHub、Email链接
✅ **响应式设计**：在手机和PC端都有良好显示

### 4. 测试表单

1. 填写表单并提交
2. 检查邮箱是否收到消息
3. 检查Formspree控制台是否有记录

### 5. 自定义选项

#### 修改邮箱地址
在 `index.html` 中搜索 `contact@moriax.com` 并替换为你的邮箱

#### 修改成功消息
在 `script.js` 中修改：

```javascript
showFormStatus('success', '你的自定义成功消息');
```

#### 修改错误消息
在 `script.js` 中修改：

```javascript
showFormStatus('error', '你的自定义错误消息');
```

### 6. 故障排除

**问题：表单提交后没有反应**
- 检查Formspree表单ID是否正确
- 检查浏览器控制台是否有错误信息

**问题：收到垃圾邮件**
- 在Formspree中启用验证码
- 设置邮件过滤规则

**问题：社交链接不工作**
- 检查链接地址是否正确
- 确保链接在新标签页打开

### 7. 安全建议

1. 启用Formspree的垃圾邮件过滤
2. 定期检查表单提交记录
3. 考虑添加验证码防止机器人提交
4. 设置邮件通知，及时回复访客消息

---

**注意：** 当前代码使用Formspree作为默认邮件服务。如果你选择其他服务，需要相应修改JavaScript代码。
