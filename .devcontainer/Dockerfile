FROM mcr.microsoft.com/devcontainers/base:ubuntu-20.04

RUN apt-get update && \
    curl -sL https://deb.nodesource.com/setup_14.x -o setup_14.sh && \
    sudo sh ./setup_14.sh && \ 
    apt update 

RUN sudo apt-get install -y nodejs && \
    rm setup_14.sh && \
    sudo npm install -y -g @angular/cli@12
