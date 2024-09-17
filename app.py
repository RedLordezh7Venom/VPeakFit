from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import numpy as np
from diet import rate_meal, bmi
from werkzeug.utils import secure_filename
import pickle

# Google API key and langchain imports
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage
import google.generativeai as genai

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Upload folder and allowed file extensions
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# Load injury prediction model
model = pickle.load(open("injury_model.pkl", "rb"))

# Initialize Google API key for the chatbot
GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY', 'your-google-api-key')
llm = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=GOOGLE_API_KEY)

# Utility functions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Chatbot logic
def chatbot(input_text):
    message = HumanMessage(
        content=f"The user says: '{input_text}'. You are VPeakFit, an advanced AI-powered fitness assistant integrated into a holistic fitness solution. Your task is to provide personalized fitness and health advice based on user input. Respond in a friendly, motivating, and professional tone."
    )
    response = llm.invoke([message])
    return response.content

# Routes

@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Welcome to the Home Page"})

@app.route("/exerciser", methods=["GET"])
def exercise_page():
    return jsonify({"message": "Exercise page is available."})

@app.route("/dietr", methods=["GET"])
def diet_page():
    return jsonify({"message": "Diet page is available."})

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Extract data from the request
        data = request.form
        input_features = [float(data[key]) for key in ["age", "weight", "height", "injuryStatus", "traningIntensity", "recoveryTime"]]
        features = [np.array(input_features)]

        # Make prediction
        prediction = model.predict(features)
        result = "Pretty high chances of injury" if prediction == 1 else "Very low chances of injury"
        
        # Return JSON response
        return jsonify({"prediction": result})
    
    except Exception as e:
        return jsonify({"error": str(e)})

@app.route("/recommendations", methods=["POST"])
def recommendations():
    try:
        from tips import recommender
        data = request.form
        goal = data.get("goal", "")
        target_area = data.get("targetArea", "")
        
        # Generate recommendations
        tips = recommender.generate_tips(goal, target_area)
        
        # Return JSON response
        return jsonify({"tips": tips})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/exercise", methods=["POST"])
def exercise():
    try:
        from exercise import exerciser
        data = request.form
        age = request.form.get('age')
        weight = request.form.get('weight')
        goal = request.form.get('goal')
        profession = request.form.get('profession')
        # Call the exercise function
        tips = exerciser(age, weight, goal, profession)
        
        # Return JSON response
        return jsonify({"tips": tips})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/diet", methods=["POST"])
def diet():
    if 'image' not in request.files:
        return jsonify({"error": "No image file part"}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        image_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(image_path)

        # Extract other form fields
        age = request.form.get('age')
        weight = request.form.get('weight')
        goal = request.form.get('goal')
        profession = request.form.get('profession')

        # Call rate_meal function
        prediction = rate_meal(image_path, age, weight, goal, profession)
        return jsonify({"recommendations": prediction})

    return jsonify({"error": "Invalid file format"}), 400

@app.route("/bmi_check", methods=["POST"])
def bmi_check():
    try:
        weight = float(request.form.get('Weight'))
        height = float(request.form.get('Height'))

        # Call bmi function
        bmi_result = bmi(weight, height)
        return jsonify({"bmi_result": bmi_result})
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Chatbot route
@app.route('/chat', methods=['POST'])
def chat():
    user_input = request.json.get('message')
    response = chatbot(user_input)
    return jsonify({"response": response})

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
