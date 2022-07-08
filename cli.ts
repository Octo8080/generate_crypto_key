import { encode } from "https://deno.land/std@0.97.0/encoding/base64.ts";

const key = await crypto.subtle.generateKey(
  { name: "HMAC", hash: "SHA-512" },
  true,
  ["sign", "verify"],
);

const format="raw"

const ex = await crypto.subtle.exportKey(format, key)
const exportedKeyBuffer = new Uint8Array(ex);

const encodedData = encode(exportedKeyBuffer);
console.log("GENERATED KEY:",encodedData);
