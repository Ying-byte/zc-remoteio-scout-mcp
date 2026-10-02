#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "remoteio",
  boardId: "remoteio-official",
  domain: "remote.io",
  npmName: "zc-remoteio-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
