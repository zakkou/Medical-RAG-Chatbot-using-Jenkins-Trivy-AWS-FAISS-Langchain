# backend/app/application.py
from dotenv import load_dotenv
load_dotenv()

import os, traceback, json
from flask import Flask, render_template, request, session, redirect, url_for, jsonify
from flask_cors import CORS
from app.components.retriever import create_qa_chain

app = Flask(__name__)
CORS(app)  # allow calls from your frontend dev server
app.secret_key = os.urandom(24)

@app.route("/", methods=["GET"])
def index():
    # keep serving your original index if you want
    return render_template("index.html")

@app.route("/api/chat", methods=["POST"])
def chat_api():
    data = request.get_json() or {}
    query = data.get("query") or data.get("prompt") or ""
    if not query:
        return jsonify({"error": "No query provided"}), 400

    try:
        qa_chain = create_qa_chain()
        if qa_chain is None:
            raise RuntimeError("QA chain not available")

        # Prefer run() but fallback to calling with dict
        if hasattr(qa_chain, "run"):
            answer = qa_chain.run(query)
        else:
            resp = qa_chain({"query": query})
            answer = resp.get("result") or resp.get("answer") or str(resp)

        # Optionally include sources if your chain can provide them
        # For now send a minimal well-structured response
        return jsonify({
            "answer": answer,
            "query": query,
            "meta": {"model": os.environ.get("HUGGINGFACE_REPO_ID")}
        })

    except Exception as e:
        traceback.print_exc()
        return jsonify({"error": str(e), "trace": traceback.format_exc()}), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=False)
