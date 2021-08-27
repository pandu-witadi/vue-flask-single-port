module.exports = {
    apps: [
        {
            name: "fcr-ml_template",
            cwd: ".",
            script: "venv/bin/python3.7",
            args: " server.py 0.0.0.0 5151",
            interpreter: "",
            max_memory_restart: "64G"
        }
    ]
}
