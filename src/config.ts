export const BACKEND_URL = () => {
    const env = process.env.BACKEND_URL;
    return "wss://"+env
}