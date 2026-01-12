# app/components/llm.py
from langchain_huggingface import HuggingFaceEndpoint, ChatHuggingFace
from app.config.config import HF_TOKEN, HUGGINGFACE_REPO_ID

from app.common.logger import get_logger
from app.common.custom_exception import CustomException

logger = get_logger(__name__)

def load_llm(huggingface_repo_id: str = HUGGINGFACE_REPO_ID, hf_token: str = HF_TOKEN):
    try:
        logger.info("Loading LLM from HuggingFace (conversational mode)")

        # NOTE: task="conversational" is the crucial change
        endpoint = HuggingFaceEndpoint(
            repo_id=huggingface_repo_id,
            huggingfacehub_api_token=hf_token,
            task="conversational",
            temperature=0.3,
            max_new_tokens=256,
            return_full_text=False,
            provider="auto",  # let HF pick a provider (or set explicit provider if you want)
        )

        # Wrap it into a chat LLM so LangChain chains that expect chat-style models work correctly
        llm = ChatHuggingFace(llm=endpoint)

        logger.info("LLM (conversational) loaded successfully.")
        return llm

    except Exception as e:
        error_message = CustomException("Failed to load a llm", e)
        logger.error(str(error_message))
        raise error_message
