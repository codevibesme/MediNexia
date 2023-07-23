import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        let token = req.header("Authorization");
        if(!token) return res.status(403).json({message: "INVALID USER"});
        if(token.includes("Bearer "))
            token = token.slice(7, token.length).trimLeft();
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN);
        console.log(verified);
        req.user = verified;
        next();
    } catch(err){
        res.status(403).json({error: err.message});
    }
};
