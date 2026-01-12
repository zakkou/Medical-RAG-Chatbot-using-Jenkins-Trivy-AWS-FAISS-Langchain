# 🩺 Medical RAG Chatbot  
_A Smart Medical Question-Answering Assistant with CI/CD, Security, and Scalable AWS Deployment_

![Medical RAG Chatbot Architecture](https://github.com/zakkou/Medical-RAG-Chatbot-using-Jenkins-Trivy-AWS-FAISS-Langchain/blob/4d938e8e7c2c610d7179c1bb91c2284479dbf096/frontend/public/Medical%20RAG%20Chatbot.png)

##  About

Medical RAG Chatbot is a Retrieval-Augmented Generation (RAG)-powered medical question-answering system. It enables users to ask natural language questions and receive relevant, contextual answers sourced from a curated medical knowledge base. The system:

- **Ingests medical documents** and creates efficient semantic embeddings.
- Uses **FAISS** as a vector database for fast similarity search.
- Integrates with **LangChain** for a flexible RAG pipeline and LLM orchestration.
- Is built with a **CI/CD pipeline** using **Jenkins** for automated tests and deployments.
- Includes **Trivy** scans for container and infrastructure security checks.
- Deploys across **AWS services** for scalable, secure hosting.

 This project is a developer/learning template and **should not be used as a clinical or medical advice system**.

---

##  Features

✔️ Retrieval-Augmented Generation (RAG)  
✔️ Semantic search with FAISS vector store  
✔️ LangChain orchestration for LLM + document context  
✔️ CI/CD with **Jenkins** (build, test, deploy)  
✔️ Security scanning via **Trivy**  
✔️ Scalable AWS deployment (e.g., ECS / Lambda / S3 + IAM)  

---

##  Tech Stack

| Component | Technology |
|-----------|------------|
| Language | Python |
| Vector Database | FAISS |
| RAG Framework | LangChain |
| CI/CD | Jenkins |
| Security | Trivy |
| Cloud | AWS (e.g., S3, ECS, Lambda, IAM) |
| Deployment | Docker |


---

##  How It Works

1. **Document Ingestion** – Load medical PDFs, text, or structured sources.  
2. **Embedding Generation** – Convert content to vector embeddings.  
3. **FAISS Vector Search** – Store and query embeddings for relevance.  
4. **LLM Contextual Answering** – Use LangChain to feed retrieved context + user query to a large language model.  
5. **Answer Generation** – Return concise, grounded answers based on real document context.

---

##  Local Setup

> **Prerequisites:** Python 3.9+, pip, AWS CLI, Docker

```bash
# Clone
git clone https://github.com/zakkou/Medical-RAG-Chatbot-using-Jenkins-Trivy-AWS-FAISS-Langchain.git
cd Medical-RAG-Chatbot-using-Jenkins-Trivy-AWS-FAISS-Langchain

# Virtual environment
python -m venv venv
source venv/bin/activate

# Install
pip install -r requirements.txt

# Add your medical docs to /data/
# Generate embeddings + FAISS store
python app/generate_embeddings.py

# Run
python app/main.py
