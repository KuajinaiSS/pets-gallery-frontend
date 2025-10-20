# syntax=docker/dockerfile:1

ARG NODE_VERSION=22.20.0
ARG PNPM_VERSION=10.18.3

# 1) Base
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# 2) Deps
FROM base AS deps
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --frozen-lockfile

# 3) Build
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# Asegúrate de tener en next.config.ts => export default { output: 'standalone' }
RUN pnpm build

# 4) Runner
FROM node:${NODE_VERSION}-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000

# Usuario no-root
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copiar artefactos necesarios
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]
