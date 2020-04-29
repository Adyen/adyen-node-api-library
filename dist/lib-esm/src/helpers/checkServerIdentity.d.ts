/// <reference types="node" />
import { PeerCertificate } from "tls";
export default function checkServerIdentity(host: string, cert: PeerCertificate): Error | undefined;
