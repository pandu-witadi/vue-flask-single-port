# =
# ===
# ===== README by p&u
# ===
# =


example system requirement
==========================
    - OS : Linux 4.4.0-98-generic #121-Ubuntu SMP Tue Oct 10 14:24:03 UTC 2017 x86_64 x86_64 GNU/Linux
    - nodejs v8.11.3
    - npm 5.6.0
    - MongoDB 2.6.10
    - Python 3.7.6
    - pm2 4.5.0


main folder has subfolder
1. client_vue
    - reside all code for web vue based front-end
2. server_flask
    - reside all code for backend server


# --- client side
01. install all requirement
npm install

02. set client_vue/vue.config.js
03. set client_vue/config.js in accordance server_flask/config.js
04. build vue in client/dist
npm run build

# --- server side
05. create virtual environment
python -m venv venv

06. activate virtual env
[linux] source venv\bin\activate
[windows] venv\Script\activate.bat

07. install all requirement
pip install -r req_0_2_2

08. set config.py -> config.js
09. run server.py
[dev]> python server.py 0.0.0.0 5151
[prod]> pm2 start ecosystem.config.js

10. test
[test-backend]  localhost:5151/api/test
[test-frontend] localhost:5151
