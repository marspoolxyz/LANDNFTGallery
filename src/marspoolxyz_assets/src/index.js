import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as marspoolxyz_idl, canisterId as marspoolxyz_id } from 'dfx-generated/marspoolxyz';

const agent = new HttpAgent();
const marspoolxyz = Actor.createActor(marspoolxyz_idl, { agent, canisterId: marspoolxyz_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {

  document.getElementById("greeting").innerText = "fetching...";
 

  const name = document.getElementById("name").value.toString();
  const greeting = await marspoolxyz.greet(name);

  const token = await marspoolxyz.findTokenById(1);

  console.log(token[0].tokenid);
  console.log(token);
  console.log(token[0].name);
  document.getElementById("greeting").innerText =  "fetching...";
  document.getElementById("greeting").innerText = greeting;
});

