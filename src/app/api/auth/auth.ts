

const JWThandler = (req: Request, res: Response) => {
    const jwtSecretKey = import.meta.env.VITE_JWT_SECRET;
    const { email, password } = req.body

    if (!password) {
        return res.json();
    }

    const data: object = {
        signInTime: Date.now(),
        email,
    }

    const token = jwt.sign(data, jwtSecretKey)
    return token
    
};

export { JWThandler };