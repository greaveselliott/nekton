# Select reference image
FROM node as build

# This is optional. Sets the level of logging that you see
ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /tmp/app

COPY . .

RUN ls
RUN cat package.json

# Build project files
RUN npx yarn install
RUN npx yarn build-storybook

# Step 2

FROM nginx

WORKDIR /usr/share/nginx/html

COPY --from=build /tmp/app/dist .

RUN ls -la /usr/share/nginx/html

EXPOSE 80
