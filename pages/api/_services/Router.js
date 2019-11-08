const chainMiddlewares = ([firstMiddleware, ...restOfMiddlewares]) => {
  if (restOfMiddlewares) {
    return (req, res) => {
      return firstMiddleware(req, res, chainMiddlewares(restOfMiddlewares));
    };
  }

  return firstMiddleware;
};

export default function() {
  const methods = {};

  const router = function(req, res) {
    const handler = methods[req.method];

    if (handler) {
      return handler(req, res);
    }

    // maybe there is a nicer way to do this
    res.status(404);
    return res.end();
  };

  router.get = (...middlewares) => {
    methods['GET'] = chainMiddlewares(middlewares);
  };

  router.post = (...middlewares) => {
    methods['POST'] = chainMiddlewares(middlewares);
  };

  router.put = (...middlewares) => {
    methods['PUT'] = chainMiddlewares(middlewares);
  };

  router.delete = (...middlewares) => {
    methods['DELETE'] = chainMiddlewares(middlewares);
  };

  return router;
}