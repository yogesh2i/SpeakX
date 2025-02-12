const grpc = require("@grpc/grpc-js");
const server = new grpc.Server();

exports.startGrpcServer = function () {
  server.bindAsync("127.0.0.1:50050",grpc.ServerCredentials.createInsecure(),(error, port) => {
      if (error){
        console.error(error);
      }
      else {
        server.start();
        console.log(`server running at 127.0.0.1:${port}`);
      }
    }
  );
};

exports.getGrpcServer = function () {
  return server;
};
