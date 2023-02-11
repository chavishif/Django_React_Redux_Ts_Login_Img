import Icred from "../../models/cred";
import axios from "axios"

const MY_SERVER = "http://127.0.0.1:8000/login/"

export function login(cred: Icred) {
  // console.log(cred)
  return new Promise<{ data: any }>((resolve) =>
    axios.post(MY_SERVER,cred).then(res => resolve({ data: res.data }))
  );
}
