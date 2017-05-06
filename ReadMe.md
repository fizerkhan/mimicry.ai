# Mimicry.ai

Copy the voice of anyone using machine learning.


### Vagrant Dependencies

* Install following dependencies

```
    sudo apt-get install -y git csh make g++ unzip
    sudo apt-get install -y libcurl4-openssl-dev
    sudo apt-get install -y python-virtualenv
    sudo apt-get install -y python-dev
```

* Setup Virtual environment

```
    cd ~/mimicry.ai
    virtualenv venv
    source venv/bin/activate
```

* Install Python dependencies

```
    pip install --upgrade pip
    pip install numpy scipy matplotlib ipython jupyter pandas sympy nose
    pip install theano
    pip install lxml

    export CFLAGS=-I/home/vagrant/mimicry.ai/venv/lib/python2.7/site-packages/numpy/core/include
    pip install bandmat
```

* Install dependencies

```
    cd ~/mimicry.ai/src/merlin/tools
    /bin/bash compile_tools.sh
```

* Run test (Optional. Not needed)

```
    cd ~/mimicry.ai/src/merlin/test
    /bin/bash test_training.sh
```

* Run demo

```
    cd ~/mimicry.ai
    source venv/bin/activate

    cd ~/mimicry.ai/src/merlin/egs/slt_arctic/s1
    ./run_demo.sh
```

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

**Tools:**

youtube-dl --extract-audio --audio-format mp3 https://www.youtube.com/watch?v=4CxkK1gam8o



