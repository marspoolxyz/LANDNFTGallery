import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory as customer_greeting_idl, canisterId as customer_greeting_id } from 'dfx-generated/customer_greeting';

const agent = new HttpAgent();
const customer_greeting = Actor.createActor(customer_greeting_idl, { agent, canisterId: customer_greeting_id });

document.getElementById("clickMeBtn").addEventListener("click", async () => {

  document.getElementById("greeting").innerText = "fetching...";
 

  const name = document.getElementById("name").value.toString();
  const greeting = await customer_greeting.greet(name);

  const token = await customer_greeting.findTokenById(1);

  console.log(token[0].tokenid);
  console.log(token);
  console.log(token[0].name);
  document.getElementById("greeting").innerText =  "fetching...";

 

  document.getElementById("greeting").innerText = greeting;
});

