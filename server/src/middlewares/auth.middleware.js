export const portectRoute = (req, res, next) => {
    // to use req.auth() wew need the clerkMiddleware
  if (!req.auth().isAuthenticated) {
    return res
      .status(401)
      .json({ message: "Unauthorized you must be logged in!" });
  }

  next();
};
