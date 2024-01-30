import { config } from "./lib";
import router from "./routers";

import { createServer, log } from "./utils";

const port = config.get("port") as number;

const main = async () => {
  const app = await createServer();

  app.use("/api", router);

  app.listen(port, () => {
    log.info(`Server is listening on url http://localhost:${port}`);
  });
};

main();
