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

  const _router = function(req, res) {
    const handler = methods[req.method];

    if (handler) {
      return handler(req, res);
    }

    // maybe there is a nicer way to do this
    res.status(404);
    return res.end();
  };

  _router.get = (...middlewares) => {
    methods['GET'] = chainMiddlewares(middlewares);
  };

  _router.post = (...middlewares) => {
    methods['POST'] = chainMiddlewares(middlewares);
  };

  _router.put = (...middlewares) => {
    methods['PUT'] = chainMiddlewares(middlewares);
  };

  _router.delete = (...middlewares) => {
    methods['DELETE'] = chainMiddlewares(middlewares);
  };

  return _router;
}