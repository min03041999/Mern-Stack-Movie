import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handles/response.handle";
import userModel from "../models/model.options";

const tokenDecode = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];

      return jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    }
    return false;
  } catch {
    return false;
  }
};

const auth = async (req, res, next) => {
  const tokenDecode = tokenDecode(req);

  if (!tokenDecode) return responseHandler.unauthorize(res);

  const user = await userModel.findById(tokenDecode.data);

  if (!user) return responseHandler.unauthorize(res);

  req.user = user;

  next();
};

export default { auth, tokenDecode };
