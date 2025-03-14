# Usa a imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia apenas os arquivos essenciais primeiro (melhor cache no Docker)
COPY package.json package-lock.json ./

# Instala as dependências de produção
RUN npm install --production

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói a aplicação Nuxt para produção
RUN npm run build

# Expõe a porta padrão do Nuxt.js
EXPOSE 3000

# Comando para iniciar a aplicação em produção
CMD ["npm", "run", "start"]
