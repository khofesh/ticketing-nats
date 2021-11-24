import { connect, StringCodec } from "nats";

const server = "http://localhost:4222";

const doSomething = async (v: string) => {
  try {
    const nc = await connect({ servers: v });
    console.log(`connected to ${nc.getServer()}`);
    // this promise indicates the client closed
    const done = nc.closed();
    // do something with the connection

    // create a codec
    const sc = StringCodec();
    // create a simple subscriber and iterate over messages
    // matching the subscription
    const sub = nc.subscribe("ticket:created");
    (async () => {
      for await (const m of sub) {
        console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
      }
      console.log("subscription closed");
    })();
  } catch (error) {
    console.log(`error connecting to ${JSON.stringify(v)}`);
    console.error(error);
  }
};

doSomething(server);
