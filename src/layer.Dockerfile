# Used to build assets when useLambdaLayer is true. Downloads the LLRT runtime
# specified by the URL argument and expands it to the /assets folder 
FROM alpine

ARG URL=https://github.com/awslabs/llrt/releases/latest/download/llrt-lambda-x64.zip

RUN wget -O llrt_temp.zip ${URL} && \
    unzip llrt_temp.zip -d /asset