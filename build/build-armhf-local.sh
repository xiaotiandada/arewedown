BUILDCONTAINER=shukriadams/node12build:0.0.3-arm
docker run -v $(pwd)/../:/tmp/build $BUILDCONTAINER sh -c 'cd /tmp/build/build && ls && npm install && bash ./build-standalone.sh --target armhf'
