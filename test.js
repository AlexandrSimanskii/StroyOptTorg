server {
  listen 80 default_server;
  listen [::]:80 default_server;



  root /var/www/html;


  index index.html index.htm index.nginx-debian.html;

  server_name _;



  location / {
          .
          try_files $uri $uri/ =404;
  }


}






















server {

  listen [::]:443 ssl ipv6only=on;
  listen 443 ssl;
  server_name simankiimebel.ru www.simankiimebel.ru;

  root /var/www/dist;
  index index.html index.htm index.nginx-debian.html;

  ssl_certificate /etc/letsencrypt/live/simankiimebel.ru/fullchain.pem;
  ssl_certificate_key /etc/letsencrypt/live/simankiimebel.ru/privkey.pem;
  include /etc/letsencrypt/options-ssl-nginx.conf;
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;

  location /api/ {
      proxy_pass http://localhost:3004/;
      proxy_set_header Host $host;
      proxy_set_header X-Real-IP $remote_addr;
      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
      proxy_set_header X-Forwarded-Proto $scheme;
  }

  location / {
      try_files $uri $uri/ /index.html;
  }
}

server {
  if ($host = simankiimebel.ru) {
      return 301 https://$host$request_uri;
  }
  listen 80;
  listen [::]:80;
  server_name simankiimebel.ru;
}
