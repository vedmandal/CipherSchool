const forbidden = [
    "drop",
    "delete",
    "insert",
    "update",
    "alter",
    "truncate",
    "create",
  ];
  
  const validateQuery = (req, res, next) => {
    const query = req.body.query?.toLowerCase();
  
    if (!query || !query.trim().startsWith("select")) {
      return res.status(400).json({
        error: "Only SELECT queries allowed",
      });
    }
  
    for (let word of forbidden) {
      if (query.includes(word)) {
        return res.status(400).json({
          error: "Unsafe query detected",
        });
      }
    }
  
    next();
  };
  
  export default validateQuery;