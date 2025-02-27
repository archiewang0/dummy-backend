# 使用 Node.js 官方映像
FROM node:20

# 設定工作目錄
WORKDIR /usr/src/app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝依賴
RUN npm install

# 複製其餘的應用程式檔案
COPY . .

# 建構應用程式
RUN npm run build

# 開放應用程式埠
EXPOSE 8080

# 啟動應用程式
CMD ["npm", "start"]