# Stage 1 - Build Angular App
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Stage 2 - Serve app with nginx
FROM nginx:alpine
COPY --from=builder /app/dist/frontend/browser /usr/share/nginx/html

# Optional: Custom nginx config (if using routes like /dashboard)
# COPY nginx.conf /etc/nginx/conf.d/default.conf
