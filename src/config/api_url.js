const CODEMARKA_DEV_URL = 'http://localhost:2001/api/v1';
const CODEMARKA_PROD_URL = 'https://api.secure.codemarka.dev/api/v1';

console.log(process.env.VUE_APP_ENV)

const SANDBOX_DEV_URL = 'http://localhost:8888/api/v1';
const SANDBOX_PROD_URL = 'https://api.sandbox.codemarka.dev/api/v1';

const SANDBOX_API =  SANDBOX_PROD_URL 
const CODEMARKA_API =  CODEMARKA_PROD_URL

export const CODEMARKA_LOGIN = `${CODEMARKA_API}/auth/user/signin`
export const CODEMARKA_SIGNUP = `${CODEMARKA_API}/auth/user/signup`
export const CODEMARKA_TOKEN_VERIFY = `${CODEMARKA_API}/auth/user/token/verify`

export const CREATE_SANDBOX = `${SANDBOX_API}/sandbox/create`;

