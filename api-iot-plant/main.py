from typing import Optional
from fastapi import FastAPI
from pymongo import MongoClient
from pprint import pprint
from bson.json_util import dumps

app = FastAPI()
client = MongoClient("127.0.0.1:27017")
db=client.iot
serverStatusResult=db.command("serverStatus")
# pprint(serverStatusResult)


@app.get("/")
def read_root():
    list_cur = list(db.humiditySensorDown.find())
    json_data = dumps(list_cur)
    return {"Count": json_data.count("_id")}


@app.get("/humidity/down/all")
def humidity_down_all():
    list_cur = list(db.humiditySensorDown.find())
    json_data = dumps(list_cur)
    return {"all": json_data}

@app.get("/humidity/up/all")
def humidity_up_all():
    list_cur = list(db.humiditySensorTop.find())
    json_data = dumps(list_cur)
    return {"all": json_data}

@app.get("/humidity/down/last")
def humidity_down_last():
    list_cur = list(db.humiditySensorDown.find().sort("_id",-1).limit(1))
    json_data = dumps(list_cur)
    return {"last": json_data}

@app.get("/humidity/up/last")
def humidity_up_last():
    list_cur = list(db.humiditySensorTop.find().sort("_id",-1).limit(1))
    json_data = dumps(list_cur)
    return {"last": json_data}

