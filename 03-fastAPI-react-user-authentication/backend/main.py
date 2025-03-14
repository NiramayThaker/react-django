import uvicorn
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List


class Fruit(BaseModel):
	name: str


class Fruits(BaseModel):
	fruits: List[Fruit]


app = FastAPI()

origins = [
	"http://localhost:5173",
	"http://localhost:3000",
]

app.add_middleware(
	CORSMiddleware,
	allow_origins=origins,
	allow_credentials=True,
	allow_methods=["*"],
	allow_headers=["*"],
)

memory_db = {"fruits": []}


@app.get("/fruits", response_model=Fruits)
def read_fruits():
	return Fruits(fruits=memory_db["fruits"])


@app.post("/fruits", response_model=Fruit)
def add_fruit(fruit: Fruit):
	memory_db["fruits"].append(fruit)
	return fruit


if __name__ == "__main__":
	uvicorn.run(app, host="127.0.0.1", port=8000)
