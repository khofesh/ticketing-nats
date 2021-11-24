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

    nc.publish("hello", sc.encode("world"));
    nc.publish("hello", sc.encode("again"));
    nc.publish("hello", sc.encode("holy shit"));

    // we want to insure that messages that are in flight
    // get processed, so we are going to drain the
    // connection. Drain is the same as close, but makes
    // sure that all messages in flight get seen
    // by the iterator. After calling drain on the connection
    // the connection closes.
    await nc.drain();
  } catch (error) {
    console.log(`error connecting to ${JSON.stringify(v)}`);
    console.error(error);
  }
};

doSomething(server);
