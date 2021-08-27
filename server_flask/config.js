//
//
//
let CF = {
    appName: "flask-machine-learning",
    appVersion: "0_2_template",
    port: 5151,
    baseURL : "http://localhost",

    // mongodb setting
    use_mongo : true,
    dburl : 'mongodb://127.0.0.1:27017/',
    dbname : 'MERN-social-media',

    // secret_key for JWT (JSONWebToken)
    secret_str : "this-auth-token",
    refresh_token_time:  2 * 60 // 2 minutes
}
CF.publicURL    = CF.baseURL + ':' + CF.port.toString()
CF.apiURL       = CF.publicURL + '/api'

module.exports = CF
