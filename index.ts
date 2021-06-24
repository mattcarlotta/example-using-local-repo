import env from "@example/env";

const algorithm = "aes-256-cbc";
const secret = "abcdefghijklmnopqrstuv1234567890";
const input = "hex";
const encoding = "utf8";

const envString = JSON.stringify({
  ABC: "123",
  DEF: "678",
  HIJ: "$ABC$DEF",
});

const { encryptedEvs, iv } = env.encrypt({
  algorithm,
  envs: envString,
  encoding,
  input,
  secret,
});

console.log("🟡 encryptedEvs:", encryptedEvs);
console.log("🟡 iv:", iv);

const { decryptedEnvs, decryptedResult } = env.decrypt({
  algorithm,
  envs: encryptedEvs,
  encoding,
  input,
  iv,
  secret,
});

console.log("🟡 decryptedResult:", decryptedResult);
console.log("🟡 decryptedEnvs:", decryptedEnvs.replace(/\n/gm, " "));
