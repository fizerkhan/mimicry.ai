# Mimicry.ai

Copy the voice of anyone using machine learning.


### Vagrant Dependencies

* Install following dependencies

    sudo apt-get install -y git
    sudo apt-get install -y libcurl4-openssl-dev
    sudo apt-get install -y python-virtualenv
    sudo apt-get install -y python-dev


* Setup Virtual environment

    cd ~/mimicry.ai
    virtualenv venv
    source venv/bin/activate
    pip install --upgrade pip
    pip install numpy scipy matplotlib ipython jupyter pandas sympy nose
    pip install theano


* Install Python dependencies

### Tasks

1. Install dependencies
2. Find voice of top actors, politicians

    * Rajini
    * Kamalkasan
    * Modi
    * Jayalalitha
    * P Sidambaram
    * Vadivelu
    * Karunanithi

3. Train the machine with sample data
4. Setup Sample UI
5. Provide text for conversion


### Audio download

https://pagalworld.me/
http://mp3lier.info/

* Tools:

youtube-dl --extract-audio --audio-format mp3 https://www.youtube.com/watch?v=4CxkK1gam8o



