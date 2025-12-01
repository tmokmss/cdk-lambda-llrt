FROM alpine

ENV URL=https://github.com/awslabs/llrt/releases/latest/download/llrt-lambda-x64.zip

RUN wget -O llrt_temp.zip ${URL} && \
    unzip llrt_temp.zip -d /asset