from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello World!"


@app.route('/mimic', methods=['POST'])
def get_audio():
    audio_url = ""
    error = ""
    try:
        data = json.loads(request.data)
        speaker = data['speaker'],
        content = data['content'],
        print speaker, content

        # TODO: Get audio URL
        audio_url = "http://mimicry.ai/output.wav"

    except Exception as err:
        print err
        error = err.message

    return jsonify(
        audio_url=audio_url,
        error=error
    )

if __name__ == "__main__":
    app.run(host='0.0.0.0')