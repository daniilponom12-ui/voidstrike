# Игровой сервер VOID STRIKE (только Node.js + ws, без сборки клиента)
FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --omit=dev --ignore-scripts --no-audit --no-fund
COPY server ./server
COPY shared ./shared
ENV PORT=8787
EXPOSE 8787
HEALTHCHECK --interval=30s --timeout=3s CMD wget -qO- http://127.0.0.1:${PORT}/health || exit 1
CMD ["node", "server/server.js"]
