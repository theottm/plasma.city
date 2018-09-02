from flask import Flask
app = Flask(__name__)
from flask import render_template

@app.route('/')
def front():
    return render_template('homepage.html')
