# Gunakan image Nginx resmi
FROM nginx:alpine

# Hapus default static content Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copy semua file HTML/CSS/JS ke direktori web Nginx
COPY . /usr/share/nginx/html

# Port default Nginx
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
